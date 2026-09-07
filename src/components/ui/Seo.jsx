import { useEffect } from 'react';
import { SHARE_IMAGE, businessGraph, breadcrumbGraph, pageGraph } from '../../constants/seo';
import { BUSINESS_NAME } from '../../constants/urls';

const MANAGED = 'data-seo';

/**
 * Finds the head element matching `selector`, creating it the first time and
 * reusing it afterwards. Route changes rewrite these tags rather than stacking
 * a second copy of each one behind the first.
 */
function headTag(selector, tagName, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(tagName);
    for (const [name, value] of Object.entries(attributes)) {
      element.setAttribute(name, value);
    }
    element.setAttribute(MANAGED, '');
    document.head.appendChild(element);
  }
  return element;
}

function meta(name, content) {
  headTag(`meta[name="${name}"]`, 'meta', { name }).setAttribute('content', content);
}

function property(name, content) {
  headTag(`meta[property="${name}"]`, 'meta', { property: name }).setAttribute('content', content);
}

function jsonLd(id, data) {
  const element = headTag(`script[${MANAGED}-ld="${id}"]`, 'script', {
    type: 'application/ld+json',
    [`${MANAGED}-ld`]: id,
  });
  element.textContent = data ? JSON.stringify(data) : '';
}

/**
 * Sets the head for the route that renders it. Each page declares its own
 * title, description, canonical, and share card beside the markup those
 * describe, because the router swaps page components without reloading the
 * document: a head written once in index.html would describe the home page on
 * every route a visitor navigates to.
 */
function Seo({ meta: routeMeta }) {
  const { title, description, canonical, openGraph, breadcrumb, noindex } = routeMeta;
  const ogType = openGraph?.type ?? 'website';
  const ogImage = openGraph?.image ?? SHARE_IMAGE;
  const trail = breadcrumb ? JSON.stringify(breadcrumb) : '';

  useEffect(() => {
    document.title = title;
    meta('description', description);
    meta('robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    headTag('link[rel="canonical"]', 'link', { rel: 'canonical' }).setAttribute('href', canonical);

    property('og:type', ogType);
    property('og:site_name', BUSINESS_NAME);
    property('og:locale', 'en_US');
    property('og:title', title);
    property('og:description', description);
    property('og:url', canonical);
    property('og:image', ogImage);
    property('og:image:width', '1200');
    property('og:image:height', '630');
    property('og:image:alt', `${BUSINESS_NAME}: marine transportation and harbor services`);

    meta('twitter:card', 'summary_large_image');
    meta('twitter:title', title);
    meta('twitter:description', description);
    meta('twitter:image', ogImage);
    meta('twitter:image:alt', `${BUSINESS_NAME}: marine transportation and harbor services`);

    jsonLd('page', pageGraph({ canonical, title, description, image: ogImage }));
    jsonLd('breadcrumb', trail ? breadcrumbGraph(JSON.parse(trail)) : null);
  }, [title, description, canonical, ogType, ogImage, noindex, trail]);

  useEffect(() => {
    jsonLd('business', businessGraph());
  }, []);

  // The browser chrome tint is a colour, so it comes from the token block like
  // every other colour rather than being written into the HTML by hand.
  useEffect(() => {
    const tint = getComputedStyle(document.documentElement)
      .getPropertyValue('--chrome-tint')
      .trim();
    if (tint) meta('theme-color', `rgb(${tint})`);
  }, []);

  return null;
}

export default Seo;
