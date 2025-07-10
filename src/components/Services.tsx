
import { Palette, Code, Globe, Zap, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Professional graphic design services including brand identity, logos, marketing materials, and visual communication solutions.",
      features: [
        "Logo Design & Brand Identity",
        "Marketing Materials",
        "Print & Digital Design", 
        "Social Media Graphics",
        "Brand Guidelines"
      ],
      popular: true
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom WordPress websites with responsive design, SEO optimization, and user-friendly content management systems.",
      features: [
        "Custom WordPress Themes",
        "Responsive Web Design",
        "SEO Optimization",
        "Content Management",
        "Website Maintenance"
      ],
      popular: false
    },
    {
      id: 3,
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions using modern programming languages and technologies to meet specific business needs.",
      features: [
        "C Programming Projects",
        "Database Design",
        "System Architecture",
        "Problem Solving",
        "Code Optimization"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Offering comprehensive design and development services to help bring 
            your ideas to life with creativity and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className={`relative bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 border ${service.popular ? 'border-orange-500/50' : 'border-gray-700/50'} hover:border-orange-500/30 group`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-white font-medium py-3 rounded-lg transition-all duration-300 border border-orange-500/30 hover:border-orange-500">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Additional Capabilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                <span className="text-2xl">🎨</span>
              </div>
              <span className="text-gray-300">UI/UX Design</span>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                <span className="text-2xl">📱</span>
              </div>
              <span className="text-gray-300">Responsive Design</span>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-gray-300">Performance</span>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                <span className="text-2xl">🔧</span>
              </div>
              <span className="text-gray-300">Maintenance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
