import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import { SALES_REP_URL } from '../constants/urls';
import services from '../data/services.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FEATURED_SERVICES_COUNT = 3;

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
    body: 'On-time delivery and professional maritime logistics you can count on, backed by decades of industry experience.',
  },
  {
    icon: 'clock',
    title: 'On-time shipping',
    body: 'Custom shipping plans tailored to your schedule across our network of inland and coastal harbors.',
  },
  {
    icon: 'users',
    title: 'Expert crews',
    body: 'Skilled maritime professionals dispatching, loading, and moving cargo every day of the year.',
  },
];

const NETWORK_STATS = [
  { figure: '13', label: 'Strategic harbors' },
  { figure: '6', label: 'States covered' },
  { figure: '24/7', label: 'Dispatch & ops' },
  { figure: '100+', label: 'SRM acquisitions' },
];

function HeroEyebrowFigure({ figure, suffix }) {
  return (
    <span className="stat-figure text-3xl md:text-4xl">
      {figure}
      {suffix && <span className="text-red-600">{suffix}</span>}
    </span>
  );
}

function MarqueeTrustBar() {
  return (
    <section className="border-y border-navy-100 bg-mist-50/60">
      <div className="container-page grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-4">
        <div className="flex items-baseline gap-3">
          <HeroEyebrowFigure figure="13" />
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-gray-500">
            Harbors
          </span>
        </div>
        <div className="flex items-baseline gap-3">
          <HeroEyebrowFigure figure="6" />
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-gray-500">
            States
          </span>
        </div>
        <div className="flex items-baseline gap-3">
          <HeroEyebrowFigure figure="24/7" />
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-gray-500">
            Operations
          </span>
        </div>
        <div className="flex items-baseline gap-3">
          <HeroEyebrowFigure figure="1999" />
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-gray-500">
            Family founded
          </span>
        </div>
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
          className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-eyebrow text-navy-800"
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
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 scroll-animate-left">
            <SectionBadge>Why Hollingshead</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
              We move what
              <br />
              <span className="text-red-600">matters</span> by water.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
              From Alabama to Texas, our harbors keep bulk dry cargo moving — efficiently, on
              schedule, and on terms that work for your operation.
            </p>

            <div className="mt-8">
              <span className="eyebrow mb-3">Where we operate</span>
              <PortStateChips />
            </div>

            <Link
              to="/services"
              className="group mt-10 inline-flex items-center gap-3 font-semibold text-navy-800 transition-colors hover:text-red-600"
            >
              See what we ship
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-white transition-colors group-hover:bg-red-600">
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {VALUE_PILLARS.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`scroll-animate stagger-${index + 1} group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:border-navy-200 hover:shadow-card-hover ${
                    index === 0 ? 'sm:col-span-2 bg-navy-900 text-white' : ''
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      index === 0
                        ? 'bg-white/10 text-white'
                        : 'bg-navy-50 text-navy-800 group-hover:bg-navy-800 group-hover:text-white'
                    }`}
                  >
                    <Icon name={pillar.icon} className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3
                    className={`mt-5 font-display text-xl font-bold tracking-tight ${
                      index === 0 ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`mt-2 text-[15px] leading-relaxed ${
                      index === 0 ? 'text-white/75' : 'text-gray-600'
                    }`}
                  >
                    {pillar.body}
                  </p>
                </article>
              ))}

              <article className="scroll-animate stagger-4 group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-hull-deep p-7 text-white">
                <div className="pattern-grid-dark absolute inset-0 opacity-40" />
                <div className="relative">
                  <span className="eyebrow eyebrow-on-dark">Talk to a rep</span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                    Ready to ship?
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Connect with the regional rep who knows your harbor.
                  </p>
                </div>
                <a
                  href={SALES_REP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Find a sales rep
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedServicesSection() {
  const featured = services.slice(0, FEATURED_SERVICES_COUNT);
  return (
    <section className="relative bg-mist-50/60 py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between scroll-animate">
          <div>
            <SectionBadge color="red">Services</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
              What we do best
            </h2>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              Six core services that keep aggregates, cement, and construction materials moving
              across the inland river system and the Gulf.
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 self-start text-sm font-semibold uppercase tracking-eyebrow text-navy-800 transition-colors hover:text-red-600"
          >
            All services
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white transition-colors group-hover:bg-red-600">
              <Icon name="arrow-right" className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((service, index) => (
            <div key={service.id} className={`scroll-animate stagger-${index + 1}`}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NetworkSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-hull-deep px-8 py-16 text-white md:px-16 md:py-24 scroll-animate">
          <div className="pattern-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" aria-hidden="true" />

          <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionBadge color="light">Our network</SectionBadge>
              <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Thirteen ports.
                <br />
                <span className="text-red-500">One mission.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg text-white/75">
                Strategic harbors across six states give your cargo direct access to major inland
                waterways and Gulf shipping routes.
              </p>
              <Link
                to="/locations"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-red-600 hover:text-white"
              >
                Explore the map
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
                    className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm scroll-animate stagger-${index + 1}`}
                  >
                    <div className="stat-figure text-white text-4xl md:text-5xl">{stat.figure}</div>
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
    <section className="relative bg-sand-100 py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center scroll-animate">
          <SectionBadge color="red">Get started</SectionBadge>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
            Let's move your <span className="text-red-600">cargo</span>.
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Connect with a regional rep who knows your harbor. We'll talk volumes, schedule, and
            the most efficient way to get your material from quay to job.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SALES_REP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-card-hover"
            >
              Find a sales rep
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <Link
              to="/story"
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-8 py-4 font-semibold text-navy-800 transition-colors hover:border-navy-800 hover:bg-navy-800 hover:text-white"
            >
              Read our story
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
        title="Marine transportation, built on hard work."
        subtitle="Bulk dry cargo, vessel and barge charter, and full-service ports — the marine arm of SRM, family-owned since 1999."
        ctaText="See our services"
        ctaLink="/services"
      />
      <MarqueeTrustBar />
      <WhyHollingsheadSection />
      <FeaturedServicesSection />
      <NetworkSection />
      <GetStartedSection />
    </div>
  );
}

export default Home;
