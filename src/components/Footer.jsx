import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white tracking-tighter mb-2">SS.</h3>
            <p className="text-slate-400 max-w-sm">
              Building efficient applications and continuously improving problem-solving skills.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/solankisuryansh" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-primary text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/suryansh-solanki-27" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-primary text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:solankisuryansh2005@gmail.com" className="p-2 rounded-full bg-slate-800 hover:bg-primary text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Suryansh Solanki. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>

      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer absolute -top-6 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </Link>
    </footer>
  );
}
