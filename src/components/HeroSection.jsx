import { Link } from 'react-router-dom';
import Icon from './Icon';

function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="relative min-h-[650px] lg:min-h-[750px] flex items-center pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
          alt=""
          className="w-full h-full object-cover scale-110 animate-slow-pan"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse-soft" />
            SRM Marine Transportation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="group inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-1"
              >
                {ctaText}
                <Icon
                  name="arrow-right"
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            )}
            <Link
              to="/locations"
              className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg hover:-translate-y-1"
            >
              <Icon name="pin" className="w-5 h-5 mr-2" />
              Find a Location
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
