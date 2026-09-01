import { Link } from 'react-router-dom';
import Icon from './Icon';
import { SITE_NAV } from '../constants/navigation';
import {
  BUSINESS_LEGAL_NAME,
  BUSINESS_NAME,
  CONTACT_EMAIL,
  OFFICES,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  SOCIAL_LINKS,
} from '../constants/urls';
import { currentYear } from '../lib/localTime';

const LEGAL_LINKS = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Use' },
];

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="pressable flex h-10 w-10 items-center justify-center rounded-xl bg-surface-accent text-accent hover:bg-accent hover:text-ink-on-accent"
    >
      <Icon name={icon} className="h-5 w-5" />
    </a>
  );
}

function CallToActionBanner() {
  return (
    <div className="relative overflow-hidden bg-navy-900 text-white">
      <div
        className="pattern-grid-dark pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div className="container-page relative flex flex-col items-center justify-between gap-6 py-14 md:flex-row">
        <div className="text-center md:text-left">
          <span className="eyebrow eyebrow-on-dark">Now hiring</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Wheelmen and deckhands
          </h2>
          <p className="mt-2 text-white/70">Apply online in about fifteen minutes.</p>
        </div>
        <Link
          to="/careers"
          className="pressable group inline-flex min-h-control items-center gap-2 rounded-md bg-red-600 px-7 py-4 font-semibold text-white hover:bg-red-700"
        >
          Apply for a Job
          <Icon
            name="arrow-right"
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

/**
 * The name, address, and phone printed below are the ones the LocalBusiness
 * markup publishes, character for character. Local search matches citations on
 * exact strings, so a second spelling of either splits one business into two.
 *
 * Children close the band from inside the footer element, so a rail that names
 * no colour of its own inherits this ground rather than the page body's.
 */
function Footer({ children }) {
  return (
    <footer className="bg-surface">
      <CallToActionBanner />

      <div className="border-t-4 border-red-600">
        <div className="container-page py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <img
                src="/logo.png"
                srcSet="/logo-380.png 380w, /logo.png 760w"
                sizes="200px"
                alt={BUSINESS_NAME}
                width="760"
                height="200"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Moving bulk cargo through 13 harbors across 6 states. The marine arm of SRM,
                family-owned since 1999.
              </p>
              <div className="mt-6 flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-ink-body lg:justify-end"
            >
              {SITE_NAV.map((link) => (
                <Link key={link.to} to={link.to} className="pressable hover:text-accent-contrast">
                  {link.label}
                </Link>
              ))}
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="pressable font-medium text-ink-muted hover:text-accent-contrast"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <p className="text-sm font-semibold text-ink">{BUSINESS_LEGAL_NAME}</p>
            <div className="mt-4 flex flex-col gap-x-8 gap-y-3 text-sm text-ink-muted sm:flex-row sm:flex-wrap">
              {OFFICES.map((office) => (
                <address key={office.id} className="not-italic">
                  <span className="font-semibold text-ink-body">{office.name}: </span>
                  {office.addressLines.join(', ')}
                </address>
              ))}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="pressable font-semibold text-accent hover:text-accent-contrast"
              >
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="pressable hover:text-accent-contrast">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-surface-cool">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-sm text-ink-subtle md:flex-row">
          <span>
            &copy; {currentYear()} {BUSINESS_NAME}. All rights reserved.
          </span>
          <span>
            The marine arm of <span className="font-semibold text-ink-body">Smyrna Ready Mix</span>
          </span>
        </div>
      </div>

      {children}
    </footer>
  );
}

export default Footer;
