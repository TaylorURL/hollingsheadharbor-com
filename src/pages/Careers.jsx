import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import SectionBadge from '../components/ui/SectionBadge';
import Icon from '../components/ui/Icon';
import ApplicationForm from '../components/application/ApplicationForm';
import positions from '../data/positions.json';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Seo from '../components/ui/Seo';
import { SHARE_IMAGE } from '../constants/seo';
import { SITE_ORIGIN } from '../constants/urls';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HERO = {
  title: 'Careers',
  subtitle:
    'Wheelman and deckhand positions are open. The application is online and takes about fifteen minutes.',
};

const APPLICATION_ANCHOR = 'application';

function PositionCard({ position, onApply }) {
  const hasDetail =
    position.summary || position.responsibilities.length > 0 || position.requirements.length > 0;

  return (
    <article className="panel flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <span className="icon-tile-solid">
          <Icon name="vessel" className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold text-ink">{position.title}</h3>
          <span className="text-micro uppercase tracking-eyebrow text-accent-contrast">
            Now hiring
          </span>
        </div>
      </div>

      {position.summary && <p className="mt-5 text-prose text-ink-muted">{position.summary}</p>}

      {position.responsibilities.length > 0 && (
        <div className="mt-5">
          <h4 className="text-micro uppercase tracking-eyebrow text-accent">What you'll do</h4>
          <ul className="mt-3 space-y-2">
            {position.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-contrast" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {position.requirements.length > 0 && (
        <div className="mt-5">
          <h4 className="text-micro uppercase tracking-eyebrow text-accent">What you'll need</h4>
          <ul className="mt-3 space-y-2">
            {position.requirements.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-contrast" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => onApply(position.title)}
        className={`btn-secondary group self-start ${hasDetail ? 'mt-6' : 'mt-5'}`}
      >
        Apply for {position.title}
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-base ease-out group-hover:translate-x-0.5"
        />
      </button>
    </article>
  );
}

function OpenPositionsSection({ onApply }) {
  return (
    <section
      id="open-positions"
      className="scroll-mt-[var(--header-offset-wide)] bg-surface py-16 md:py-20"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center scroll-animate">
          <SectionBadge color="red">Open positions</SectionBadge>
          <h2 className="mt-5 section-title">Wheelmen and deckhands</h2>
          <p className="mt-4 section-lead">
            Applications go straight to our hiring office. We read every one.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
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
    <section
      id={APPLICATION_ANCHOR}
      className="scroll-mt-[var(--header-offset-wide)] bg-surface-cool py-16 md:py-20"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <SectionBadge color="red">Employment application</SectionBadge>
            <h2 className="mt-5 section-title">Apply online</h2>
            <p className="mt-4 section-lead">
              The same application we use on paper. It takes about fifteen minutes. Have your
              employment history with you before you start.
            </p>
            <p className="mt-3 text-prose text-ink-muted">
              Questions about a position go to the office:{' '}
              <Link
                to="/contact"
                className="pressable font-semibold text-accent underline underline-offset-4 hover:text-accent-contrast"
              >
                phone and email are on the contact page
              </Link>
              .
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
    <div className="page-enter">
      <Seo
        meta={{
          title: 'Careers | Wheelman and Deckhand Jobs on the Water',
          description:
            'Apply online for wheelman and deckhand work at Hollingshead Harbor. The application is the same one we use on paper and takes about fifteen minutes.',
          canonical: `${SITE_ORIGIN}/careers`,
          openGraph: { type: 'website', image: SHARE_IMAGE },
          breadcrumb: [{ name: 'Careers', path: '/careers' }],
        }}
      />
      <HeroSection subtitle={HERO.subtitle} ctaText="Apply Now" onCtaClick={scrollToApplication}>
        <h1 className="hero-title">{HERO.title}</h1>
      </HeroSection>
      <Breadcrumbs trail={[{ name: 'Careers', path: '/careers' }]} />
      <OpenPositionsSection onApply={handleApply} />
      <ApplicationSection selectedPosition={selectedPosition} formKey={formKey} />
    </div>
  );
}

export default Careers;
