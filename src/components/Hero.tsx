
import { ArrowDown, Code, Brain, Palette } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Profile Picture Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl">
          <span className="text-4xl font-bold text-white">NK</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          I'M AN <span className="text-orange-500">AI/UX</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            DESIGNER
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">HELLO</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">I'M NISHANTHA KUMARA</h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Undergraduate at South Eastern University of Sri Lanka pursuing BICT. 
            Aspiring AI Engineer with expertise in graphic design and web development.
          </p>
        </div>
        
        {/* Skills Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-2 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <Brain className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-sm text-gray-400">AI Engineering</span>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-2 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <Palette className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-sm text-gray-400">Graphic Design</span>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-2 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <Code className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-sm text-gray-400">Development</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="group flex items-center justify-center mx-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">Explore My Work</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
