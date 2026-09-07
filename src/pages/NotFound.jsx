import { Link } from 'react-router-dom';
import SectionBadge from '../components/ui/SectionBadge';
import Icon from '../components/ui/Icon';
import Seo from '../components/ui/Seo';
import { SHARE_IMAGE } from '../constants/seo';
import { SITE_ORIGIN } from '../constants/urls';

function NotFound() {
  return (
    <section className="page-enter relative flex min-h-dvh items-center overflow-hidden bg-hull-deep pt-[var(--header-offset-wide)]">
      <Seo
        meta={{
          title: 'Page Not Found | Hollingshead Harbor',
          description:
            'That page is not on this site. Head back to the home page for marine transportation and harbor services, or call the office and we will point the way.',
          canonical: `${SITE_ORIGIN}/`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
          noindex: true,
        }}
      />
      <div
        className="pattern-grid-dark pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="container-page relative text-center text-white">
        <SectionBadge color="light">Off course</SectionBadge>
        <h1 className="mt-6 font-display text-6xl font-bold tracking-tight text-white md:text-7xl">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
          That page does not exist. Head back to the home page, or call us and we will point you the
          right way.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="pressable group inline-flex min-h-control items-center gap-2 rounded-md bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700"
          >
            Back to Home
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <Link
            to="/contact"
            className="pressable inline-flex min-h-control items-center gap-2 rounded-md border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm hover:bg-white/15"
          >
            <Icon name="phone" className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
