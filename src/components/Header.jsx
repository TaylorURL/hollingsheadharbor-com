import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';
import { SITE_NAV } from '../constants/navigation';
import {
  HQ_CITY,
  MAIN_WEBSITE_URL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  SALES_REP_URL,
  SOCIAL_LINKS,
} from '../constants/urls';

const SCROLL_THRESHOLD_PX = 20;

function desktopNavLinkClasses({ isActive }) {
  const base =
    'relative px-4 py-2 text-[13px] font-semibold uppercase tracking-eyebrow transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-red-600 after:transition-[width] after:duration-300 after:ease-out-quint hover:after:w-2/3';
  const state = isActive
    ? 'text-red-600 after:w-2/3'
    : 'text-navy-800/85 hover:text-navy-900';
  return `${base} ${state}`;
}

function mobileNavLinkClasses({ isActive }) {
  const state = isActive
    ? 'bg-red-50 text-red-600'
    : 'text-gray-700 hover:bg-navy-50 hover:text-navy-900';
  return `mb-1 block rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 ${state}`;
}

function TopBar({ isScrolled }) {
  return (
    <div
      className={`hidden bg-navy-900 text-[12px] text-white/85 md:block transition-[padding] duration-300 ${
        isScrolled ? 'py-1.5' : 'py-2'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Icon name="phone" className="h-4 w-4" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <span className="flex items-center gap-2 text-white/65">
            <Icon name="pin" className="h-4 w-4" />
            <span>{HQ_CITY}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/70">
            SRM Marine Transportation
          </span>
          <span className="h-4 w-px bg-white/15" />
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-white hover:text-navy-900"
              >
                <Icon name={link.icon} className="h-3 w-3" />
              </a>
            ))}
            <span className="ml-1 h-4 w-px bg-white/15" />
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold uppercase tracking-eyebrow transition-colors hover:text-white"
            >
              Main Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`overflow-hidden transition-[max-height] duration-500 ease-out-quint lg:hidden ${
        isOpen ? 'max-h-[640px]' : 'max-h-0'
      }`}
    >
      <nav className="border-t border-gray-100 bg-white px-4 py-6 shadow-inner">
        {SITE_NAV.map((link) => (
          <NavLink key={link.to} to={link.to} className={mobileNavLinkClasses} onClick={onClose}>
            {link.label}
          </NavLink>
        ))}

        <div className="mt-6 border-t border-gray-100 pt-6">
          <div className="mb-4 flex items-center justify-between px-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-red-600"
            >
              <Icon name="phone" className="h-4 w-4 text-red-600" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.slice(0, 2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-50 text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
                >
                  <Icon name={link.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <a
            href={MAIN_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mb-3 block rounded-xl bg-navy-800 px-4 py-4 text-center font-semibold text-white shadow-card transition-colors hover:bg-navy-900"
          >
            Main Website
          </a>
          <a
            href={SALES_REP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block rounded-xl bg-red-600 px-4 py-4 text-center font-semibold text-white shadow-card transition-colors hover:bg-red-700"
          >
            Find a Sales Rep
          </a>
        </div>
      </nav>
    </div>
  );
}

function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors duration-200 hover:bg-navy-50 lg:hidden"
    >
      <div className="relative flex h-5 w-6 flex-col justify-between">
        <span
          className={`block h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300 ease-out-quint ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300 ease-out-quint ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </div>
    </button>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <TopBar isScrolled={isScrolled} />

      <div className="border-b border-navy-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container-page">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ${
              isScrolled ? 'h-16' : 'h-20'
            }`}
          >
            <Link to="/" className="group flex items-center" aria-label="Hollingshead Harbor home">
              <img
                src="/logo.jpg"
                alt="Hollingshead Harbor"
                className={`w-auto rounded-md transition-[height] duration-300 group-hover:opacity-90 ${
                  isScrolled ? 'h-10' : 'h-14'
                }`}
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {SITE_NAV.map((link) => (
                <NavLink key={link.to} to={link.to} className={desktopNavLinkClasses}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={SALES_REP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-card-hover"
              >
                Find a Sales Rep
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

            <HamburgerButton
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
