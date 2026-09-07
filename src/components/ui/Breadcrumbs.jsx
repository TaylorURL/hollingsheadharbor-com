import { Link } from 'react-router-dom';
import Icon from './Icon';

/**
 * The trail from the home page to this one. It is the one navigation element a
 * search result renders in place of the URL, so the visible trail and the
 * BreadcrumbList the head carries name the same steps in the same order.
 *
 * The last crumb is the page being read, so it is text rather than a link.
 */
function Breadcrumbs({ trail }) {
  const crumbs = [{ name: 'Home', path: '/' }, ...trail];
  const last = crumbs.length - 1;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-surface-cool">
      <ol className="container-page flex flex-wrap items-center gap-2 py-3 text-caption text-ink-muted">
        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-2">
            {index > 0 && <Icon name="chevron-right" className="h-3 w-3 text-ink-subtle" />}
            {index === last ? (
              <span aria-current="page" className="font-semibold text-ink-body">
                {crumb.name}
              </span>
            ) : (
              <Link to={crumb.path} className="pressable hover:text-accent-contrast">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
