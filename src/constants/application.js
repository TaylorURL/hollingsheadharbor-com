/**
 * Shared definitions for the employment application. The form, the client-side
 * validator, and the email the API renders all read from here, so a field only
 * has to be described once.
 */

export const APPLICATION_ENDPOINT = '/api/apply';

export const MAX_RESUME_BYTES = 3 * 1024 * 1024;
export const RESUME_ACCEPT = '.pdf,.doc,.docx,.rtf,.txt';

export const EMPLOYER_SLOTS = 4;

export const POSITION_OPTIONS = ['Wheelman', 'Deckhand'];

export const EDUCATION_OPTIONS = [
  'Some High School',
  'High School Graduate or Equivalent',
  'Trade or Vocational Degree',
  'Some College',
  'Associate Degree',
  "Bachelor's Degree",
  'Graduate or Professional Degree',
  'Prefer Not to Answer',
];

export const US_STATES = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

export const CERTIFICATION_TEXT =
  'I hereby declare that I am not disabled in any way which would prevent me from steadily ' +
  'performing all the work applied for in this application. I further declare that the answers ' +
  'to the questions in this application are correct, and that any misstatement of fact or ' +
  'omission shall be cause for dismissal and rejection. I authorize the company to contact any ' +
  'of my previous employers as well as any reference source in order to verify the facts and ' +
  'information I have furnished regarding my qualifications and character. I hereby authorize ' +
  'any person(s) having knowledge thereof to provide such information to Hollingshead Harbor, ' +
  'LLC, and I hereby release from liability and agree to hold harmless any person that furnishes ' +
  'such information in good faith. I agree that I will submit to a physical, urinalysis, and/or ' +
  'blood or other examination requested by Hollingshead Harbor at any time prior or subsequent ' +
  'to my employment.';

export const PROBATIONARY_TEXT =
  'Your first ninety (90) days of employment with Hollingshead Harbor, LLC will be considered a ' +
  'probationary or trial period. This 90 day period will give you the opportunity to decide ' +
  'whether you like working with Hollingshead Harbor, and will give us the opportunity to ' +
  'determine if your work measures up to our standards. At any time, should we decide that your ' +
  'work habits or performance do not meet our standards, we may discharge you from employment. ' +
  'Likewise, should you decide to resign, you may do so at any time without any negative effect ' +
  'on your employment record.';

/**
 * Every employer block carries the same fields, so the form renders four copies
 * of this list and the email walks it back in the same order.
 */
export const EMPLOYER_FIELDS = [
  { name: 'name', label: 'Employer and supervisor name' },
  { name: 'street', label: 'Street address' },
  { name: 'city', label: 'City' },
  { name: 'state', label: 'State', type: 'state' },
  { name: 'zip', label: 'ZIP code' },
  { name: 'phone', label: 'Phone number', type: 'tel' },
  { name: 'work', label: 'Type of work done' },
  { name: 'from', label: 'Employed from', type: 'date' },
  { name: 'to', label: 'Employed to', type: 'date' },
  { name: 'reason', label: 'Reason for leaving' },
];

export function emptyEmployer() {
  return Object.fromEntries(EMPLOYER_FIELDS.map((field) => [field.name, '']));
}

/**
 * Sections are declared as data so the confirmation email can print the
 * application in the same order the applicant filled it out.
 */
export const SUMMARY_SECTIONS = [
  {
    title: 'Position',
    fields: [
      ['position', 'Position applying for'],
      ['maritimeExperience', 'Maritime job experience'],
      ['usCitizen', 'US citizen'],
      ['hasTwic', 'Valid TWIC'],
      ['hasMmc', 'Valid MMC'],
      ['hasDriversLicense', "Valid driver's license"],
      ['driversLicenseNumber', "Driver's license number"],
      ['startDate', 'Available to start'],
    ],
  },
  {
    title: 'Contact information',
    fields: [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['street', 'Street address'],
      ['street2', 'Address line 2'],
      ['city', 'City'],
      ['state', 'State'],
      ['zip', 'ZIP code'],
      ['email', 'Email address'],
      ['phone', 'Phone'],
      ['dateOfBirth', 'Date of birth'],
      ['ssn', 'Social Security number'],
      ['education', 'Highest level of education'],
    ],
  },
  {
    title: 'Personal history',
    fields: [
      ['physicalExam', 'Physical exam in the last 5 years'],
      ['hasCondition', 'Physical or mental condition affecting the job'],
      ['conditionDetail', 'Condition explanation'],
      ['hadInjury', 'Prior on-the-job injury'],
      ['injuryDate', 'Approximate date of injury'],
      ['injuryEmployer', 'Employer at time of injury'],
      ['injuryNature', 'Nature of injury'],
      ['injuryDisabled', 'Were you disabled'],
      ['injuryTimeOff', 'Approximate time off work'],
      ['abideSafetyRules', 'Will abide by safety rules'],
      ['convicted', 'Convicted of a criminal offense'],
      ['convictionDate', 'Date of conviction'],
      ['convictionNature', 'Location and nature of conviction'],
      ['convictionDisposition', 'Disposition of offense'],
    ],
  },
  {
    title: 'Certification',
    fields: [
      ['agreed', 'Read and agreed to the terms'],
      ['signature', 'Signature of applicant'],
      ['signatureDate', 'Date signed'],
    ],
  },
];
