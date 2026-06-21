import { Link } from 'react-router-dom';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';

function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hull-deep pt-32">
      <div className="pattern-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-navy-700/30 blur-3xl" />

      <div className="container-page relative text-center text-white">
        <SectionBadge color="light">Off course</SectionBadge>
        <h1 className="mt-6 font-display text-7xl font-black tracking-tight text-white md:text-9xl">404</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
          The page you were looking for has slipped its mooring. Let's get you back to home port.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700"
          >
            Back to home
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <Icon name="pin" className="h-4 w-4" />
            Find a harbor
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
