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
    <div className="relative overflow-hidden rounded-lg bg-navy-900 p-8 text-white shadow-card-hover md:p-10">
      <div
        className="pattern-grid-dark pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <div className="relative">
        <span className="eyebrow eyebrow-on-dark">Call us</span>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="pressable group mt-6 inline-flex items-center gap-4 hover:text-red-400"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-red-600">
            <Icon name="phone" className="h-6 w-6" />
          </span>
          <span className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {PHONE_DISPLAY}
          </span>
        </a>
      </div>
    </div>
  );
}

function OfficeCard({ office }) {
  return (
    <div className="rounded-lg border border-line bg-surface-raised p-8 shadow-card transition-[transform,box-shadow] duration-300 ease-out-quint hover:-translate-y-0.5 hover:shadow-card-hover">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-accent text-accent">
        <Icon name="pin" className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">{office.name}</h3>
      <address className="mt-3 text-prose not-italic leading-relaxed text-ink-muted">
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
      className="scroll-mt-[var(--header-offset-wide)] bg-surface py-20 md:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Get in touch</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            How to reach us
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Call {PHONE_DISPLAY} or email {CONTACT_EMAIL}. One number reaches both the Murfreesboro
            main office and the San Leon office.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-prose leading-relaxed text-ink-muted">
            For a quote, have the load point, the discharge point, the commodity, and the tonnage
            ready. Those four decide the routing and the equipment.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-prose leading-relaxed text-ink-muted">
            For a move already under way, the boat or barge name reaches the people running it.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl space-y-6">
          <div className="scroll-animate">
            <PhoneCard />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {OFFICES.map((office, index) => (
              <div key={office.id} className={`scroll-animate stagger-${index + 1}`}>
                <OfficeCard office={office} />
              </div>
            ))}
          </div>

          <div className="scroll-animate rounded-lg border border-line bg-surface-cool p-8 text-center md:p-10">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-surface-accent text-accent">
              <Icon name="mail" className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">Email</h3>
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
  return (
    <section
      id="where-we-work"
      className="scroll-mt-[var(--header-offset-wide)] bg-surface py-20 md:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-measure scroll-animate">
          <SectionBadge color="red">Where we work</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            The states the harbor network reaches
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            The harbor network reaches {SERVICE_AREAS.length} states, on the inland river system and
            the Gulf Intracoastal Waterway.
          </p>
          <p className="mt-5 text-prose leading-relaxed text-ink-muted">
            A move anywhere in it starts on the same number, and dispatch takes it from there.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area.code}
                className="flex items-center gap-3 rounded-md border border-line bg-surface-raised px-4 py-3"
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
      className="scroll-mt-[var(--header-offset-wide)] bg-surface-cool py-20 md:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center scroll-animate">
          <SectionBadge color="red">Looking for work</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            We're hiring
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Wheelman and deckhand applications are handled on the careers page.
          </p>
          <Link to="/careers" className="btn btn-primary group mt-9">
            Apply for a Job
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
