import { useEffect, useState } from 'react';
import Icon from './Icon';

const VISIBILITY_THRESHOLD_PX = 400;

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > VISIBILITY_THRESHOLD_PX);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white shadow-lg transition-all duration-300 ease-out-quint hover:bg-navy-900 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-800 focus-visible:ring-offset-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Icon name="arrow-up" className="h-5 w-5" />
    </button>
  );
}

export default BackToTop;
