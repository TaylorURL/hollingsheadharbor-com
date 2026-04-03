import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import useScrollAnimation from '../hooks/useScrollAnimation';

function About() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection
        title="About Hollingshead Harbor"
        subtitle="Efficient marine transportation as part of the SRM family"
      />

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="scroll-animate-left">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                What We Do
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6">
                Moving Cargo <span className="text-blue-800">Nationwide</span>
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed mb-10">
                Hollingshead Harbor offers efficient marine transportation of bulk dry cargo from
                our network of ports in Alabama, Florida, Michigan, Ohio, Tennessee, and Texas.
              </p>

              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-blue-800 transition-colors duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-800 group-hover:bg-white rounded-xl flex items-center justify-center transition-colors">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-blue-800 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">
                      Vessels for Hire
                    </h4>
                    <p className="text-gray-500 group-hover:text-blue-100 text-sm transition-colors">
                      Professional maritime transport
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-red-600 group-hover:bg-white rounded-xl flex items-center justify-center transition-colors">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-red-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">
                      Barges for Charter
                    </h4>
                    <p className="text-gray-500 group-hover:text-red-100 text-sm transition-colors">
                      Flexible charter options
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-900 transition-colors duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gray-900 group-hover:bg-white rounded-xl flex items-center justify-center transition-colors">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-gray-900 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">
                      Custom Shipping Plans
                    </h4>
                    <p className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">
                      Tailored logistics solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative scroll-animate-right">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/marine-operations.jpg"
                  alt="Marine operations at Hollingshead Harbor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-red-600">25+</div>
                  <div className="text-gray-500 text-sm leading-tight">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#f9fafb_25%,transparent_25%,transparent_75%,#f9fafb_75%),linear-gradient(45deg,#f9fafb_25%,transparent_25%,transparent_75%,#f9fafb_75%)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-800/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-red-600/10 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
              Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              What We <span className="text-red-600">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white border-2 border-gray-100 hover:border-blue-800 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl scroll-animate stagger-1">
              <div className="w-14 h-14 bg-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We do what we say and stand behind every product we deliver.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 hover:border-red-600 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl scroll-animate stagger-2">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Continuously improving our processes to serve you better.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 hover:border-blue-800 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl scroll-animate stagger-3">
              <div className="w-14 h-14 bg-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teamwork</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Together, we achieve more for our customers and community.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 hover:border-red-600 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl scroll-animate stagger-4">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We strive for perfection in everything that we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 scroll-animate">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                The <span className="text-red-600">SRM</span> Family
              </h2>
              <p className="text-gray-500 mb-6">
                Founded by the Hollingshead family in 1999, our companies work together to deliver
                excellence.
              </p>
              <Link
                to="/story"
                className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-red-600 transition-colors"
              >
                Read Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border-l-4 border-blue-800 pl-4 py-2">
                  <div className="font-bold text-gray-900">SRM Concrete</div>
                  <div className="text-gray-500 text-sm">Concrete Operations</div>
                </div>

                <div className="border-l-4 border-blue-800 pl-4 py-2">
                  <div className="font-bold text-gray-900">SRM Cement</div>
                  <div className="text-gray-500 text-sm">Cement Production</div>
                </div>

                <div className="border-l-4 border-red-600 pl-4 py-2 bg-red-50 -ml-4 pl-8 rounded-r-lg">
                  <div className="font-bold text-gray-900">SRM Harbor</div>
                  <div className="text-red-600 text-sm">Marine Transportation</div>
                </div>

                <div className="border-l-4 border-blue-800 pl-4 py-2">
                  <div className="font-bold text-gray-900">SRM Blocks</div>
                  <div className="text-gray-500 text-sm">Block Manufacturing</div>
                </div>

                <div className="border-l-4 border-blue-800 pl-4 py-2">
                  <div className="font-bold text-gray-900">HMC</div>
                  <div className="text-gray-500 text-sm">Hollingshead Mixer Co.</div>
                </div>

                <div className="border-l-4 border-blue-800 pl-4 py-2">
                  <div className="font-bold text-gray-900">Hollingshead Aviation</div>
                  <div className="text-gray-500 text-sm">Aviation Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
