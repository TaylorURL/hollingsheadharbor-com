import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import RouteFallback from './components/RouteFallback';
import { withBuildRefresh } from './lib/chunk-recovery';

/**
 * Each route carries its own chunk, so a visitor reading the home page never
 * downloads the employment application behind /careers, which is by a wide
 * margin the largest component in the project.
 *
 * Every loader goes through withBuildRefresh: the filenames carry a content
 * hash, and a tab open across a deploy would otherwise render an error screen
 * over a chunk that has simply been renamed.
 */
const Home = lazy(withBuildRefresh(() => import('./pages/Home')));
const About = lazy(withBuildRefresh(() => import('./pages/About')));
const Equipment = lazy(withBuildRefresh(() => import('./pages/Equipment')));
const Careers = lazy(withBuildRefresh(() => import('./pages/Careers')));
const Contact = lazy(withBuildRefresh(() => import('./pages/Contact')));
const PrivacyPolicy = lazy(withBuildRefresh(() => import('./pages/PrivacyPolicy')));
const Terms = lazy(withBuildRefresh(() => import('./pages/Terms')));
const NotFound = lazy(withBuildRefresh(() => import('./pages/NotFound')));

/**
 * A route's view, behind the placeholder that stands in for it.
 *
 * The boundary is keyed on the route, which is what makes the placeholder
 * appear at all. A navigation is a transition, and React holds a boundary that
 * is already on screen at its old content rather than replacing it with a
 * fallback, so one boundary shared across routes shows the page being left for
 * as long as the next chunk takes. A boundary keyed per route mounts fresh,
 * has no old content to hold, and renders its fallback.
 */
function RouteView({ routeKey, withCta = false, children }) {
  return (
    <Suspense key={routeKey} fallback={<RouteFallback withCta={withCta} />}>
      {children}
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RouteView routeKey="home" withCta>
                <Home />
              </RouteView>
            }
          />
          <Route
            path="about"
            element={
              <RouteView routeKey="about">
                <About />
              </RouteView>
            }
          />
          <Route
            path="equipment"
            element={
              <RouteView routeKey="equipment">
                <Equipment />
              </RouteView>
            }
          />
          <Route
            path="careers"
            element={
              <RouteView routeKey="careers" withCta>
                <Careers />
              </RouteView>
            }
          />
          <Route
            path="contact"
            element={
              <RouteView routeKey="contact">
                <Contact />
              </RouteView>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <RouteView routeKey="privacy-policy">
                <PrivacyPolicy />
              </RouteView>
            }
          />
          <Route
            path="terms"
            element={
              <RouteView routeKey="terms">
                <Terms />
              </RouteView>
            }
          />
          <Route
            path="*"
            element={
              <RouteView routeKey="not-found">
                <NotFound />
              </RouteView>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
