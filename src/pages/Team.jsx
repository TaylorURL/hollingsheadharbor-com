import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import { CAREERS_URL } from '../constants/urls';
import team from '../data/team.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BENEFITS = [
  {
    icon: 'heart',
    title: 'Health &amp; dental',
    body: 'Comprehensive coverage for you and your family.',
  },
  {
    icon: 'clock',
    title: 'Flexible PTO',
    body: 'Generous time off to recharge between hauls.',
  },
  {
    icon: 'currency',
    title: '401(k) match',
    body: 'Invest in your future with company matching.',
  },
  {
    icon: 'arrow-up-right',
    title: 'Career growth',
    body: 'Clear paths into operations, dispatch, and leadership.',
  },
];

function LeadershipSection() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Leadership</SectionBadge>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
            Meet our leaders.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The Hollingshead family runs the harbor like they've always run the business — hands on,
            close to the work, and accountable to the people doing it.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={member.id}
              className={`scroll-animate stagger-${index + 1} group overflow-hidden rounded-3xl border border-navy-100 bg-white transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:shadow-card-hover`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out-quint group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-hull/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    {member.name}
                  </h3>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-eyebrow text-red-400">
                    {member.title}
                  </div>
                </div>
              </div>
              <div className="border-t border-navy-100 p-6">
                <p className="text-[15px] leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="relative overflow-hidden bg-sand-100 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 pattern-grid opacity-50"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 scroll-animate-left">
            <SectionBadge>Careers</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] tracking-tight text-ink md:text-5xl">
              Join the <span className="text-red-600">crew</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
              We're growing fast and looking for hardworking people across operations, dispatch,
              and the docks. Real jobs, real benefits, real career paths.
            </p>
            <a
              href={CAREERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-card-hover"
            >
              View opportunities
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="lg:col-span-7 scroll-animate-right">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`stagger-${index + 1} group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:border-navy-200 hover:shadow-card-hover ${
                    index % 2 === 1 ? 'sm:mt-10' : ''
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Icon name={benefit.icon} className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h4
                    className="mt-5 font-display text-lg font-bold tracking-tight text-ink"
                    dangerouslySetInnerHTML={{ __html: benefit.title }}
                  />
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HistoryCtaSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-hull-deep p-12 md:p-20 scroll-animate">
          <div
            className="pattern-grid-dark absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-25 lg:block"
            style={{ backgroundImage: "url('/team-photo.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 hidden bg-gradient-to-r from-hull-deep via-hull-deep/60 to-transparent lg:block lg:w-1/2" />

          <div className="relative max-w-2xl">
            <SectionBadge color="light">Our history</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl">
              From humble beginnings.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Discover how the Hollingshead family built SRM from a backyard operation into one of
              the nation's largest ready-mix producers — and the marine company that now keeps it
              all moving.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/story"
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-card transition-colors hover:bg-red-700"
              >
                Read our story
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Find a harbor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection
        title="Our team."
        subtitle="The people behind Hollingshead Harbor's success — and the crew we're still building."
      />
      <LeadershipSection />
      <CareersSection />
      <HistoryCtaSection />
    </div>
  );
}

export default Team;
