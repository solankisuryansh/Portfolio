import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaJava, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { FolderGit2, Rocket, Mail, FileText, Code2, Trophy } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const techStack = [
    { name: "Java", icon: <FaJava className="w-8 h-8 text-[#5382a1]" /> },
    { name: "Python", icon: <FaPython className="w-8 h-8 text-[#3776AB]" /> },
    { name: "C++", icon: <SiCplusplus className="w-8 h-8 text-[#00599C]" /> },
    { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" /> },
    { name: "Linux", icon: <FaLinux className="w-8 h-8 text-slate-800 dark:text-white" /> },
  ];

  const stats = [
    { label: "Problems Solved", value: "150+", icon: <Code2 className="w-6 h-6 text-blue-500" /> },
    { label: "HackerRank", value: "5★", icon: <Trophy className="w-6 h-6 text-yellow-500" /> },
    { label: "Projects Built", value: "2+", icon: <FolderGit2 className="w-6 h-6 text-emerald-500" /> },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 -z-10 transition-colors duration-300" />
      
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Text Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-block px-4 py-1.5 mb-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-semibold tracking-wide border border-primary/20 backdrop-blur-md shadow-sm">
                👋 Welcome to my portfolio
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-800 dark:text-white tracking-tight drop-shadow-sm">
                Suryansh Solanki
              </h1>
              <div className="text-2xl lg:text-3xl font-bold h-[40px] flex items-center justify-center md:justify-start">
                <span className="text-slate-600 dark:text-slate-300 mr-2">I am a</span>
                <span className="text-primary drop-shadow-sm">
                  <TypeAnimation
                    sequence={[
                      'Software Developer',
                      2000,
                      'Java Developer',
                      2000,
                      'DSA Enthusiast',
                      2000,
                      'Problem Solver',
                      2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mt-6 font-light leading-relaxed">
                Passionate about solving real-world problems using Data Structures, Algorithms, and modern technologies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 backdrop-blur-md"
              >
                <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                🚀 Explore My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer group flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 backdrop-blur-md"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                📩 Let's Connect
              </Link>
              <a
                href="/Suryansh%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 backdrop-blur-md"
              >
                <FileText className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                📄 Download Resume
              </a>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div variants={itemVariants} className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-extrabold text-slate-800 dark:text-white leading-tight">{stat.value}</h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Floating Avatar / Graphic */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 w-full max-w-md hidden md:flex justify-center relative"
          >
            {/* Glowing Effects Background Layer */}
            <div className="absolute inset-8 bg-gradient-to-tr from-primary via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse" />
            
            {/* Main Avatar Container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-500 shadow-2xl shadow-primary/40 group">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-800/50 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Fallback image if user adds profile.jpg to public folder */}
                <img src="/profile.jpg" alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" onError={(e) => { e.target.style.display = 'none'; }} />
                
                {/* Developer Illustration */}
                <Code2 className="w-24 h-24 text-primary opacity-90 group-hover:scale-110 transition-transform duration-500 z-10" />
                <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-2 z-10 group-hover:scale-105 transition-transform duration-500">CODING</span>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute -top-6 -right-2 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 transform rotate-12 hover:scale-110 transition-transform animate-float">
                <FaJava className="w-8 h-8 text-[#5382a1]" />
              </div>
              <div className="absolute -bottom-2 -left-4 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 transform -rotate-12 hover:scale-110 transition-transform animate-float animation-delay-2000">
                <FaPython className="w-8 h-8 text-[#3776AB]" />
              </div>
              <div className="absolute bottom-10 right-[-20px] p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 transform rotate-6 hover:scale-110 transition-transform animate-float">
                <SiCplusplus className="w-8 h-8 text-[#00599C]" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Horizontal Strip */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 pt-8 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-col items-center"
        >
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">Technologies I Work With</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
            {techStack.map((tech, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm group-hover:shadow-md transition-all border border-slate-100 dark:border-slate-700">
                  {tech.icon}
                </div>
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
