import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-gray-500/20 bg-bg-light/70 dark:bg-bg-dark/70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
          KESHAV <span className="text-brand-orange">PATGAR</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 font-bold text-sm uppercase tracking-widest items-center">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`transition-colors duration-300 relative group ${isActive(link.path) ? 'text-brand-orange' : 'text-gray-600 dark:text-gray-400 hover:text-brand-orange'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          
          <button 
            className="p-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 transition-all hover:scale-110 active:scale-95 text-gray-700 dark:text-gray-300" 
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" 
            onClick={() => dispatch(toggleTheme())}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-gray-500/20 bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6 font-bold uppercase tracking-widest text-sm">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors duration-300 ${isActive(link.path) ? 'text-brand-orange' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;