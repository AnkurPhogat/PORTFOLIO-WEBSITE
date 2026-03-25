import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaBook, FaBrain } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode className="text-accent mb-4" size={32} />,
    skills: ['C/C++', 'JavaScript', 'SQL']
  },
  {
    title: 'Web Technologies',
    icon: <FaLaptopCode className="text-accent mb-4" size={32} />,
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'EJS']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FaTools className="text-accent mb-4" size={32} />,
    skills: ['React', 'Node.js', 'Express.js']
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="text-accent mb-4" size={32} />,
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'Core Subjects',
    icon: <FaBook className="text-accent mb-4" size={32} />,
    skills: ['Database Management', 'Operating Systems', 'OOP in C++']
  },
  {
    title: 'Soft Skills',
    icon: <FaBrain className="text-accent mb-4" size={32} />,
    skills: ['Problem-Solving', 'Team Collaboration', 'Adaptability']
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">About Me & Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-2xl border border-slate-800 hover:border-accent/50 transition-all group hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-textPrimary text-center mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary text-textSecondary text-sm rounded-full border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
