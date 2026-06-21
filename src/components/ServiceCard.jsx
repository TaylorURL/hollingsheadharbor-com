import Icon from './Icon';
import { SALES_REP_URL } from '../constants/urls';

function ServiceCard({ service }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border-2 border-gray-100 bg-white transition-all duration-500 hover:border-transparent hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative p-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 transition-colors duration-500 group-hover:bg-white/20">
          <Icon
            name={service.icon}
            className="h-8 w-8 text-blue-800 transition-colors duration-500 group-hover:text-white"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-white">
          {service.title}
        </h3>
        <p className="leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-blue-100">
          {service.description}
        </p>
        <a
          href={SALES_REP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-2 font-semibold text-blue-800 transition-colors duration-500 group-hover:text-white"
        >
          <span className="text-sm">Learn more</span>
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
