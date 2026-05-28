
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AIChat from './components/widgets/AIChat';

function App() {
  // Access the theme state from Redux
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`${isDarkMode ? 'dark dark-theme' : 'light-theme'} min-h-screen`}>
      <Router>
        <Navbar />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AIChat />
      </Router>
    </div>
  );
}

export default App;