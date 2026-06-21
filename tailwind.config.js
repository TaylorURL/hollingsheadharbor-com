/**
 * Hollingshead Harbor design tokens.
 *
 * Palette anchored on the established SRM brand pair — navy `#2a3163` and
 * red `#dc2626`. Scales are tuned around those anchors with extra "hull"
 * depths for heroes and warm "sand" / cool "mist" surface tints.
 *
 * Display = Fraunces (serif heritage), body = Inter.
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
        blue: navy,
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
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)',
        'card-hover': '0 4px 6px rgba(15, 23, 42, 0.06), 0 18px 40px -16px rgba(15, 23, 42, 0.22)',
        ring: '0 0 0 1px rgba(42, 49, 99, 0.08)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'hull-deep': 'linear-gradient(135deg, #0a1228 0%, #141d3f 45%, #1a1f42 100%)',
        'navy-rise': 'linear-gradient(180deg, #1a1f42 0%, #2a3163 100%)',
        'wave-stripes':
          'repeating-linear-gradient(135deg, rgba(42,49,99,0.06) 0 1px, transparent 1px 14px)',
      },
    },
  },
  plugins: [],
};
