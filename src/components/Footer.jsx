"use client";
import { socialLinks } from "../data/projectsData";
import { FaGithub, FaDribbble, FaLinkedin, FaMedium } from 'react-icons/fa';

export default function Footer() {
  
  return (
    <footer id="connect" className="w-full bg-slate-950 border-t border-slate-800 py-12 px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-2 text-white">Want to connect</h3>
          <p className="text-sm text-slate-400">for <span className="text-teal-500 font-bold">UI development </span>projects?</p>
        </div>
        
        {/*add logic to connect with my LinkedIn*/}
        <div className="flex gap-5 text-neutral-400 text-center sm:text-left text-sm text-neutral-400">
            <a href="https://github.com/Ankhi12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} className="hover:text-white transition-colors duration-200" />
            </a>
            <a href="https://medium.com/@ankhi." target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <FaMedium size={24} className="hover:text-white transition-colors duration-200" />
            </a>
            <a href="https://dribbble.com/Ankhi_R" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <FaDribbble size={24} className="hover:text-pink-500 transition-colors duration-200" />
            </a>
            <a href="https://in.linkedin.com/in/ankhi-34556226" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} className="hover:text-blue-500 transition-colors duration-200" />
            </a>
        </div>
      </div>
    </footer>
  );
}