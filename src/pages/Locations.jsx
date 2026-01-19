import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import LocationMap from '../components/LocationMap'
import locations from '../data/locations.json'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Locations() {
  useScrollAnimation()
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [filterState, setFilterState] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const states = [...new Set(locations.map(loc => loc.state))].sort()
  
  const filteredLocations = locations.filter(loc => {
    const matchesState = filterState === 'all' || loc.state === filterState
    const matchesSearch = searchQuery === '' || 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesState && matchesSearch
  })

  const stateNames = {
    'AL': 'Alabama',
    'FL': 'Florida', 
    'MI': 'Michigan',
    'OH': 'Ohio',
    'TN': 'Tennessee',
    'TX': 'Texas'
  }

  return (
    <div>
      <HeroSection
        title="Our Locations"
        subtitle="13 strategic harbor locations across 6 states"
      />

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by harbor name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterState('all')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filterState === 'all'
                    ? 'bg-blue-800 text-white shadow-lg shadow-blue-800/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All ({locations.length})
              </button>
              {states.map(state => (
                <button
                  key={state}
                  onClick={() => setFilterState(state)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    filterState === state
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {state} ({locations.filter(l => l.state === state).length})
                </button>
              ))}
            </div>
          </div>
          
          {(filterState !== 'all' || searchQuery) && (
            <div className="mt-6 flex items-center gap-4">
              <span className="text-gray-500 text-sm">
                Showing <span className="font-semibold text-gray-900">{filteredLocations.length}</span> of {locations.length} locations
              </span>
              {(filterState !== 'all' || searchQuery) && (
                <button
                  onClick={() => { setFilterState('all'); setSearchQuery(''); }}
                  className="text-red-600 text-sm font-semibold hover:text-red-700 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[550px] border border-gray-100 relative z-0">
                <LocationMap 
                  locations={filteredLocations}
                  selectedLocation={selectedLocation}
                  onMarkerClick={setSelectedLocation}
                />
              </div>
            </div>
            
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-blue-800 p-4">
                  <h3 className="text-white font-bold">
                    {filterState === 'all' ? 'All Harbors' : stateNames[filterState] || filterState}
                  </h3>
                  <p className="text-blue-200 text-sm">{filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''}</p>
                </div>
                <div className="max-h-[450px] overflow-y-auto">
                  {filteredLocations.length === 0 ? (
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-500">No locations found</p>
                      <button
                        onClick={() => { setFilterState('all'); setSearchQuery(''); }}
                        className="mt-4 text-blue-800 font-semibold text-sm hover:underline"
                      >
                        Show all locations
                      </button>
                    </div>
                  ) : (
                    filteredLocations.map((location) => (
                      <div
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}
                        className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-gray-50 ${
                          selectedLocation?.id === location.id ? 'bg-red-50 border-l-4 border-l-red-600' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            selectedLocation?.id === location.id ? 'bg-red-600' : 'bg-blue-800'
                          }`}>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 truncate">{location.name}</h4>
                            <p className="text-gray-500 text-sm">{location.city}, {location.state}</p>
                            {location.phone && (
                              <a 
                                href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                                onClick={(e) => e.stopPropagation()}
                                className="text-red-600 text-sm font-medium hover:text-red-700 mt-1 inline-block"
                              >
                                {location.phone}
                              </a>
                            )}
                          </div>
                          <svg className={`w-5 h-5 text-gray-300 flex-shrink-0 transition-transform ${
                            selectedLocation?.id === location.id ? 'text-red-600 rotate-90' : ''
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-50 rounded-[3rem] p-12 md:p-20 overflow-hidden scroll-animate">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(220,38,38,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(42,61,99,0.08),transparent_50%)]"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                  Get Started
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Need Shipping Solutions?
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                  Connect with our team to discuss your bulk cargo transportation needs. 
                  We offer customized shipping plans tailored to your requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a
                  href="https://www.smyrnareadymix.com/customers/sales-rep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-red-600/20"
                >
                  Find a Sales Rep
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-full transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations