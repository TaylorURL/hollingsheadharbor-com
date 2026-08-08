import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import useScrollAnimation from '../hooks/useScrollAnimation';

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
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="scroll-animate-left">
            <SectionBadge color="red">What we do</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-4xl">
              Moving cargo nationwide
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Hollingshead Harbor moves bulk dry cargo through a network of ports in Alabama,
              Florida, Michigan, Ohio, Tennessee, and Texas, as part of the SRM family.
            </p>

            <ul className="mt-10 space-y-3">
              {SERVICE_PILLARS.map((pillar) => (
                <li
                  key={pillar.title}
                  className="group flex items-start gap-4 rounded-lg border border-navy-100 bg-white p-5 transition-colors duration-200 hover:border-navy-300 hover:bg-mist-50"
                >
                  <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-bold tracking-tight text-ink">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{pillar.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative scroll-animate-right">
            <div className="overflow-hidden rounded-xl shadow-card-hover">
              <img
                src="/marine-operations.jpg"
                alt="Marine operations at Hollingshead Harbor"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 rounded-lg border border-navy-100 bg-white p-6 shadow-card-hover md:p-7">
              <div className="flex items-center gap-5">
                <div className="stat-figure text-4xl text-red-600">25+</div>
                <div>
                  <div className="font-display text-lg font-bold tracking-tight text-ink">
                    Years
                  </div>
                  <div className="text-sm text-gray-500">in the harbors</div>
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
    <section className="bg-mist-50/60 py-20 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 scroll-animate-left">
            <SectionBadge color="red">The beginning</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl ">
              From a backyard to the nation
            </h2>
            <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                SRM Concrete is a family-owned and operated ready-mix, aggregates, and cement
                company founded in 1999 by Mike and Melissa Hollingshead.
              </p>
              <p>
                Mike, a concrete finisher, started Smyrna Ready Mix to service his own concrete
                needs because he was not receiving reliable customer service from the local
                ready-mix companies. Both Mike and Melissa grew up with very little, but they had a
                strong work ethic and a will to succeed.
              </p>
              <p>
                They scraped together enough money to buy a ready-mix plant. Mike and his crew put
                up the plant in their backyard. He attended an auction in Indiana and purchased five
                used concrete trucks for $10,000 each. Only three of them made it back to Smyrna.
              </p>
              <p>
                In 2012, SRM began to focus on growth through acquisition. Over 100 acquisitions
                have been completed since, and what started as a small local producer is now one of
                the largest ready-mix producers in the country.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 scroll-animate-right">
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-card-hover">
                <img
                  src="/company-team.jpg"
                  alt="The Hollingshead family"
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
    <section className="relative overflow-hidden bg-sand-100 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 pattern-grid opacity-50"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center scroll-animate">
          <SectionBadge color="red">The American dream</SectionBadge>
          <blockquote className="mt-8 font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
            <span className="text-red-600">&ldquo;</span>
            We started with nothing. No money, no customers — just a{' '}
            <span className="text-red-600">will to work hard</span> and a belief that we could
            achieve anything.
            <span className="text-red-600">&rdquo;</span>
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-800 font-display text-lg font-bold text-white">
              MH
            </div>
            <div className="text-left">
              <div className="font-display text-lg font-bold tracking-tight text-ink">
                Mike Hollingshead
              </div>
              <div className="text-sm uppercase tracking-eyebrow text-gray-500">
                Chairman &amp; Owner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
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
          <p className="mt-4 text-lg text-gray-600">
            Four principles set when the company started in 1999, and still how we run every shift
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, index) => (
            <article
              key={value.title}
              className={`scroll-animate stagger-${index + 1} group flex flex-col rounded-lg border border-navy-100 bg-white p-7 transition-all duration-300 ease-out-quint hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-card-hover`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-red-600">
                <Icon name={value.icon} className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SrmFamilySection() {
  return (
    <section className="bg-mist-50/60 py-20 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 scroll-animate">
          <div className="lg:col-span-5">
            <SectionBadge color="red">The SRM family</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The SRM family
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
              Founded by the Hollingshead family in 1999, our companies work together to deliver
              concrete, materials, and the transportation that keeps both moving.
            </p>
            <Link
              to="/careers"
              className="group mt-8 inline-flex items-center gap-3 font-semibold text-navy-800 transition-colors hover:text-red-600"
            >
              Join the crew
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
                      ? 'border-red-200 bg-red-50'
                      : 'border-navy-100 bg-white hover:border-navy-300'
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
                      className={`mt-0.5 text-xs font-semibold uppercase tracking-eyebrow ${
                        division.active ? 'text-red-600' : 'text-gray-500'
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
    <div>
      <HeroSection
        title="About Hollingshead Harbor"
        subtitle="The harbor and shipping arm of the SRM family."
      />
      <WhatWeDoSection />
      <BeginningSection />
      <QuoteSection />
      <CoreValuesSection />
      <SrmFamilySection />
    </div>
  );
}

export default About;
