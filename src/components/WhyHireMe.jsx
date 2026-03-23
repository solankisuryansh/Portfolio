import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Zap, BrainCircuit } from 'lucide-react';

export default function WhyHireMe() {
  const features = [
    {
      title: "Strong problem-solving skills",
      description: "Ability to break down complex problems and find optimal solutions efficiently.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Solid Foundation in DSA & OOP",
      description: "In-depth knowledge of Data Structures, Algorithms, and Object-Oriented principles.",
      icon: <BrainCircuit className="w-8 h-8 text-primary" />
    },
    {
      title: "Hands-on project experience",
      description: "Practical experience building web applications and backend systems natively.",
      icon: <Code2 className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Fast learner and consistent",
      description: "Adaptable to new technologies with a strong commitment to continuous learning.",
      icon: <Zap className="w-8 h-8 text-amber-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="why-hire-me" className="py-24 bg-slate-50 dark:bg-slate-800/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-semibold tracking-wide border border-primary/20 backdrop-blur-md shadow-sm">
            Value Proposition
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white">
            Why <span className="text-primary">Hire</span> Me?
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I bring a unique blend of technical expertise, analytical thinking, and a constant drive to build impactful solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all overflow-hidden backdrop-blur-md"
            >
              {/* Decorative background gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125" />
              
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-2xl w-fit mb-6 shadow-sm border border-slate-100 dark:border-slate-600 group-hover:bg-white dark:group-hover:bg-slate-600 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
