import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import SectionBadge from '../components/ui/SectionBadge';
import Icon from '../components/ui/Icon';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Seo from '../components/ui/Seo';
import { SHARE_IMAGE } from '../constants/seo';
import { SITE_ORIGIN } from '../constants/urls';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HERO = {
  title: 'About Hollingshead Harbor',
  subtitle: 'Hollingshead Harbor is the harbor and shipping arm of the SRM family.',
};

const SERVICE_PILLARS = [
  {
    title: 'Vessels for hire',
    body: 'Professional maritime transport sized to your route and tonnage.',
  },
  {
    title: 'Barges for charter',
    body: 'Inland-waterway barge capacity, available short-term or by the season.',
  },
  {
    title: 'Custom shipping plans',
    body: 'Tailored logistics that pair the right vessel with the right port for the job.',
  },
];

const CORE_VALUES = [
  {
    icon: 'shield',
    title: 'Integrity',
    body: 'We do what we say and stand behind every load we deliver.',
  },
  {
    icon: 'bolt',
    title: 'Innovation',
    body: 'We keep finding better ways to move material, and we change how we work when we do.',
  },
  {
    icon: 'users',
    title: 'Teamwork',
    body: 'Dispatch, deck, and shore run as one operation. Nobody is left to sort it out alone.',
  },
  {
    icon: 'star',
    title: 'Excellence',
    body: 'We hold every shipment to the same standard, at every harbor, on every shift.',
  },
];

const SRM_DIVISIONS = [
  { name: 'SRM Concrete', tag: 'Concrete operations' },
  { name: 'SRM Cement', tag: 'Cement production' },
  { name: 'SRM Harbor', tag: 'Marine transportation', active: true },
  { name: 'SRM Blocks', tag: 'Block manufacturing' },
  { name: 'HMC', tag: 'Hollingshead Mixer Co.' },
  { name: 'Hollingshead Aviation', tag: 'Aviation services' },
];

function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-[var(--header-offset-wide)] relative overflow-hidden bg-surface py-16 md:py-20"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="scroll-animate-left">
            <SectionBadge color="red">What we do</SectionBadge>
            <h2 className="mt-5 section-title">Moving cargo nationwide</h2>
            <p className="mt-6 max-w-lg section-lead">
              Hollingshead Harbor moves bulk dry cargo through a network of ports in Alabama,
              Florida, Michigan, Ohio, Tennessee, and Texas, as part of the SRM family.
            </p>

            <ul className="mt-8 space-y-3">
              {SERVICE_PILLARS.map((pillar) => (
                <li key={pillar.title} className="panel flex items-start gap-4 p-4">
                  <span className="icon-tile mt-0.5 h-9 w-9">
                    <Icon name="check" className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{pillar.title}</h3>
                    <p className="mt-1 text-prose text-ink-muted">{pillar.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative scroll-animate-right">
            <div className="overflow-hidden rounded-md border border-line">
              <img
                src="/marine-operations.webp"
                srcSet="/marine-operations-400.webp 400w, /marine-operations.webp 660w"
                sizes="(min-width: 1024px) 560px, 90vw"
                alt="A material handler on a river bulkhead loading aggregate into an open barge"
                width="660"
                height="630"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 panel p-6">
              <div className="flex items-center gap-4">
                <div className="stat-figure text-4xl text-accent-contrast">25+</div>
                <div>
                  <div className="font-display text-lg font-bold text-ink">Years</div>
                  <div className="text-caption text-ink-subtle">in the harbors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeginningSection() {
  return (
    <section
      id="the-beginning"
      className="scroll-mt-[var(--header-offset-wide)] bg-surface-cool py-16 md:py-20"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 scroll-animate-left">
            <SectionBadge color="red">The beginning</SectionBadge>
            <h2 className="mt-5 section-title">From a backyard to the nation</h2>
            <div className="mt-8 max-w-measure space-y-4 text-lead text-ink-body">
              <p>
                SRM Concrete is a family-owned and operated ready-mix, aggregates, and cement
                company founded in 1999 by Mike and Melissa Hollingshead.
              </p>
              <p>
                Mike, a concrete finisher, started Smyrna Ready Mix to service his own concrete
                needs.
              </p>
              <p>The local ready-mix companies were not giving him reliable service.</p>
              <p>Both grew up with very little, and both had a will to succeed.</p>
              <p>
                They scraped together enough money to buy a ready-mix plant. Mike and his crew put
                up the plant in their backyard.
              </p>
              <p>
                He attended an auction in Indiana and purchased five used concrete trucks for
                $10,000 each.
              </p>
              <p>Only three of them made it back to Smyrna.</p>
              <p>In 2012, SRM began to focus on growth through acquisition.</p>
              <p>
                Over 100 acquisitions have been completed since. A small local producer is now one
                of the largest ready-mix producers in the country.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 scroll-animate-right">
            <div className="relative">
              <div className="overflow-hidden rounded-md border border-line">
                <img
                  src="/company-team.webp"
                  srcSet="/company-team-400.webp 400w, /company-team.webp 653w"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  alt="Three of the Hollingshead family in front of an SRM Concrete mixer truck"
                  width="653"
                  height="411"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-md bg-red-600 px-6 py-5 text-white">
                <div className="stat-figure text-4xl text-white">1999</div>
                <div className="mt-1 text-micro uppercase tracking-eyebrow text-white/80">
                  Founded
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-surface-warm py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 pattern-deck opacity-70"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <figure className="mx-auto max-w-4xl text-center scroll-animate">
          <SectionBadge color="red">The American dream</SectionBadge>
          <blockquote className="mt-8 font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
            <span className="text-accent-contrast">&ldquo;</span>
            We started with nothing. No money, no customers, just a{' '}
            <span className="text-accent-contrast">will to work hard</span> and a belief that we
            could achieve anything.
            <span className="text-accent-contrast">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-8">
            <span className="block font-display text-lg font-bold text-ink">Mike Hollingshead</span>
            <span className="mt-1 block text-micro uppercase tracking-eyebrow text-ink-subtle">
              Chairman and Owner, Smyrna Ready Mix
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section
      id="core-values"
      className="scroll-mt-[var(--header-offset-wide)] relative overflow-hidden bg-surface py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 pattern-deck opacity-70"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="mx-auto mb-12 max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Core values</SectionBadge>
          <h2 className="mt-5 section-title">What we stand for</h2>
          <p className="mt-4 section-lead">
            Four principles set when the company started in 1999, and still how we run every shift
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, index) => (
            <article
              key={value.title}
              className={`panel scroll-animate stagger-${index + 1} flex flex-col p-6`}
            >
              <div className="icon-tile-solid">
                <Icon name={value.icon} className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{value.title}</h3>
              <p className="mt-2 text-prose text-ink-muted">{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SrmFamilySection() {
  return (
    <section
      id="srm-family"
      className="scroll-mt-[var(--header-offset-wide)] bg-surface-cool py-16 md:py-20"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 scroll-animate">
          <div className="lg:col-span-5">
            <SectionBadge color="red">The SRM family</SectionBadge>
            <h2 className="mt-5 section-title">The SRM family</h2>
            <p className="mt-5 max-w-md section-lead">
              Founded by the Hollingshead family in 1999, our companies work together to deliver
              concrete, materials, and the transportation that keeps both moving.
            </p>
            <Link
              to="/careers"
              className="pressable group mt-8 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:text-accent-contrast hover:underline"
            >
              Join the Crew
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-base ease-out group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SRM_DIVISIONS.map((division) => (
                <div
                  key={division.name}
                  className={`flex items-start gap-3 p-4 ${
                    division.active
                      ? 'rounded-md border border-danger/40 bg-danger-surface'
                      : 'panel'
                  }`}
                >
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      division.active ? 'bg-red-600' : 'bg-accent'
                    }`}
                  />
                  <div>
                    <div className="font-display text-base font-bold text-ink">{division.name}</div>
                    <div
                      className={`mt-1 text-micro uppercase tracking-eyebrow ${
                        division.active ? 'text-accent-contrast' : 'text-ink-subtle'
                      }`}
                    >
                      {division.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  useScrollAnimation();

  return (
    <div className="page-enter">
      <Seo
        meta={{
          title: 'About Hollingshead Harbor | The Marine Arm of SRM',
          description:
            'How a backyard ready-mix plant became a national producer, and where the harbors, crews, and barges of Hollingshead Harbor sit inside the SRM family.',
          canonical: `${SITE_ORIGIN}/about`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
          breadcrumb: [{ name: 'About Us', path: '/about' }],
        }}
      />
      <HeroSection subtitle={HERO.subtitle}>
        <h1 className="hero-title">{HERO.title}</h1>
      </HeroSection>
      <Breadcrumbs trail={[{ name: 'About Us', path: '/about' }]} />
      <WhatWeDoSection />
      <BeginningSection />
      <QuoteSection />
      <CoreValuesSection />
      <SrmFamilySection />
    </div>
  );
}

export default About;
