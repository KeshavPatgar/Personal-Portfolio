import { GraduationCap, Award, BookOpen, Briefcase, Code2, Database, GitBranch, Globe, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const experienceData = [
    {
      role: "Java Full Stack Developer Intern",
      company: "KodNest Technologies",
      location: "Bengaluru, India",
      duration: "Dec 8, 2025 - Jun 8, 2026",
      details: [
        "Specialized in the Java Full Stack ecosystem, including Spring Boot and Hibernate.",
        "Developed responsive front-end components using React and modern CSS.",
        "Gained hands-on experience in SQL database management and API integration.",
        "Collaborated on technical projects to build scalable and efficient web solutions."
      ],
      icon: <Briefcase size={24} />
    }
  ];

  const educationData = [
    {
      level: "Bachelor of Computer Applications (BCA)",
      institution: "Govt. First Grade College, Honnavar",
      university: "Karnatak University, Dharwad",
      year: "2021 - 2024",
      score: "7.96 CGPA (Distinction)",
      details: "Specialized in Artificial Intelligence, PHP, and Data Science. Secured 84.33% in final semester.",
      icon: <GraduationCap size={24} />
    },
    {
      level: "Pre-University Course (PUC - Commerce)",
      institution: "Govt. H Benne PU College, Kumta",
      year: "2019 - 2021",
      score: "470 / 600 (First Class)",
      details: "Core subjects: Computer Science, Accountancy, and Business Studies.",
      icon: <BookOpen size={24} />
    },
    {
      level: "Secondary School Leaving Certificate (SSLC)",
      institution: "Janata Vidyalaya, Mirjan",
      year: "Graduated 2019",
      score: "498 / 625 (79.68%)",
      details: "Achieved 'A' grade in Science, English, and Social Science.",
      icon: <Award size={24} />
    }
  ];

  const techStack = [
    { name: 'Java', icon: <Code2 size={18} />, glow: 'shadow-[0_0_0_1px_rgba(252,128,25,0.25),0_10px_30px_rgba(252,128,25,0.12)]' },
    { name: 'Spring Boot', icon: <Server size={18} />, glow: 'shadow-[0_0_0_1px_rgba(34,197,94,0.25),0_10px_30px_rgba(34,197,94,0.12)]' },
    { name: 'React', icon: <Globe size={18} />, glow: 'shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_10px_30px_rgba(59,130,246,0.12)]' },
    { name: 'MySQL', icon: <Database size={18} />, glow: 'shadow-[0_0_0_1px_rgba(14,165,233,0.25),0_10px_30px_rgba(14,165,233,0.12)]' },
    { name: 'HTML', icon: <Code2 size={18} />, glow: 'shadow-[0_0_0_1px_rgba(249,115,22,0.25),0_10px_30px_rgba(249,115,22,0.12)]' },
    { name: 'CSS', icon: <Code2 size={18} />, glow: 'shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_10px_30px_rgba(99,102,241,0.12)]' },
    { name: 'JavaScript', icon: <Code2 size={18} />, glow: 'shadow-[0_0_0_1px_rgba(234,179,8,0.25),0_10px_30px_rgba(234,179,8,0.12)]' },
    { name: 'GitHub', icon: <GitBranch size={18} />, glow: 'shadow-[0_0_0_1px_rgba(148,163,184,0.25),0_10px_30px_rgba(148,163,184,0.12)]' },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 flex justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl w-full relative z-10">

        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest">
            About Me
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              Engineering Seamless Digital Experiences
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="p-[3px] rounded-full bg-gradient-to-r from-brand-orange via-yellow-500 to-orange-400 shadow-[0_0_40px_rgba(252,128,25,0.25)]"
              >
                <div className="rounded-full bg-bg-dark/40 backdrop-blur-xl p-[3px]">
                  <img
                    src="/profile.jpg"
                    alt="Keshav Patgar"
                    className="block w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border border-white/10"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </motion.div>

            <p className="mt-8 max-w-3xl text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I’m Keshav Patgar, a passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications.
            </p>
            <p className="mt-3 max-w-3xl text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in Java, Spring Boot, React, and MySQL, with experience creating responsive frontend interfaces and robust backend systems.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Tech <span className="text-brand-orange">Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl border border-gray-500/20 bg-gray-500/5 dark:border-white/10 dark:bg-white/5 backdrop-blur-xl px-4 py-4 flex items-center gap-3 transition-all duration-300 hover:border-brand-orange/40 hover:bg-brand-orange/5 ${tech.glow}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-gray-500/20 dark:border-white/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{tech.name}</span>
                  <span className="text-[11px] text-gray-600 dark:text-gray-400">Core skill</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Experience Section */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-center"
        >
          Professional <span className="text-brand-orange">Experience</span>
        </motion.h2>
        
        <div className="flex flex-col gap-8 mb-24">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-gray-500/20 bg-gray-500/5 backdrop-blur-md transition-all duration-300 hover:border-brand-orange/50 hover:bg-brand-orange/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(252,128,25,0.15)] group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {exp.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest uppercase text-brand-orange/80 mb-1">{exp.duration}</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange transition-colors">{exp.role}</h3>
                <h4 className="text-lg font-medium opacity-80 mb-4">{exp.company} - {exp.location}</h4>
                <ul className="opacity-70 leading-relaxed text-sm md:text-base list-disc list-inside space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="pl-2">{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-center"
        >
          Academic <span className="text-brand-orange">Background</span>
        </motion.h2>
        
        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-gray-500/20 bg-gray-500/5 backdrop-blur-md transition-all duration-300 hover:border-brand-orange/50 hover:bg-brand-orange/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(252,128,25,0.15)] group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {edu.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest uppercase text-brand-orange/80 mb-1">{edu.year}</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange transition-colors">{edu.level}</h3>
                <h4 className="text-lg font-medium opacity-80 mb-3">{edu.institution} {edu.university ? `- ${edu.university}` : ''}</h4>
                <div className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-sm font-bold rounded-lg w-max mb-4">
                  {edu.score}
                </div>
                <p className="opacity-70 leading-relaxed text-sm md:text-base">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;