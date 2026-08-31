import Icon from './Icon';
import useScrolledPast from '../hooks/useScrolledPast';

const VISIBILITY_THRESHOLD_PX = 400;

function BackToTop() {
  const isVisible = useScrolledPast(VISIBILITY_THRESHOLD_PX);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`pressable fixed bottom-[calc(var(--rail-offset)+0.75rem)] right-4 z-sticky lg:bottom-8 lg:right-8 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white shadow-card duration-300 hover:bg-navy-900 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Icon name="arrow-up" className="h-5 w-5" />
    </button>
  );
}

export default BackToTop;
