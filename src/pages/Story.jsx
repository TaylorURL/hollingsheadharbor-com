import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import useScrollAnimation from '../hooks/useScrollAnimation';

const GROWTH_STATS = [
  { figure: '100+', label: 'Acquisitions', tone: 'navy' },
  { figure: '13', label: 'Port locations', tone: 'red' },
  { figure: '#1', label: 'Service focus', tone: 'hull' },
  { figure: '24/7', label: 'Operations', tone: 'navy' },
];

const STAT_TONES = {
  navy: 'bg-navy-800 text-white',
  red: 'bg-red-600 text-white',
  hull: 'bg-hull text-white',
  light: 'bg-white border border-navy-100 text-ink',
};

function StatTile({ figure, label, tone = 'navy' }) {
  const isLight = tone === 'light';
  return (
    <div className={`rounded-3xl p-7 ${STAT_TONES[tone]}`}>
      <div className={`stat-figure text-5xl ${isLight ? 'text-ink' : 'text-white'}`}>{figure}</div>
      <div
        className={`mt-2 text-xs font-semibold uppercase tracking-eyebrow ${
          isLight ? 'text-gray-500' : 'text-white/70'
        }`}
      >
        {label}
      </div>
    </div>
  );
}

function BeginningSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 scroll-animate-left">
            <SectionBadge color="red">The beginning</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              From a <span className="text-red-600">backyard</span>
              <br />
              to the nation.
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
                up the plant in their backyard. He attended an auction in Indiana and purchased
                five used concrete trucks for $10,000 each. Only three of them made it back to
                Smyrna.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 scroll-animate-right">
            <div className="relative">
              <div className="overflow-hidden rounded-4xl shadow-card-hover">
                <img
                  src="/company-team.jpg"
                  alt="The Hollingshead family"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-red-600 px-6 py-5 text-white shadow-card-hover">
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
    <section className="relative overflow-hidden bg-sand-100 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 pattern-grid opacity-50"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center scroll-animate">
          <SectionBadge color="red">The American dream</SectionBadge>
          <blockquote className="mt-8 font-display text-3xl font-black leading-[1.15] tracking-tight text-ink md:text-4xl lg:text-5xl">
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

function GrowthSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4 scroll-animate">
          {GROWTH_STATS.map((stat) => (
            <StatTile key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1 scroll-animate-left">
            <div className="overflow-hidden rounded-4xl shadow-card-hover">
              <img
                src="/growth-timeline.jpg"
                alt="SRM company growth"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 scroll-animate-right">
            <SectionBadge>Growth</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] tracking-tight text-ink md:text-5xl">
              From local
              <br />
              to <span className="text-navy-800">national</span>.
            </h2>
            <div className="mt-6 max-w-md space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                In 2012, SRM began to focus on growth through acquisition. Since that time, over
                100 acquisitions have been completed across the nation.
              </p>
              <p>
                Today, SRM has grown from a small local producer to one of the largest ready-mix
                producers in the country. Our mission to provide quality concrete and unmatched
                service hasn't changed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HarborChapterSection() {
  return (
    <section className="bg-mist-50/60 py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl border border-navy-100 bg-white shadow-card scroll-animate">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-12 md:p-16 lg:p-20">
              <SectionBadge>Hollingshead Harbor</SectionBadge>
              <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-ink md:text-5xl">
                Marine transportation,
                <br />
                done right.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-700">
                Hollingshead Harbor is the marine transportation arm of SRM — moving bulk dry
                cargo through a network of harbors that spans the inland river system and the
                Gulf coast.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/team"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 font-semibold text-white shadow-card transition-colors hover:bg-navy-900"
                >
                  Meet our team
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-7 py-3.5 font-semibold text-navy-800 transition-colors hover:border-navy-800 hover:bg-navy-50"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden bg-hull-deep p-12 text-white lg:col-span-5 lg:p-16">
              <div className="pattern-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <div className="stat-figure text-4xl text-white">13</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-eyebrow text-white/70">
                    Harbors
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <div className="stat-figure text-4xl text-white">24/7</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-eyebrow text-white/70">
                    Service
                  </div>
                </div>
                <div className="col-span-2 rounded-2xl bg-red-600 p-5 text-center">
                  <div className="stat-figure text-3xl text-white">Nationwide</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-eyebrow text-white/85">
                    Coverage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection
        title="Our story."
        subtitle="A family-owned American story — built on faith, hard work, and dedication."
      />
      <BeginningSection />
      <QuoteSection />
      <GrowthSection />
      <HarborChapterSection />
    </div>
  );
}

export default Story;
