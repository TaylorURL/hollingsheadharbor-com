import {
  BUSINESS_LEGAL_NAME,
  BUSINESS_NAME,
  CONTACT_EMAIL,
  FOUNDING_YEAR,
  MAIN_WEBSITE_URL,
  OFFICES,
  PARENT_ORGANIZATION,
  PHONE_E164,
  SERVICE_AREAS,
  SITE_ORIGIN,
  SOCIAL_LINKS,
} from './urls';

export const SHARE_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
export const LOGO_URL = `${SITE_ORIGIN}/logo.png`;

/**
 * Every route the router mounts, in the order the sitemap lists them. The head
 * metadata for each one lives in the page that renders it; this table is the
 * route inventory, so a page that exists as a file but is not mounted never
 * reaches the sitemap.
 */
export const SITE_ROUTES = [
  '/',
  '/about',
  '/equipment',
  '/careers',
  '/contact',
  '/privacy-policy',
  '/terms',
];

export const HOME_TITLE = 'Hollingshead Harbor | Marine Transportation';

export const HOME_DESCRIPTION =
  'Bulk dry cargo, vessel charter, and barge charter through 13 harbors in 6 states. ' +
  'The marine arm of Smyrna Ready Mix, family-owned since 1999.';

const mainOffice = OFFICES[0];
const branchOffice = OFFICES[1];

const postalAddress = (office) => ({
  '@type': 'PostalAddress',
  streetAddress: office.street,
  addressLocality: office.city,
  addressRegion: office.region,
  postalCode: office.postalCode,
  addressCountry: 'US',
});

/**
 * Structured data is read away from the page it came from, so every url, logo,
 * and @id below is absolute.
 *
 * There is no `geo` node: no coordinate for either address exists anywhere in
 * this repository, and a guessed one is a wrong answer to the question a local
 * result is asking.
 */
export function businessGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_ORIGIN}/#business`,
        name: BUSINESS_NAME,
        legalName: BUSINESS_LEGAL_NAME,
        url: `${SITE_ORIGIN}/`,
        logo: LOGO_URL,
        image: SHARE_IMAGE,
        telephone: PHONE_E164,
        email: CONTACT_EMAIL,
        foundingDate: FOUNDING_YEAR,
        description: HOME_DESCRIPTION,
        address: postalAddress(mainOffice),
        location: {
          '@type': 'Place',
          name: branchOffice.name,
          address: postalAddress(branchOffice),
        },
        areaServed: SERVICE_AREAS.map((area) => ({
          '@type': 'State',
          name: area.name,
        })),
        // Dispatch and loading run every day of the year, which is what the
        // home page publishes as its operating claim.
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        parentOrganization: { '@id': `${SITE_ORIGIN}/#parent` },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#parent`,
        name: PARENT_ORGANIZATION,
        url: MAIN_WEBSITE_URL,
        sameAs: SOCIAL_LINKS.map((link) => link.href),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        name: BUSINESS_NAME,
        url: `${SITE_ORIGIN}/`,
        publisher: { '@id': `${SITE_ORIGIN}/#business` },
        inLanguage: 'en-US',
      },
    ],
  };
}

export function pageGraph({ canonical, title, description, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    about: { '@id': `${SITE_ORIGIN}/#business` },
    primaryImageOfPage: image ?? SHARE_IMAGE,
    inLanguage: 'en-US',
  };
}

/**
 * The trail a result shows in place of the raw URL. Positions are one-based
 * and the home page is always the first crumb, so a page only declares the
 * steps below it.
 */
export function breadcrumbGraph(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_ORIGIN}${crumb.path}`,
    })),
  };
}
