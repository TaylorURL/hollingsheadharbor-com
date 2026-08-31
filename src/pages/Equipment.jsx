import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import ArtPlate from '../components/ArtPlate';
import equipment from '../data/equipment.json';
import { PHONE_DISPLAY, PHONE_NUMBER, SITE_ORIGIN } from '../constants/urls';
import Breadcrumbs from '../components/Breadcrumbs';
import Seo from '../components/Seo';
import { SHARE_IMAGE } from '../constants/seo';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HERO = {
  title: 'Equipment',
  subtitle:
    'The fleet is towboats and barges, moving bulk cargo on the inland river system and the Gulf.',
};

function SpecRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink-subtle">
        {label}
      </span>
      <span className="figure-tabular text-right text-sm font-semibold text-ink">{value}</span>
    </div>
  );
}

function EquipmentCard({ item }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface-raised shadow-card transition-[transform,box-shadow] duration-300 ease-out-quint hover:-translate-y-0.5 hover:shadow-card-hover">
      {item.image && (
        <img
          src={item.image}
          srcSet={item.srcset}
          sizes="(min-width: 1024px) 400px, 90vw"
          alt={`${item.name}, part of the Hollingshead Harbor fleet`}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-7">
        {item.category && (
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-accent-contrast">
            {item.category}
          </span>
        )}
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
          {item.name}
        </h3>
        {item.description && (
          <p className="mt-3 text-prose leading-relaxed text-ink-muted">{item.description}</p>
        )}
        {item.specs && Object.keys(item.specs).length > 0 && (
          <div className="mt-6">
            {Object.entries(item.specs).map(([label, value]) => (
              <SpecRow key={label} label={label} value={value} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function FleetSection() {
  return (
    <section className="section-deferred bg-surface py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">The fleet</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            What we run
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Dimensions, horsepower, and capacity for each vessel and barge in the fleet.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, index) => (
            <div key={item.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
              <EquipmentCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeOperateSection() {
  return (
    <section className="section-deferred bg-surface-cool py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-measure scroll-animate">
          <SectionBadge color="red">What we operate</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Towboats and barges, on rivers and the Gulf
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Hollingshead Harbor runs towboats and dry cargo barges through 13 harbors across 6
            states.
          </p>
          <p className="mt-5 text-prose leading-relaxed text-ink-muted">
            The work is bulk dry cargo, vessel charter, and barge charter, on the inland river
            system and the Gulf Intracoastal Waterway.
          </p>
          <p className="mt-5 text-prose leading-relaxed text-ink-muted">
            Equipment is assigned to a route rather than picked off a shelf.
          </p>
          <p className="mt-5 text-prose leading-relaxed text-ink-muted">
            Draft, air draft, tonnage, and the lock and bridge clearances along the way decide which
            boat and which barges fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-outline">
              Contact Us
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

/**
 * What the page shows while the fleet list is empty. The plate takes
 * md:order-first, so it leads on a wide screen and falls under the copy on a
 * narrow one, where the ask is still read first.
 */
function SpecsOnRequestSection() {
  return (
    <section className="section-deferred bg-surface py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto grid max-w-4xl items-center gap-10 rounded-xl border border-line bg-surface-cool p-10 shadow-card md:grid-cols-2 md:gap-14 md:p-14 scroll-animate">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Specifications on request
            </h2>
            <p className="mt-4 text-prose leading-relaxed text-ink-muted">
              Call or email with your route and tonnage. We will send dimensions, horsepower, and
              availability for the equipment that fits.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          <ArtPlate name="towboat" className="w-full text-accent md:order-first" />
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  useScrollAnimation();

  return (
    <div className="page-enter">
      <Seo
        meta={{
          title: 'Equipment | Hollingshead Harbor Towboats and Barges',
          description:
            'Towboats and barges moving bulk cargo on the inland river system and the Gulf. Ask for the dimensions, horsepower, and availability that fit your route.',
          canonical: `${SITE_ORIGIN}/equipment`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
          breadcrumb: [{ name: 'Equipment', path: '/equipment' }],
        }}
      />
      <HeroSection subtitle={HERO.subtitle}>
        <h1 className="hero-title">{HERO.title}</h1>
      </HeroSection>
      <Breadcrumbs trail={[{ name: 'Equipment', path: '/equipment' }]} />
      <WhatWeOperateSection />
      {equipment.length > 0 ? <FleetSection /> : <SpecsOnRequestSection />}
    </div>
  );
}

export default Equipment;
