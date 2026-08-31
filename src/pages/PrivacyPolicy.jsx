import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import Breadcrumbs from '../components/Breadcrumbs';
import Seo from '../components/Seo';
import { SHARE_IMAGE } from '../constants/seo';
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_NUMBER, SITE_ORIGIN } from '../constants/urls';
import useScrollAnimation from '../hooks/useScrollAnimation';

// The date the wording on this page last moved. A legal page with no date
// leaves a reader unable to tell which version they agreed to.
const LAST_UPDATED = '2026-08-26';

const HERO = {
  title: 'Privacy policy',
  subtitle: 'This is how information reaching this site is collected, used, and protected.',
};

const OVERVIEW_POINTS = [
  'What personally identifiable information is collected from you through the website, how it is used, and with whom it may be shared.',
  'What choices are available to you regarding the use of your data.',
  'The security procedures in place to protect the misuse of your information.',
  'How you can correct any inaccuracies in the information.',
];

const ACCESS_OPTIONS = [
  'See what data we have about you, if any.',
  'Change or correct any data we have about you.',
  'Have us delete any data we have about you.',
  'Express any concern you have about our use of your data.',
];

const POLICY_SECTIONS = [
  {
    icon: 'document',
    tone: 'navy',
    title: 'Information collection, use, and sharing',
    paragraphs: [
      'We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.',
      'Information collected through the form, including phone numbers, is used solely for the purpose of responding to inquiries. If you provide a mobile phone number, you consent to receive SMS text messages related to your inquiry. We do not retain or store this information beyond the completion of your request and do not use it for any other purpose unless specified. We ensure compliance with all relevant regulations regarding SMS communication and user consent.',
      'We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.',
      'SMS consent is not shared with third parties.',
      'Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.',
    ],
    emphasizeIndex: 3,
  },
  {
    icon: 'chat',
    tone: 'red',
    title: 'SMS terms of service',
    invert: true,
    paragraphs: [
      'By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from Hollingshead Harbor.',
      'This includes SMS messages for conversations (external) and conversations (between employees). Message frequency varies. Message and data rates may apply.',
    ],
    footer: (
      <>
        <p className="text-sm text-white/80">
          See privacy policy at{' '}
          <a
            href={`${SITE_ORIGIN}/privacy-policy`}
            className="pressable font-semibold text-white underline-offset-4 hover:underline"
          >
            hollingsheadharbor.com/privacy-policy
          </a>
        </p>
        <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white">
          Message HELP for help. Reply STOP to any message to opt out.
        </div>
      </>
    ),
  },
  {
    icon: 'eye',
    tone: 'navy',
    title: 'Your access to and control over information',
    paragraphs: [
      'You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:',
    ],
    bullets: ACCESS_OPTIONS,
  },
  {
    icon: 'lock',
    tone: 'navy',
    title: 'Security',
    paragraphs: [
      'We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.',
      'Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.',
      'While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.',
    ],
  },
];

const SECTION_TONES = {
  navy: {
    card: 'border border-line bg-surface-cool',
    iconWrap: 'bg-navy-800 text-white',
    title: 'text-ink',
    body: 'text-ink-body',
    emphasis: 'text-ink font-semibold',
  },
  red: {
    card: 'bg-navy-900 text-white border border-navy-700',
    iconWrap: 'bg-white/10 text-white',
    title: 'text-white',
    body: 'text-white/80',
    emphasis: 'text-white font-semibold',
  },
};

function PolicySection({ section }) {
  const tone = SECTION_TONES[section.tone] ?? SECTION_TONES.navy;
  return (
    <article className={`scroll-animate mb-8 rounded-lg p-8 md:p-10 ${tone.card}`}>
      <h2 className="flex items-center gap-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
        <span
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${tone.iconWrap}`}
        >
          <Icon name={section.icon} className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <span className={tone.title}>{section.title}</span>
      </h2>

      <div className={`mt-6 space-y-4 leading-relaxed ${tone.body}`}>
        {section.paragraphs.map((paragraph, index) => (
          <p key={paragraph} className={index === section.emphasizeIndex ? tone.emphasis : ''}>
            {paragraph}
          </p>
        ))}
      </div>

      {section.bullets && (
        <ul className="mt-6 space-y-3">
          {section.bullets.map((bullet) => (
            <li key={bullet} className={`flex items-start gap-3 ${tone.body}`}>
              <Icon name="check" className="mt-1 h-4 w-4 flex-shrink-0 text-accent-contrast" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {section.footer && <div className="mt-6">{section.footer}</div>}
    </article>
  );
}

function PrivacyPolicy() {
  useScrollAnimation();

  return (
    <div className="page-enter">
      <Seo
        meta={{
          title: 'Privacy Policy | Hollingshead Harbor',
          description:
            'What this site collects, how it is used and shared, the SMS terms that apply, and how to see, correct, or delete the data Hollingshead Harbor holds.',
          canonical: `${SITE_ORIGIN}/privacy-policy`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
          breadcrumb: [{ name: 'Privacy Policy', path: '/privacy-policy' }],
        }}
      />
      <HeroSection subtitle={HERO.subtitle}>
        <h1 className="hero-title">{HERO.title}</h1>
      </HeroSection>
      <Breadcrumbs trail={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />

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
              This privacy notice discloses the privacy practices for{' '}
              <span className="font-semibold text-accent">hollingsheadharbor.com</span>. It applies
              solely to information collected by this website and notifies you of the following:
            </p>
            <ul className="mt-6 space-y-3">
              {OVERVIEW_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink-body">
                  <span aria-hidden="true" className="mt-3 h-px w-4 flex-shrink-0 bg-red-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {POLICY_SECTIONS.map((section) => (
            <PolicySection key={section.title} section={section} />
          ))}

          <div className="scroll-animate rounded-lg border-2 border-danger/40 bg-danger-surface p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Questions or concerns?
            </h2>
            <p className="mt-3 text-ink-body">
              If you feel that we are not abiding by this privacy policy, please contact us
              directly:
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
                <Icon name="phone" className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="pressable inline-flex min-h-control items-center justify-center gap-2 rounded-md bg-navy-800 px-6 py-3 font-semibold text-white hover:bg-navy-900"
              >
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

export default PrivacyPolicy;
