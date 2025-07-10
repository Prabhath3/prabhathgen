
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800/50 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Nishantha Kumara
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring AI Engineer and Creative Designer passionate about 
              building innovative solutions that bridge technology and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Education & Status */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Currently</h4>
            <div className="space-y-3">
              <div>
                <p className="text-orange-400 font-medium">Student</p>
                <p className="text-gray-400 text-sm">
                  Bachelor of ICT
                  <br />
                  South Eastern University of Sri Lanka
                </p>
              </div>
              <div>
                <p className="text-orange-400 font-medium">Status</p>
                <p className="text-gray-400 text-sm">
                  Available for freelance projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700/50">
          <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-orange-500 fill-current" />
            <span>by Nishantha Kumara</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg transition-colors group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
