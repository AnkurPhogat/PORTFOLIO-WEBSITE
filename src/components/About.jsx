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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">About Me & Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-primary p-8 rounded-2xl border border-border group shadow-sm hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="flex justify-center transition-transform duration-300 transform origin-bottom"
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-textPrimary text-center mb-6 mt-2">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent)', color: '#fff' }}
                    className="px-4 py-1.5 bg-secondary text-textSecondary text-sm font-semibold rounded-full border border-border transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
