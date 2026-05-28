import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { addMessage, setTyping } from '../../redux/slices/aiSlice';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isTyping } = useSelector((state) => state.ai);
  const dispatch = useDispatch();

  const handleSend = async () => {
    if (!input.trim()) return;

    dispatch(addMessage({ sender: 'user', text: input }));
    const userQuery = input;
    setInput('');
    dispatch(setTyping(true));

    setTimeout(() => {
      let response = "I'm not sure about that, but Keshav is a highly qualified Full Stack Developer! Try asking about his marks, internship, or specific projects.";
      
      const query = userQuery.toLowerCase();

      // Technical Skills
      if (query.includes('tech') || query.includes('skills')) {
        response = "Keshav is proficient in Java, Spring Boot, Python, Django, React, and MySQL. He also handles deployments on Vercel and Render.";
      } 
      // Academic Performance (Data from your Marks Cards)
      else if (query.includes('marks') || query.includes('cgpa') || query.includes('percentage')) {
        response = "Keshav has a strong academic record: 7.96 CGPA in BCA (Distinction), 78.33% in PUC, and 79.68% in SSLC.";
      } 
      // Specific Projects
      else if (query.includes('projects') || query.includes('build')) {
        response = "His top projects include MealMate Pro (Django/Razorpay), a Fashion E-Commerce Store (Java/MySQL), and a Hospital Management System (awarded 84.33% for technical excellence).";
      } 
      // Internship at KodNest
      else if (query.includes('intern') || query.includes('experience') || query.includes('kodnest')) {
        response = "Keshav completed a Java Full Stack Internship at KodNest Technologies in Bengaluru, where he mastered end-to-end web development.";
      }
      // Contact Info
      else if (query.includes('contact') || query.includes('hire') || query.includes('email')) {
        response = "You can reach Keshav at keshavpatagar86@gmail.com or via WhatsApp at +91 6362935262.";
      }
      // Location
      else if (query.includes('location') || query.includes('where')) {
        response = "Keshav is currently based in Bengaluru and is available for Full Stack or Web Developer roles.";
      }

      dispatch(addMessage({ sender: 'ai', text: response }));
      dispatch(setTyping(false));
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-80 h-[450px] bg-bg-light dark:bg-bg-dark border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-4"
          >
            <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50 dark:bg-white/5">
              <h3 className="font-bold text-sm tracking-wide">Ask AI Assistant</h3>
              <X className="cursor-pointer opacity-70 hover:opacity-100 hover:text-brand-orange transition-colors" size={20} onClick={() => setIsOpen(false)} />
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`p-3 rounded-xl max-w-[85%] text-sm leading-relaxed ${
                    msg.sender === 'ai' 
                      ? 'bg-gray-100 dark:bg-white/10 self-start rounded-bl-none text-gray-800 dark:text-gray-200' 
                      : 'bg-brand-orange text-white self-end rounded-br-none'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <div className="p-3 rounded-xl max-w-[85%] text-sm leading-relaxed bg-gray-100 dark:bg-white/10 self-start rounded-bl-none italic opacity-50 flex gap-1">
                  <span className="animate-bounce">.</span><span className="animate-bounce" style={{animationDelay: '150ms'}}>.</span><span className="animate-bounce" style={{animationDelay: '300ms'}}>.</span>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-gray-200 dark:border-white/10 flex gap-2 bg-gray-50 dark:bg-white/5">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience..."
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-transparent border-none outline-none text-sm p-2 text-gray-900 dark:text-white"
              />
              <button 
                onClick={handleSend}
                className="text-brand-orange p-2 hover:bg-brand-orange/10 rounded-lg transition-all active:scale-90"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-brand-orange text-white p-4 rounded-full shadow-[0_10px_20px_rgba(252,128,25,0.3)] transition-transform" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default AIChat;