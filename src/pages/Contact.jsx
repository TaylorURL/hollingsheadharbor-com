import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import SectionBadge from '../components/ui/SectionBadge';
import Icon from '../components/ui/Icon';
import {
  CONTACT_EMAIL,
  OFFICES,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  SERVICE_AREAS,
  SITE_ORIGIN,
} from '../constants/urls';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Seo from '../components/ui/Seo';
import { SHARE_IMAGE } from '../constants/seo';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HERO = {
  title: 'Contact us',
  subtitle: 'One number reaches both offices. These are the phone, email, and addresses for each.',
};

function PhoneCard() {
  return (
    <div className="relative overflow-hidden rounded-md bg-navy-900 p-8 text-white md:p-10">
      <div
        className="pattern-deck-dark pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      {/* A column rather than a plain block. The eyebrow and the number are both
          inline-level boxes — the label so it can carry its leader line, the
          number so its hit area stops at the digits — so left in normal flow
          they set on the same line and the label lands beside the number
          instead of over it. */}
      <div className="relative flex flex-col items-start">
        <span className="eyebrow eyebrow-on-dark">Call us</span>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="pressable group mt-5 inline-flex items-center gap-4 hover:text-red-400"
        >
          {/* The tile answers the pointer on its edge and its ink rather than
              by filling with red. A square that swaps its whole ground reads as
              a second control, and this one is a mark beside the number. */}
          <span className="icon-tile-dark transition-colors duration-base ease-out group-hover:border-red-500 group-hover:text-red-400">
            <Icon name="phone" className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="figure-tabular font-display text-3xl font-bold tracking-tight md:text-4xl">
            {PHONE_DISPLAY}
          </span>
        </a>
      </div>
    </div>
  );
}

function OfficeCard({ office }) {
  return (
    <div className="panel p-6">
      <span className="icon-tile">
        <Icon name="pin" className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-ink">{office.name}</h3>
      <address className="mt-3 text-prose not-italic text-ink-muted">
        {office.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    </div>
  );
}

function ReachUsSection() {
  return (
    <section
      id="reach-us"
      className="scroll-mt-[var(--header-offset-wide)] bg-surface py-16 md:py-20"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Get in touch</SectionBadge>
          <h2 className="mt-5 section-title">How to reach us</h2>
          <p className="mt-4 section-lead">
            Call {PHONE_DISPLAY} or email {CONTACT_EMAIL}. One number reaches both the Murfreesboro
            main office and the San Leon office.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-prose text-ink-muted">
            For a quote, have the load point, the discharge point, the commodity, and the tonnage
            ready. Those four decide the routing and the equipment.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-prose text-ink-muted">
            For a move already under way, the boat or barge name reaches the people running it.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-4">
          <div className="scroll-animate">
            <PhoneCard />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {OFFICES.map((office, index) => (
              <div key={office.id} className={`scroll-animate stagger-${index + 1}`}>
                <OfficeCard office={office} />
              </div>
            ))}
          </div>

          <div className="scroll-animate panel-sunken p-8 text-center">
            <span className="icon-tile mx-auto">
              <Icon name="mail" className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink">Email</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="pressable mt-2 inline-block text-prose font-semibold text-accent hover:text-accent-contrast"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereWeWorkSection() {
  /* The rule along the top does the work a change of ground colour does
     elsewhere on the page. This section and the one above it are both cut from
     `bg-surface`, so without a hairline the two run together as one band. */
  return (
    <section
      id="where-we-work"
      className="scroll-mt-[var(--header-offset-wide)] border-t border-line bg-surface py-16 md:py-20"
    >
      <div className="container-page">
        <div className="mx-auto max-w-measure scroll-animate">
          <SectionBadge color="red">Where we work</SectionBadge>
          <h2 className="mt-5 section-title">The states the harbor network reaches</h2>
          <p className="mt-6 section-lead">
            The harbor network reaches {SERVICE_AREAS.length} states, on the inland river system and
            the Gulf Intracoastal Waterway.
          </p>
          <p className="mt-5 text-prose text-ink-muted">
            A move anywhere in it starts on the same number, and dispatch takes it from there.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area.code}
                className="flex items-center gap-3 rounded-sm border border-line bg-surface-raised px-4 py-2.5"
              >
                <span className="font-display text-sm font-bold tracking-tight text-accent-contrast">
                  {area.code}
                </span>
                <span className="text-sm text-ink-muted">{area.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HiringSection() {
  return (
    <section
      id="hiring"
      className="scroll-mt-[var(--header-offset-wide)] bg-surface-cool py-16 md:py-20"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center scroll-animate">
          <SectionBadge color="red">Looking for work</SectionBadge>
          <h2 className="mt-5 section-title">We're hiring</h2>
          <p className="mt-4 section-lead">
            Wheelman and deckhand applications are handled on the careers page.
          </p>
          <Link to="/careers" className="btn-primary group mt-8">
            Apply for a Job
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-base ease-out group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  useScrollAnimation();

  return (
    <div className="page-enter">
      <Seo
        meta={{
          title: 'Contact Hollingshead Harbor | Call or Email Us',
          description:
            'Phone, email, and addresses for the Murfreesboro and San Leon offices. Call with your route and tonnage and we will get you to the right person.',
          canonical: `${SITE_ORIGIN}/contact`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
          breadcrumb: [{ name: 'Contact Us', path: '/contact' }],
        }}
      />
      <HeroSection subtitle={HERO.subtitle}>
        <h1 className="hero-title">{HERO.title}</h1>
      </HeroSection>
      <Breadcrumbs trail={[{ name: 'Contact Us', path: '/contact' }]} />
      <ReachUsSection />
      <WhereWeWorkSection />
      <HiringSection />
    </div>
  );
}

export default Contact;
