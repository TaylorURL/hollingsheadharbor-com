import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Home() {
  useScrollAnimation();
  const featuredServices = services.slice(0, 3);

  return (
    <div>
      <HeroSection
        title="Marine Transportation Solutions"
        subtitle="Efficient bulk dry cargo shipping from our network of ports across the nation. The marine transportation arm of SRM."
        ctaText="View Our Services"
        ctaLink="/services"
      />

      <section className="py-28 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32 scroll-animate-left">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                Why Hollingshead Harbor
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                We Move
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                  What Matters
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                From Alabama to Texas, our network of strategic ports ensures your bulk dry cargo
                reaches its destination efficiently and on time.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-800 border-4 border-white flex items-center justify-center text-white font-bold text-sm">
                    AL
                  </div>
                  <div className="w-12 h-12 rounded-full bg-red-600 border-4 border-white flex items-center justify-center text-white font-bold text-sm">
                    FL
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-800 border-4 border-white flex items-center justify-center text-white font-bold text-sm">
                    MI
                  </div>
                  <div className="w-12 h-12 rounded-full bg-red-600 border-4 border-white flex items-center justify-center text-white font-bold text-sm">
                    TN
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-800 border-4 border-white flex items-center justify-center text-white font-bold text-sm">
                    TX
                  </div>
                </div>
                <span className="text-gray-500 text-sm font-medium">5 Strategic Ports</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="group relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 text-white overflow-hidden scroll-animate stagger-1 hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Reliable Service</h3>
                  <p className="text-blue-100 leading-relaxed">
                    On-time delivery and professional maritime logistics you can count on, backed by
                    decades of industry experience.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-red-600 transition-colors duration-300 scroll-animate stagger-2">
                  <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <svg
                      className="w-7 h-7 text-red-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Shipping</h3>
                  <p className="text-gray-500 text-sm">
                    Custom shipping plans tailored to your schedule.
                  </p>
                </div>

                <div className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-800 transition-colors duration-300 scroll-animate stagger-3">
                  <div className="w-14 h-14 bg-blue-800/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors">
                    <svg
                      className="w-7 h-7 text-blue-800 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-500 text-sm">
                    Skilled maritime professionals at your service.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gray-900 rounded-3xl p-8 overflow-hidden scroll-animate stagger-4 hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-800/20"></div>
                <div className="relative flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Ship?</h3>
                    <p className="text-gray-400">Connect with our team today.</p>
                  </div>
                  <a
                    href="https://www.smyrnareadymix.com/customers/sales-rep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-red-600 rounded-2xl hover:bg-red-700 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-800/5 to-red-600/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 scroll-animate">
            <div>
              <div className="inline-block bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                Services
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                What We <span className="text-red-600">Offer</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-gray-900 font-bold hover:text-blue-800 transition-colors"
            >
              All Services
              <div className="w-10 h-10 rounded-full bg-gray-900 group-hover:bg-blue-800 flex items-center justify-center transition-colors">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.id} className={`scroll-animate stagger-${index + 1}`}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-50 rounded-[3rem] p-12 md:p-20 overflow-hidden scroll-animate">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(42,61,99,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(220,38,38,0.08),transparent_50%)]"></div>
            <div className="absolute top-10 right-10 w-32 h-32 border-2 border-blue-800/10 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-red-600/10 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-800 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-red-600 rounded-full"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                  Our Network
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                  Five Ports.
                  <br />
                  One Mission.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Strategic locations across the nation providing access to major inland waterways
                  and coastal shipping routes for efficient cargo transportation.
                </p>
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-full transition-colors"
                >
                  Explore Locations
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm">
                  <div className="text-5xl font-black text-blue-800 mb-2">5</div>
                  <div className="text-gray-500 text-sm">Strategic Ports</div>
                </div>
                <div className="bg-red-600 rounded-2xl p-6 flex flex-col justify-end text-white">
                  <div className="text-3xl font-black mb-1">24/7</div>
                  <div className="text-red-100 text-xs">Operations</div>
                </div>
                <div className="bg-blue-800 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-black mb-1">100+</div>
                  <div className="text-blue-200 text-xs">Acquisitions</div>
                </div>
                <div className="col-span-2 bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm">
                  <div className="text-3xl font-black text-gray-900 mb-1">1999</div>
                  <div className="text-gray-500 text-sm">SRM Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <div className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Let's Move Your <span className="text-red-600">Cargo</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Connect with our maritime logistics team to discuss your bulk cargo transportation
              needs and discover how we can help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
            <a
              href="https://www.smyrnareadymix.com/customers/sales-rep"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40"
            >
              Find a Sales Rep
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
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
              to="/story"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-bold py-5 px-10 rounded-full transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
