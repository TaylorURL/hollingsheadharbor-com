function LocationCard({ location }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group hover:-translate-y-2">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-600 to-blue-800 group-hover:w-2 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-800/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="pl-4 relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">{location.name}</h3>
          <span className="bg-red-600/10 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">{location.state}</span>
        </div>
        
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-800/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">{location.address}</p>
              <p>{location.city}, {location.state} {location.zip}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-red-600/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-900">{location.phone}</span>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm">{location.hours}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard