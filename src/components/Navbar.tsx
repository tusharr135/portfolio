import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-blur transition-all duration-300 ${scrolled ? 'py-4 shadow-2xl' : 'py-6 bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center relative">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-300 hover:text-white hover:underline underline-offset-8 transition-all"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center space-x-4 border-l border-white/10 pl-6 ml-2">
            <a href="https://github.com/tusharr135" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tushar-raut-bb0637370/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden absolute right-0">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-primary-500"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-white/5">
                <a href="https://github.com/tusharr135" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-slate-400 hover:text-white transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/tushar-raut-bb0637370/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-slate-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
