import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SplitRail from '@taylorurl/split-rail';
import MobileRail from './MobileRail';
import { MAIN_CONTENT_ID } from '../../constants/navigation';

function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href={`#${MAIN_CONTENT_ID}`}
        className="pressable sr-only hover:bg-accent-strong focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-modal focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:font-semibold focus:text-ink-on-accent"
      >
        Skip to Main Content
      </a>
      <Header />
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className="flex-grow focus:outline-none">
        <Outlet />
      </main>
      <Footer>
        <SplitRail version={__BUILD_VERSION__} />
      </Footer>
      <MobileRail />
      <BackToTop />
    </div>
  );
}

export default Layout;
