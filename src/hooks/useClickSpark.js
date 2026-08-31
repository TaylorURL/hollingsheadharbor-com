import { useEffect } from 'react';

const SPARK_LIFETIME_MS = 300;

/**
 * Draws a short ring at the pointer on every click. Press feedback answers for
 * the control that was hit; this answers for the click itself, including the
 * clicks that land on nothing.
 *
 * The ring is a plain element on a fixed layer rather than a React node: it
 * lives for three hundred milliseconds and re-rendering the tree for it would
 * cost more than the effect is worth.
 */
function useClickSpark() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return undefined;

    const draw = (event) => {
      const spark = document.createElement('span');
      spark.className = 'click-spark';
      spark.setAttribute('aria-hidden', 'true');
      spark.style.left = `${event.clientX}px`;
      spark.style.top = `${event.clientY}px`;
      document.body.appendChild(spark);
      window.setTimeout(() => spark.remove(), SPARK_LIFETIME_MS);
    };

    window.addEventListener('pointerdown', draw);
    return () => window.removeEventListener('pointerdown', draw);
  }, []);
}

export default useClickSpark;
