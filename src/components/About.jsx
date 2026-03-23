import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-semibold tracking-wide border border-primary/20 backdrop-blur-md shadow-sm">
            Get To Know Me
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-slate-800 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1 w-full flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-xl border-4 border-white dark:border-slate-800 profile-glassmorphism">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500 font-medium text-lg">
                  Profile Image <br/> Placeholder
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative group bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700/80 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I am a Computer Science student at <span className="font-semibold text-primary">Lovely Professional University</span> with a strong interest in Data Structures, Algorithms, and Software Development.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Skilled in <span className="text-slate-800 dark:text-white font-medium">Java, C++, Python,</span> and Web Development basics. 
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Passionate about building efficient applications, continuously learning modern technologies, and systematically improving my problem-solving skills to build real-world, impactful software.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
