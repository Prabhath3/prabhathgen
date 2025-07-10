
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-orange-500">
            Nishantha
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-orange-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-orange-500 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-orange-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-500 transition-colors">
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-orange-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-300 hover:text-orange-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-300 hover:text-orange-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-gray-300 hover:text-orange-500 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-300 hover:text-orange-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-300 hover:text-orange-500 transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
