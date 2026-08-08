/**
 * Hollingshead Harbor is the marine arm of Smyrna Ready Mix, so the navy and
 * red ramps are pinned to the parent brand's values — navy #2a3163 at 800 and
 * red #dc2626 at 600, not at the midpoint of their scales. Move either anchor
 * and its whole ramp has to be regenerated so the surrounding steps stay
 * evenly spaced. The sand/mist/hull scales are this site's own maritime
 * accents and are not derived from the brand colors.
 */
const navy = {
  DEFAULT: '#2a3163',
  50: '#eef0f5',
  100: '#dadeea',
  200: '#b3bbd2',
  300: '#8b96ba',
  400: '#6471a2',
  500: '#48578a',
  600: '#3a4775',
  700: '#2f3a64',
  800: '#2a3163',
  900: '#1a1f42',
  950: '#0c1029',
};

const red = {
  DEFAULT: '#dc2626',
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
};

const gray = {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
  950: '#030712',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red,
        navy,
        gray,
        sand: {
          50: '#fbf8f2',
          100: '#f6f1e7',
          200: '#ece2cc',
          300: '#dcc89e',
          400: '#c9a55c',
          500: '#b48a3c',
        },
        mist: {
          50: '#f4f6f9',
          100: '#e6ebf2',
          200: '#cdd6e3',
        },
        hull: '#0a1228',
        ink: '#0f172a',
      },
      // Headings and body share one family. The site sits alongside the
      // established inland-marine operators, which all run a single neutral
      // sans, and a display serif reads as consumer-facing next to them.
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
      // Short spreads, so a raised surface reads as a panel edge rather than a
      // soft consumer card. Widening the blur undoes that.
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.05), 0 4px 12px -6px rgba(15, 23, 42, 0.10)',
        'card-hover': '0 2px 4px rgba(15, 23, 42, 0.07), 0 10px 24px -10px rgba(15, 23, 42, 0.18)',
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'hull-deep': 'linear-gradient(135deg, #0a1228 0%, #141d3f 45%, #1a1f42 100%)',
      },
    },
  },
  plugins: [],
};
