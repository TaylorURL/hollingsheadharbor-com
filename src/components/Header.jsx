import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants/socialLinks';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/story', label: 'Our Story' },
    { to: '/team', label: 'Our Team' },
    { to: '/services', label: 'Services' },
    { to: '/locations', label: 'Locations' },
  ];

  const linkClasses = ({ isActive }) =>
    `relative py-2 px-4 font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
      isActive ? 'text-red-600' : 'text-gray-700 hover:text-blue-800'
    } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-xl' : 'shadow-md'}`}
    >
      <div
        className={`bg-blue-800 text-white text-xs transition-all duration-300 hidden md:block ${isScrolled ? 'py-1.5' : 'py-2'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="tel:6153551028"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(615) 355-1028</span>
            </a>
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Murfreesboro, TN</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold tracking-wide">SRM Marine Transportation</span>
            <div className="w-px h-4 bg-blue-500"></div>
            <div className="flex items-center space-x-3">
              {SOCIAL_LINKS.map(({ href, label, svgPath }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-700/50 hover:bg-white hover:text-blue-800 transition-all duration-300"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d={svgPath} />
                  </svg>
                </a>
              ))}
              <div className="w-px h-4 bg-blue-500 ml-1"></div>
              <a
                href="https://www.smyrnareadymix.com"
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
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClasses}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://www.smyrnareadymix.com/customers/sales-rep"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Find a Sales Rep
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-800/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-6 shadow-inner">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block py-3 px-4 font-medium rounded-xl transition-all duration-200 mb-1 ${
                  isActive
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:bg-blue-800/10 hover:text-blue-800'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between px-4 mb-4">
              <a
                href="tel:6153551028"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(615) 355-1028</span>
              </a>
              <div className="flex items-center space-x-2">
                {SOCIAL_LINKS.slice(0, 2).map(({ href, label, svgPath }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800/10 text-blue-800 hover:bg-blue-800 hover:text-white transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <a
              href="https://www.smyrnareadymix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-800 hover:bg-blue-900 text-white text-center font-semibold py-4 px-4 rounded-xl transition-all shadow-md mb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Main Website
            </a>
            <a
              href="https://www.smyrnareadymix.com/customers/sales-rep"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-center font-semibold py-4 px-4 rounded-xl transition-all shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Find a Sales Rep
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
