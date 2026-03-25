import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsList = [
  {
    title: 'Fair Trade Agri Portal',
    date: 'Jan 2026 - Feb 2026',
    description: 'Architected a full-stack agriculture marketplace platform connecting farmers and buyers for fair-trade products, supporting seamless product listings and transaction workflows.',
    details: [
      'Implemented RESTful APIs and backend services using Node.js and Express for user authentication, product management, and secure order processing.',
      'Enhanced application performance, ensured secure data handling, and achieved full cross-device responsiveness.'
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/AnkurPhogat/fairtrade-agri-portal'
  },
  {
    title: 'Car Rental Portal',
    date: 'Jul 2025 - Aug 2025',
    description: 'Built a dynamic web-based car rental platform enabling users to browse vehicles, check availability, and book rentals through an intuitive interface.',
    details: [
      'Integrated backend functionalities using PHP to manage user authentication, vehicle listings, booking records, and secure form handling with MySQL.',
      'Crafted a responsive and user-friendly interface using HTML and CSS.'
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/AnkurPhogat/Car-rental-portal'
  },
  {
    title: 'Linkora',
    date: 'May 2025 - Jun 2025',
    description: 'Created a full-featured social media platform with dynamic profiles, post sharing, and follow functionality to enhance user engagement.',
    details: [
      'Strengthened backend by refining database queries to improve performance.',
      'Designed an intuitive, fully responsive UI using Tailwind CSS, achieving a 90% accessibility score in Lighthouse audits.',
      'Accelerated front-end performance by optimizing rendering and asset bundling.'
    ],
    tech: ['Node.js', 'React', 'Express', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/AnkurPhogat/Linkora'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-16"
        >
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Project Visual/Placeholder */}
              <div className="w-full md:w-1/2 h-64 md:h-80 bg-secondary rounded-2xl border border-border relative overflow-hidden group shadow-md shadow-accent/5">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-600/20 opacity-30 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply dark:mix-blend-lighten"></div>
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                  <span className="text-3xl font-extrabold text-border group-hover:text-accent/80 transition-colors duration-500 drop-shadow-md">
                    {project.title.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-3xl font-bold text-textPrimary">{project.title}</h3>
                  <span className="text-accent text-sm font-bold bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">{project.date}</span>
                </div>
                
                <p className="text-textSecondary text-lg mb-4 font-medium">{project.description}</p>
                
                <ul className="list-disc list-inside text-textSecondary mb-6 space-y-2 opacity-90">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">{detail}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary border border-border text-accent font-bold text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-full text-textPrimary font-bold hover:border-accent hover:text-accent transition-colors shadow-sm"
                  >
                    <FaGithub size={18} /> Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
