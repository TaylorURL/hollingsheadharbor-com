import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';
import ArrowIcon from './ArrowIcon';
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
    'relative py-2 px-4 font-medium text-sm uppercase tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full';
  const state = isActive ? 'text-red-600 after:w-full' : 'text-gray-700 hover:text-blue-800';
  return `${base} ${state}`;
}

function mobileNavLinkClasses({ isActive }) {
  const state = isActive
    ? 'text-red-600 bg-red-50'
    : 'text-gray-700 hover:bg-blue-800/10 hover:text-blue-800';
  return `block py-3 px-4 font-medium rounded-xl transition-all duration-200 mb-1 ${state}`;
}

function TopBar({ isScrolled }) {
  return (
    <div
      className={`hidden md:block bg-blue-800 text-white text-xs transition-all duration-300 ${
        isScrolled ? 'py-1.5' : 'py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
          >
            <Icon name="phone" className="w-4 h-4" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <span className="flex items-center space-x-2">
            <Icon name="pin" className="w-4 h-4" />
            <span>{HQ_CITY}</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold tracking-wide">SRM Marine Transportation</span>
          <div className="w-px h-4 bg-blue-500" />
          <div className="flex items-center space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-700/50 hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                <Icon name={link.icon} className="w-3 h-3" />
              </a>
            ))}
            <div className="w-px h-4 bg-blue-500 ml-1" />
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold hover:text-blue-200 transition-colors"
            >
              Main Website
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
      className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[600px]' : 'max-h-0'
      }`}
    >
      <nav className="bg-white border-t border-gray-100 px-4 py-6 shadow-inner">
        {SITE_NAV.map((link) => (
          <NavLink key={link.to} to={link.to} className={mobileNavLinkClasses} onClick={onClose}>
            {link.label}
          </NavLink>
        ))}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between px-4 mb-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-800 transition-colors"
            >
              <Icon name="phone" className="w-4 h-4 text-red-600" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <div className="flex items-center space-x-2">
              {SOCIAL_LINKS.slice(0, 2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800/10 text-blue-800 hover:bg-blue-800 hover:text-white transition-all"
                >
                  <Icon name={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <a
            href={MAIN_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-800 hover:bg-blue-900 text-white text-center font-semibold py-4 px-4 rounded-xl transition-all shadow-md mb-3"
            onClick={onClose}
          >
            Main Website
          </a>
          <a
            href={SALES_REP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-center font-semibold py-4 px-4 rounded-xl transition-all shadow-md"
            onClick={onClose}
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
      className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-800/10 transition-colors"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span
          className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-0' : ''
          }`}
        />
        <span
          className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      <TopBar isScrolled={isScrolled} />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-20'
            }`}
          >
            <Link to="/" className="flex items-center group">
              <div className="bg-white p-1 rounded">
                <img
                  src="/logo.jpg"
                  alt="Hollingshead Harbor"
                  className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                    isScrolled ? 'h-10' : 'h-14'
                  }`}
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {SITE_NAV.map((link) => (
                <NavLink key={link.to} to={link.to} className={desktopNavLinkClasses}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={SALES_REP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Find a Sales Rep
                  <ArrowIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
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
