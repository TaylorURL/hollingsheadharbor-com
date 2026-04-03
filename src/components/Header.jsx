import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';
import {
  SALES_REP_URL,
  MAIN_WEBSITE_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  SOCIAL_LINKS,
} from '../constants/urls';

const SCROLL_THRESHOLD = 20;

const PHONE_ICON_PATH =
  'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z';

const LOCATION_ICON_PATHS = [
  'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
  'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
];

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/story', label: 'Our Story' },
  { to: '/team', label: 'Our Team' },
  { to: '/services', label: 'Services' },
  { to: '/locations', label: 'Locations' },
];

function SocialIcon({ path, className = 'w-3 h-3' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}

function StrokeIcon({ paths, className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {(Array.isArray(paths) ? paths : [paths]).map((d) => (
        <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
      ))}
    </svg>
  );
}

function desktopNavLinkClasses({ isActive }) {
  const base =
    'relative py-2 px-4 font-medium text-sm uppercase tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full';
  const activeStyles = isActive ? 'text-red-600 after:w-full' : 'text-gray-700 hover:text-blue-800';
  return `${base} ${activeStyles}`;
}

function mobileNavLinkClasses({ isActive }) {
  return `block py-3 px-4 font-medium rounded-xl transition-all duration-200 mb-1 ${
    isActive ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:bg-blue-800/10 hover:text-blue-800'
  }`;
}

/* Desktop top bar with contact info and social links */
function TopBar({ isScrolled }) {
  return (
    <div
      className={`bg-blue-800 text-white text-xs transition-all duration-300 hidden md:block ${isScrolled ? 'py-1.5' : 'py-2'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
          >
            <StrokeIcon paths={PHONE_ICON_PATH} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <span className="flex items-center space-x-2">
            <StrokeIcon paths={LOCATION_ICON_PATHS} />
            <span>Murfreesboro, TN</span>
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
                <SocialIcon path={link.iconPath} />
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

/* Collapsible mobile navigation menu */
function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}
    >
      <nav className="bg-white border-t border-gray-100 px-4 py-6 shadow-inner">
        {NAV_LINKS.map((link) => (
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
              <StrokeIcon paths={PHONE_ICON_PATH} className="w-4 h-4 text-red-600" />
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
                  <SocialIcon path={link.iconPath} className="w-4 h-4" />
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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-xl' : 'shadow-md'}`}
    >
      <TopBar isScrolled={isScrolled} />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}
          >
            <Link to="/" className="flex items-center group">
              <div className="bg-white p-1 rounded">
                <img
                  src="/logo.jpg"
                  alt="Hollingshead Harbor"
                  className={`w-auto transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-10' : 'h-14'}`}
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
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

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-800/10 transition-colors"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}

export default Header;
