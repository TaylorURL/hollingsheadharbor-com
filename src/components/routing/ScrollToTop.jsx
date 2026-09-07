import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MAIN_CONTENT_ID } from '../../constants/navigation';

// A link into a section of a route that has not been downloaded yet arrives
// before the section exists, so the target is looked for repeatedly for this
// long rather than once.
const HASH_LOOKUP_MS = 2000;
const HASH_POLL_MS = 60;

/**
 * A client-routed navigation replaces the page without moving the viewport or
 * the focus ring, which leaves a keyboard or screen reader user at the bottom
 * of the page they just left. The first render is skipped so that arriving on
 * a page does not pull focus off whatever the browser gave it.
 *
 * A link carrying a hash asks for a section rather than the page, so that one
 * moves to the section and leaves the focus on it.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && !hash) {
      isFirstRender.current = false;
      return undefined;
    }
    isFirstRender.current = false;

    if (!hash) {
      window.scrollTo(0, 0);
      document.getElementById(MAIN_CONTENT_ID)?.focus({ preventScroll: true });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    const deadline = Date.now() + HASH_LOOKUP_MS;
    let timer = 0;

    // Polled on a timer rather than per frame: the section is waiting on a
    // network round trip, so checking sixty times a second competes with the
    // render that would produce it.
    const settle = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        return;
      }
      if (Date.now() < deadline) timer = window.setTimeout(settle, HASH_POLL_MS);
    };

    settle();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
