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
    body: 'We keep improving the way materials move — smarter, faster, leaner.',
  },
  {
    icon: 'users',
    title: 'Teamwork',
    body: 'From dispatch to the docks, the crew wins together or not at all.',
  },
  {
    icon: 'star',
    title: 'Excellence',
    body: 'We aim for perfect — every shipment, every harbor, every day.',
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
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="scroll-animate-left">
            <SectionBadge color="red">What we do</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] tracking-tight text-ink md:text-5xl">
              Moving cargo <span className="text-navy-800">nationwide</span>.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Hollingshead Harbor moves bulk dry cargo through a network of ports in Alabama,
              Florida, Michigan, Ohio, Tennessee, and Texas — efficient marine transportation as
              part of the SRM family.
            </p>

            <ul className="mt-10 space-y-3">
              {SERVICE_PILLARS.map((pillar) => (
                <li
                  key={pillar.title}
                  className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-colors duration-200 hover:border-navy-300 hover:bg-mist-50"
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
            <div className="overflow-hidden rounded-4xl shadow-card-hover">
              <img
                src="/marine-operations.jpg"
                alt="Marine operations at Hollingshead Harbor"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 rounded-3xl border border-navy-100 bg-white p-6 shadow-card-hover md:p-7">
              <div className="flex items-center gap-5">
                <div className="stat-figure text-5xl text-red-600 md:text-6xl">25+</div>
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

function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden bg-mist-50/80 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 pattern-grid opacity-60"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="mx-auto mb-16 max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Core values</SectionBadge>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
            What we stand for.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Four principles shaped in the back-of-a-pickup days of 1999 — and still how we run
            every shift today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, index) => (
            <article
              key={value.title}
              className={`scroll-animate stagger-${index + 1} group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:border-navy-200 hover:shadow-card-hover`}
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
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 scroll-animate">
          <div className="lg:col-span-5">
            <SectionBadge color="red">The SRM family</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
              The <span className="text-red-600">SRM</span> family.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
              Founded by the Hollingshead family in 1999, our companies work together to deliver
              concrete, materials, and the transportation that keeps both moving.
            </p>
            <Link
              to="/story"
              className="group mt-8 inline-flex items-center gap-3 font-semibold text-navy-800 transition-colors hover:text-red-600"
            >
              Read our story
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
                  className={`group flex items-start gap-4 rounded-2xl border p-5 transition-colors duration-200 ${
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
        title="About Hollingshead Harbor."
        subtitle="Efficient marine transportation — the harbor and shipping arm of the SRM family."
      />
      <WhatWeDoSection />
      <CoreValuesSection />
      <SrmFamilySection />
    </div>
  );
}

export default About;
