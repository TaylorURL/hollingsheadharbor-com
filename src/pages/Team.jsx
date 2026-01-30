import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import team from '../data/team.json';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Team() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection title="Our Team" subtitle="The people behind Hollingshead Harbor's success" />

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Meet Our <span className="text-blue-800">Leaders</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The experienced team driving Hollingshead Harbor forward with decades of industry
              expertise and unwavering commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={member.id} className={`group scroll-animate stagger-${index + 1}`}>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    className={`absolute top-4 right-4 w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-red-600' : 'bg-blue-800'}`}
                  ></div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-black text-gray-900 mb-1">{member.name}</h3>
                    <p
                      className={`text-sm font-semibold ${index % 2 === 0 ? 'text-red-600' : 'text-blue-800'} mb-3`}
                    >
                      {member.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(42,61,99,0.06),transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.06),transparent_40%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 scroll-animate-left">
              <div className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                Careers
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Join Our <span className="text-red-600">Team</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We're building something great and we need talented people like you. Discover
                opportunities to grow your career with us.
              </p>
              <a
                href="https://www.smyrnareadymix.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-red-600/20"
              >
                View Opportunities
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

            <div className="lg:col-span-7 scroll-animate-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-800 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mb-4">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Health & Dental</h4>
                    <p className="text-gray-500 text-sm">
                      Comprehensive coverage for you and your family
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-red-600 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Flexible PTO</h4>
                    <p className="text-gray-500 text-sm">Generous time off to recharge</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-red-600 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">401(k) Match</h4>
                    <p className="text-gray-500 text-sm">
                      Invest in your future with company matching
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-800 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mb-4">
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Career Growth</h4>
                    <p className="text-gray-500 text-sm">Clear paths for advancement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] scroll-animate">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/team-photo.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="relative p-12 md:p-20">
              <div className="max-w-2xl">
                <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider border border-white/20">
                  Our History
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  From Humble Beginnings
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-10">
                  Discover the inspiring story of how the Hollingshead family built SRM from a
                  backyard operation into one of the nation's largest ready-mix producers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/story"
                    className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors"
                  >
                    Read Our Story
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                  <Link
                    to="/locations"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/20 transition-colors"
                  >
                    Find a Location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
