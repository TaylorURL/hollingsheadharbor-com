import { readFileSync, writeFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SITE_ROUTES } from './src/constants/seo.js';
import { SITE_ORIGIN } from './src/constants/urls.js';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

/**
 * Writes public/sitemap.xml from the route table the router and the head
 * metadata already share, rather than from the file tree. A page that exists
 * as a file but is not mounted on a route is a 404 with a <loc> entry pointing
 * at it.
 *
 * It lands in public/ rather than straight in the bundle so that the file a
 * crawler asks for is a file in the repository, readable without running a
 * build to find out what it says.
 */
function sitemapPlugin() {
  return {
    name: 'hollingshead-sitemap',
    apply: 'build',
    buildStart() {
      const entries = SITE_ROUTES.map(
        (route) => `  <url>\n    <loc>${SITE_ORIGIN}${route}</loc>\n  </url>`
      ).join('\n');

      writeFileSync(
        new URL('./public/sitemap.xml', import.meta.url),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
      );
    },
  };
}

/**
 * Names the home page's chunk in the document.
 *
 * Every route is split, so the home page arrives through a dynamic import like
 * the rest. Nothing in the document says so: the browser learns the filename
 * only once the entry bundle has been fetched and parsed, and the landing route
 * spends a whole round trip behind the entry before its own request even
 * starts. A modulepreload puts the filename in the head, where the preload
 * scanner reaches it while the entry is still downloading.
 *
 * The filename carries a content hash, so it is read out of the bundle at the
 * point the document is written rather than spelled here.
 */
function preloadHomeChunk() {
  return {
    name: 'hollingshead-preload-home',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        const chunk = Object.values(ctx.bundle ?? {}).find(
          (file) => file.type === 'chunk' && file.facadeModuleId?.endsWith('/pages/Home.jsx')
        );
        if (!chunk) return [];
        return [
          {
            tag: 'link',
            attrs: { rel: 'modulepreload', crossorigin: true, href: `/${chunk.fileName}` },
            injectTo: 'head',
          },
        ];
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemapPlugin(), preloadHomeChunk()],
  // The attribution rail prints the build it is serving, and the number it
  // prints is the one in package.json rather than a second copy of it.
  define: {
    __BUILD_VERSION__: JSON.stringify(pkg.version),
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    // Named rather than left to the toolchain's default, which is older than
    // any browser this site is reached from and pays for that in polyfills.
    target: 'es2022',
    rollupOptions: {
      output: {
        // Framework code changes far less often than the pages do, so it gets
        // its own hash and stays in the cache across releases. Matching on the
        // directory rather than on package names catches the deep entry points
        // (react-dom/client among them) that a name list misses.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          return undefined;
        },
      },
    },
  },
});
