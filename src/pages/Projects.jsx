
import ProjectGrid from '../components/widgets/ProjectGrid';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen relative overflow-hidden"
    >
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <ProjectGrid />
    </motion.div>
  );
};

export default Projects;