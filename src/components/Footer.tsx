const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-primary-100 text-transparent bg-clip-text">
              One Stop Service in IT Solutions
            </h2>
            <p className="text-primary-100 text-lg mb-6">
              Web and Mobile Application Development
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-white hover:text-primary-300 transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
            <p className="text-primary-200">contact@example.com</p>
            <p className="text-primary-200">Mon – Fri (9 AM – 6 PM)</p>
            <p className="text-primary-300 mt-4">© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 