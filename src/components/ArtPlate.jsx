import { useId } from 'react';

/*
 * The drawn plates. Every one is set on the same 320x200 ground, which is what
 * lets the box, the clip, and the tinted backing be declared once here rather
 * than redrawn per plate.
 *
 * No plate names a colour. Shapes are currentColor at a fixed step of the
 * ladder below, and the two accents resolve through the same tokens the rest of
 * the project reads. So a plate composites onto whatever ground it is dropped
 * on and follows the light, dark, and gray themes: a plate carrying its own hex
 * is a pale slab on the two dark themes, and drifts out of the palette the
 * moment the brand anchors move.
 *
 * They are drawn inline rather than fetched as files because a plate is
 * currentColor all the way down, and an <img> resolves that against nothing.
 * Inlining also means the mega menu opens with its three plates already drawn,
 * since none of them is a separate fetch.
 */

// The tonal ladder. Five steps separate a near shape from a far one and are few
// enough that the whole set reads as one hand.
const INK = 1;
const MID = 0.7;
const FAR = 0.45;
const HAZE = 0.26;
const WASH = 0.12;
const GROUND = 0.06;

const RED = 'rgb(var(--accent-contrast))';
const SAND = 'rgb(var(--sand-400))';
const WHITE = 'rgb(var(--white))';

const PLATES = {
  /* A towboat pushing a loaded tow, which is the whole of what the fleet does.
     Only the lead barge is raked; the ones behind it are boxes, which is what
     makes a string of them read as one tow rather than as separate boats. */
  towboat: (
    <>
      <rect y="148" width="320" height="52" fill="currentColor" fillOpacity={WASH} />

      <path d="M12 118h92v30H30L12 133Z" fill="currentColor" fillOpacity={MID} />
      <path d="M28 104h64v14H28Z" fill={SAND} />
      <rect x="110" y="118" width="84" height="30" fill="currentColor" fillOpacity={MID} />
      <rect x="120" y="104" width="64" height="14" fill={SAND} />

      <rect x="198" y="118" width="108" height="30" fill="currentColor" fillOpacity={INK} />
      <rect x="210" y="86" width="82" height="32" fill="currentColor" fillOpacity={MID} />
      <rect x="218" y="96" width="12" height="12" fill="currentColor" fillOpacity={WASH} />
      <rect x="238" y="96" width="12" height="12" fill="currentColor" fillOpacity={WASH} />
      <rect x="258" y="96" width="12" height="12" fill="currentColor" fillOpacity={WASH} />
      <rect x="224" y="58" width="44" height="28" fill="currentColor" fillOpacity={FAR} />
      <rect x="232" y="66" width="28" height="12" fill="currentColor" fillOpacity={WASH} />
      <rect x="244" y="44" width="4" height="14" fill="currentColor" fillOpacity={INK} />
      <rect x="274" y="60" width="14" height="26" fill="currentColor" fillOpacity={INK} />
      <rect x="274" y="52" width="14" height="8" fill={RED} />

      <rect y="148" width="320" height="4" fill={RED} />
      <rect x="24" y="166" width="56" height="4" rx="2" fill="currentColor" fillOpacity={HAZE} />
      <rect x="104" y="180" width="44" height="4" rx="2" fill="currentColor" fillOpacity={HAZE} />
      <rect x="182" y="166" width="64" height="4" rx="2" fill="currentColor" fillOpacity={HAZE} />
      <rect x="256" y="182" width="40" height="4" rx="2" fill="currentColor" fillOpacity={HAZE} />
    </>
  ),

  /* A bulk terminal: storage on the quay, and the loader reaching out over the
     water to the barge it is filling. */
  harbor: (
    <>
      <rect y="148" width="320" height="52" fill="currentColor" fillOpacity={WASH} />
      <rect y="128" width="152" height="20" fill="currentColor" fillOpacity={FAR} />

      <path d="M26 62a20 20 0 0 1 40 0v66H26Z" fill="currentColor" fillOpacity={INK} />
      <rect x="26" y="96" width="40" height="5" fill="currentColor" fillOpacity={HAZE} />
      <path d="M74 78a17 17 0 0 1 34 0v50H74Z" fill="currentColor" fillOpacity={MID} />

      <rect x="128" y="52" width="13" height="76" fill="currentColor" fillOpacity={INK} />
      <path d="M134 56 268 98 264 110 130 68Z" fill="currentColor" fillOpacity={FAR} />

      <path d="M194 120h110v28H208l-14-14Z" fill="currentColor" fillOpacity={INK} />
      <path d="M214 120l14-14h44l14 14Z" fill={SAND} />

      <rect y="148" width="320" height="4" fill={RED} />
      <rect x="20" y="166" width="54" height="4" rx="2" fill="currentColor" fillOpacity={HAZE} />
      <rect x="92" y="180" width="40" height="4" rx="2" fill="currentColor" fillOpacity={HAZE} />
      <rect x="234" y="168" width="56" height="4" rx="2" fill="currentColor" fillOpacity={HAZE} />
    </>
  ),

  /* The helm, seen from inside the pilothouse. The handles running past the rim
     are what make it a ship's wheel rather than a steering wheel at panel size,
     and the horizon across the glass is what makes the frame behind it a
     window. */
  crew: (
    <>
      <rect x="34" y="36" width="252" height="88" rx="6" fill="currentColor" fillOpacity={HAZE} />
      <rect x="44" y="48" width="72" height="64" fill="currentColor" fillOpacity={WASH} />
      <rect x="124" y="48" width="72" height="64" fill="currentColor" fillOpacity={WASH} />
      <rect x="204" y="48" width="72" height="64" fill="currentColor" fillOpacity={WASH} />
      <rect x="44" y="92" width="72" height="20" fill="currentColor" fillOpacity={WASH} />
      <rect x="124" y="92" width="72" height="20" fill="currentColor" fillOpacity={WASH} />
      <rect x="204" y="92" width="72" height="20" fill="currentColor" fillOpacity={WASH} />

      <rect y="164" width="320" height="36" fill="currentColor" fillOpacity={FAR} />
      <rect y="164" width="320" height="4" fill={RED} />

      <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
        <path d="M172 104h42" />
        <path d="M168.5 112.5 198 142" />
        <path d="M160 116v42" />
        <path d="M151.5 112.5 122 142" />
        <path d="M148 104h-42" />
        <path d="M151.5 95.5 122 66" />
        <path d="M160 92V50" />
        <path d="M168.5 95.5 198 66" />
      </g>
      <circle cx="160" cy="104" r="40" fill="none" stroke="currentColor" strokeWidth="9" />
      <circle cx="160" cy="104" r="12" fill="currentColor" />
      <circle cx="160" cy="104" r="5" fill={RED} />
    </>
  ),

  /* The river system and the harbors on it. Each river is drawn twice, a wide
     channel under a narrow one, which is what gives it a bank at this size. */
  waterways: (
    <>
      <path
        d="M0 138c34-6 66 2 98 8s60 8 92 12 60-8 90-14 40-2 40-2v58H0Z"
        fill="currentColor"
        fillOpacity={WASH}
      />
      <path
        d="M0 150c34-4 66 4 98 9s60 7 92 11 60-7 90-12"
        fill="none"
        stroke="currentColor"
        strokeOpacity={HAZE}
        strokeWidth="3"
      />
      <path
        d="M0 172c40-4 72 4 106 8s58 5 90 3"
        fill="none"
        stroke="currentColor"
        strokeOpacity={HAZE}
        strokeWidth="3"
      />

      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path
          d="M46-6c10 32 2 50-12 66s-16 34-4 48 34 18 58 12 44-16 68-8 40 20 62 16 34-16 42-30"
          strokeOpacity={WASH}
          strokeWidth="15"
        />
        <path
          d="M46-6c10 32 2 50-12 66s-16 34-4 48 34 18 58 12 44-16 68-8 40 20 62 16 34-16 42-30"
          strokeOpacity={MID}
          strokeWidth="5"
        />
        <path d="M132-6c-4 26 6 40 18 52s16 24 10 38" strokeOpacity={WASH} strokeWidth="11" />
        <path d="M132-6c-4 26 6 40 18 52s16 24 10 38" strokeOpacity={FAR} strokeWidth="3" />
        <path d="M304 26c-22 12-36 28-40 48" strokeOpacity={WASH} strokeWidth="11" />
        <path d="M304 26c-22 12-36 28-40 48" strokeOpacity={FAR} strokeWidth="3" />
        <path d="M74 96c-16 4-26 12-32 24" strokeOpacity={WASH} strokeWidth="9" />
        <path d="M74 96c-16 4-26 12-32 24" strokeOpacity={FAR} strokeWidth="2.5" />
        <path d="M186 60c14 6 22 14 26 26" strokeOpacity={WASH} strokeWidth="9" />
        <path d="M186 60c14 6 22 14 26 26" strokeOpacity={FAR} strokeWidth="2.5" />
      </g>

      <g fill={RED}>
        <path d="M64 42a13 13 0 0 0-26 0c0 9 13 22 13 22s13-13 13-22Z" />
        <path d="M160 30a13 13 0 0 0-26 0c0 9 13 22 13 22s13-13 13-22Z" />
        <path d="M100 118a13 13 0 0 0-26 0c0 9 13 22 13 22s13-13 13-22Z" />
        <path d="M224 98a13 13 0 0 0-26 0c0 9 13 22 13 22s13-13 13-22Z" />
        <path d="M296 56a13 13 0 0 0-26 0c0 9 13 22 13 22s13-13 13-22Z" />
      </g>
      <g fill={WHITE}>
        <circle cx="51" cy="41" r="5" />
        <circle cx="147" cy="29" r="5" />
        <circle cx="87" cy="117" r="5" />
        <circle cx="211" cy="97" r="5" />
        <circle cx="283" cy="55" r="5" />
      </g>
    </>
  ),
};

/**
 * A plate is imagery for the block it sits in, not a mark standing in for a
 * single row, so it carries no label and stays out of the reading order — the
 * heading beside it already says what the block is.
 *
 * The clip rounds the corners and holds the rivers, which run off the edge of
 * their plate on purpose. Its id comes from the render rather than the plate
 * name: waterways is drawn in the menu and again on the home page, and two
 * elements answering to one id send both clips to whichever landed first.
 */
function ArtPlate({ name, className = '' }) {
  const clipId = `art-plate-${useId().replace(/[^\w-]/g, '')}`;
  const plate = PLATES[name];
  if (!plate) return null;

  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="320" height="200" rx="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="320" height="200" fill="currentColor" fillOpacity={GROUND} />
        {plate}
      </g>
    </svg>
  );
}

export default ArtPlate;
