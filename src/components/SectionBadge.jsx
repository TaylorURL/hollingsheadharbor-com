/**
 * Eyebrow — a small uppercase section label with a 18px brand mark to its left.
 *
 * Replaces the project's old solid red pill. Color resolves through the design
 * contract's eyebrow utility so it tracks the surface it sits on.
 *
 * Tone variants:
 *   navy (default) — over light surfaces
 *   red            — accent for hero/cta moments
 *   light          — over hull / navy surfaces
 */
const TONE_CLASSES = {
  navy: '',
  red: 'eyebrow-red',
  light: 'eyebrow-on-dark',
};

function SectionBadge({ children, color = 'navy', className = '' }) {
  const tone = TONE_CLASSES[color] ?? TONE_CLASSES.navy;
  return <span className={`eyebrow ${tone} ${className}`.trim()}>{children}</span>;
}

export default SectionBadge;
