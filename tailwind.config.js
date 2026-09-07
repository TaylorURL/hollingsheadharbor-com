/**
 * The palette is not defined here. Every value comes from the token block in
 * src/index.css, which is the one place a colour, radius, shadow, or layer is
 * written down — so the dark and gray themes redefine one file and this config
 * follows. Tokens hold space-separated RGB channels, which is what lets an
 * opacity modifier such as `bg-surface/60` apply to a variable.
 */
const channel = (name) => `rgb(var(--${name}) / <alpha-value>)`;

const ramp = (prefix, steps) =>
  Object.fromEntries(steps.map((step) => [step, channel(`${prefix}-${step}`)]));

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { ...ramp('navy', shades), DEFAULT: channel('navy-800') },
        red: { ...ramp('red', shades), DEFAULT: channel('red-600') },
        gray: ramp('gray', shades),
        sand: ramp('sand', [50, 100, 200, 300, 400, 500]),
        mist: ramp('mist', [50, 100, 200]),
        hull: { DEFAULT: channel('hull'), mid: channel('hull-mid') },
        white: channel('white'),
        black: channel('black'),

        surface: {
          DEFAULT: channel('surface'),
          raised: channel('surface-raised'),
          cool: channel('surface-cool'),
          sunken: channel('surface-sunken'),
          warm: channel('surface-warm'),
          accent: channel('surface-accent'),
          field: channel('surface-field'),
        },
        ink: {
          DEFAULT: channel('ink'),
          body: channel('ink-body'),
          muted: channel('ink-muted'),
          subtle: channel('ink-subtle'),
          'on-accent': channel('ink-on-accent'),
        },
        accent: {
          DEFAULT: channel('accent'),
          strong: channel('accent-strong'),
          contrast: channel('accent-contrast'),
        },
        // The hairlines arrive already mixed, as the theme's ink at low alpha,
        // so they are referenced whole rather than as channels: there is no
        // second opacity to apply to a value that is already an alpha.
        line: {
          DEFAULT: 'var(--line)',
          strong: 'var(--line-strong)',
          field: 'var(--line-field)',
        },
        danger: {
          DEFAULT: channel('danger'),
          ink: channel('danger-ink'),
          surface: channel('danger-surface'),
        },
      },

      // Archivo sets the headings and Inter sets everything a reader reads at
      // length. Both are grotesques, which is the register the inland-marine
      // trade is written in; a display serif reads as consumer-facing beside
      // it. Archivo falls back to Inter rather than to the system stack, so a
      // heading waiting on its face is already set in a face the document has.
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Archivo', 'Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
      },

      // Each step names its size, leading, tracking, and weight together, so a
      // component picks one name instead of restating four values.
      fontSize: {
        micro: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.14em', fontWeight: '700' }],
        caption: ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0em', fontWeight: '400' }],
        label: ['0.8125rem', { lineHeight: '1.25rem', letterSpacing: '0em', fontWeight: '600' }],
        prose: ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        // The sentence under a heading. One step above body and no more: a lead
        // set at 18px with relaxed leading is a brochure paragraph, and the
        // whole page tips soft the moment eleven sections open with one.
        lead: ['1.0625rem', { lineHeight: '1.55', letterSpacing: '-0.003em', fontWeight: '400' }],
        control: [
          'var(--control-font-size)',
          { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' },
        ],
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },

      maxWidth: {
        page: 'var(--page-max-width)',
        measure: 'var(--measure)',
      },
      minHeight: {
        control: 'var(--control-height)',
      },
      padding: {
        control: 'var(--control-padding-x)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        control: 'var(--control-radius)',
        full: 'var(--radius-full)',
      },

      // Almost nothing. A card on this site is held by its border, not by the
      // distance it floats: the shadow is one hairline of contact and a two
      // pixel spread, which is what a plate laid on a plate looks like. These
      // are for the elements that genuinely stand off the page — the fixed bar,
      // the mobile rail, the back-to-top button — and a static card should be
      // carrying `panel` instead of either of them.
      boxShadow: {
        card: '0 1px 1px rgb(var(--shadow-ink) / 0.04), 0 1px 3px -1px rgb(var(--shadow-ink) / 0.07)',
        'card-hover':
          '0 1px 1px rgb(var(--shadow-ink) / 0.05), 0 4px 10px -4px rgb(var(--shadow-ink) / 0.14)',
      },

      transitionTimingFunction: {
        'out-quint': 'var(--ease-out-quint)',
        out: 'var(--ease-out)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },

      zIndex: {
        base: 'var(--z-base)',
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        nav: 'var(--z-nav)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)',
      },

      // The dark ground a band is cut from. It runs top to bottom rather than on
      // the diagonal, and between two steps rather than three: a plate lit from
      // above is lighter at its top edge, and that is the whole of the effect
      // being reached for. A 135-degree three-stop wash is a decoration laid
      // over a panel, and it reads as one the moment a photograph or a drawn
      // plate sits next to it.
      backgroundImage: {
        'hull-deep': 'linear-gradient(180deg, rgb(var(--hull-mid)) 0%, rgb(var(--hull)) 100%)',
      },
    },
  },
  plugins: [],
};
