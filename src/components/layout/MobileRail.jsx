import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { PHONE_DISPLAY, PHONE_NUMBER } from '../../constants/urls';

/**
 * The two things a visitor on a phone came for, pinned where a thumb already
 * is. The rail is fixed rather than in flow, so the spacer beside it is what
 * keeps the last line of the page out from under it, and both read the same
 * token — moving the height moves them together.
 */
function MobileRail() {
  return (
    <>
      <div className="h-[var(--rail-offset)] lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-sticky border-t border-line-strong bg-surface pb-[env(safe-area-inset-bottom,0px)] shadow-card lg:hidden">
        <div className="flex items-stretch gap-2 px-3 py-2">
          <a href={`tel:${PHONE_NUMBER}`} className="btn-outline flex-1 px-3 text-label">
            <Icon name="phone" className="h-4 w-4 text-accent-contrast" />
            {PHONE_DISPLAY}
          </a>
          <Link to="/careers" className="btn-primary flex-1 px-3 text-label">
            Apply for a Job
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileRail;
