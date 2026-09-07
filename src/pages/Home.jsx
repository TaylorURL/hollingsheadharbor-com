import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import SectionBadge from '../components/ui/SectionBadge';
import Icon from '../components/ui/Icon';
import ArtPlate from '../components/ui/ArtPlate';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Seo from '../components/ui/Seo';
import { HOME_DESCRIPTION, HOME_TITLE, SHARE_IMAGE } from '../constants/seo';
import { SERVICE_AREAS, SITE_ORIGIN } from '../constants/urls';

const HERO = {
  title: 'Marine transportation, built on hard work',
  subtitle:
    'Hollingshead Harbor is the marine arm of SRM: bulk dry cargo, vessel and barge charter, full-service ports, family-owned since 1999.',
};

const VALUE_PILLARS = [
  {
    icon: 'check-circle',
    title: 'Reliable service',
    body: 'Cargo arrives when we say it will, on routes our crews have run for over twenty years.',
  },
  {
    icon: 'clock',
    title: 'On-time shipping',
    body: 'Shipping plans built around your schedule, across inland and coastal harbors.',
  },
  {
    icon: 'users',
    title: 'Expert crews',
    body: 'Licensed crews dispatching and loading every day of the year, holidays included.',
  },
];

const NETWORK_STATS = [
  { figure: '13', label: 'Strategic Harbors' },
  { figure: '6', label: 'States Covered' },
  { figure: '24/7', label: 'Dispatch and Ops' },
  { figure: '100+', label: 'SRM Acquisitions' },
];

const TRUST_FIGURES = [
  { figure: '13', label: 'Harbors' },
  { figure: '6', label: 'States' },
  { figure: '24/7', label: 'Operations' },
  { figure: '1999', label: 'Family Founded' },
];

/**
 * Figure over label in equal columns, divided by hairlines. The labels differ
 * in length, so setting one beside its figure lets the longer ones wrap and
 * pulls the row out of alignment; stacking keeps every column the same height.
 */
function TrustBar() {
  return (
    <section className="border-b border-line bg-surface-cool">
      <div className="container-page">
        <dl className="grid grid-cols-2 sm:grid-cols-4">
          {TRUST_FIGURES.map((item, index) => (
            <div
              key={item.label}
              className={`px-2 py-6 text-center sm:px-4 ${
                index > 0 ? 'border-l border-line' : ''
              } ${index === 2 ? 'border-l-0 sm:border-l' : ''}`}
            >
              <dt className="stat-figure text-3xl md:text-4xl">{item.figure}</dt>
              <dd className="mt-2 text-micro uppercase tracking-eyebrow text-ink-subtle">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/**
 * A cut chip with a lamp on it. The chip takes the 2px corner every other tag
 * on the site takes; the dot stays a circle because a status light is the one
 * thing on the page that genuinely is one.
 */
function PortStateChips() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {SERVICE_AREAS.map((state) => (
        <span
          key={state.code}
          title={state.name}
          className="inline-flex items-center gap-2 rounded-sm border border-line bg-surface-raised px-2.5 py-1 text-micro uppercase tracking-eyebrow text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
          {state.code}
        </span>
      ))}
    </div>
  );
}

function WhyHollingsheadSection() {
  return (
    <section className="section-deferred relative bg-surface py-16 md:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 scroll-animate-left">
            <SectionBadge>Why Hollingshead</SectionBadge>
            <h2 className="mt-5 section-title">We move what matters by water</h2>
            <p className="mt-5 max-w-md section-lead">
              From Alabama to Texas, our harbors keep bulk dry cargo moving on schedule and on terms
              that work for your operation.
            </p>

            <div className="mt-8">
              <span className="eyebrow mb-3">Where we operate</span>
              <PortStateChips />
            </div>

            {/* The label carries the link and the arrow sits in the line of type.
                A navy disc holding the arrow is a second control beside a
                control, and a filled circle at that size is a button on a page
                whose buttons are all cut square. */}
            <Link
              to="/equipment"
              className="pressable group mt-8 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:text-accent-contrast hover:underline"
            >
              See Our Equipment
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-base ease-out group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {VALUE_PILLARS.map((pillar, index) => {
                const isHero = index === 0;
                /* The card is held by its edge and answers the pointer with that
                   edge rather than by rising to meet it: a panel that lifts is
                   behaving like a control, and only the link inside it is one. */
                return (
                  <article
                    key={pillar.title}
                    className={`panel scroll-animate stagger-${index + 1} flex h-full flex-col p-6 ${
                      isHero ? 'sm:col-span-2 border-white/10 bg-navy-900 text-white' : ''
                    }`}
                  >
                    <div className={isHero ? 'icon-tile-dark' : 'icon-tile'}>
                      <Icon name={pillar.icon} className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3
                      className={`mt-4 font-display text-xl font-bold ${
                        isHero ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className={`mt-2 text-prose ${isHero ? 'text-white/75' : 'text-ink-muted'}`}>
                      {pillar.body}
                    </p>
                  </article>
                );
              })}

              <article className="scroll-animate stagger-4 group relative flex flex-col gap-4 overflow-hidden rounded-md bg-hull-deep p-6 text-white sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <div
                  className="pattern-deck-dark pointer-events-none absolute inset-0 opacity-40"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="eyebrow eyebrow-on-dark">Now hiring</span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    Wheelmen and deckhands
                  </h3>
                  <p className="mt-2 text-prose text-white/70">
                    Applications go straight to our hiring office.
                  </p>
                </div>
                <Link to="/careers" className="btn-primary relative w-fit shrink-0">
                  Open Positions
                  <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkSection() {
  return (
    <section className="section-deferred bg-surface-cool py-16 md:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-md bg-hull-deep px-6 py-12 text-white md:px-12 md:py-16 scroll-animate">
          <div
            className="pattern-deck-dark pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionBadge color="light">Our network</SectionBadge>
              <h2 className="mt-5 section-title text-white">Thirteen ports across six states</h2>
              <p className="mt-5 max-w-lg section-lead text-white/75">
                Harbors in six states put your cargo on the major inland waterways and Gulf shipping
                routes without a long haul first.
              </p>
              {/* The one inverted button on the site: white plate on the hull,
                  so the ring and its offset are named here rather than taken
                  from a variant that assumes a light ground. */}
              <Link
                to="/contact"
                className="btn group mt-8 bg-white px-6 py-3 text-hull hover:bg-red-600 hover:text-white focus-visible:ring-white focus-visible:ring-offset-hull"
              >
                Contact Us
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-base ease-out group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <ArtPlate name="waterways" className="mb-4 w-full text-white scroll-animate" />
              {/* Four cells ruled off one another rather than four cards floating
                  on frosted glass: the figures read as a table on the plate,
                  which is where a count of harbors belongs. The table reveals as
                  one element, because the rules are drawn by the cells and
                  staggering them tears every rule apart for as long as the
                  stagger runs. The hairline alpha is bracketed because 12% is not
                  a step on Tailwind's opacity scale, and a modifier off the scale
                  emits nothing at all. */}
              <div className="grid grid-cols-2 border border-white/[0.12] scroll-animate">
                {NETWORK_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`p-5 ${index % 2 === 1 ? 'border-l border-white/[0.12]' : ''} ${
                      index > 1 ? 'border-t border-white/[0.12]' : ''
                    }`}
                  >
                    <div className="stat-figure text-3xl text-white md:text-4xl">{stat.figure}</div>
                    <div className="mt-2 text-micro uppercase tracking-eyebrow text-white/65">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section className="section-deferred relative bg-surface-warm py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center scroll-animate">
          <SectionBadge color="red">Get started</SectionBadge>
          <h2 className="mt-5 section-title">Talk to us about your cargo</h2>
          <p className="mt-5 section-lead">
            Call us with your route and tonnage. We will tell you what we can move and when.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary group">
              Contact Us
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-base ease-out group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
            <Link to="/about" className="btn-outline">
              About Hollingshead Harbor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  useScrollAnimation();

  return (
    <div className="page-enter">
      <Seo
        meta={{
          title: HOME_TITLE,
          description: HOME_DESCRIPTION,
          canonical: `${SITE_ORIGIN}/`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
        }}
      />
      <HeroSection
        subtitle={HERO.subtitle}
        ctaText="See Our Equipment"
        ctaLink="/equipment"
        secondaryText="Careers"
        secondaryLink="/careers"
      >
        <h1 className="hero-title">{HERO.title}</h1>
      </HeroSection>
      <TrustBar />
      <WhyHollingsheadSection />
      <NetworkSection />
      <GetStartedSection />
    </div>
  );
}

export default Home;
