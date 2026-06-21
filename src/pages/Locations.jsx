import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import LocationMap from '../components/LocationMap';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import { SALES_REP_URL } from '../constants/urls';
import locations from '../data/locations.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

const STATE_NAMES = {
  AL: 'Alabama',
  FL: 'Florida',
  MI: 'Michigan',
  OH: 'Ohio',
  TN: 'Tennessee',
  TX: 'Texas',
};

function normalize(value) {
  return value.toLowerCase();
}

function filterLocations(rows, { stateCode, query }) {
  const needle = normalize(query.trim());
  return rows.filter((loc) => {
    const stateMatch = stateCode === 'all' || loc.state === stateCode;
    if (!stateMatch) return false;
    if (!needle) return true;
    return normalize(loc.name).includes(needle) || normalize(loc.city).includes(needle);
  });
}

function StateChip({ label, count, isActive, onClick, tone }) {
  const activeClasses =
    tone === 'red'
      ? 'bg-red-600 text-white shadow-card'
      : 'bg-navy-800 text-white shadow-card';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-eyebrow transition-colors duration-200 ${
        isActive ? activeClasses : 'bg-white text-navy-800 hover:bg-navy-50 border border-navy-100'
      }`}
    >
      {label}
      <span className={`text-[10px] ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
        ({count})
      </span>
    </button>
  );
}

function SearchAndFilterBar({ query, onQueryChange, stateCode, onStateChange, states, totals }) {
  const hasFilter = stateCode !== 'all' || query !== '';
  return (
    <section className="border-b border-navy-100 bg-white py-10">
      <div className="container-page">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <Icon name="search" className="h-5 w-5" />
            </span>
            <input
              type="search"
              placeholder="Search by harbor name or city"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              className="w-full rounded-full border border-navy-100 bg-mist-50/60 py-3 pl-12 pr-12 text-sm text-ink placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-navy-800"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <StateChip
              label="All"
              count={totals.all}
              isActive={stateCode === 'all'}
              onClick={() => onStateChange('all')}
              tone="navy"
            />
            {states.map((state) => (
              <StateChip
                key={state}
                label={state}
                count={totals.byState[state]}
                isActive={stateCode === state}
                onClick={() => onStateChange(state)}
                tone="red"
              />
            ))}
          </div>
        </div>

        {hasFilter && (
          <div className="mt-5 flex items-center gap-4 text-sm text-gray-500">
            <span>
              Showing <span className="font-semibold text-ink">{totals.filtered}</span> of{' '}
              {totals.all}
            </span>
            <button
              type="button"
              onClick={() => {
                onStateChange('all');
                onQueryChange('');
              }}
              className="inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-700"
            >
              <Icon name="close" className="h-4 w-4" />
              Clear
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function LocationRow({ location, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(location)}
      className={`group relative block w-full border-b border-navy-50 px-5 py-4 text-left transition-colors duration-200 ${
        isSelected ? 'bg-red-50' : 'bg-white hover:bg-mist-50'
      }`}
    >
      {isSelected && (
        <span className="absolute inset-y-0 left-0 w-[3px] bg-red-600" aria-hidden="true" />
      )}
      <div className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
            isSelected ? 'bg-red-600 text-white' : 'bg-navy-50 text-navy-800 group-hover:bg-navy-800 group-hover:text-white'
          }`}
        >
          <Icon name="pin" className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="truncate font-display text-base font-bold tracking-tight text-ink">
            {location.name}
          </h4>
          <p className="text-sm text-gray-500">
            {location.city}, {location.state}
          </p>
          {location.phone && (
            <a
              href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
              onClick={(event) => event.stopPropagation()}
              className="mt-1 inline-block text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              {location.phone}
            </a>
          )}
        </div>
        <Icon
          name="chevron-right"
          className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
            isSelected ? 'text-red-600 translate-x-0.5' : 'text-gray-300 group-hover:text-navy-800'
          }`}
        />
      </div>
    </button>
  );
}

function HarborSidebar({ stateCode, filteredLocations, selectedLocation, onSelect, onReset }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
      <div className="bg-navy-900 px-5 py-4 text-white">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-lg font-bold tracking-tight text-white">
            {stateCode === 'all' ? 'All harbors' : STATE_NAMES[stateCode] ?? stateCode}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-white/65">
            {filteredLocations.length}
            {filteredLocations.length === 1 ? ' harbor' : ' harbors'}
          </span>
        </div>
      </div>
      <div className="max-h-[460px] overflow-y-auto">
        {filteredLocations.length === 0 ? (
          <div className="p-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist-50 text-gray-400">
              <Icon name="pin" className="h-7 w-7" />
            </div>
            <p className="text-gray-500">No harbors match those filters.</p>
            <button
              type="button"
              onClick={onReset}
              className="mt-4 text-sm font-semibold text-red-600 hover:text-red-700"
            >
              Show all harbors
            </button>
          </div>
        ) : (
          filteredLocations.map((location) => (
            <LocationRow
              key={location.id}
              location={location}
              isSelected={selectedLocation?.id === location.id}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </div>
  );
}

function NeedShippingSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-hull-deep p-12 md:p-20 scroll-animate">
          <div className="pattern-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionBadge color="light">Get started</SectionBadge>
              <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-white md:text-5xl">
                Need shipping?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Tell us about your cargo and your timeline. We'll get you talking with the
                regional rep who knows the right harbor for the job.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={SALES_REP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-card transition-colors hover:bg-red-700"
              >
                Find a sales rep
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  useScrollAnimation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [stateCode, setStateCode] = useState('all');
  const [query, setQuery] = useState('');

  const states = useMemo(
    () => [...new Set(locations.map((loc) => loc.state))].sort(),
    []
  );

  const totals = useMemo(() => {
    const byState = locations.reduce((acc, loc) => {
      acc[loc.state] = (acc[loc.state] ?? 0) + 1;
      return acc;
    }, {});
    return { all: locations.length, byState };
  }, []);

  const filteredLocations = useMemo(
    () => filterLocations(locations, { stateCode, query }),
    [stateCode, query]
  );

  const resetFilters = () => {
    setStateCode('all');
    setQuery('');
  };

  return (
    <div>
      <HeroSection
        title="Our harbors."
        subtitle={`${locations.length} strategic harbor locations across ${states.length} states.`}
      />

      <SearchAndFilterBar
        query={query}
        onQueryChange={setQuery}
        stateCode={stateCode}
        onStateChange={setStateCode}
        states={states}
        totals={{ ...totals, filtered: filteredLocations.length }}
      />

      <section className="bg-mist-50/60 py-12">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="relative z-0 h-[560px] overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
                <LocationMap
                  locations={filteredLocations}
                  selectedLocation={selectedLocation}
                  onMarkerClick={setSelectedLocation}
                />
              </div>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2">
              <HarborSidebar
                stateCode={stateCode}
                filteredLocations={filteredLocations}
                selectedLocation={selectedLocation}
                onSelect={setSelectedLocation}
                onReset={resetFilters}
              />
            </div>
          </div>
        </div>
      </section>

      <NeedShippingSection />
    </div>
  );
}

export default Locations;
