
import { Code2, Server, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsGrid = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="text-brand-orange" size={32} />,
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Backend",
      icon: <Server className="text-brand-orange" size={32} />,
      skills: ["Java", "Spring Boot", "Python", "Django"],
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "DevOps & Database",
      icon: <Globe className="text-brand-orange" size={32} />,
      skills: ["Vercel", "Render", "Git", "GitHub", "MySQL", "SQLite"],
      gradient: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-24 px-8 max-w-6xl mx-auto relative z-10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-black dark:bg-gradient-to-r dark:from-white dark:to-gray-400 dark:bg-clip-text dark:text-transparent">
          Expertise <span className="text-brand-orange">&amp; Tools</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-brand-orange to-transparent rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group relative"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}></div>
            
            <div className="relative p-8 rounded-3xl border border-gray-500/20 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-xl transition-all duration-500 hover:border-brand-orange/50 hover:bg-gray-900/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(252,128,25,0.2)] overflow-hidden">
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-2xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 border border-brand-orange/30">
                    <div className="group-hover:drop-shadow-[0_0_8px_rgba(252,128,25,0.4)] transition-all">
                      {cat.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-brand-orange group-hover:to-amber-400 transition-all duration-300">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 text-sm font-semibold rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 opacity-80 transition-all duration-300 hover:opacity-100 hover:border-brand-orange hover:text-brand-orange hover:bg-gradient-to-br hover:from-brand-orange/30 hover:to-brand-orange/10 hover:shadow-[0_0_15px_rgba(252,128,25,0.2)] cursor-default hover:scale-110 hover:-translate-y-1"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsGrid;