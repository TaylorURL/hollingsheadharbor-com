import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import equipment from '../data/equipment.json';
import { PHONE_DISPLAY, PHONE_NUMBER } from '../constants/urls';
import useScrollAnimation from '../hooks/useScrollAnimation';

function SpecRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-navy-100 py-2.5 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-eyebrow text-gray-500">
        {label}
      </span>
      <span className="text-right text-sm font-semibold text-ink">{value}</span>
    </div>
  );
}

function EquipmentCard({ item }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-navy-100 bg-white shadow-card transition-all duration-300 ease-out-quint hover:-translate-y-0.5 hover:shadow-card-hover">
      {item.image && (
        <img src={item.image} alt={item.name} className="aspect-[4/3] w-full object-cover" />
      )}
      <div className="flex flex-1 flex-col p-7">
        {item.category && (
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-red-600">
            {item.category}
          </span>
        )}
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
          {item.name}
        </h3>
        {item.description && (
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{item.description}</p>
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
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">The fleet</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            What we run
          </h2>
          <p className="mt-4 text-lg text-gray-600">
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

function SpecsOnRequestSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl rounded-xl border border-navy-100 bg-mist-50/60 p-10 text-center shadow-card md:p-16 scroll-animate">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-navy-800 text-white">
            <Icon name="vessel" className="h-8 w-8" strokeWidth={1.75} />
          </span>
          <h2 className="mt-7 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Specifications on request
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">
            Call or email with your route and tonnage. We will send dimensions, horsepower, and
            availability for the equipment that fits.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
              <Icon name="phone" className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection
        title="Equipment"
        subtitle="Towboats and barges moving bulk cargo on the inland river system and the Gulf."
      />
      {equipment.length > 0 ? <FleetSection /> : <SpecsOnRequestSection />}
    </div>
  );
}

export default Equipment;
