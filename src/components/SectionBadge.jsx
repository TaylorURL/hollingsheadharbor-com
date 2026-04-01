const COLOR_CLASSES = {
  red: 'bg-red-600',
  blue: 'bg-blue-800',
  gray: 'bg-gray-900',
};

function SectionBadge({ children, color = 'red', className = '' }) {
  const colorClass = COLOR_CLASSES[color] ?? COLOR_CLASSES.red;

  return (
    <div
      className={`inline-block ${colorClass} text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionBadge;
