import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium tracking-wide">
            Welcome to my portfolio
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-textPrimary leading-tight mb-4"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Ankur Phogat</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-2xl md:text-3xl text-textSecondary font-semibold mb-6"
        >
          Full-Stack Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-lg text-textSecondary mb-10 leading-relaxed"
        >
          I build dynamic and engaging web experiences. Passionate about problem-solving and crafting clean, accessible, and user-centric applications using modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-secondary text-textPrimary border border-slate-700 font-semibold rounded-full hover:bg-slate-800 transition-all transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex space-x-6"
        >
          <a href="https://github.com/AnkurPhogat" target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white transition-colors p-2 bg-secondary rounded-full hover:bg-slate-700">
            <FaGithub size={24} />
          </a>
          <a href="www.linkedin.com/in/ankurphogat/" target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white transition-colors p-2 bg-secondary rounded-full hover:bg-slate-700">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:ankurphogat064@gmail.com" className="text-textSecondary hover:text-white transition-colors p-2 bg-secondary rounded-full hover:bg-slate-700">
            <FaEnvelope size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-textSecondary mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
