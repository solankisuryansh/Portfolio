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
          
          <motion.div 
            className="w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group bg-white dark:bg-slate-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700/80 backdrop-blur-md overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                I am a Computer Science student at <span className="font-bold text-primary">Lovely Professional University</span> with a strong interest in Data Structures, Algorithms, and Software Development.
              </p>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                Skilled in <span className="text-slate-800 dark:text-white font-bold">Java, C++, Python,</span> and Web Development. 
              </p>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Passionate about building efficient applications, continuously learning modern technologies, and systematically improving my problem-solving skills to build real-world, impactful software.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
