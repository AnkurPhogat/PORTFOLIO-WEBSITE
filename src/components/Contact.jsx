import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full mb-6"></div>
            <p className="text-textSecondary text-lg">
              I'm open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out using the form or directly via email!
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.a
              href="mailto:ankurphogat064@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4 p-4 bg-secondary border border-slate-800 rounded-xl hover:border-accent/40 transition-colors group"
            >
              <div className="p-4 bg-primary group-hover:bg-accent/10 rounded-full text-accent transition-colors">
                <FaEnvelope size={20} />
              </div>
              <div>
                <span className="text-sm text-slate-500 font-medium tracking-wide">Email</span>
                <p className="text-textPrimary font-semibold group-hover:text-accent transition-colors">ankurphogat064@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+919306816557"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-4 p-4 bg-secondary border border-slate-800 rounded-xl hover:border-accent/40 transition-colors group"
            >
              <div className="p-4 bg-primary group-hover:bg-accent/10 rounded-full text-accent transition-colors">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <span className="text-sm text-slate-500 font-medium tracking-wide">Phone</span>
                <p className="text-textPrimary font-semibold group-hover:text-accent transition-colors">+91-9306816557</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-secondary border border-slate-800 rounded-xl"
            >
              <div className="p-4 bg-primary rounded-full text-accent">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <span className="text-sm text-slate-500 font-medium tracking-wide">Location</span>
                <p className="text-textPrimary font-semibold">Jalandhar, Punjab / Haryana</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex gap-4 mt-8"
          >
            <a href="www.linkedin.com/in/ankurphogat/" target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full text-slate-400 hover:text-white hover:bg-[#0077b5] transition-all transform hover:-translate-y-1">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/AnkurPhogat" target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full text-slate-400 hover:text-white hover:bg-[#333] transition-all transform hover:-translate-y-1">
              <FaGithub size={24} />
            </a>
          </motion.div>
        </div>

        {/* Contact Form (UI only placeholder) */}
        <div className="w-full lg:w-1/2">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary p-8 rounded-2xl border border-slate-800 shadow-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-6">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder:text-slate-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder:text-slate-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Hello Ankur, I'd like to talk about..."
                  className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none placeholder:text-slate-600"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-blue-600 text-white font-semibold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-1 mt-2"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
        
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-12 bg-primary/80 backdrop-blur-sm">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Ankur Phogat. All rights reserved.</p>
        <p className="text-slate-500 text-sm mt-2 md:mt-0 flex items-center gap-1">
          Built with <span className="text-red-500">♥</span> using React & Tailwind
        </p>
      </div>
    </section>
  );
};

export default Contact;
