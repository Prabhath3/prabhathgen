import { ArrowDown, Code, Brain, Palette, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        {/* Social Links - Top Right */}
        <div className="absolute top-0 right-0 flex gap-4 mb-8">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        {/* Enhanced Profile Section */}
        <div className="mb-12 animate-fade-in">
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Profile Picture with Modern Border */}
            
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-bounce delay-500">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
          </div>
          
          {/* Status Badge */}
          
        </div>
        
        {/* Enhanced Typography */}
        <div className="mb-12 space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
            <span className="block text-white/90 animate-fade-in">I'M AN</span>
            <span className="block">
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent animate-fade-in delay-300">GRAPHIC</span>
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-fade-in delay-500">
              DESIGNER
            </span>
          </h1>
        </div>
        
        {/* Enhanced Subtitle Section */}
        <div className="mb-16 space-y-6 animate-fade-in delay-700">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl text-orange-400 font-light tracking-wider">HELLO THERE</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">I'M PRABHATH NISHANTHA</h3>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Undergraduate at <span className="text-orange-400 font-medium">South Eastern University of Sri Lanka</span> pursuing BICT. 
            Aspiring AI Engineer with expertise in graphic design and web development.
          </p>
        </div>
        
        {/* Enhanced Skills Section */}
        <div className="mb-16 animate-fade-in delay-1000">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[{
            icon: Brain,
            label: "AI Engineering",
            desc: "Machine Learning & Neural Networks"
          }, {
            icon: Palette,
            label: "Graphic Design",
            desc: "Creative Visual Solutions"
          }, {
            icon: Code,
            label: "Development",
            desc: "Full-Stack Web Applications"
          }].map((skill, index) => <div key={skill.label} className={`group text-center animate-fade-in delay-${1200 + index * 200}`}>
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500/20 to-orange-600/30 backdrop-blur-sm border border-orange-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <skill.icon className="w-10 h-10 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {skill.label}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {skill.desc}
                </p>
              </div>)}
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="space-y-6 animate-fade-in delay-1500">
          <Button onClick={scrollToAbout} size="lg" className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl border-0">
            <span className="mr-3">Explore My Work</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          
          <p className="text-gray-400 text-sm">
            Scroll down to discover my projects and skills
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;