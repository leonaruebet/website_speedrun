import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-800 mb-6">
            Welcome to <span className="text-primary-500">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 mb-8 max-w-2xl mx-auto">
            Create something extraordinary with our minimal and modern approach
          </p>
          <button className="bg-primary-500 text-white px-8 py-3 rounded-lg text-lg font-medium 
            hover:bg-primary-600 transition-colors duration-300 shadow-lg">
            Get Started
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary-200 rounded-full opacity-20" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-300 rounded-full opacity-20" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 text-center mb-16">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Design",
                description: "Modern and clean design that stands out",
                icon: "🎨"
              },
              {
                title: "Performance",
                description: "Lightning fast and optimized for all devices",
                icon: "⚡"
              },
              {
                title: "Scalability",
                description: "Built to grow with your business needs",
                icon: "📈"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-primary-50 hover:bg-primary-100 
                transition-colors duration-300 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <button className="bg-white text-primary-500 px-8 py-3 rounded-lg text-lg font-medium 
            hover:bg-primary-50 transition-colors duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
