import { useRef, useState } from 'react';
import Icon from './Icon';
import {
  CheckboxField,
  ChoiceField,
  FieldGrid,
  FileField,
  FormSection,
  SelectField,
  TextAreaField,
  TextField,
} from './FormControls';
import {
  APPLICATION_ENDPOINT,
  CERTIFICATION_TEXT,
  EDUCATION_OPTIONS,
  EMPLOYER_SLOTS,
  MAX_RESUME_BYTES,
  POSITION_OPTIONS,
  PROBATIONARY_TEXT,
  RESUME_ACCEPT,
  US_STATES,
  emptyEmployer,
} from '../constants/application';

const INITIAL_VALUES = {
  position: '',
  maritimeExperience: '',
  usCitizen: '',
  hasTwic: '',
  hasMmc: '',
  hasDriversLicense: '',
  driversLicenseNumber: '',
  startDate: '',

  firstName: '',
  lastName: '',
  street: '',
  street2: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  ssn: '',
  education: '',

  physicalExam: '',
  hasCondition: '',
  conditionDetail: '',
  hadInjury: '',
  injuryDate: '',
  injuryEmployer: '',
  injuryNature: '',
  injuryDisabled: '',
  injuryTimeOff: '',
  abideSafetyRules: '',
  convicted: '',
  convictionDate: '',
  convictionNature: '',
  convictionDisposition: '',

  agreed: false,
  signature: '',
  signatureDate: '',
};

const ALWAYS_REQUIRED = {
  position: 'Choose the position you are applying for.',
  maritimeExperience: 'Answer required.',
  usCitizen: 'Answer required.',
  hasTwic: 'Answer required.',
  hasMmc: 'Answer required.',
  hasDriversLicense: 'Answer required.',
  driversLicenseNumber: "Enter your driver's license number.",
  startDate: 'Enter the date you can start.',
  firstName: 'Enter your first name.',
  lastName: 'Enter your last name.',
  street: 'Enter your street address.',
  city: 'Enter your city.',
  state: 'Select your state.',
  zip: 'Enter your ZIP code.',
  email: 'Enter your email address.',
  phone: 'Enter your phone number.',
  dateOfBirth: 'Enter your date of birth.',
  ssn: 'Enter your Social Security number.',
  education: 'Select your highest level of education.',
  physicalExam: 'Answer required.',
  hasCondition: 'Answer required.',
  hadInjury: 'Answer required.',
  abideSafetyRules: 'Answer required.',
  convicted: 'Answer required.',
  signature: 'Type your full name as your signature.',
  signatureDate: 'Enter the date.',
};

const EMPLOYER_REQUIRED = {
  name: 'Enter the employer and supervisor name.',
  street: 'Enter the street address.',
  city: 'Enter the city.',
  state: 'Select the state.',
  zip: 'Enter the ZIP code.',
  phone: 'Enter the phone number.',
  work: 'Describe the type of work done.',
  from: 'Enter the start date.',
  to: 'Enter the end date.',
  reason: 'Enter the reason for leaving.',
};

function digitsOnly(value) {
  return value.replace(/\D/g, '');
}

function formatPhone(value) {
  const digits = digitsOnly(value).slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function formatSsn(value) {
  const digits = digitsOnly(value).slice(0, 9);
  if (digits.length <= 3) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
}

function readAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('The file could not be read.'));
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
    reader.readAsDataURL(file);
  });
}

/**
 * Checks a filled-out application and returns the problems as a map of field
 * name to the message shown under that field. An empty map means the form may
 * be submitted. Employer problems are keyed `employer<index>.<field>` so the
 * four repeated blocks stay in one flat map alongside the top-level fields.
 */
function validate(values, employers) {
  const errors = {};

  for (const [field, message] of Object.entries(ALWAYS_REQUIRED)) {
    if (!String(values[field]).trim()) errors[field] = message;
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (values.phone && digitsOnly(values.phone).length !== 10) {
    errors.phone = 'Enter a 10-digit phone number.';
  }
  if (values.ssn && digitsOnly(values.ssn).length !== 9) {
    errors.ssn = 'Enter all 9 digits.';
  }
  if (values.hasCondition === 'Yes' && !values.conditionDetail.trim()) {
    errors.conditionDetail = 'Please explain the condition.';
  }
  if (values.hadInjury === 'Yes') {
    if (!values.injuryDate) errors.injuryDate = 'Enter the approximate date.';
    if (!values.injuryEmployer.trim()) errors.injuryEmployer = 'Enter the employer.';
    if (!values.injuryNature.trim()) errors.injuryNature = 'Describe the injury.';
    if (!values.injuryDisabled) errors.injuryDisabled = 'Answer required.';
  }
  if (values.convicted === 'Yes') {
    if (!values.convictionDate) errors.convictionDate = 'Enter the date.';
    if (!values.convictionNature.trim()) {
      errors.convictionNature = 'Enter the location and nature.';
    }
    if (!values.convictionDisposition.trim()) {
      errors.convictionDisposition = 'Enter the disposition.';
    }
  }
  if (!values.agreed) {
    errors.agreed = 'You must agree to the terms to submit an application.';
  }

  // Only the most recent employer is mandatory, so that applicants without a
  // long history are not blocked. Any later slot that has been started still
  // has to be completed.
  employers.forEach((employer, index) => {
    const isStarted = Object.values(employer).some((field) => field.trim());
    if (index > 0 && !isStarted) return;
    for (const [field, message] of Object.entries(EMPLOYER_REQUIRED)) {
      if (!employer[field].trim()) errors[`employer${index}.${field}`] = message;
    }
  });

  return errors;
}

function SuccessPanel({ position, onReset }) {
  return (
    <div className="rounded-lg border border-navy-100 bg-white p-10 text-center shadow-card md:p-14">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-navy-800 text-white">
        <Icon name="check" className="h-8 w-8" />
      </div>
      <h3 className="mt-7 font-display text-3xl font-bold tracking-tight text-ink">
        Application received
      </h3>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">
        We have your {position.toLowerCase()} application. Our hiring office will contact you about
        next steps.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 rounded-md border border-navy-200 bg-white px-7 py-3 font-semibold text-navy-800 transition-colors hover:border-navy-800 hover:bg-navy-50"
      >
        Submit another application
      </button>
    </div>
  );
}

function EmployerBlock({ index, employer, errors, onChange }) {
  const set = (field) => (value) => onChange(index, field, value);
  const errorFor = (field) => errors[`employer${index}.${field}`];
  const isOptional = index > 0;

  return (
    <div className="rounded-lg border border-navy-100 bg-mist-50/50 p-5 md:p-6">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-display text-lg font-bold tracking-tight text-ink">
          {index === 0 ? 'Most recent employer' : `Previous employer ${index + 1}`}
        </span>
        {isOptional && (
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-gray-500">
            Optional
          </span>
        )}
      </div>

      <div className="space-y-5">
        <TextField
          label="Employer and supervisor name"
          value={employer.name}
          onChange={set('name')}
          required={!isOptional}
          error={errorFor('name')}
          autoComplete="off"
        />
        <TextField
          label="Street address"
          value={employer.street}
          onChange={set('street')}
          required={!isOptional}
          error={errorFor('street')}
          autoComplete="off"
        />
        <FieldGrid columns={3}>
          <TextField
            label="City"
            value={employer.city}
            onChange={set('city')}
            required={!isOptional}
            error={errorFor('city')}
            autoComplete="off"
          />
          <SelectField
            label="State"
            value={employer.state}
            onChange={set('state')}
            options={US_STATES}
            required={!isOptional}
            error={errorFor('state')}
          />
          <TextField
            label="ZIP code"
            value={employer.zip}
            onChange={set('zip')}
            required={!isOptional}
            error={errorFor('zip')}
            autoComplete="off"
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            label="Phone number"
            type="tel"
            value={employer.phone}
            onChange={(value) => set('phone')(formatPhone(value))}
            placeholder="555-555-5555"
            required={!isOptional}
            error={errorFor('phone')}
          />
          <TextField
            label="Type of work done"
            value={employer.work}
            onChange={set('work')}
            required={!isOptional}
            error={errorFor('work')}
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            label="Employed from"
            type="date"
            value={employer.from}
            onChange={set('from')}
            required={!isOptional}
            error={errorFor('from')}
          />
          <TextField
            label="Employed to"
            type="date"
            value={employer.to}
            onChange={set('to')}
            required={!isOptional}
            error={errorFor('to')}
          />
        </FieldGrid>
        <TextField
          label="Reason for leaving"
          value={employer.reason}
          onChange={set('reason')}
          required={!isOptional}
          error={errorFor('reason')}
        />
      </div>
    </div>
  );
}

function ApplicationForm({ defaultPosition = '' }) {
  const [values, setValues] = useState({ ...INITIAL_VALUES, position: defaultPosition });
  const [employers, setEmployers] = useState(() =>
    Array.from({ length: EMPLOYER_SLOTS }, emptyEmployer)
  );
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef(null);

  // Bots fill every input they find; a real applicant never sees this one.
  const [honeypot, setHoneypot] = useState('');

  const set = (field) => (value) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  const setEmployerField = (index, field, value) => {
    setEmployers((previous) =>
      previous.map((employer, slot) =>
        slot === index ? { ...employer, [field]: value } : employer
      )
    );
    setErrors((previous) => {
      const key = `employer${index}.${field}`;
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  };

  const handleResume = (file) => {
    if (file && file.size > MAX_RESUME_BYTES) {
      setResume(null);
      setResumeError('That file is over 3 MB. Please attach a smaller one.');
      return;
    }
    setResumeError('');
    setResume(file);
  };

  const reset = () => {
    setValues({ ...INITIAL_VALUES, position: defaultPosition });
    setEmployers(Array.from({ length: EMPLOYER_SLOTS }, emptyEmployer));
    setResume(null);
    setErrors({});
    setStatus('idle');
    setSubmitError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values, employers);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    try {
      const payload = { ...values, employers, website: honeypot };
      if (resume) {
        payload.resume = {
          filename: resume.name,
          content: await readAsBase64(resume),
        };
      }

      const response = await fetch(APPLICATION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'The application could not be submitted.');
      }

      setStatus('success');
      window.scrollTo({ top: formRef.current?.offsetTop ?? 0, behavior: 'smooth' });
    } catch (error) {
      setStatus('error');
      setSubmitError(error.message);
    }
  };

  if (status === 'success') {
    return (
      <div ref={formRef}>
        <SuccessPanel position={values.position} onReset={reset} />
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      <FormSection
        title="Position"
        description="The job you are applying for, and the credentials you hold."
      >
        <ChoiceField
          label="Which position are you applying for?"
          value={values.position}
          onChange={set('position')}
          options={POSITION_OPTIONS}
          required
          error={errors.position}
        />
        <FieldGrid>
          <ChoiceField
            label="Do you have maritime job experience?"
            value={values.maritimeExperience}
            onChange={set('maritimeExperience')}
            required
            error={errors.maritimeExperience}
          />
          <ChoiceField
            label="Are you a US citizen?"
            value={values.usCitizen}
            onChange={set('usCitizen')}
            required
            error={errors.usCitizen}
          />
          <ChoiceField
            label="Do you have a valid TWIC?"
            value={values.hasTwic}
            onChange={set('hasTwic')}
            required
            error={errors.hasTwic}
          />
          <ChoiceField
            label="Do you have a valid MMC?"
            value={values.hasMmc}
            onChange={set('hasMmc')}
            required
            error={errors.hasMmc}
          />
        </FieldGrid>
        <FieldGrid>
          <ChoiceField
            label="Do you have a valid driver's license?"
            value={values.hasDriversLicense}
            onChange={set('hasDriversLicense')}
            required
            error={errors.hasDriversLicense}
          />
          <TextField
            label="Driver's license number"
            value={values.driversLicenseNumber}
            onChange={set('driversLicenseNumber')}
            required
            error={errors.driversLicenseNumber}
            autoComplete="off"
          />
        </FieldGrid>
        <TextField
          label="When can you start?"
          type="date"
          value={values.startDate}
          onChange={set('startDate')}
          required
          error={errors.startDate}
        />
      </FormSection>

      <FormSection title="Your contact information">
        <FieldGrid>
          <TextField
            label="First name"
            value={values.firstName}
            onChange={set('firstName')}
            required
            error={errors.firstName}
            autoComplete="given-name"
          />
          <TextField
            label="Last name"
            value={values.lastName}
            onChange={set('lastName')}
            required
            error={errors.lastName}
            autoComplete="family-name"
          />
        </FieldGrid>
        <TextField
          label="Street address"
          value={values.street}
          onChange={set('street')}
          required
          error={errors.street}
          autoComplete="address-line1"
        />
        <TextField
          label="Address line 2"
          value={values.street2}
          onChange={set('street2')}
          autoComplete="address-line2"
        />
        <FieldGrid columns={3}>
          <TextField
            label="City"
            value={values.city}
            onChange={set('city')}
            required
            error={errors.city}
            autoComplete="address-level2"
          />
          <SelectField
            label="State"
            value={values.state}
            onChange={set('state')}
            options={US_STATES}
            required
            error={errors.state}
          />
          <TextField
            label="ZIP code"
            value={values.zip}
            onChange={set('zip')}
            required
            error={errors.zip}
            autoComplete="postal-code"
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            label="Email address"
            type="email"
            value={values.email}
            onChange={set('email')}
            required
            error={errors.email}
            autoComplete="email"
          />
          <TextField
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={(value) => set('phone')(formatPhone(value))}
            placeholder="555-555-5555"
            required
            error={errors.phone}
            autoComplete="tel"
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            label="Date of birth"
            type="date"
            value={values.dateOfBirth}
            onChange={set('dateOfBirth')}
            required
            error={errors.dateOfBirth}
          />
          <TextField
            label="Social Security number"
            value={values.ssn}
            onChange={(value) => set('ssn')(formatSsn(value))}
            placeholder="000-00-0000"
            inputMode="numeric"
            required
            error={errors.ssn}
            hint="Used for the pre-employment background and drug screen."
            autoComplete="off"
          />
        </FieldGrid>
        <SelectField
          label="Highest level of education"
          value={values.education}
          onChange={set('education')}
          options={EDUCATION_OPTIONS}
          required
          error={errors.education}
        />
      </FormSection>

      <FormSection
        title="Employment history"
        description="Start with your current or most recent employer, including the name of your supervisor."
      >
        {employers.map((employer, index) => (
          <EmployerBlock
            key={index}
            index={index}
            employer={employer}
            errors={errors}
            onChange={setEmployerField}
          />
        ))}
      </FormSection>

      <FormSection title="Personal history">
        <FieldGrid>
          <ChoiceField
            label="Have you had a physical exam in the last 5 years?"
            value={values.physicalExam}
            onChange={set('physicalExam')}
            required
            error={errors.physicalExam}
          />
          <ChoiceField
            label="Do you have a physical or mental condition that may hinder performance of this job?"
            value={values.hasCondition}
            onChange={set('hasCondition')}
            required
            error={errors.hasCondition}
          />
        </FieldGrid>
        {values.hasCondition === 'Yes' && (
          <TextAreaField
            label="Please explain"
            value={values.conditionDetail}
            onChange={set('conditionDetail')}
            required
            error={errors.conditionDetail}
          />
        )}

        <ChoiceField
          label="Have you ever had an on-the-job injury?"
          value={values.hadInjury}
          onChange={set('hadInjury')}
          required
          error={errors.hadInjury}
        />
        {values.hadInjury === 'Yes' && (
          <div className="space-y-5 rounded-lg border border-navy-100 bg-mist-50/50 p-5 md:p-6">
            <FieldGrid>
              <TextField
                label="Approximate date of injury"
                type="date"
                value={values.injuryDate}
                onChange={set('injuryDate')}
                required
                error={errors.injuryDate}
              />
              <TextField
                label="Employer at time of injury"
                value={values.injuryEmployer}
                onChange={set('injuryEmployer')}
                required
                error={errors.injuryEmployer}
              />
            </FieldGrid>
            <TextField
              label="Nature of injury"
              value={values.injuryNature}
              onChange={set('injuryNature')}
              required
              error={errors.injuryNature}
            />
            <FieldGrid>
              <ChoiceField
                label="Were you disabled?"
                value={values.injuryDisabled}
                onChange={set('injuryDisabled')}
                required
                error={errors.injuryDisabled}
              />
              <TextField
                label="Approximate length of time off work"
                value={values.injuryTimeOff}
                onChange={set('injuryTimeOff')}
              />
            </FieldGrid>
          </div>
        )}

        <ChoiceField
          label="Will you abide by the safety rules of Hollingshead Harbor?"
          value={values.abideSafetyRules}
          onChange={set('abideSafetyRules')}
          required
          error={errors.abideSafetyRules}
        />

        <ChoiceField
          label="Have you ever been convicted of a criminal offense?"
          hint="Do not include traffic or parking tickets. A conviction does not automatically bar you from employment."
          value={values.convicted}
          onChange={set('convicted')}
          required
          error={errors.convicted}
        />
        {values.convicted === 'Yes' && (
          <div className="space-y-5 rounded-lg border border-navy-100 bg-mist-50/50 p-5 md:p-6">
            <TextField
              label="Date of conviction"
              type="date"
              value={values.convictionDate}
              onChange={set('convictionDate')}
              required
              error={errors.convictionDate}
            />
            <TextField
              label="Location and nature of conviction"
              value={values.convictionNature}
              onChange={set('convictionNature')}
              required
              error={errors.convictionNature}
            />
            <TextField
              label="Disposition of offense"
              value={values.convictionDisposition}
              onChange={set('convictionDisposition')}
              required
              error={errors.convictionDisposition}
            />
          </div>
        )}
      </FormSection>

      <FormSection title="Read and sign">
        <div className="rounded-lg border border-navy-100 bg-mist-50/50 p-5 text-sm leading-relaxed text-gray-700 md:p-6">
          <p>{CERTIFICATION_TEXT}</p>
          <h4 className="mt-6 font-display text-base font-bold tracking-tight text-ink">
            Probationary status of new employees
          </h4>
          <p className="mt-2">{PROBATIONARY_TEXT}</p>
        </div>

        <CheckboxField
          label="I have read and agree to the terms above."
          checked={values.agreed}
          onChange={set('agreed')}
          required
          error={errors.agreed}
        />

        <FieldGrid>
          <TextField
            label="Signature of applicant"
            value={values.signature}
            onChange={set('signature')}
            hint="Type your full legal name."
            required
            error={errors.signature}
            autoComplete="off"
          />
          <TextField
            label="Date"
            type="date"
            value={values.signatureDate}
            onChange={set('signatureDate')}
            required
            error={errors.signatureDate}
          />
        </FieldGrid>

        <FileField
          label="Attach a resume"
          file={resume}
          onChange={handleResume}
          accept={RESUME_ACCEPT}
          hint="Optional. PDF, Word, or plain text, up to 3 MB."
          error={resumeError}
        />
      </FormSection>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-field">Website</label>
        <input
          id="website-field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {errorCount > 0 && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-medium text-red-700">
          {errorCount === 1
            ? 'One field needs fixing. It is marked in red above.'
            : `${errorCount} fields need fixing. They are marked in red above.`}
        </div>
      )}

      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-medium text-red-700">
          {submitError} Please try again.
        </div>
      )}

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary group px-9 py-4 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit application'}
          {status !== 'submitting' && (
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </button>
        <p className="text-sm text-gray-500">
          Fields marked <span className="font-semibold text-red-600">*</span> are required.
        </p>
      </div>
    </form>
  );
}

export default ApplicationForm;
