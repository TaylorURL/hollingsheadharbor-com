import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionBadge from '../components/SectionBadge';
import Icon from '../components/Icon';
import ApplicationForm from '../components/ApplicationForm';
import positions from '../data/positions.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

const APPLICATION_ANCHOR = 'application';

function PositionCard({ position, onApply }) {
  const hasDetail =
    position.summary || position.responsibilities.length > 0 || position.requirements.length > 0;

  return (
    <article className="flex h-full flex-col rounded-lg border border-navy-100 bg-white p-8 shadow-card transition-all duration-300 ease-out-quint hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
          <Icon name="vessel" className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
            {position.title}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-red-600">
            Now hiring
          </span>
        </div>
      </div>

      {position.summary && (
        <p className="mt-6 text-[15px] leading-relaxed text-gray-600">{position.summary}</p>
      )}

      {position.responsibilities.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-eyebrow text-navy-800">
            What you'll do
          </h4>
          <ul className="mt-3 space-y-2">
            {position.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {position.requirements.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-eyebrow text-navy-800">
            What you'll need
          </h4>
          <ul className="mt-3 space-y-2">
            {position.requirements.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => onApply(position.title)}
        className={`group inline-flex items-center gap-2 self-start rounded-md bg-navy-800 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-red-600 ${
          hasDetail ? 'mt-7' : 'mt-6'
        }`}
      >
        Apply for {position.title}
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </article>
  );
}

function OpenPositionsSection({ onApply }) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Open positions</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Wheelmen and deckhands
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Applications go straight to our hiring office. We read every one.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {positions.map((position, index) => (
            <div key={position.id} className={`scroll-animate stagger-${index + 1}`}>
              <PositionCard position={position} onApply={onApply} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationSection({ selectedPosition, formKey }) {
  return (
    <section id={APPLICATION_ANCHOR} className="scroll-mt-28 bg-mist-50/60 py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <SectionBadge color="red">Employment application</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Apply online
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The same application we use on paper. It takes about fifteen minutes. Have your
              employment history with you before you start.
            </p>
          </div>

          <ApplicationForm key={formKey} defaultPosition={selectedPosition} />
        </div>
      </div>
    </section>
  );
}

function Careers() {
  useScrollAnimation();
  const [selectedPosition, setSelectedPosition] = useState('');

  // Remounting the form is what makes the position stick when an applicant
  // picks a card, since the choice seeds the form's own state.
  const [formKey, setFormKey] = useState(0);

  const scrollToApplication = () => {
    document.getElementById(APPLICATION_ANCHOR)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApply = (title) => {
    setSelectedPosition(title);
    setFormKey((previous) => previous + 1);
    scrollToApplication();
  };

  return (
    <div>
      <HeroSection
        title="Careers"
        subtitle="Open positions for wheelmen and deckhands. Apply online in about fifteen minutes."
        ctaText="Apply now"
        onCtaClick={scrollToApplication}
      />
      <OpenPositionsSection onApply={handleApply} />
      <ApplicationSection selectedPosition={selectedPosition} formKey={formKey} />
    </div>
  );
}

export default Careers;
