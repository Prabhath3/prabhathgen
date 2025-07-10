
import { ExternalLink, Github, Code, Database, Palette, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Banking Management System",
      description: "A comprehensive banking management system developed in C programming language featuring account management, transaction processing, and data security.",
      technologies: ["C Programming", "File Handling", "Data Structures"],
      category: "Development",
      icon: <Database className="w-6 h-6" />,
      status: "Completed"
    },
    {
      id: 2,
      title: "AI-Powered Dashboard Design",
      description: "Modern dashboard interface design for AI analytics platform with intuitive data visualization and user-friendly navigation.",
      technologies: ["UI/UX Design", "Figma", "Prototyping"],
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      status: "Concept"
    },
    {
      id: 3,
      title: "Responsive WordPress Site",
      description: "Custom WordPress website development with responsive design, SEO optimization, and content management features.",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      category: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      status: "In Progress"
    },
    {
      id: 4,
      title: "Graphic Design Portfolio",
      description: "Collection of brand identity designs, logos, and marketing materials for various clients across different industries.",
      technologies: ["Adobe Creative Suite", "Brand Design", "Print Design"],
      category: "Graphic Design",
      icon: <Palette className="w-6 h-6" />,
      status: "Ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/10';
      case 'In Progress': return 'text-blue-400 bg-blue-400/10';
      case 'Concept': return 'text-purple-400 bg-purple-400/10';
      default: return 'text-orange-400 bg-orange-400/10';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my recent work showcasing a blend of technical development, 
            creative design, and problem-solving skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-orange-500/30">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                  {project.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500/10 text-orange-400 rounded-lg hover:bg-orange-500/20 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Details</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">My Expertise</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                <Code className="w-10 h-10 text-orange-500" />
              </div>
              <span className="text-gray-300 font-medium">Development</span>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                <Palette className="w-10 h-10 text-orange-500" />
              </div>
              <span className="text-gray-300 font-medium">Design</span>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                <Database className="w-10 h-10 text-orange-500" />
              </div>
              <span className="text-gray-300 font-medium">Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
