import { useEffect, useState } from 'react';

// A chunk that arrives inside this window never gets a placeholder, so a fast
// connection sees the page appear rather than a skeleton blinking in and out.
const PLACEHOLDER_DELAY_MS = 200;

/**
 * The shape of a route while its chunk is in flight: the hero band, at the
 * height and on the ground the real one uses, with a bar where each of its
 * three lines will be.
 *
 * The band is reserved whether or not the bars have appeared, so nothing below
 * moves when the page itself renders.
 *
 * The placeholder also holds a viewport's worth of height beneath the band. A
 * route body is taller than its hero, so a placeholder that stops at the band
 * leaves the footer sitting a few hundred pixels down the screen, and the
 * arriving page drives it off the bottom, one shift large enough to carry the
 * route's whole layout-shift score on its own.
 *
 * `withCta` reserves the button row for the routes whose hero carries one. The
 * band centres its contents, so a placeholder that is short by the height of
 * that row starts half of it too low and the whole hero jumps on arrival.
 */
function RouteFallback({ withCta = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), PLACEHOLDER_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
      className="min-h-dvh"
    >
      <div
        data-skeleton="hero"
        className="relative flex min-h-[440px] items-center overflow-hidden border-b-4 border-red-600 bg-hull pt-[var(--header-offset)] md:pt-[var(--header-offset-wide)] lg:min-h-[560px]"
      >
        <div className="container-page relative w-full py-16 md:py-20">
          <div className={`max-w-2xl pt-[9.1px] ${isVisible ? 'animate-pulse' : 'opacity-0'}`}>
            <div data-skeleton="eyebrow" className="h-4 w-[238.34px] bg-white/15" />
            <div data-skeleton="headline" className="mt-5 h-12 w-full bg-white/15" />
            <div data-skeleton="subtitle" className="mt-5 h-[58.5px] w-full max-w-xl bg-white/10" />
            {withCta && <div data-skeleton="cta" className="mt-8 h-12 w-56 bg-white/15" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteFallback;
