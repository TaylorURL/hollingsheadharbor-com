import { Link } from 'react-router-dom';
import Icon from './Icon';

function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden pt-28 lg:min-h-[760px] md:pt-32">
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover animate-slow-pan"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-hull/90 via-hull/60 to-hull/10" />
      <div className="absolute inset-0 pattern-grid-dark opacity-50" />

      <div className="container-page relative w-full py-20">
        <div className="max-w-2xl">
          <span className="eyebrow eyebrow-on-dark mb-6">
            <span className="relative ml-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            SRM Marine Transportation
          </span>

          <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {ctaText && ctaLink && (
              <Link to={ctaLink} className="btn btn-primary group">
                {ctaText}
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            )}
            <Link to="/locations" className="btn btn-ghost-dark">
              <Icon name="pin" className="h-4 w-4" />
              Find a Harbor
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 text-white"
        aria-hidden="true"
      >
        <svg className="block h-20 w-full md:h-28" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,55 C320,100 760,10 1100,40 C1280,55 1380,40 1440,30 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
