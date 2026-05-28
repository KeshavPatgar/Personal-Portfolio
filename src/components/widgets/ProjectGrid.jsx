
import { ExternalLink, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectGrid = () => {
  const projects = [
    {
      title: "MealMate Pro",
      description: "Full-stack food delivery platform with secure payment integration.",
      tech: ["Django", "Python", "Razorpay", "MySQL"],
      image: "/mealmate_screenshot.png",
      live: "https://mealmatepro.onrender.com",
      github: "https://github.com/KeshavPatgar",
      category: "Full Stack"
    },
    {
      title: "Fashion E-Commerce",
      description: "A complete online store with cart, checkout, and admin modules.",
      tech: ["Java", "Servlets", "JSP", "MySQL", "Maven"],
      image: "/fashion_store_screenshot.png",
      live: "#",
      github: "https://github.com/KeshavPatgar/FashionStore.git",
      category: "Java Enterprise"
    },
    {
      title: "Task Management",
      description: "Collaborative tool for tracking team tasks and productivity.",
      tech: ["React", "Redux", "Node.js", "Tailwind"],
      image: "/taskmanagement_screenshot.png",
      live: "#",
      github: "https://github.com/KeshavPatgar",
      category: "Frontend"
    }
  ];

  return (
    <div className="py-20 px-8 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 bg-brand-orange/10 rounded-xl">
          <Layers className="text-brand-orange" size={28} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Featured <span className="text-brand-orange">Projects</span></h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-gray-500/20 bg-gray-500/5 transition-all duration-500 hover:border-brand-orange/40 hover:shadow-[0_20px_40px_rgba(252,128,25,0.1)] hover:-translate-y-2 group backdrop-blur-sm"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-orange/10 via-white/5 to-blue-500/10 border-b border-white/10">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent opacity-90" />
            </div>

            <div className="p-8 h-full flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-brand-orange font-bold mb-3 block">{project.category}</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{project.title}</h3>
              <p className="text-sm opacity-70 mb-6 leading-relaxed flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-1 bg-white/5 rounded border border-white/10 opacity-80 group-hover:border-white/20 transition-colors">{t}</span>
                ))}
              </div>
              
              <div className="flex gap-4 border-t border-white/10 pt-6 mt-auto">
                <a href={project.github} target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 hover:text-brand-orange hover:scale-110 transition-all p-2 bg-white/5 rounded-full">
                  <FaGithub size={20} />
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 hover:text-brand-orange hover:scale-110 transition-all p-2 bg-white/5 rounded-full">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;