import { useEffect, useRef, useState } from 'react';
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
  EMPLOYER_FIELDS,
  EMPLOYER_SLOTS,
  MAX_RESUME_BYTES,
  POSITION_OPTIONS,
  PROBATIONARY_TEXT,
  RESUME_ACCEPT,
  US_STATES,
  emptyEmployer,
} from '../constants/application';

/**
 * Every label the applicant reads, in the order the form asks for it. The
 * order is what the error summary and the focus-the-first-problem jump both
 * walk, so a field moved in the markup is moved here too.
 *
 * Questions keep their sentence case; the rest are field labels and are Title
 * Case like every other label in the product.
 */
const FIELD_LABELS = {
  position: 'Which position are you applying for?',
  maritimeExperience: 'Do you have maritime job experience?',
  usCitizen: 'Are you a US citizen?',
  hasTwic: 'Do you have a valid TWIC?',
  hasMmc: 'Do you have a valid MMC?',
  hasDriversLicense: "Do you have a valid driver's license?",
  driversLicenseNumber: "Driver's License Number",
  startDate: 'When can you start?',
  firstName: 'First Name',
  lastName: 'Last Name',
  street: 'Street Address',
  street2: 'Address Line 2',
  city: 'City',
  state: 'State',
  zip: 'ZIP Code',
  email: 'Email Address',
  phone: 'Phone Number',
  dateOfBirth: 'Date of Birth',
  ssn: 'Social Security Number',
  education: 'Highest Level of Education',
  physicalExam: 'Have you had a physical exam in the last 5 years?',
  hasCondition:
    'Do you have a physical or mental condition that may hinder performance of this job?',
  conditionDetail: 'Please explain',
  hadInjury: 'Have you ever had an on-the-job injury?',
  injuryDate: 'Approximate Date of Injury',
  injuryEmployer: 'Employer at Time of Injury',
  injuryNature: 'Nature of Injury',
  injuryDisabled: 'Were you disabled?',
  injuryTimeOff: 'Approximate Length of Time Off Work',
  abideSafetyRules: 'Will you abide by the safety rules of Hollingshead Harbor?',
  convicted: 'Have you ever been convicted of a criminal offense?',
  convictionDate: 'Date of Conviction',
  convictionNature: 'Location and Nature of Conviction',
  convictionDisposition: 'Disposition of Offense',
  agreed: 'I have read and agree to the terms above.',
  signature: 'Signature of Applicant',
  signatureDate: 'Date',
  resume: 'Attach a Resume',
};

const EMPLOYER_LABELS = Object.fromEntries(
  EMPLOYER_FIELDS.map((field) => [field.name, field.label])
);

function employerBlockTitle(index) {
  return index === 0 ? 'Most recent employer' : `Previous employer ${index + 1}`;
}

const EMPLOYER_ERROR_KEYS = Array.from({ length: EMPLOYER_SLOTS }, (_, index) =>
  EMPLOYER_FIELDS.map((field) => `employer${index}.${field.name}`)
).flat();

const TOP_LEVEL_KEYS = Object.keys(FIELD_LABELS);
const HISTORY_START = TOP_LEVEL_KEYS.indexOf('physicalExam');

// The employment history sits between the contact block and the personal
// history block, so the summary lists its problems there too.
const ERROR_ORDER = [
  ...TOP_LEVEL_KEYS.slice(0, HISTORY_START),
  ...EMPLOYER_ERROR_KEYS,
  ...TOP_LEVEL_KEYS.slice(HISTORY_START),
];

/** Errors are keyed with a dot; element ids are not, so they can be anchors. */
function anchorId(errorKey) {
  return `field-${errorKey.replace('.', '-')}`;
}

function labelForError(errorKey) {
  const employer = errorKey.match(/^employer(\d+)\.(.+)$/);
  if (!employer) return FIELD_LABELS[errorKey] ?? errorKey;
  return `${employerBlockTitle(Number(employer[1]))}: ${EMPLOYER_LABELS[employer[2]]}`;
}

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
    <div className="rounded-lg border border-line bg-surface-raised p-10 text-center shadow-card md:p-14">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-navy-800 text-white">
        <Icon name="check" className="h-8 w-8" />
      </div>
      <h3 className="mt-7 font-display text-3xl font-bold tracking-tight text-ink">
        Application received
      </h3>
      <p className="mx-auto mt-4 max-w-md text-prose leading-relaxed text-ink-muted">
        We have your {position.toLowerCase()} application. Our hiring office will contact you about
        next steps.
      </p>
      <button type="button" onClick={onReset} className="btn btn-outline mt-8">
        Submit Another Application
      </button>
    </div>
  );
}

/**
 * Lists every problem once, at the top of the form, with a link to the control
 * that owns it. A form this long puts most of its errors off screen, so the
 * count alone leaves the applicant scrolling for the red.
 */
function ErrorSummary({ errors }) {
  const keys = ERROR_ORDER.filter((key) => errors[key]);
  if (keys.length === 0) return null;

  return (
    <div
      role="alert"
      className="rounded-lg border border-danger bg-danger-surface p-5 text-sm text-danger-ink"
    >
      <p className="flex items-center gap-2 font-semibold">
        <Icon name="close" className="h-4 w-4 shrink-0" />
        {keys.length === 1
          ? 'One field needs fixing before this application can be sent.'
          : `${keys.length} fields need fixing before this application can be sent.`}
      </p>
      <ul className="mt-3 space-y-2">
        {keys.map((key) => (
          <li key={key}>
            <a
              href={`#${anchorId(key)}`}
              className="pressable font-medium underline underline-offset-4 hover:no-underline"
            >
              {labelForError(key)}
            </a>
            <span className="text-ink-muted">: {errors[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmployerBlock({ index, employer, errors, onChange }) {
  const set = (field) => (value) => onChange(index, field, value);
  const errorFor = (field) => errors[`employer${index}.${field}`];
  const isOptional = index > 0;
  const fieldName = (field) => `employer${index}-${field}`;

  return (
    <div className="rounded-lg border border-line bg-surface-sunken p-5 md:p-6">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-display text-lg font-bold tracking-tight text-ink">
          {employerBlockTitle(index)}
        </span>
        {isOptional && (
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink-subtle">
            Optional
          </span>
        )}
      </div>

      <div className="space-y-5">
        <TextField
          name={fieldName('name')}
          label={EMPLOYER_LABELS.name}
          value={employer.name}
          onChange={set('name')}
          required={!isOptional}
          error={errorFor('name')}
          autoComplete="off"
        />
        <TextField
          name={fieldName('street')}
          label={EMPLOYER_LABELS.street}
          value={employer.street}
          onChange={set('street')}
          required={!isOptional}
          error={errorFor('street')}
          autoComplete="off"
        />
        <FieldGrid columns={3}>
          <TextField
            name={fieldName('city')}
            label={EMPLOYER_LABELS.city}
            value={employer.city}
            onChange={set('city')}
            required={!isOptional}
            error={errorFor('city')}
            autoComplete="off"
          />
          <SelectField
            name={fieldName('state')}
            label={EMPLOYER_LABELS.state}
            value={employer.state}
            onChange={set('state')}
            options={US_STATES}
            required={!isOptional}
            error={errorFor('state')}
            autoComplete="off"
          />
          <TextField
            name={fieldName('zip')}
            label={EMPLOYER_LABELS.zip}
            value={employer.zip}
            onChange={set('zip')}
            inputMode="numeric"
            required={!isOptional}
            error={errorFor('zip')}
            autoComplete="off"
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            name={fieldName('phone')}
            label={EMPLOYER_LABELS.phone}
            type="tel"
            value={employer.phone}
            onChange={(value) => set('phone')(formatPhone(value))}
            placeholder="555-555-5555"
            required={!isOptional}
            error={errorFor('phone')}
            autoComplete="off"
          />
          <TextField
            name={fieldName('work')}
            label={EMPLOYER_LABELS.work}
            value={employer.work}
            onChange={set('work')}
            required={!isOptional}
            error={errorFor('work')}
            autoComplete="off"
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            name={fieldName('from')}
            label={EMPLOYER_LABELS.from}
            type="date"
            value={employer.from}
            onChange={set('from')}
            required={!isOptional}
            error={errorFor('from')}
            autoComplete="off"
          />
          <TextField
            name={fieldName('to')}
            label={EMPLOYER_LABELS.to}
            type="date"
            value={employer.to}
            onChange={set('to')}
            required={!isOptional}
            error={errorFor('to')}
            autoComplete="off"
          />
        </FieldGrid>
        <TextField
          name={fieldName('reason')}
          label={EMPLOYER_LABELS.reason}
          value={employer.reason}
          onChange={set('reason')}
          required={!isOptional}
          error={errorFor('reason')}
          autoComplete="off"
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
  const focusTarget = useRef(null);

  // Bots fill every input they find; a real applicant never sees this one.
  const [honeypot, setHoneypot] = useState('');

  // Send the applicant to the first thing that needs fixing, once the messages
  // have rendered. A yes/no question is a fieldset, which cannot hold focus, so
  // the first of its buttons takes it instead.
  useEffect(() => {
    const key = focusTarget.current;
    if (!key) return;
    focusTarget.current = null;

    const element = document.getElementById(anchorId(key));
    if (!element) return;
    const control = element.tagName === 'FIELDSET' ? element.querySelector('button') : element;
    control?.focus({ preventScroll: true });
    control?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [errors]);

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
      focusTarget.current = ERROR_ORDER.find((key) => found[key]);
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

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      <ErrorSummary errors={errors} />

      <FormSection
        title="Position"
        description="The job you are applying for, and the credentials you hold."
      >
        <ChoiceField
          name="position"
          label={FIELD_LABELS.position}
          value={values.position}
          onChange={set('position')}
          options={POSITION_OPTIONS}
          required
          error={errors.position}
        />
        <FieldGrid>
          <ChoiceField
            name="maritimeExperience"
            label={FIELD_LABELS.maritimeExperience}
            value={values.maritimeExperience}
            onChange={set('maritimeExperience')}
            required
            error={errors.maritimeExperience}
          />
          <ChoiceField
            name="usCitizen"
            label={FIELD_LABELS.usCitizen}
            value={values.usCitizen}
            onChange={set('usCitizen')}
            required
            error={errors.usCitizen}
          />
          <ChoiceField
            name="hasTwic"
            label={FIELD_LABELS.hasTwic}
            value={values.hasTwic}
            onChange={set('hasTwic')}
            required
            error={errors.hasTwic}
          />
          <ChoiceField
            name="hasMmc"
            label={FIELD_LABELS.hasMmc}
            value={values.hasMmc}
            onChange={set('hasMmc')}
            required
            error={errors.hasMmc}
          />
        </FieldGrid>
        <FieldGrid>
          <ChoiceField
            name="hasDriversLicense"
            label={FIELD_LABELS.hasDriversLicense}
            value={values.hasDriversLicense}
            onChange={set('hasDriversLicense')}
            required
            error={errors.hasDriversLicense}
          />
          <TextField
            name="driversLicenseNumber"
            label={FIELD_LABELS.driversLicenseNumber}
            value={values.driversLicenseNumber}
            onChange={set('driversLicenseNumber')}
            required
            error={errors.driversLicenseNumber}
            autoComplete="off"
          />
        </FieldGrid>
        <TextField
          name="startDate"
          label={FIELD_LABELS.startDate}
          type="date"
          value={values.startDate}
          onChange={set('startDate')}
          required
          error={errors.startDate}
          autoComplete="off"
        />
      </FormSection>

      <FormSection title="Your contact information">
        <FieldGrid>
          <TextField
            name="firstName"
            label={FIELD_LABELS.firstName}
            value={values.firstName}
            onChange={set('firstName')}
            required
            error={errors.firstName}
            autoComplete="given-name"
          />
          <TextField
            name="lastName"
            label={FIELD_LABELS.lastName}
            value={values.lastName}
            onChange={set('lastName')}
            required
            error={errors.lastName}
            autoComplete="family-name"
          />
        </FieldGrid>
        <TextField
          name="street"
          label={FIELD_LABELS.street}
          value={values.street}
          onChange={set('street')}
          required
          error={errors.street}
          autoComplete="address-line1"
        />
        <TextField
          name="street2"
          label={FIELD_LABELS.street2}
          value={values.street2}
          onChange={set('street2')}
          autoComplete="address-line2"
        />
        <FieldGrid columns={3}>
          <TextField
            name="city"
            label={FIELD_LABELS.city}
            value={values.city}
            onChange={set('city')}
            required
            error={errors.city}
            autoComplete="address-level2"
          />
          <SelectField
            name="state"
            label={FIELD_LABELS.state}
            value={values.state}
            onChange={set('state')}
            options={US_STATES}
            required
            error={errors.state}
            autoComplete="address-level1"
          />
          <TextField
            name="zip"
            label={FIELD_LABELS.zip}
            value={values.zip}
            onChange={set('zip')}
            inputMode="numeric"
            required
            error={errors.zip}
            autoComplete="postal-code"
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            name="email"
            label={FIELD_LABELS.email}
            type="email"
            value={values.email}
            onChange={set('email')}
            required
            error={errors.email}
            autoComplete="email"
          />
          <TextField
            name="phone"
            label={FIELD_LABELS.phone}
            type="tel"
            value={values.phone}
            onChange={(value) => set('phone')(formatPhone(value))}
            placeholder="555-555-5555"
            required
            error={errors.phone}
            autoComplete="tel-national"
          />
        </FieldGrid>
        <FieldGrid>
          <TextField
            name="dateOfBirth"
            label={FIELD_LABELS.dateOfBirth}
            type="date"
            value={values.dateOfBirth}
            onChange={set('dateOfBirth')}
            required
            error={errors.dateOfBirth}
            autoComplete="bday"
          />
          <TextField
            name="ssn"
            label={FIELD_LABELS.ssn}
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
          name="education"
          label={FIELD_LABELS.education}
          value={values.education}
          onChange={set('education')}
          options={EDUCATION_OPTIONS}
          required
          error={errors.education}
          autoComplete="off"
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
            name="physicalExam"
            label={FIELD_LABELS.physicalExam}
            value={values.physicalExam}
            onChange={set('physicalExam')}
            required
            error={errors.physicalExam}
          />
          <ChoiceField
            name="hasCondition"
            label={FIELD_LABELS.hasCondition}
            value={values.hasCondition}
            onChange={set('hasCondition')}
            required
            error={errors.hasCondition}
          />
        </FieldGrid>
        {values.hasCondition === 'Yes' && (
          <TextAreaField
            name="conditionDetail"
            label={FIELD_LABELS.conditionDetail}
            value={values.conditionDetail}
            onChange={set('conditionDetail')}
            required
            error={errors.conditionDetail}
            autoComplete="off"
          />
        )}

        <ChoiceField
          name="hadInjury"
          label={FIELD_LABELS.hadInjury}
          value={values.hadInjury}
          onChange={set('hadInjury')}
          required
          error={errors.hadInjury}
        />
        {values.hadInjury === 'Yes' && (
          <div className="space-y-5 rounded-lg border border-line bg-surface-sunken p-5 md:p-6">
            <FieldGrid>
              <TextField
                name="injuryDate"
                label={FIELD_LABELS.injuryDate}
                type="date"
                value={values.injuryDate}
                onChange={set('injuryDate')}
                required
                error={errors.injuryDate}
                autoComplete="off"
              />
              <TextField
                name="injuryEmployer"
                label={FIELD_LABELS.injuryEmployer}
                value={values.injuryEmployer}
                onChange={set('injuryEmployer')}
                required
                error={errors.injuryEmployer}
                autoComplete="off"
              />
            </FieldGrid>
            <TextField
              name="injuryNature"
              label={FIELD_LABELS.injuryNature}
              value={values.injuryNature}
              onChange={set('injuryNature')}
              required
              error={errors.injuryNature}
              autoComplete="off"
            />
            <FieldGrid>
              <ChoiceField
                name="injuryDisabled"
                label={FIELD_LABELS.injuryDisabled}
                value={values.injuryDisabled}
                onChange={set('injuryDisabled')}
                required
                error={errors.injuryDisabled}
              />
              <TextField
                name="injuryTimeOff"
                label={FIELD_LABELS.injuryTimeOff}
                value={values.injuryTimeOff}
                onChange={set('injuryTimeOff')}
                autoComplete="off"
              />
            </FieldGrid>
          </div>
        )}

        <ChoiceField
          name="abideSafetyRules"
          label={FIELD_LABELS.abideSafetyRules}
          value={values.abideSafetyRules}
          onChange={set('abideSafetyRules')}
          required
          error={errors.abideSafetyRules}
        />

        <ChoiceField
          name="convicted"
          label={FIELD_LABELS.convicted}
          hint="Do not include traffic or parking tickets. A conviction does not automatically bar you from employment."
          value={values.convicted}
          onChange={set('convicted')}
          required
          error={errors.convicted}
        />
        {values.convicted === 'Yes' && (
          <div className="space-y-5 rounded-lg border border-line bg-surface-sunken p-5 md:p-6">
            <TextField
              name="convictionDate"
              label={FIELD_LABELS.convictionDate}
              type="date"
              value={values.convictionDate}
              onChange={set('convictionDate')}
              required
              error={errors.convictionDate}
              autoComplete="off"
            />
            <TextField
              name="convictionNature"
              label={FIELD_LABELS.convictionNature}
              value={values.convictionNature}
              onChange={set('convictionNature')}
              required
              error={errors.convictionNature}
              autoComplete="off"
            />
            <TextField
              name="convictionDisposition"
              label={FIELD_LABELS.convictionDisposition}
              value={values.convictionDisposition}
              onChange={set('convictionDisposition')}
              required
              error={errors.convictionDisposition}
              autoComplete="off"
            />
          </div>
        )}
      </FormSection>

      <FormSection title="Read and sign">
        <div className="rounded-lg border border-line bg-surface-sunken p-5 text-sm leading-relaxed text-ink-body md:p-6">
          <p>{CERTIFICATION_TEXT}</p>
          <h4 className="mt-6 font-display text-base font-bold tracking-tight text-ink">
            Probationary status of new employees
          </h4>
          <p className="mt-2">{PROBATIONARY_TEXT}</p>
        </div>

        <CheckboxField
          name="agreed"
          label={FIELD_LABELS.agreed}
          checked={values.agreed}
          onChange={set('agreed')}
          required
          error={errors.agreed}
        />

        <FieldGrid>
          <TextField
            name="signature"
            label={FIELD_LABELS.signature}
            value={values.signature}
            onChange={set('signature')}
            hint="Type your full legal name."
            required
            error={errors.signature}
            autoComplete="off"
          />
          <TextField
            name="signatureDate"
            label={FIELD_LABELS.signatureDate}
            type="date"
            value={values.signatureDate}
            onChange={set('signatureDate')}
            required
            error={errors.signatureDate}
            autoComplete="off"
          />
        </FieldGrid>

        <FileField
          name="resume"
          label={FIELD_LABELS.resume}
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

      {submitError && (
        <div
          role="alert"
          className="rounded-lg border border-danger bg-danger-surface p-5 text-sm font-medium text-danger-ink"
        >
          {submitError} Please try again.
        </div>
      )}

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
          className="btn btn-primary group px-9 py-4 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
          {status !== 'submitting' && (
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </button>
        <p className="text-sm text-ink-subtle">
          Fields marked <span className="font-semibold text-accent-contrast">*</span> are required.
        </p>
      </div>
    </form>
  );
}

export default ApplicationForm;
