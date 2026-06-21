import { Link } from 'react-router-dom';
import Icon from './Icon';
import ArrowIcon from './ArrowIcon';
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

const SOCIAL_ICON_CLASSES =
  'w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center hover:bg-blue-800 hover:text-white text-blue-800 transition-all duration-300';

const CONTACT_ICON_CLASSES =
  'w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 transition-colors';

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={SOCIAL_ICON_CLASSES}
    >
      <Icon name={icon} className="w-5 h-5" />
    </a>
  );
}

function FooterNavLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group"
      >
        <Icon
          name="chevron-right"
          className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
        />
        {label}
      </Link>
    </li>
  );
}

function ServiceListItem({ name }) {
  return (
    <li className="flex items-center">
      <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3" />
      {name}
    </li>
  );
}

function CallToActionBanner() {
  return (
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
            href={SALES_REP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-800 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Find a Sales Rep
            <ArrowIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ href, icon, children, multiline }) {
  return (
    <li>
      <a
        href={href}
        className={`flex ${multiline ? 'items-start' : 'items-center'} space-x-3 group`}
      >
        <div className={`${CONTACT_ICON_CLASSES} ${multiline ? 'mt-0.5' : ''}`}>
          <Icon
            name={icon}
            className="w-5 h-5 text-blue-800 group-hover:text-white transition-colors"
          />
        </div>
        <span className="group-hover:text-blue-800 transition-colors">{children}</span>
      </a>
    </li>
  );
}

function ContactSection() {
  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h3>
      <ul className="space-y-4 text-gray-600 text-sm">
        <ContactRow href={`tel:${PHONE_NUMBER}`} icon="phone">
          <span className="font-medium text-gray-900 group-hover:text-blue-800 transition-colors">
            {PHONE_DISPLAY}
          </span>
        </ContactRow>
        <ContactRow href={`mailto:${CONTACT_EMAIL}`} icon="mail">
          {CONTACT_EMAIL}
        </ContactRow>
        <li className="flex items-start space-x-3">
          <div className={`${CONTACT_ICON_CLASSES} mt-0.5`}>
            <Icon name="pin" className="w-5 h-5 text-blue-800" />
          </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <img src="/logo.jpg" alt="Hollingshead Harbor" className="h-16 w-auto mb-6" />
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {SITE_NAV.map((link) => (
                  <FooterNavLink key={link.to} {...link} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {SERVICE_NAMES.map((name) => (
                  <ServiceListItem key={name} name={name} />
                ))}
              </ul>
            </div>

            <ContactSection />
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
          <p className="text-gray-400 text-xs text-center mt-4">
            Site made by{' '}
            <a
              href="https://taylorurl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-800 transition-colors"
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
