import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Event Reminder System",
      description: "Developed a Java-based desktop application using Swing. Implemented event scheduling using PriorityQueue (Min-Heap) and added popup and voice alerts for reminders.",
      techStack: ["Java", "Swing", "Data Structures"],
      github: "https://github.com/solankisuryansh/Event-Reminder-System",
      imageGrad: "from-blue-500 to-indigo-600"
    },
    {
      title: "NutriMind AI",
      description: "Personalized Diet Coaching System. Built a web-based system that provides customized diet plans based on BMI and user data. Integrated a nutrition API to fetch real-time calorie and nutrient details.",
      techStack: ["Web Development", "REST API", "JavaScript", "HTML/CSS"],
      github: "https://github.com/solankisuryansh/NutriMind-AI",
      imageGrad: "from-emerald-400 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-semibold tracking-wide border border-primary/20 backdrop-blur-md shadow-sm">
            My Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work, highlighting my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-slate-50 dark:bg-slate-800/80 rounded-3xl border border-slate-100 dark:border-slate-700/80 shadow-lg hover:shadow-2xl transition-all overflow-hidden backdrop-blur-sm"
            >
              {/* Project Image Placeholder */}
              <div className={`w-full h-56 md:h-64 bg-gradient-to-br ${project.imageGrad} relative overflow-hidden flex items-center justify-center p-6`}>
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center justify-center text-white/90 transform group-hover:scale-105 transition-transform duration-500">
                  <Layers className="w-16 h-16 drop-shadow-md opacity-80 mb-2" />
                  <span className="font-bold tracking-wider uppercase text-sm opacity-90 drop-shadow-md">Screenshot Placeholder</span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col relative bg-white dark:bg-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Github Link Button */}
                <div className="mt-auto border-t border-slate-100 dark:border-slate-700 pt-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md group/btn"
                  >
                    <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
