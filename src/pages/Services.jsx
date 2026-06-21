import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import { SALES_REP_URL } from '../constants/urls';
import services from '../data/services.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CAPABILITY_TAGS = ['Bulk cargo', 'Vessel hire', 'Barge charter', 'Inland & Gulf', 'Logistics'];

function ServicesGridSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 scroll-animate-left">
            <SectionBadge color="red">What we offer</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-ink md:text-5xl">
              Maritime
              <br />
              <span className="text-navy-800">solutions</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
              From bulk dry cargo shipping to custom logistics planning, Hollingshead Harbor brings
              the vessels, the crews, and the harbors to keep your material moving.
            </p>

            <div className="mt-8">
              <span className="eyebrow mb-3">Capabilities</span>
              <div className="flex flex-wrap gap-2">
                {CAPABILITY_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-eyebrow text-navy-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={SALES_REP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 font-semibold text-navy-800 transition-colors hover:text-red-600"
            >
              Get a custom plan
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-white transition-colors group-hover:bg-red-600">
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {services.map((service, index) => (
                <div key={service.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadyToStartSection() {
  return (
    <section className="bg-mist-50/60 py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl border border-navy-100 bg-white p-12 md:p-20 scroll-animate">
          <div className="pattern-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-red-600/5 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <SectionBadge>Get started</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
              Ready to get moving?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Tell us about your cargo and your timeline. We'll match you with the regional rep
              who knows the right harbor and the right vessel for the job.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SALES_REP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-card-hover"
              >
                Find a sales rep
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-7 py-3.5 font-semibold text-navy-800 transition-colors hover:border-navy-800 hover:bg-navy-50"
              >
                <Icon name="pin" className="h-4 w-4" />
                Find a harbor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection
        title="Our services."
        subtitle="Marine transportation, vessel and barge charter, and full-service ports — the way SRM moves cargo."
      />
      <ServicesGridSection />
      <ReadyToStartSection />
    </div>
  );
}

export default Services;
