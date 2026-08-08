import { Resend } from 'resend';
import {
  EMPLOYER_FIELDS,
  MAX_RESUME_BYTES,
  SUMMARY_SECTIONS,
} from '../src/constants/application.js';

/**
 * Receives an employment application from the careers page, renders it as a
 * readable email, and sends it to the hiring inbox.
 *
 * Applications carry a Social Security number and a date of birth, so nothing
 * in here writes the payload to a log — the only place applicant data goes is
 * the outbound email.
 */

const REQUIRED_FIELDS = [
  'position',
  'firstName',
  'lastName',
  'email',
  'phone',
  'signature',
  'signatureDate',
];

const ALLOWED_RESUME_TYPES = /\.(pdf|docx?|rtf|txt)$/i;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Normalizes one submitted answer for display, returning null when the
 * applicant left it blank. Callers use that null both to drop empty rows from
 * the email and to decide whether a required field was answered, so a false
 * boolean has to come back as the string "No" rather than as absent.
 */
function present(value) {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

/** Turns the shared section schema into rows, dropping anything left blank. */
function summaryRows(application) {
  return SUMMARY_SECTIONS.map((section) => ({
    title: section.title,
    rows: section.fields
      .map(([field, label]) => [label, present(application[field])])
      .filter(([, value]) => value !== null),
  })).filter((section) => section.rows.length > 0);
}

function employerRows(employers) {
  if (!Array.isArray(employers)) return [];
  return employers
    .map((employer, index) => ({
      title: index === 0 ? 'Most recent employer' : `Previous employer ${index + 1}`,
      rows: EMPLOYER_FIELDS.map((field) => [field.label, present(employer?.[field.name])]).filter(
        ([, value]) => value !== null
      ),
    }))
    .filter((section) => section.rows.length > 0);
}

function renderHtml(sections, applicantName, position) {
  const blocks = sections
    .map(
      (section) => `
    <h2 style="font:600 15px/1.4 Helvetica,Arial,sans-serif;color:#2a3163;text-transform:uppercase;letter-spacing:.08em;margin:32px 0 10px">
      ${escapeHtml(section.title)}
    </h2>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
      ${section.rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:8px 12px 8px 0;border-bottom:1px solid #e8ecf3;font:400 14px/1.5 Helvetica,Arial,sans-serif;color:#6b7280;width:42%;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:8px 0;border-bottom:1px solid #e8ecf3;font:600 14px/1.5 Helvetica,Arial,sans-serif;color:#0f172a">${escapeHtml(value)}</td>
        </tr>`
        )
        .join('')}
    </table>`
    )
    .join('');

  return `<div style="max-width:680px;margin:0 auto;padding:32px 24px;background:#ffffff">
    <p style="font:700 12px/1 Helvetica,Arial,sans-serif;color:#dc2626;text-transform:uppercase;letter-spacing:.12em;margin:0">
      Employment application
    </p>
    <h1 style="font:700 26px/1.2 Georgia,serif;color:#0f172a;margin:10px 0 4px">${escapeHtml(applicantName)}</h1>
    <p style="font:400 15px/1.5 Helvetica,Arial,sans-serif;color:#6b7280;margin:0">
      Applying for ${escapeHtml(position)}
    </p>
    ${blocks}
  </div>`;
}

function renderText(sections, applicantName, position) {
  const header = `EMPLOYMENT APPLICATION\n${applicantName} — ${position}\n`;
  const blocks = sections
    .map(
      (section) =>
        `\n${section.title.toUpperCase()}\n` +
        section.rows.map(([label, value]) => `  ${label}: ${value}`).join('\n')
    )
    .join('\n');
  return `${header}${blocks}\n`;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CAREERS_INBOX;
  const from = process.env.CAREERS_FROM;

  if (!apiKey || !to || !from) {
    // Deliberately vague to the applicant; the cause is ours, not theirs.
    return response.status(500).json({ error: 'Applications are temporarily unavailable.' });
  }

  const application = request.body ?? {};

  // A real applicant never sees the honeypot field, so anything in it is a bot.
  // Answer 200 so the sender learns nothing from the response.
  if (present(application.website)) {
    return response.status(200).json({ ok: true });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !present(application[field]));
  if (missing.length > 0) {
    return response.status(400).json({ error: 'The application is missing required fields.' });
  }
  if (!application.agreed) {
    return response.status(400).json({ error: 'The terms must be accepted.' });
  }

  const attachments = [];
  const resume = application.resume;
  if (resume?.content) {
    if (!ALLOWED_RESUME_TYPES.test(resume.filename ?? '')) {
      return response.status(400).json({ error: 'That resume file type is not accepted.' });
    }
    // Base64 carries roughly 3 bytes per 4 characters.
    if ((resume.content.length * 3) / 4 > MAX_RESUME_BYTES) {
      return response.status(400).json({ error: 'That resume file is too large.' });
    }
    attachments.push({ filename: resume.filename, content: resume.content });
  }

  const applicantName = `${application.firstName} ${application.lastName}`.trim();
  const position = application.position;
  const sections = [...summaryRows(application), ...employerRows(application.employers)];

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to: to.split(',').map((address) => address.trim()),
      replyTo: application.email,
      subject: `${position} application — ${applicantName}`,
      html: renderHtml(sections, applicantName, position),
      text: renderText(sections, applicantName, position),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend rejected an application email:', error.message);
      return response.status(502).json({ error: 'The application could not be sent.' });
    }
  } catch (error) {
    console.error('Application email failed:', error.message);
    return response.status(502).json({ error: 'The application could not be sent.' });
  }

  return response.status(200).json({ ok: true });
}
