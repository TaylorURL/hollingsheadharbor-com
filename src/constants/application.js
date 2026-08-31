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
  { name: 'name', label: 'Employer and Supervisor Name' },
  { name: 'street', label: 'Street Address' },
  { name: 'city', label: 'City' },
  { name: 'state', label: 'State', type: 'state' },
  { name: 'zip', label: 'ZIP Code' },
  { name: 'phone', label: 'Phone Number', type: 'tel' },
  { name: 'work', label: 'Type of Work Done' },
  { name: 'from', label: 'Employed From', type: 'date' },
  { name: 'to', label: 'Employed To', type: 'date' },
  { name: 'reason', label: 'Reason for Leaving' },
];

export function emptyEmployer() {
  return Object.fromEntries(EMPLOYER_FIELDS.map((field) => [field.name, '']));
}

/**
 * Sections are declared as data so the email sent to the hiring inbox prints
 * the application in the same order the applicant filled it out.
 */
export const SUMMARY_SECTIONS = [
  {
    title: 'Position',
    fields: [
      ['position', 'Position Applying For'],
      ['maritimeExperience', 'Maritime Job Experience'],
      ['usCitizen', 'US Citizen'],
      ['hasTwic', 'Valid TWIC'],
      ['hasMmc', 'Valid MMC'],
      ['hasDriversLicense', "Valid Driver's License"],
      ['driversLicenseNumber', "Driver's License Number"],
      ['startDate', 'Available to Start'],
    ],
  },
  {
    title: 'Contact Information',
    fields: [
      ['firstName', 'First Name'],
      ['lastName', 'Last Name'],
      ['street', 'Street Address'],
      ['street2', 'Address Line 2'],
      ['city', 'City'],
      ['state', 'State'],
      ['zip', 'ZIP Code'],
      ['email', 'Email Address'],
      ['phone', 'Phone'],
      ['dateOfBirth', 'Date of Birth'],
      ['ssn', 'Social Security Number'],
      ['education', 'Highest Level of Education'],
    ],
  },
  {
    title: 'Personal History',
    fields: [
      ['physicalExam', 'Physical Exam in the Last 5 Years'],
      ['hasCondition', 'Physical or Mental Condition Affecting the Job'],
      ['conditionDetail', 'Condition Explanation'],
      ['hadInjury', 'Prior On-the-Job Injury'],
      ['injuryDate', 'Approximate Date of Injury'],
      ['injuryEmployer', 'Employer at Time of Injury'],
      ['injuryNature', 'Nature of Injury'],
      ['injuryDisabled', 'Were You Disabled'],
      ['injuryTimeOff', 'Approximate Time Off Work'],
      ['abideSafetyRules', 'Will Abide by Safety Rules'],
      ['convicted', 'Convicted of a Criminal Offense'],
      ['convictionDate', 'Date of Conviction'],
      ['convictionNature', 'Location and Nature of Conviction'],
      ['convictionDisposition', 'Disposition of Offense'],
    ],
  },
  {
    title: 'Certification',
    fields: [
      ['agreed', 'Read and Agreed to the Terms'],
      ['signature', 'Signature of Applicant'],
      ['signatureDate', 'Date Signed'],
    ],
  },
];
