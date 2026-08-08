export const MAIN_WEBSITE_URL = 'https://www.smyrnareadymix.com';
export const TWITTER_URL = 'https://x.com/SRMCONCRETE';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/srmconcrete';
export const FACEBOOK_URL = 'https://www.facebook.com/srmconcrete/';

// The one number the site publishes. Every phone link reads from here.
export const PHONE_NUMBER = '8327414125';
export const PHONE_DISPLAY = '(832) 741-4125';
export const CONTACT_EMAIL = 'info@hollingsheadharbor.com';
export const HQ_CITY = 'Murfreesboro, TN';
export const HQ_ADDRESS_LINES = ['1000 Hollingshead Circle', 'Murfreesboro, TN 37129'];

// `icon` must name an entry in the Icon registry (src/components/Icon.jsx).
export const SOCIAL_LINKS = [
  { href: TWITTER_URL, label: 'X (Twitter)', icon: 'twitter' },
  { href: LINKEDIN_URL, label: 'LinkedIn', icon: 'linkedin' },
  { href: FACEBOOK_URL, label: 'Facebook', icon: 'facebook' },
];

// Addresses only — both offices are reached on the single number above.
export const OFFICES = [
  {
    id: 'murfreesboro',
    name: 'Main Office',
    addressLines: HQ_ADDRESS_LINES,
  },
  {
    id: 'san-leon',
    name: 'San Leon, Texas',
    addressLines: ['2702 Avenue S', 'San Leon, TX 77539'],
  },
];
