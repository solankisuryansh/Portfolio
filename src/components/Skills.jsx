import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C++", "Python"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
    },
    {
      title: "Tools",
      skills: ["Git", "Github", "Linux (Ubuntu)", "VS Code", "Docker"]
    },
    {
      title: "Concepts",
      skills: ["Data Structures", "OOP", "Problem Solving"]
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-semibold tracking-wide border border-primary/20 backdrop-blur-md shadow-sm">
            Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Technologies and tools I work with.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700/80 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500" />
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white border-b-2 border-slate-100 dark:border-slate-700 pb-4 group-hover:border-primary/50 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all border border-slate-100 dark:border-slate-600 shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
