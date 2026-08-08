import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PORT_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'FL', name: 'Florida' },
  { code: 'MI', name: 'Michigan' },
  { code: 'OH', name: 'Ohio' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
];

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
  { figure: '13', label: 'Strategic harbors' },
  { figure: '6', label: 'States covered' },
  { figure: '24/7', label: 'Dispatch & ops' },
  { figure: '100+', label: 'SRM acquisitions' },
];

const TRUST_FIGURES = [
  { figure: '13', label: 'Harbors' },
  { figure: '6', label: 'States' },
  { figure: '24/7', label: 'Operations' },
  { figure: '1999', label: 'Family founded' },
];

/**
 * Figure over label in equal columns, divided by hairlines. The labels differ
 * in length, so setting one beside its figure lets the longer ones wrap and
 * pulls the row out of alignment; stacking keeps every column the same height.
 */
function TrustBar() {
  return (
    <section className="border-b border-navy-100 bg-mist-50/60">
      <div className="container-page">
        <dl className="grid grid-cols-2 sm:grid-cols-4">
          {TRUST_FIGURES.map((item, index) => (
            <div
              key={item.label}
              className={`px-2 py-7 text-center sm:px-4 ${
                index > 0 ? 'border-l border-navy-100' : ''
              } ${index === 2 ? 'border-l-0 sm:border-l' : ''}`}
            >
              <dt className="stat-figure text-3xl md:text-4xl">{item.figure}</dt>
              <dd className="mt-2 text-[11px] font-semibold uppercase tracking-eyebrow text-gray-500">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function PortStateChips() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {PORT_STATES.map((state) => (
        <span
          key={state.code}
          title={state.name}
          className="inline-flex items-center gap-2 rounded-md border border-navy-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-eyebrow text-navy-800"
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
    <section className="relative bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 scroll-animate-left">
            <SectionBadge>Why Hollingshead</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-4xl ">
              We move what matters by water
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
              From Alabama to Texas, our harbors keep bulk dry cargo moving on schedule and on terms
              that work for your operation.
            </p>

            <div className="mt-8">
              <span className="eyebrow mb-3">Where we operate</span>
              <PortStateChips />
            </div>

            <Link
              to="/equipment"
              className="group mt-10 inline-flex items-center gap-3 font-semibold text-navy-800 transition-colors hover:text-red-600"
            >
              See our equipment
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-white transition-colors group-hover:bg-red-600">
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {VALUE_PILLARS.map((pillar, index) => {
                const isHero = index === 0;
                return (
                  <article
                    key={pillar.title}
                    className={`scroll-animate stagger-${index + 1} group flex h-full flex-col rounded-lg p-7 transition-all duration-300 ease-out-quint hover:-translate-y-0.5 hover:shadow-card-hover ${
                      isHero
                        ? 'sm:col-span-2 border border-white/10 bg-navy-900 text-white'
                        : 'border border-navy-100 bg-white hover:border-navy-200'
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isHero
                          ? 'bg-white/10 text-white'
                          : 'bg-navy-50 text-navy-800 group-hover:bg-navy-800 group-hover:text-white'
                      }`}
                    >
                      <Icon name={pillar.icon} className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3
                      className={`mt-5 font-display text-xl font-bold tracking-tight ${
                        isHero ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`mt-2 text-[15px] leading-relaxed ${
                        isHero ? 'text-white/75' : 'text-gray-600'
                      }`}
                    >
                      {pillar.body}
                    </p>
                  </article>
                );
              })}

              <article className="scroll-animate stagger-4 group relative flex flex-col gap-6 overflow-hidden rounded-lg bg-hull-deep p-7 text-white sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="pattern-grid-dark absolute inset-0 opacity-40" />
                <div className="relative">
                  <span className="eyebrow eyebrow-on-dark">Now hiring</span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">
                    Wheelmen and deckhands
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Applications go straight to our hiring office.
                  </p>
                </div>
                <Link
                  to="/careers"
                  className="relative inline-flex w-fit shrink-0 items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Open positions
                  <Icon name="arrow-right" className="h-4 w-4" />
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
    <section className="bg-mist-50/60 py-20 md:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl bg-hull-deep px-8 py-16 text-white md:px-16 md:py-24 scroll-animate">
          <div className="pattern-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />

          <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionBadge color="light">Our network</SectionBadge>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl">
                Thirteen ports across six states
              </h2>
              <p className="mt-6 max-w-lg text-lg text-white/75">
                Harbors in six states put your cargo on the major inland waterways and Gulf shipping
                routes without a long haul first.
              </p>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-red-600 hover:text-white"
              >
                Contact us
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {NETWORK_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm scroll-animate stagger-${index + 1}`}
                  >
                    <div className="stat-figure text-3xl text-white md:text-4xl">{stat.figure}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-eyebrow text-white/65">
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
    <section className="relative bg-sand-100 py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center scroll-animate">
          <SectionBadge color="red">Get started</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Talk to us about your cargo
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Call us with your route and tonnage. We will tell you what we can move and when.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-primary group">
              Contact us
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link to="/about" className="btn btn-outline">
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
    <div>
      <HeroSection
        title="Marine transportation, built on hard work"
        subtitle="Bulk dry cargo, vessel and barge charter, and full-service ports. The marine arm of SRM, family-owned since 1999."
        ctaText="See our equipment"
        ctaLink="/equipment"
        secondaryText="Careers"
        secondaryLink="/careers"
      />
      <TrustBar />
      <WhyHollingsheadSection />
      <NetworkSection />
      <GetStartedSection />
    </div>
  );
}

export default Home;
