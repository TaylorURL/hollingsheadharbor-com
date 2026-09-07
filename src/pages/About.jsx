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
      className="scroll-mt-[var(--header-offset-wide)] relative overflow-hidden bg-surface py-20 md:py-24"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="scroll-animate-left">
            <SectionBadge color="red">What we do</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-4xl">
              Moving cargo nationwide
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              Hollingshead Harbor moves bulk dry cargo through a network of ports in Alabama,
              Florida, Michigan, Ohio, Tennessee, and Texas, as part of the SRM family.
            </p>

            <ul className="mt-10 space-y-3">
              {SERVICE_PILLARS.map((pillar) => (
                <li
                  key={pillar.title}
                  className="group flex items-start gap-4 rounded-lg border border-line bg-surface-raised p-5 transition-colors duration-200 hover:border-line-strong hover:bg-surface-cool"
                >
                  <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface-accent text-accent transition-colors group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{pillar.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative scroll-animate-right">
            <div className="overflow-hidden rounded-xl shadow-card-hover">
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
            <div className="absolute -bottom-8 -left-6 rounded-lg border border-line bg-surface-raised p-6 shadow-card-hover md:p-7">
              <div className="flex items-center gap-5">
                <div className="stat-figure text-4xl text-accent-contrast">25+</div>
                <div>
                  <div className="font-display text-lg font-bold tracking-tight text-ink">
                    Years
                  </div>
                  <div className="text-sm text-ink-subtle">in the harbors</div>
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
      className="scroll-mt-[var(--header-offset-wide)] bg-surface-cool py-20 md:py-24"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 scroll-animate-left">
            <SectionBadge color="red">The beginning</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl ">
              From a backyard to the nation
            </h2>
            <div className="mt-8 max-w-measure space-y-6 text-lg leading-relaxed text-ink-body">
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
              <div className="overflow-hidden rounded-xl shadow-card-hover">
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
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-red-600 px-6 py-5 text-white shadow-card-hover">
                <div className="stat-figure text-4xl text-white">1999</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-eyebrow text-white/80">
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
    <section className="relative overflow-hidden bg-surface-warm py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 pattern-grid opacity-50"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <figure className="mx-auto max-w-4xl text-center scroll-animate">
          <SectionBadge color="red">The American dream</SectionBadge>
          <blockquote className="mt-8 font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
            <span className="text-accent-contrast">&ldquo;</span>
            We started with nothing. No money, no customers, just a{' '}
            <span className="text-accent-contrast">will to work hard</span> and a belief that we
            could achieve anything.
            <span className="text-accent-contrast">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-10">
            <span className="block font-display text-lg font-bold tracking-tight text-ink">
              Mike Hollingshead
            </span>
            <span className="mt-1 block text-sm uppercase tracking-eyebrow text-ink-subtle">
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
      className="scroll-mt-[var(--header-offset-wide)] relative overflow-hidden bg-surface py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 pattern-grid opacity-60"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="mx-auto mb-16 max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Core values</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            What we stand for
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Four principles set when the company started in 1999, and still how we run every shift
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, index) => (
            <article
              key={value.title}
              className={`scroll-animate stagger-${index + 1} group flex flex-col rounded-lg border border-line bg-surface-raised p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out-quint hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card-hover`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-red-600">
                <Icon name={value.icon} className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-prose leading-relaxed text-ink-muted">{value.body}</p>
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
      className="scroll-mt-[var(--header-offset-wide)] bg-surface-cool py-20 md:py-24"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 scroll-animate">
          <div className="lg:col-span-5">
            <SectionBadge color="red">The SRM family</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The SRM family
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
              Founded by the Hollingshead family in 1999, our companies work together to deliver
              concrete, materials, and the transportation that keeps both moving.
            </p>
            <Link
              to="/careers"
              className="pressable group mt-8 inline-flex items-center gap-3 font-semibold text-accent hover:text-accent-contrast"
            >
              Join the Crew
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-white transition-colors group-hover:bg-red-600">
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SRM_DIVISIONS.map((division) => (
                <div
                  key={division.name}
                  className={`group flex items-start gap-4 rounded-lg border p-5 transition-colors duration-200 ${
                    division.active
                      ? 'border-danger/40 bg-danger-surface'
                      : 'border-line bg-surface-raised hover:border-line-strong'
                  }`}
                >
                  <span
                    className={`mt-1 h-2 w-2 rounded-full ${
                      division.active ? 'bg-red-600' : 'bg-navy-800'
                    }`}
                  />
                  <div>
                    <div className="font-display text-base font-bold tracking-tight text-ink">
                      {division.name}
                    </div>
                    <div
                      className={`mt-1 text-xs font-semibold uppercase tracking-eyebrow ${
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
