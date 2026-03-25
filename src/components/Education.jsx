import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const educationList = [
  {
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    date: 'Aug 2023 - Present',
    score: 'CGPA: 7.65'
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Sarvodya School Of Science',
    location: 'Charkhi Dadri, Haryana',
    date: 'Jun 2023',
    score: 'Percentage: 78%'
  },
  {
    degree: 'Matriculation (Class X)',
    institution: 'Sarvodya School Of Science',
    location: 'Charkhi Dadri, Haryana',
    date: 'Jun 2021',
    score: 'Percentage: 88.2%'
  }
];

const achievements = [
  { 
    title: 'Cloud Computing – NPTEL', 
    date: 'Dec 2025',
    link: 'https://drive.google.com/file/d/1sVP8mOJODFaozGBvYyXu3bllUS984qTX/view?usp=drive_link'
  },
  { 
    title: 'Master Generative AI & Generative AI tools (ChatGPT & more) – Udemy', 
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1524QMeFxK9rtOoDeG3Hkwfb4UkFyxqH3/view?usp=drive_link'
  },
  { 
    title: 'TCP/IP and Advanced Topics – Coursera', 
    date: 'Jun 2025',
    link: 'https://drive.google.com/file/d/1uC0qXCCG_O7X17GL01IcH54Ivg1Duqjs/view?usp=drive_link'
  },
  { 
    title: 'ChatGPT Made Easy: AI Essentials for Beginners – Udemy', 
    date: 'Feb 2023',
    link: 'https://drive.google.com/file/d/11UCJr5Tz9JQpwMyI6SBQvgCtkcTLHFrA/view?usp=drive_link'
  },
  { title: 'Earned the 50-Day Programming Badge on LeetCode', date: 'Nov 2025' },
  { title: 'Solved 150+ coding problems in LeetCode, Code360, and Striver Sheet', date: 'Aug 2025' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Education Timeline */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4 flex items-center gap-3">
              <FaGraduationCap className="text-accent" /> Education
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent"
          >
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary group-hover:bg-accent/10 group-hover:border-accent group-hover:text-accent transition-all duration-300 text-textSecondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 mx-5 md:mx-0">
                  <div className="w-3 h-3 bg-textSecondary rounded-full group-hover:bg-accent transition-colors duration-300 group-hover:scale-150 transform"></div>
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-secondary rounded-2xl border border-border shadow-md group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-accent text-sm font-bold tracking-wider">{edu.date}</span>
                  </div>
                  <h3 className="font-bold text-lg text-textPrimary mb-1">{edu.degree}</h3>
                  <div className="text-textSecondary font-medium text-sm mb-3">{edu.institution}, {edu.location}</div>
                  <div className="inline-block px-3 py-1 bg-primary text-textPrimary text-xs font-semibold border border-border rounded-full shadow-sm">
                    {edu.score}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements & Certifications */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4 flex items-center gap-3">
              <FaTrophy className="text-accent" /> Certifications
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-5 bg-secondary border border-border rounded-xl hover:border-accent transition-all group shadow-sm hover:shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="mt-1 p-2 bg-primary group-hover:bg-accent group-hover:text-white rounded-lg text-accent transition-colors shadow-sm z-10"
                >
                  <FaCertificate />
                </motion.div>
                
                <div className="flex-1 z-10">
                  <h4 className="text-textPrimary font-semibold group-hover:text-accent transition-colors leading-snug">{item.title}</h4>
                  <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
                    <span className="text-sm text-textSecondary font-medium">{item.date}</span>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-bold text-accent bg-accent/10 hover:bg-accent hover:text-white px-3 py-1 rounded-full transition-colors flex items-center gap-1"
                      >
                        Verify <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;
