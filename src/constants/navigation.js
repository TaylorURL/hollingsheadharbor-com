// Both the header and the footer render from this list, so order changes here
// propagate to both.
//
// `sections` are the headings inside a page that are worth reaching directly.
// The header opens them in a panel under the bar; a page with none is a plain
// link. The ids are the ones the page puts on its sections, so a section
// renamed here without being renamed there sends a visitor to nothing.
//
// `feature` is the promoted half of that panel: one illustration and one
// destination for the whole page, not a mark per row. The plate names one of the
// drawings in ArtPlate.
export const SITE_NAV = [
  { to: '/', label: 'Home' },
  {
    to: '/about',
    label: 'About Us',
    sections: [
      { id: 'what-we-do', label: 'What We Do', blurb: 'Vessels, barges, and shipping plans.' },
      { id: 'the-beginning', label: 'The Beginning', blurb: 'From a backyard plant to a fleet.' },
      { id: 'core-values', label: 'Core Values', blurb: 'What every shift is held to.' },
      { id: 'srm-family', label: 'The SRM Family', blurb: 'The companies alongside us.' },
    ],
    feature: {
      art: 'harbor',
      title: 'What we move, and where',
      body: 'Bulk dry cargo, vessel and barge charter, and full-service ports across six states.',
      to: '/about',
      action: 'About Hollingshead Harbor',
    },
  },
  { to: '/equipment', label: 'Equipment' },
  {
    to: '/careers',
    label: 'Careers',
    sections: [
      { id: 'open-positions', label: 'Open Positions', blurb: 'Wheelman and deckhand work.' },
      { id: 'application', label: 'Employment Application', blurb: 'About fifteen minutes.' },
    ],
    feature: {
      art: 'crew',
      title: 'Wheelmen and deckhands are hiring',
      body: 'The application is the same one we use on paper, and it takes about fifteen minutes.',
      to: '/careers#application',
      action: 'Apply for a Job',
    },
  },
  {
    to: '/contact',
    label: 'Contact Us',
    sections: [
      { id: 'reach-us', label: 'Phone and Offices', blurb: 'One number, two addresses.' },
      { id: 'hiring', label: 'Hiring', blurb: 'Where applications are handled.' },
    ],
    feature: {
      art: 'waterways',
      title: 'One number, two offices',
      body: 'Murfreesboro and San Leon are both reached on the office line.',
      to: '/contact',
      action: 'Contact Us',
    },
  },
];

// The skip link, the route-change focus move, and the <main> element itself
// all name this id, so it lives beside the nav rather than inside a component.
export const MAIN_CONTENT_ID = 'main-content';
