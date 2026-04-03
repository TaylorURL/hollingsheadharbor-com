import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { SALES_REP_URL } from '../constants/urls';
import services from '../data/services.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Services() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection title="Our Services" subtitle="Marine transportation and logistics solutions" />

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-5 lg:sticky lg:top-32 scroll-animate-left">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                What We Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6">
                Maritime <span className="text-blue-800">Solutions</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                From bulk dry cargo shipping to custom logistics planning, Hollingshead Harbor
                provides the services and expertise to move your materials efficiently.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Bulk Cargo
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Vessel Hire
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Barge Charter
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Logistics
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`scroll-animate stagger-${(index % 4) + 1} ${index === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-50 rounded-[3rem] p-12 md:p-20 overflow-hidden scroll-animate">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(220,38,38,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(42,61,99,0.1),transparent_50%)]"></div>
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-blue-800/10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-red-600/10 rounded-full"></div>

            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
                Connect with our team to discuss your shipping requirements and get a customized
                quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SALES_REP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-10 rounded-full transition-colors shadow-lg shadow-red-600/20"
                >
                  Find a Sales Rep
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
                <Link
                  to="/locations"
                  className="inline-flex items-center justify-center gap-3 bg-blue-800 hover:bg-blue-900 text-white font-bold py-5 px-10 rounded-full transition-colors"
                >
                  Find a Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
