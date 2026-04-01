import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants/socialLinks';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/story', label: 'Our Story' },
  { to: '/team', label: 'Our Team' },
  { to: '/services', label: 'Services' },
  { to: '/locations', label: 'Locations' },
];

const SERVICE_NAMES = [
  'Marine Transportation',
  'Bulk Dry Cargo',
  'Vessel Charter',
  'Barge Charter',
  'Maritime Logistics',
];

const CONTACT_ITEMS = [
  {
    href: 'tel:6153551028',
    isLink: true,
    iconPath:
      'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    label: '(615) 355-1028',
    labelClassName: 'font-medium text-gray-900 group-hover:text-blue-800 transition-colors',
  },
  {
    href: 'mailto:info@smyrnareadymix.com',
    isLink: true,
    iconPath:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'info@smyrnareadymix.com',
    labelClassName: 'group-hover:text-blue-800 transition-colors',
  },
];

const CHEVRON_PATH = 'M9 5l7 7-7 7';

function FooterNavLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group"
      >
        <svg
          className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={CHEVRON_PATH} />
        </svg>
        {label}
      </Link>
    </li>
  );
}

function ContactItem({ href, isLink, iconPath, label, labelClassName }) {
  const iconWrapper = (
    <div className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 transition-colors">
      <svg
        className="w-5 h-5 text-blue-800 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
      </svg>
    </div>
  );

  if (!isLink) return null;

  return (
    <li>
      <a href={href} className="flex items-center space-x-3 group">
        {iconWrapper}
        <span className={labelClassName}>{label}</span>
      </a>
    </li>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Ship?</h3>
              <p className="text-blue-200">
                Contact us to discuss your bulk cargo transportation needs.
              </p>
            </div>
            <a
              href="https://www.smyrnareadymix.com/customers/sales-rep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-800 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Find a Sales Rep
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <img src="/logo.jpg" alt="Hollingshead Harbor" className="h-16 w-auto mb-6" />
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map(({ href, label, svgPath }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center hover:bg-blue-800 hover:text-white text-blue-800 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map(({ to, label }) => (
                  <FooterNavLink key={to} to={to} label={label} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {SERVICE_NAMES.map((serviceName) => (
                  <li key={serviceName} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3"></span>
                    {serviceName}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h3>
              <ul className="space-y-4 text-gray-600 text-sm">
                {CONTACT_ITEMS.map(({ href, isLink, iconPath, label, labelClassName }) => (
                  <ContactItem
                    key={href}
                    href={href}
                    isLink={isLink}
                    iconPath={iconPath}
                    label={label}
                    labelClassName={labelClassName}
                  />
                ))}
                <li className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-blue-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                  </div>
                  <span>
                    1000 Hollingshead Circle
                    <br />
                    Murfreesboro, TN 37129
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Hollingshead Harbor. All rights reserved.
              </p>
              <span className="text-gray-300">|</span>
              <Link
                to="/privacy-policy"
                className="text-gray-500 text-sm hover:text-blue-800 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span>
                The marine transportation arm of{' '}
                <span className="font-semibold text-blue-800">SRM</span>
              </span>
              <span className="text-red-600 mx-2">|</span>
              <span className="font-semibold text-gray-700">Smyrna Ready Mix</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
