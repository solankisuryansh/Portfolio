import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Introduction to Internet of Things",
      issuer: "IIT Kharagpur (NPTEL)",
      link: "#"
    },
    {
      title: "Oracle Certified Professional",
      issuer: "Data Science (OCI 2025)",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7C167BC2FEA6B8E52D6F2A37E029B288542BF2AA78B3E75C2497680441CCA7A8"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-b084a990-7b79-48f9-87f0-d5385daf77e2/"
    }
  ];

  const milestones = [
    { title: "5-Star Rating", desc: "in Java & C++ on HackerRank" },
    { title: "150+ Problems Solved", desc: "on LeetCode, HackerRank, Codeforces, and GeeksforGeeks" }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <Award className="text-primary w-6 h-6" /> Certifications
            </h3>
            {certifications.map((cert, idx) => (
              <a 
                key={idx} 
                href={cert.link}
                target={cert.link !== "#" ? "_blank" : undefined}
                rel={cert.link !== "#" ? "noopener noreferrer" : undefined}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-4 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">{cert.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
              </a>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">🏆</span> Milestones
            </h3>
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/20 dark:to-transparent p-[1px] rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl h-full flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
