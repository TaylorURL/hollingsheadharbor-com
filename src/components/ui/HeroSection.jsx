import { Link } from 'react-router-dom';
import Icon from './Icon';

const CTA_ARROW = (
  <Icon
    name="arrow-right"
    className="h-4 w-4 transition-transform duration-base ease-out group-hover:translate-x-0.5"
  />
);

/**
 * The heading is passed in as the child rather than as a string, so the h1 of a
 * page lives in the page's own file with the copy it announces. The primary
 * call to action is either a route link or an in-page action, so it takes
 * `ctaLink` or `onCtaClick` — pages that scroll to a section on the same route
 * use the latter, since a router link would not move the viewport.
 */
function HeroSection({
  children,
  subtitle,
  ctaText,
  ctaLink,
  onCtaClick,
  secondaryText,
  secondaryLink,
}) {
  return (
    <section
      data-hero="band"
      className="relative flex min-h-[440px] items-center overflow-hidden border-b-4 border-red-600 pt-[var(--header-offset)] md:pt-[var(--header-offset-wide)] lg:min-h-[560px]"
    >
      <div className="absolute inset-0">
        {/* Decorative backdrop, so the alt is empty: the gradient over it and
            the headline on top of it carry the meaning. It is still the largest
            paint on every page, which is why it loads eagerly and first. */}
        <img
          src="/background.webp"
          srcSet="/background-768.webp 768w, /background-1280.webp 1280w, /background.webp 1920w"
          sizes="100vw"
          alt=""
          width="1920"
          height="600"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-hull/95 via-hull/75 to-hull/45" />

      <div className="container-page relative w-full py-16 md:py-20">
        <div className="max-w-2xl">
          <span data-hero="eyebrow" className="eyebrow eyebrow-on-dark mb-4">
            SRM Marine Transportation
          </span>

          {children}

          {subtitle && (
            <p data-hero="subtitle" className="mt-5 max-w-xl text-lead text-white/75">
              {subtitle}
            </p>
          )}

          {(ctaLink || onCtaClick || secondaryLink) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {ctaText && ctaLink && (
                <Link to={ctaLink} className="btn-primary group">
                  {ctaText}
                  {CTA_ARROW}
                </Link>
              )}
              {ctaText && !ctaLink && onCtaClick && (
                <button type="button" onClick={onCtaClick} className="btn-primary group">
                  {ctaText}
                  {CTA_ARROW}
                </button>
              )}
              {secondaryText && secondaryLink && (
                <Link to={secondaryLink} className="btn-ghost-dark">
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
