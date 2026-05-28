
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SkillsGrid from '../components/widgets/SkillsGrid';

const Home = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      {/* Background ambient blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-orange/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-start pt-28 pb-20 px-8 max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-orange/50 text-brand-orange bg-brand-orange/10 mb-8 inline-block shadow-[0_0_15px_rgba(252,128,25,0.2)]">
            Available for Full Stack Developer and Web Developer roles
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tighter text-gray-900 dark:text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500 dark:from-orange-400 dark:to-yellow-300 relative whitespace-nowrap pb-2">
              Seamless
            </span> <br /> 
            Digital Experiences
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 leading-relaxed dark:text-gray-300 text-gray-600">
            Hi, I'm <span className="font-bold text-brand-orange">Keshav Patgar</span>, a Full Stack Developer 
            passionate about turning ideas into <span className="font-semibold text-gray-900 dark:text-white">scalable</span>, <span className="font-semibold text-gray-900 dark:text-white">beautiful</span>, and <span className="font-semibold text-gray-900 dark:text-white">fast</span> web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex gap-4">
              <Link to="/projects" className="flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl font-bold transition-all hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(252,128,25,0.4)] active:scale-95 group">
                View Work 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a href="/Keshav_Patgar_Resume.pdf" download="Keshav_Patgar_Resume.pdf" className="flex items-center gap-2 bg-transparent border border-gray-500/30 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-gray-500/10 hover:-translate-y-1 active:scale-95 group">
                Resume 
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex gap-6 opacity-70">
              <a href="https://github.com/KeshavPatgar" target="_blank" rel="noreferrer" className="hover:text-brand-orange hover:opacity-100 transition-all hover:-translate-y-1 p-2 bg-gray-500/10 rounded-full border border-gray-500/20 backdrop-blur-sm">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/keshavpatgar" target="_blank" rel="noreferrer" className="hover:text-brand-orange hover:opacity-100 transition-all hover:-translate-y-1 p-2 bg-gray-500/10 rounded-full border border-gray-500/20 backdrop-blur-sm">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <SkillsGrid />
    </div>
  );
};

export default Home;