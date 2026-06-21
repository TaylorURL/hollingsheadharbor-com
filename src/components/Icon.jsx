/**
 * Central icon registry.
 *
 * Every icon in the app — UI affordances, service glyphs, social marks — is
 * declared here so pages don't have to re-author SVG markup or memorize path
 * strings. `Icon` defaults to a 24-grid stroke glyph; entries flagged
 * `filled: true` switch the renderer to a solid-fill brand mark (used for
 * social icons whose paths describe filled shapes).
 *
 * Add new icons by extending `ICONS` — the React component picks them up
 * automatically.
 */
const STROKE = (...d) => ({ d });
const FILLED = (...d) => ({ d, filled: true });

const ICONS = {
  /* UI */
  'arrow-right': STROKE('M17 8l4 4m0 0l-4 4m4-4H3'),
  'arrow-up': STROKE('M5 10l7-7m0 0l7 7m-7-7v18'),
  'arrow-up-right': STROKE('M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'),
  'chevron-right': STROKE('M9 5l7 7-7 7'),
  check: STROKE('M5 13l4 4L19 7'),
  'check-circle': STROKE('M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'),
  close: STROKE('M6 18L18 6M6 6l12 12'),
  search: STROKE('M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'),
  clock: STROKE('M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'),
  bolt: STROKE('M13 10V3L4 14h7v7l9-11h-7z'),
  star: STROKE(
    'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
  ),
  shield: STROKE(
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  ),
  lock: STROKE(
    'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  ),
  eye: STROKE(
    'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  ),
  document: STROKE(
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  ),
  chat: STROKE(
    'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  ),
  heart: STROKE(
    'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  ),
  currency: STROKE(
    'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  ),
  users: STROKE(
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
  ),
  phone: STROKE(
    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  ),
  mail: STROKE(
    'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  ),
  pin: STROKE(
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    'M15 11a3 3 0 11-6 0 3 3 0 016 0z'
  ),
  compass: STROKE(
    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
    'M16.24 7.76L14.12 14.12 7.76 16.24 9.88 9.88z'
  ),

  /* Service glyphs */
  ship: STROKE('M3 17h18M3 17l2-9h14l2 9M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2M12 4v4M8 8h8'),
  vessel: STROKE('M12 19l9-5-9-5-9 5 9 5zM12 19v-4M3 14v4l9 5 9-5v-4'),
  barge: STROKE('M4 16h16M4 16l1-6h14l1 6M6 10V8h12v2M8 8V6h8v2M3 20h18'),
  logistics: STROKE(
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  ),
  port: STROKE(
    'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  ),
  transport: STROKE('M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'),

  /* Social — paths describe filled shapes, so renderer uses fill instead of stroke. */
  twitter: FILLED(
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  ),
  linkedin: FILLED(
    'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  ),
  facebook: FILLED(
    'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z'
  ),
};

export const ICON_NAMES = Object.keys(ICONS);

/**
 * Render a registered icon. Defaults to a 24×24 stroke glyph; entries flagged
 * filled render as solid currentColor shapes.
 */
function Icon({ name, className = 'w-5 h-5', strokeWidth = 2, ariaLabel, ...rest }) {
  const entry = ICONS[name];
  if (!entry) return null;

  const isFilled = entry.filled === true;
  const a11yProps = ariaLabel
    ? { role: 'img', 'aria-label': ariaLabel }
    : { 'aria-hidden': 'true', focusable: 'false' };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? undefined : 'currentColor'}
      {...a11yProps}
      {...rest}
    >
      {entry.d.map((d) => (
        <path
          key={d}
          d={d}
          {...(isFilled
            ? null
            : { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth })}
        />
      ))}
    </svg>
  );
}

export default Icon;
