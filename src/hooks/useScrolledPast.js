import { useEffect, useState } from 'react';

/**
 * Whether the page has been scrolled further than `offsetPx`.
 *
 * A scroll listener answers this by running on every frame of every scroll and
 * setting state each time the boolean flips; an observer answers it by being
 * told once, when the crossing happens. The sentinel is a strip of exactly the
 * height being watched, pinned to the top of the document: while any of it is
 * on screen the page is above the threshold, and the moment its last pixel
 * leaves the viewport the page is past it.
 */
function useScrolledPast(offsetPx) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = `position:absolute;top:0;left:0;width:1px;height:${offsetPx}px;pointer-events:none;visibility:hidden;`;
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(([entry]) => setPassed(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [offsetPx]);

  return passed;
}

export default useScrolledPast;
