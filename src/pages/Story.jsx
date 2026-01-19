import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Story() {
  useScrollAnimation()
  
  return (
    <div>
      <HeroSection
        title="Our Story"
        subtitle="A family-owned American success story built on faith, hard work, and dedication"
      />

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 scroll-animate-left">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                The Beginning
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
                From a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Backyard</span> to the Nation
              </h2>
              <div className="prose prose-lg text-gray-500 max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  SRM Concrete is a family-owned and operated ready-mix, aggregates, and cement company 
                  founded in 1999 by Mike and Melissa Hollingshead.
                </p>
                <p className="leading-relaxed mb-6">
                  Mike, a concrete finisher, started Smyrna Ready Mix to service his own concrete needs 
                  because he was not receiving reliable customer service from the local ready-mix companies. 
                  Both Mike and Melissa grew up with very little, but they had a strong work ethic and a 
                  will to succeed.
                </p>
                <p className="leading-relaxed">
                  They scraped together enough money to buy a ready-mix plant. Mike and his crew put up 
                  the plant in their backyard. He attended an auction in Indiana and purchased five used 
                  concrete trucks for $10,000 each. Only three of them made it back to Smyrna.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 scroll-animate-right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                  <img src="/company-team.jpg" alt="Hollingshead Family" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-black">1999</div>
                  <div className="text-red-100 text-sm">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-red-600/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-blue-800/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-red-600 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-800 rounded-full"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center scroll-animate">
            <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
              The American Dream
            </div>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8">
              "We started with nothing. No money, no customers, just a 
              <span className="text-red-600"> will to work hard</span> and a belief that we could achieve anything."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">MH</div>
              <div className="text-left">
                <div className="text-gray-900 font-bold">Mike Hollingshead</div>
                <div className="text-gray-500 text-sm">Chairman & Owner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 scroll-animate">
            <div className="bg-gray-50 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-blue-800 mb-2">100+</div>
              <div className="text-gray-500 text-sm font-medium">Acquisitions</div>
            </div>
            <div className="bg-red-600 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-white mb-2">5</div>
              <div className="text-red-100 text-sm font-medium">Port Locations</div>
            </div>
            <div className="bg-gray-900 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-white mb-2">#1</div>
              <div className="text-gray-400 text-sm font-medium">Service Focus</div>
            </div>
            <div className="bg-blue-800 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-blue-200 text-sm font-medium">Operations</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 scroll-animate-left">
              <div className="relative">
                <div className="aspect-[5/4] rounded-[2rem] overflow-hidden">
                  <img 
                    src="/growth-timeline.jpg" 
                    alt="SRM company growth" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-animate-right">
              <div className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                Growth
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                From Local to <span className="text-blue-800">National</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                In 2012, SRM began to focus on growth through acquisition. Since that time, over 100 
                acquisitions have been completed across the nation.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, SRM has grown from a small local producer to one of the largest ready-mix 
                producers in the country. Our mission to provide quality concrete and unmatched 
                service remains the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-[3rem] overflow-hidden border-2 border-gray-100 scroll-animate">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-red-50 to-transparent"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16">
                <div className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                  Hollingshead Harbor
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
                  Marine Transportation Done Right
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Hollingshead Harbor is the marine transportation arm of SRM, offering efficient 
                  transport of bulk dry cargo from our network of ports across five states.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/team" 
                    className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-full transition-colors"
                  >
                    Meet Our Team
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors"
                  >
                    View Services
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-12 md:p-16 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                    <div className="text-4xl font-black text-white">5</div>
                    <div className="text-red-100 text-sm">Ports</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                    <div className="text-4xl font-black text-white">24/7</div>
                    <div className="text-red-100 text-sm">Service</div>
                  </div>
                  <div className="col-span-2 bg-white rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black text-gray-900">Nationwide</div>
                    <div className="text-gray-500 text-sm">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Story
