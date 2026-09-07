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
