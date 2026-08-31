import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import ArtPlate from './ArtPlate';
import useScrolledPast from '../hooks/useScrolledPast';
import { SITE_NAV } from '../constants/navigation';
import {
  HQ_CITY,
  MAIN_WEBSITE_URL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  SOCIAL_LINKS,
} from '../constants/urls';

const SCROLL_THRESHOLD_PX = 20;

function desktopNavLinkClasses({ isActive }) {
  const base =
    'pressable relative inline-flex items-center px-4 py-2 text-label font-semibold uppercase tracking-eyebrow after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-red-600 after:transition-[width] after:duration-300 after:ease-out-quint hover:after:w-2/3';
  const state = isActive
    ? 'text-accent-contrast hover:text-danger-ink after:w-2/3'
    : 'text-accent/85 hover:text-accent-strong';
  return `${base} ${state}`;
}

function desktopNavTriggerClasses(isOpen) {
  const base =
    'pressable relative flex items-center gap-1.5 px-4 py-2 text-label font-semibold uppercase tracking-eyebrow after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-red-600 after:transition-[width] after:duration-300 after:ease-out-quint hover:after:w-2/3';
  const state = isOpen
    ? 'text-accent-contrast hover:text-danger-ink after:w-2/3'
    : 'text-accent/85 hover:text-accent-strong';
  return `${base} ${state}`;
}

function mobileNavLinkClasses({ isActive }) {
  const state = isActive
    ? 'bg-danger-surface text-accent-contrast hover:bg-danger-surface/70'
    : 'text-ink-body hover:bg-surface-accent hover:text-accent-strong';
  return `pressable flex min-h-control items-center rounded-xl px-4 py-3 text-base font-semibold ${state}`;
}

/**
 * The strip above the bar. It carries the number, the city, and the parent
 * brand — the things a visitor looks for before they look for a page. It is
 * shown from the medium breakpoint up; below it the same number is one tap away
 * on the bottom rail, where a thumb already is.
 */
function TopBar({ isScrolled }) {
  return (
    <div
      className={`hidden bg-navy-900 text-caption text-white/85 transition-[padding] duration-300 md:block ${
        isScrolled ? 'py-1' : 'py-2'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="pressable flex items-center gap-2 hover:text-white"
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
          <span className="text-micro font-semibold uppercase tracking-eyebrow text-white/70">
            SRM Marine Transportation
          </span>
          <span className="h-4 w-px bg-white/15" aria-hidden="true" />
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="pressable flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-surface-raised hover:text-accent-strong"
              >
                <Icon name={link.icon} className="h-3 w-3" />
              </a>
            ))}
            <span className="ml-1 h-4 w-px bg-white/15" aria-hidden="true" />
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pressable text-caption font-semibold uppercase tracking-eyebrow hover:text-white"
            >
              Main Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * The menu on a phone. It hangs off the fixed bar, so it opens wherever the
 * page happens to be, and it scrolls inside its own box against the visible
 * viewport — a menu measured against the layout viewport puts its last rows
 * behind the browser's toolbar, which is where they stay.
 */
function MobileMenu({ id, isOpen, onClose }) {
  return (
    <div
      id={id}
      aria-hidden={!isOpen}
      className={`overflow-hidden transition-[max-height,visibility] duration-slow ease-out-quint lg:hidden ${
        isOpen ? 'visible max-h-[var(--mobile-menu-max-height)]' : 'invisible max-h-0'
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-h-[var(--mobile-menu-max-height)] overflow-y-auto overscroll-contain border-t border-line bg-surface px-4 pb-[calc(var(--rail-offset)+1.5rem)] pt-5 shadow-card"
      >
        {SITE_NAV.map((link) => (
          <div key={link.to} className="mb-1">
            <NavLink to={link.to} className={mobileNavLinkClasses} onClick={onClose}>
              {link.label}
            </NavLink>
            {link.sections && (
              <div className="ml-4 mt-1 border-l border-line pl-3">
                {link.sections.map((section) => (
                  <Link
                    key={section.id}
                    to={`${link.to}#${section.id}`}
                    onClick={onClose}
                    className="pressable flex min-h-control items-center rounded-lg px-3 text-sm font-semibold text-ink-muted hover:bg-surface-accent hover:text-accent-strong"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="mt-6 border-t border-line pt-6">
          <div className="mb-4 flex items-center justify-between px-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="pressable flex min-h-control items-center gap-2 text-sm font-semibold text-accent hover:text-accent-contrast"
            >
              <Icon name="phone" className="h-4 w-4 text-accent-contrast" />
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
                  className="pressable flex h-11 w-11 items-center justify-center rounded-full bg-surface-accent text-accent hover:bg-accent hover:text-ink-on-accent"
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
            className="pressable block rounded-xl bg-navy-800 px-4 py-4 text-center font-semibold text-white hover:bg-navy-900"
          >
            Main Website
          </a>
        </div>
      </nav>
    </div>
  );
}

function HamburgerButton({ controls, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      aria-controls={controls}
      className="pressable relative flex h-11 w-11 items-center justify-center rounded-lg text-accent hover:bg-surface-accent lg:hidden"
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

/**
 * The promoted half of a panel: the one thing the page is for, drawn rather
 * than listed. The plate is imagery for the whole panel, not a mark standing in
 * for any single row, so it carries no label and the rows beside it carry none
 * either.
 */
function PanelFeature({ feature, onNavigate }) {
  return (
    <div className="flex gap-5 rounded-lg border border-line bg-surface-cool p-5">
      <ArtPlate name={feature.art} className="h-[112px] w-[180px] shrink-0 text-accent" />
      <div>
        <span className="block font-display text-lg font-bold leading-snug tracking-tight text-ink">
          {feature.title}
        </span>
        <span className="mt-2 block text-prose leading-relaxed text-ink-muted">{feature.body}</span>
        <Link
          to={feature.to}
          onClick={onNavigate}
          className="pressable group mt-4 inline-flex min-h-control items-center gap-2 text-sm font-semibold text-accent-contrast hover:text-danger-ink"
        >
          {feature.action}
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform duration-base group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

/** The panel a top-level nav word opens under the bar. */
function NavPanel({ id, item, isOpen, onNavigate }) {
  return (
    <div
      id={id}
      className={`nav-panel absolute inset-x-0 top-full border-b border-line bg-surface shadow-card-hover transition-[opacity,transform] duration-base ease-out-quint ${
        isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
      }`}
    >
      <div className="container-page grid gap-10 py-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">{item.label}</span>
          <div className="mt-4 grid gap-1 sm:grid-cols-2">
            {item.sections.map((section) => (
              <Link
                key={section.id}
                to={`${item.to}#${section.id}`}
                onClick={onNavigate}
                className="pressable group rounded-lg p-4 hover:bg-surface-accent"
              >
                <span className="flex items-center gap-2 font-display text-base font-bold tracking-tight text-ink">
                  {section.label}
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 text-accent-contrast transition-transform duration-base group-hover:translate-x-1"
                  />
                </span>
                <span className="mt-1 block text-prose text-ink-muted">{section.blurb}</span>
              </Link>
            ))}
          </div>
        </div>
        <PanelFeature feature={item.feature} onNavigate={onNavigate} />
      </div>
    </div>
  );
}

const MOBILE_MENU_ID = 'mobile-menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);
  const isScrolled = useScrolledPast(SCROLL_THRESHOLD_PX);
  const barRef = useRef(null);
  const { pathname } = useLocation();

  // A panel that survived the navigation it started would hang over the page
  // the visitor just asked for. Adjusted during the render that follows the
  // route change rather than in an effect, so it never paints open on the new
  // page and then closes.
  const [panelPath, setPanelPath] = useState(pathname);
  if (panelPath !== pathname) {
    setPanelPath(pathname);
    setOpenPanel(null);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!openPanel) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpenPanel(null);
    };
    const onPointer = (event) => {
      if (!barRef.current?.contains(event.target)) setOpenPanel(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [openPanel]);

  return (
    <header
      className={`site-header transition-shadow duration-300 ${
        isScrolled ? 'shadow-card-hover' : 'shadow-card'
      }`}
    >
      <TopBar isScrolled={isScrolled} />

      <div
        ref={barRef}
        data-scrolled={isScrolled}
        className="site-header-surface relative border-b border-line"
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ${
              isScrolled ? 'h-[var(--header-height-scrolled)]' : 'h-[var(--header-height)]'
            }`}
          >
            <Link
              to="/"
              className="pressable group flex items-center rounded-md hover:bg-surface-accent"
              aria-label="Hollingshead Harbor Home"
            >
              <img
                src="/logo.png"
                srcSet="/logo-380.png 380w, /logo.png 760w"
                sizes="(min-width: 1024px) 240px, 200px"
                alt="Hollingshead Harbor"
                width="760"
                height="200"
                fetchPriority="high"
                className={`w-auto transition-[height] duration-300 ${
                  isScrolled ? 'h-10' : 'h-14'
                }`}
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {SITE_NAV.map((link) =>
                link.sections ? (
                  <button
                    key={link.to}
                    type="button"
                    aria-expanded={openPanel === link.to}
                    aria-haspopup="true"
                    aria-controls={`nav-panel-${link.to.slice(1)}`}
                    onClick={() => setOpenPanel((open) => (open === link.to ? null : link.to))}
                    className={desktopNavTriggerClasses(openPanel === link.to)}
                  >
                    {link.label}
                    <Icon
                      name="chevron-down"
                      className={`h-3.5 w-3.5 transition-transform duration-base ease-out-quint ${
                        openPanel === link.to ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <NavLink key={link.to} to={link.to} className={desktopNavLinkClasses}>
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                to="/careers"
                className="pressable group inline-flex min-h-control items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                Apply for a Job
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <HamburgerButton
              controls={MOBILE_MENU_ID}
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>

        {SITE_NAV.filter((link) => link.sections).map((link) => (
          <NavPanel
            key={link.to}
            id={`nav-panel-${link.to.slice(1)}`}
            item={link}
            isOpen={openPanel === link.to}
            onNavigate={() => setOpenPanel(null)}
          />
        ))}
      </div>

      <MobileMenu id={MOBILE_MENU_ID} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
