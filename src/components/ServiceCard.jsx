function ServiceCard({ service }) {
  const getIcon = (iconPlaceholder) => {
    switch (iconPlaceholder) {
      case 'Cargo Ship Icon':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18M3 17l2-9h14l2 9M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2M12 4v4M8 8h8" />
          </svg>
        )
      case 'Vessel Icon':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9-5-9-5-9 5 9 5zM12 19v-4M3 14v4l9 5 9-5v-4" />
          </svg>
        )
      case 'Barge Icon':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16h16M4 16l1-6h14l1 6M6 10V8h12v2M8 8V6h8v2M3 20h18" />
          </svg>
        )
      case 'Logistics Icon':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      case 'Port Icon':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      case 'Transport Icon':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
    }
  }

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-8">
        <div className="w-16 h-16 bg-gray-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500">
          <span className="text-blue-800 group-hover:text-white transition-colors duration-500">
            {getIcon(service.iconPlaceholder)}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">{service.title}</h3>
        <p className="text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-500">{service.description}</p>
        <a 
          href="https://www.smyrnareadymix.com/customers/sales-rep"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-2 text-blue-800 group-hover:text-white font-semibold transition-colors duration-500"
        >
          <span className="text-sm">Learn more</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ServiceCard