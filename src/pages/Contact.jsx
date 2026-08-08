import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import { CONTACT_EMAIL, OFFICES, PHONE_DISPLAY, PHONE_NUMBER } from '../constants/urls';
import useScrollAnimation from '../hooks/useScrollAnimation';

function PhoneCard() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-navy-900 p-8 text-white shadow-card-hover md:p-10">
      <div className="pattern-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative">
        <span className="eyebrow eyebrow-on-dark">Call us</span>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="group mt-6 inline-flex items-center gap-4 transition-colors hover:text-red-400"
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
    <div className="rounded-lg border border-navy-100 bg-white p-8 shadow-card transition-all duration-300 ease-out-quint hover:-translate-y-0.5 hover:shadow-card-hover">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
        <Icon name="pin" className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">{office.name}</h3>
      <address className="mt-3 text-[15px] not-italic leading-relaxed text-gray-600">
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
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Get in touch</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            How to reach us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Call or email, and we will get you to the right person.
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

          <div className="scroll-animate rounded-lg border border-navy-100 bg-mist-50/60 p-8 text-center md:p-10">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
              <Icon name="mail" className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">Email</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block text-[15px] font-semibold text-navy-800 transition-colors hover:text-red-600"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HiringSection() {
  return (
    <section className="bg-mist-50/60 py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center scroll-animate">
          <SectionBadge color="red">Looking for work</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            We're hiring
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Wheelman and deckhand applications are handled on the careers page.
          </p>
          <Link to="/careers" className="btn btn-primary group mt-9">
            Apply for a job
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
    <div>
      <HeroSection title="Contact us" subtitle="One number reaches both offices." />
      <ReachUsSection />
      <HiringSection />
    </div>
  );
}

export default Contact;
