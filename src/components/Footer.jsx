import { Link } from 'react-router-dom';
import Icon from './Icon';
import { SITE_NAV } from '../constants/navigation';
import {
  CONTACT_EMAIL,
  HQ_ADDRESS_LINES,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  SALES_REP_URL,
  SOCIAL_LINKS,
} from '../constants/urls';

const SERVICE_NAMES = [
  'Marine Transportation',
  'Bulk Dry Cargo',
  'Vessel Charter',
  'Barge Charter',
  'Maritime Logistics',
];

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors duration-200 hover:bg-navy-800 hover:text-white"
    >
      <Icon name={icon} className="h-5 w-5" />
    </a>
  );
}

function FooterNavLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-2 text-sm text-gray-600 transition-colors duration-200 hover:text-red-600"
      >
        <Icon
          name="chevron-right"
          className="h-3.5 w-3.5 -ml-1 text-red-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:ml-0"
        />
        {label}
      </Link>
    </li>
  );
}

function ServiceListItem({ name }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-600">
      <span className="h-1.5 w-1.5 rounded-full bg-navy-800" />
      {name}
    </li>
  );
}

function CallToActionBanner() {
  return (
    <div className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pattern-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative flex flex-col items-center justify-between gap-6 py-14 md:flex-row">
        <div className="text-center md:text-left">
          <span className="eyebrow eyebrow-on-dark">Ready to ship</span>
          <h3 className="mt-3 font-display text-3xl font-black tracking-tight md:text-4xl">
            Let's move your cargo.
          </h3>
          <p className="mt-2 text-white/70">
            Talk to a regional rep about your bulk freight, charter, or port-side needs.
          </p>
        </div>
        <a
          href={SALES_REP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-4 font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-card-hover"
        >
          Find a Sales Rep
          <Icon
            name="arrow-right"
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div>
      <h4 className="font-display text-lg font-bold text-ink">Get in Touch</h4>
      <ul className="mt-6 space-y-4 text-sm">
        <li>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-navy-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
              <Icon name="phone" className="h-5 w-5" />
            </span>
            <span className="font-semibold">{PHONE_DISPLAY}</span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-navy-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
              <Icon name="mail" className="h-5 w-5" />
            </span>
            <span>{CONTACT_EMAIL}</span>
          </a>
        </li>
        <li className="flex items-start gap-3 text-gray-700">
          <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
            <Icon name="pin" className="h-5 w-5" />
          </span>
          <span>
            {HQ_ADDRESS_LINES.map((line, index) => (
              <span key={line}>
                {line}
                {index < HQ_ADDRESS_LINES.length - 1 && <br />}
              </span>
            ))}
          </span>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <CallToActionBanner />

      <div className="border-t-4 border-red-600">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="/logo.jpg" alt="Hollingshead Harbor" className="h-16 w-auto rounded-md" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-600">
                Moving bulk cargo through 13 harbors across 6 states. The marine arm of SRM —
                family-owned since 1999.
              </p>
              <div className="mt-6 flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold text-ink">Explore</h4>
              <ul className="mt-6 space-y-3">
                {SITE_NAV.map((link) => (
                  <FooterNavLink key={link.to} {...link} />
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold text-ink">Services</h4>
              <ul className="mt-6 space-y-3">
                {SERVICE_NAMES.map((name) => (
                  <ServiceListItem key={name} name={name} />
                ))}
              </ul>
            </div>

            <ContactSection />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-mist-50">
        <div className="container-page py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>&copy; {new Date().getFullYear()} Hollingshead Harbor. All rights reserved.</span>
              <span className="hidden text-gray-300 md:inline">|</span>
              <Link
                to="/privacy-policy"
                className="font-medium transition-colors hover:text-navy-900"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              The marine arm of{' '}
              <span className="font-semibold text-navy-800">SRM</span>
              <span className="mx-2 text-red-600">·</span>
              <span className="font-semibold text-gray-700">Smyrna Ready Mix</span>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Site by{' '}
            <a
              href="https://taylorurl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-navy-800"
            >
              TaylorURL.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
