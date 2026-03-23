import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Building, CheckCircle2, Clock } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-semibold tracking-wide border border-primary/20 backdrop-blur-md shadow-sm">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white flex justify-center items-center gap-4">
            <GraduationCap className="text-primary w-12 h-12" /> Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pl-8 md:pl-0"
        >
          <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>

          <div className="relative flex items-center justify-between md:mb-12">
            <div className="hidden md:block w-5 h-5 absolute left-1/2 -ml-2.5 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow"></div>

            <div className="order-1 flex-1 md:pr-12 text-left md:text-right w-full">
              <div className="flex items-center gap-2 mb-2 text-primary md:justify-end font-bold tracking-wide uppercase text-sm">
                <Clock className="w-4 h-4" /> <span>Pursuing</span>
              </div>
            </div>

            <div className="order-1 flex-1 md:pl-12 w-full mt-2 md:mt-0">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Bachelor of Technology (B.Tech)</h3>
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                  <Calendar className="w-4 h-4 flex-shrink-0" /> <span>August 2023 - Present</span>
                </div>
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">Computer Science and Engineering</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 font-semibold">
                    <Building className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" /> <span className="leading-snug">Lovely Professional University</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" /> <span>Phagwara, Punjab</span>
                  </div>
                </div>
                {/* <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-bold">
                  CGPA: 6.15
                </div> */}
              </div>
            </div>

          </div>

          {/* 12th Standard */}
          <div className="relative flex items-center justify-between md:mb-12 mt-12 md:mt-0">
            <div className="hidden md:block w-5 h-5 absolute left-1/2 -ml-2.5 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow"></div>

            <div className="order-1 flex-1 md:pr-12 text-left md:text-right w-full">
              <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 md:justify-end font-bold tracking-wide uppercase text-sm">
                <CheckCircle2 className="w-4 h-4" /> <span>Completed</span>
              </div>
            </div>

            <div className="order-1 flex-1 md:pl-12 w-full mt-2 md:mt-0">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Senior Secondary (12th)</h3>
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                  <Calendar className="w-4 h-4 flex-shrink-0" /> <span>Mar 2021 - Apr 2022</span>
                </div>
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">Science Stream</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 font-semibold">
                    <Building className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" /> <span className="leading-snug">DPM Public School</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" /> <span>Meerut, UP</span>
                  </div>
                </div>
                {/* <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-bold">
                  Percentage: [85]%
                </div> */}
              </div>
            </div>

          </div>

          {/* 10th Standard */}
          <div className="relative flex items-center justify-between mt-12 md:mt-0">
            <div className="hidden md:block w-5 h-5 absolute left-1/2 -ml-2.5 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow"></div>

            <div className="order-1 flex-1 md:pr-12 text-left md:text-right w-full">
              <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 md:justify-end font-bold tracking-wide uppercase text-sm">
                <CheckCircle2 className="w-4 h-4" /> <span>Completed</span>
              </div>
            </div>

            <div className="order-1 flex-1 md:pl-12 w-full mt-2 md:mt-0">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Secondary (10th)</h3>
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                  <Calendar className="w-4 h-4 flex-shrink-0" /> <span>Mar 2019 - Apr 2020</span>
                </div>
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">General Science</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300 font-semibold">
                    <Building className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" /> <span className="leading-snug">DPM Public School</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" /> <span>Meerut, UP</span>
                  </div>
                </div>
                {/* <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-bold">
                  Percentage: [90]%
                </div> */}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
