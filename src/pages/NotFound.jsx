import { Link } from 'react-router-dom';
import ArrowIcon from '../components/ArrowIcon';

function NotFound() {
  return (
    <div>
      <section className="relative bg-blue-800 pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
            Page Not Found
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4">404</h1>
          <p className="text-xl text-blue-200 max-w-xl mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-10 rounded-full transition-colors shadow-lg shadow-red-600/20"
          >
            Back to Home
            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
