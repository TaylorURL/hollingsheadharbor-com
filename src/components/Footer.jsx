import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Ship?</h3>
              <p className="text-blue-200">Contact us to discuss your bulk cargo transportation needs.</p>
            </div>
            <a
              href="https://www.smyrnareadymix.com/customers/sales-rep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-800 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Find a Sales Rep
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <img src="/logo.jpg" alt="Hollingshead Harbor" className="h-16 w-auto mb-6" />
              <div className="flex space-x-3">
                <a href="https://x.com/SRMCONCRETE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center hover:bg-blue-800 hover:text-white text-blue-800 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/srmconcrete" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center hover:bg-blue-800 hover:text-white text-blue-800 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/srmconcrete/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center hover:bg-blue-800 hover:text-white text-blue-800 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/story" className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Locations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3"></span>
                  Marine Transportation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3"></span>
                  Bulk Dry Cargo
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3"></span>
                  Vessel Charter
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3"></span>
                  Barge Charter
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3"></span>
                  Maritime Logistics
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h3>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li>
                  <a href="tel:6153551028" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 transition-colors">
                      <svg className="w-5 h-5 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-800 transition-colors">(615) 355-1028</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@smyrnareadymix.com" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 transition-colors">
                      <svg className="w-5 h-5 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="group-hover:text-blue-800 transition-colors">info@smyrnareadymix.com</span>
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-800/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>1000 Hollingshead Circle<br />Murfreesboro, TN 37129</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Hollingshead Harbor. All rights reserved.</p>
              <span className="text-gray-300">|</span>
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-blue-800 transition-colors">Privacy Policy</Link>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span>The marine transportation arm of <span className="font-semibold text-blue-800">SRM</span></span>
              <span className="text-red-600 mx-2">|</span>
              <span className="font-semibold text-gray-700">Smyrna Ready Mix</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer