import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme state
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme');
    
    if (initialTheme === 'dark' || (!initialTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-overlay backdrop-blur-md py-3 shadow-md border-b border-border' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 hover:scale-105 transition-transform"
        >
          <a href="#home">Ankur.</a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
              className="text-textSecondary hover:text-accent transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </motion.a>
          ))}
          
          {/* Theme Toggle Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 ml-4 rounded-full bg-secondary border border-border text-accent hover:bg-accent hover:text-white transition-all shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>

          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-5 py-2 mt-0 ml-2 bg-accent/10 text-accent border border-accent/20 rounded-full hover:bg-accent hover:text-white transition-all shadow-[0_0_10px_rgba(59,130,246,0.2)]"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary border border-border text-accent"
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-textPrimary focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
            className="md:hidden bg-secondary border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-textSecondary hover:text-accent font-medium text-lg block transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
