import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';

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
  { title: 'Cloud Computing – NPTEL', date: 'Dec 2025' },
  { title: 'Master Generative AI & Generative AI tools (ChatGPT & more) – Udemy', date: 'Aug 2025' },
  { title: 'TCP/IP and Advanced Topics – Coursera', date: 'Jun 2025' },
  { title: 'ChatGPT Made Easy: AI Essentials for Beginners – Udemy', date: 'Feb 2023' },
  { title: 'Earned the 50-Day Programming Badge on LeetCode', date: 'Nov 2025' },
  { title: 'Solved 150+ coding problems in LeetCode, Code360, and Striver Sheet', date: 'Aug 2025' },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Education Timeline */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-secondary group-hover:bg-accent/20 group-hover:border-accent group-hover:text-accent transition-colors duration-300 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 mx-5 md:mx-0">
                  <div className="w-3 h-3 bg-slate-600 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-secondary rounded-2xl border border-slate-800 shadow-xl group-hover:border-accent/50 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-accent text-sm font-semibold">{edu.date}</span>
                  </div>
                  <h3 className="font-bold text-lg text-textPrimary mb-1">{edu.degree}</h3>
                  <div className="text-slate-400 font-medium text-sm mb-2">{edu.institution}, {edu.location}</div>
                  <div className="inline-block px-3 py-1 bg-primary border text-textPrimary text-sm font-semibold border-slate-700 rounded-full">
                    {edu.score}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4 flex items-center gap-3">
              <FaTrophy className="text-accent" /> Certifications & Achievements
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-secondary border border-slate-800 rounded-xl hover:border-accent/40 transition-colors group"
              >
                <div className="mt-1 p-2 bg-primary group-hover:bg-accent/10 rounded-lg text-accent transition-colors">
                  <FaCertificate />
                </div>
                <div>
                  <h4 className="text-textPrimary font-medium group-hover:text-white transition-colors leading-snug">{item.title}</h4>
                  <span className="text-sm text-slate-500 mt-1 block">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
