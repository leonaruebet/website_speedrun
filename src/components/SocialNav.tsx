import Link from 'next/link';

const SocialNav = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* Home Button */}
      <div className="social-nav-item group">
        <Link href="#top" 
          className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center
          hover:bg-primary-50 transition-all duration-300">
          <i className="fas fa-home text-primary-500 text-xl" />
        </Link>
        <span className="social-tooltip">Home</span>
      </div>

      {/* Features Button */}
      <div className="social-nav-item group">
        <Link href="#features"
          className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center
          hover:bg-primary-50 transition-all duration-300">
          <i className="fas fa-star text-primary-500 text-xl" />
        </Link>
        <span className="social-tooltip">Features</span>
      </div>

      {/* Contact Button */}
      <div className="social-nav-item group">
        <Link href="#contact"
          className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center
          hover:bg-primary-50 transition-all duration-300">
          <i className="fas fa-envelope text-primary-500 text-xl" />
        </Link>
        <span className="social-tooltip">Contact</span>
      </div>
    </div>
  );
};

export default SocialNav; 