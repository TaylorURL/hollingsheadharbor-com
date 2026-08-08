import { Link } from 'react-router-dom';
import Icon from './Icon';

const CTA_ARROW = (
  <Icon
    name="arrow-right"
    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
  />
);

/**
 * The primary call to action is either a route link or an in-page action, so it
 * takes `ctaLink` or `onCtaClick` — pages that scroll to a section on the same
 * route use the latter, since a router link would not move the viewport.
 */
function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  onCtaClick,
  secondaryText,
  secondaryLink,
}) {
  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden border-b-4 border-red-600 pt-28 md:pt-32 lg:min-h-[560px]">
      <div className="absolute inset-0">
        <img src="/background.jpg" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-hull/95 via-hull/75 to-hull/35" />

      <div className="container-page relative w-full py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="eyebrow eyebrow-on-dark mb-5">SRM Marine Transportation</span>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{subtitle}</p>
          )}

          {(ctaLink || onCtaClick || secondaryLink) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {ctaText && ctaLink && (
                <Link to={ctaLink} className="btn btn-primary group">
                  {ctaText}
                  {CTA_ARROW}
                </Link>
              )}
              {ctaText && !ctaLink && onCtaClick && (
                <button type="button" onClick={onCtaClick} className="btn btn-primary group">
                  {ctaText}
                  {CTA_ARROW}
                </button>
              )}
              {secondaryText && secondaryLink && (
                <Link to={secondaryLink} className="btn btn-ghost-dark">
                  {secondaryText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
