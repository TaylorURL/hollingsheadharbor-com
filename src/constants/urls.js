export const SITE_ORIGIN = 'https://www.hollingsheadharbor.com';

export const BUSINESS_NAME = 'Hollingshead Harbor';
export const BUSINESS_LEGAL_NAME = 'Hollingshead Harbor, LLC';
export const FOUNDING_YEAR = '1999';

export const PARENT_ORGANIZATION = 'Smyrna Ready Mix';
export const MAIN_WEBSITE_URL = 'https://www.smyrnareadymix.com';
export const TWITTER_URL = 'https://x.com/SRMCONCRETE';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/srmconcrete';
export const FACEBOOK_URL = 'https://www.facebook.com/srmconcrete/';

// The one number the site publishes. Every phone link reads from here.
export const PHONE_NUMBER = '8327414125';
export const PHONE_DISPLAY = '(832) 741-4125';
export const PHONE_E164 = '+18327414125';
export const CONTACT_EMAIL = 'info@hollingsheadharbor.com';
export const HQ_CITY = 'Murfreesboro, TN';
export const HQ_ADDRESS_LINES = ['1000 Hollingshead Circle', 'Murfreesboro, TN 37129'];

// `icon` must name an entry in the Icon registry (src/components/ui/Icon.jsx).
export const SOCIAL_LINKS = [
  { href: TWITTER_URL, label: 'X (Twitter)', icon: 'twitter' },
  { href: LINKEDIN_URL, label: 'LinkedIn', icon: 'linkedin' },
  { href: FACEBOOK_URL, label: 'Facebook', icon: 'facebook' },
];

// Addresses only — both offices are reached on the single number above. The
// parts are split out because the LocalBusiness markup needs them separately
// and the footer needs them as printed lines; both read from this one list, so
// the two can never disagree.
export const OFFICES = [
  {
    id: 'murfreesboro',
    name: 'Main Office',
    addressLines: HQ_ADDRESS_LINES,
    street: '1000 Hollingshead Circle',
    city: 'Murfreesboro',
    region: 'TN',
    postalCode: '37129',
  },
  {
    id: 'san-leon',
    name: 'San Leon, Texas',
    addressLines: ['2702 Avenue S', 'San Leon, TX 77539'],
    street: '2702 Avenue S',
    city: 'San Leon',
    region: 'TX',
    postalCode: '77539',
  },
];

// The six states the harbor network reaches, in the order the home page lists
// them.
export const SERVICE_AREAS = [
  { code: 'AL', name: 'Alabama' },
  { code: 'FL', name: 'Florida' },
  { code: 'MI', name: 'Michigan' },
  { code: 'OH', name: 'Ohio' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
];
