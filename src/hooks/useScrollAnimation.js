import { useEffect } from 'react';

/**
 * Reveals the elements carrying a scroll-animate class as they come into view.
 * The observer is disconnected on teardown rather than unobserved element by
 * element: a node removed from the document between mount and cleanup is not in
 * the list the effect captured, and the observer would keep holding it.
 */
export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    document
      .querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right')
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

export default useScrollAnimation;
