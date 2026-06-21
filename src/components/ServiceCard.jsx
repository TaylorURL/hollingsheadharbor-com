import Icon from './Icon';
import { SALES_REP_URL } from '../constants/urls';

function ServiceCard({ service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:border-navy-200 hover:shadow-card-hover">
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-red-600 transition-transform duration-300 ease-out-quint group-hover:scale-x-100" />

      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-navy-800 group-hover:text-white">
        <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.5} />
      </div>

      <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{service.title}</h3>

      <p className="mt-3 flex-grow text-[15px] leading-relaxed text-gray-600">
        {service.description}
      </p>

      <a
        href={SALES_REP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-eyebrow text-red-600 transition-colors duration-200 hover:text-red-700"
      >
        Talk to a rep
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>
    </article>
  );
}

export default ServiceCard;
