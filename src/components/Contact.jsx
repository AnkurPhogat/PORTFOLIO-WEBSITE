import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full mb-6 relative overflow-hidden">
              <motion.div 
                animate={{ x: [-100, 100] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-white/50 w-8 blur-sm"
              />
            </div>
            <p className="text-textSecondary text-lg font-medium">
              I'm open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out using the form or directly via email!
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.a
              href="mailto:ankurphogat064@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-center gap-4 p-4 bg-secondary border border-border rounded-xl hover:border-accent transition-all group shadow-sm hover:shadow-md"
            >
              <div className="p-4 bg-primary group-hover:bg-accent group-hover:text-white rounded-full text-accent transition-all shadow-inner">
                <FaEnvelope size={20} />
              </div>
              <div>
                <span className="text-sm text-textSecondary font-bold tracking-wide">Email</span>
                <p className="text-textPrimary font-semibold transition-colors group-hover:text-accent">ankurphogat064@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+919306816557"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-center gap-4 p-4 bg-secondary border border-border rounded-xl hover:border-accent transition-all group shadow-sm hover:shadow-md"
            >
              <div className="p-4 bg-primary group-hover:bg-accent group-hover:text-white rounded-full text-accent transition-all shadow-inner">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <span className="text-sm text-textSecondary font-bold tracking-wide">Phone</span>
                <p className="text-textPrimary font-semibold transition-colors group-hover:text-accent">+91-9306816557</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-center gap-4 p-4 bg-secondary border border-border rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <div className="p-4 bg-primary rounded-full text-accent shadow-inner">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <span className="text-sm text-textSecondary font-bold tracking-wide">Location</span>
                <p className="text-textPrimary font-semibold">Jalandhar, Punjab / Haryana</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="w-full lg:w-1/2">
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-secondary p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-6">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-textSecondary mb-2">Your Name</label>
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-primary border border-border rounded-xl px-4 py-3 text-textPrimary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-textSecondary/50 shadow-inner"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-textSecondary mb-2">Email Address</label>
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-primary border border-border rounded-xl px-4 py-3 text-textPrimary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-textSecondary/50 shadow-inner"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-textSecondary mb-2">Message</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  rows="5"
                  placeholder="Hello Ankur, I'd like to talk about..."
                  className="w-full bg-primary border border-border rounded-xl px-4 py-3 text-textPrimary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-textSecondary/50 shadow-inner"
                ></motion.textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-blue-600 text-white font-bold py-4 rounded-xl shadow-md transition-all mt-4"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
        
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full border-t border-border flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-12 bg-primary/80 backdrop-blur-sm z-20">
        <p className="text-textSecondary font-medium text-sm">© {new Date().getFullYear()} Ankur Phogat. All rights reserved.</p>
        <p className="text-textSecondary font-medium text-sm mt-2 md:mt-0 flex items-center gap-1">
          Built with <span className="text-red-500 animate-pulse">♥</span> using React & Tailwind
        </p>
      </div>
    </section>
  );
};

export default Contact;
