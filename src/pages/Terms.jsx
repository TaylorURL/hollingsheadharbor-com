import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import Breadcrumbs from '../components/Breadcrumbs';
import Seo from '../components/Seo';
import { SHARE_IMAGE } from '../constants/seo';
import {
  BUSINESS_LEGAL_NAME,
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  SITE_ORIGIN,
} from '../constants/urls';
import useScrollAnimation from '../hooks/useScrollAnimation';

// The date the wording on this page last moved. A legal page with no date
// leaves a reader unable to tell which version they agreed to.
const LAST_UPDATED = '2026-08-26';

const HERO = {
  title: 'Terms of use',
  subtitle: 'These are the terms that apply to anyone using this website.',
};

const TERMS_SECTIONS = [
  {
    icon: 'document',
    title: 'Accepting these terms',
    paragraphs: [
      `These terms apply to everyone who uses hollingsheadharbor.com. Using the site means you accept them. If you do not accept them, please do not use the site.`,
    ],
  },
  {
    icon: 'users',
    title: 'Using this website',
    paragraphs: [
      'The site is here to describe our marine transportation and harbor services, to let you reach the office, and to take employment applications.',
      'Do not use it to disrupt it or the network it runs on, to reach any part of it that is not public, or to submit anything unlawful or anything that is not yours to submit.',
    ],
  },
  {
    icon: 'vessel',
    title: 'Information published here',
    paragraphs: [
      'Equipment listings, service descriptions, and harbor coverage are published as a guide. Dimensions, horsepower, capacity, and availability are confirmed when we quote your route and tonnage.',
      'Nothing on this site is an offer to carry a shipment or a guarantee that a vessel or barge is available.',
    ],
  },
  {
    icon: 'check-circle',
    title: 'Employment applications',
    paragraphs: [
      'What you submit through the application form is used to consider you for work with us. The application states what you are certifying when you sign it, including what a misstatement means for an offer.',
    ],
    footerLink: {
      to: '/privacy-policy',
      before: 'How that information is handled is set out in the',
      label: 'Privacy Policy',
      after: ', along with the SMS terms that apply if you give us a mobile number.',
    },
  },
  {
    icon: 'shield',
    title: 'Names, marks, and content',
    paragraphs: [
      `The name, logo, text, photographs, and page designs on this site belong to ${BUSINESS_LEGAL_NAME} or to the SRM family of companies.`,
      'You are welcome to read and print pages for your own use. Republishing or reusing them commercially takes our written permission first.',
    ],
  },
  {
    icon: 'chat',
    title: 'Links to other sites',
    paragraphs: [
      'Some links lead to sites we do not run, including the main SRM website and our social profiles. We do not control what those sites publish or how they handle your information.',
    ],
  },
  {
    icon: 'lock',
    title: 'No warranty',
    paragraphs: [
      'The site is provided as it is. We do not warrant that it will be uninterrupted or free of errors, or that every figure on it is complete and current at every moment.',
    ],
  },
  {
    icon: 'clock',
    title: 'Changes to these terms',
    paragraphs: [
      'We may update these terms. The version on this page is the one that applies, and using the site after a change means you accept the updated terms.',
    ],
  },
];

function TermsSection({ section }) {
  return (
    <article className="scroll-animate mb-8 rounded-lg border border-line bg-surface-cool p-8 md:p-10">
      <h2 className="flex items-center gap-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white">
          <Icon name={section.icon} className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <span className="text-ink">{section.title}</span>
      </h2>

      <div className="mt-6 space-y-4 leading-relaxed text-ink-body">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.footerLink && (
          <p>
            {section.footerLink.before}{' '}
            <Link
              to={section.footerLink.to}
              className="pressable font-semibold text-accent underline underline-offset-4 hover:text-accent-contrast"
            >
              {section.footerLink.label}
            </Link>
            {section.footerLink.after}
          </p>
        )}
      </div>
    </article>
  );
}

function Terms() {
  useScrollAnimation();

  return (
    <div className="page-enter">
      <Seo
        meta={{
          title: 'Terms of Use | Hollingshead Harbor',
          description:
            'The terms that apply to using this website: permitted use, the accuracy of published equipment and service information, and employment applications.',
          canonical: `${SITE_ORIGIN}/terms`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
          breadcrumb: [{ name: 'Terms of Use', path: '/terms' }],
        }}
      />
      <HeroSection subtitle={HERO.subtitle}>
        <h1 className="hero-title">{HERO.title}</h1>
      </HeroSection>
      <Breadcrumbs trail={[{ name: 'Terms of Use', path: '/terms' }]} />

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page max-w-4xl">
          <div className="scroll-animate mb-12">
            <SectionBadge>Overview</SectionBadge>
            <p className="mt-4 text-caption text-ink-subtle">
              Last updated{' '}
              <time dateTime={LAST_UPDATED}>
                {new Date(`${LAST_UPDATED}T00:00:00`).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-body">
              These terms cover the website itself. The terms of carriage for a shipment are agreed
              separately, in writing, when we quote the work.
            </p>
          </div>

          {TERMS_SECTIONS.map((section) => (
            <TermsSection key={section.title} section={section} />
          ))}

          <div className="scroll-animate rounded-lg border border-line bg-surface-raised p-8 shadow-card md:p-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Questions about these terms?
            </h2>
            <p className="mt-3 text-ink-body">Call or email the office and we will answer them.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
                <Icon name="phone" className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-outline">
                <Icon name="mail" className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
