"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationLinks } from "../data/projectsData";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-600 z-50 flex items-center justify-between px-4 md:px-12">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl tracking-wider text-teal-400 z-50">
        PORTFOLIO
      </Link>

      {/* Desktop Links (Hidden on Mobile, Flex on Desktop) */}
      <div className="hidden md:flex gap-8 items-center">
        {navigationLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-teal-400"
            >
              {link.name}
              {isActive && (
                <motion.div layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400" />
              )}
            </Link>
          );
        })}
        <a href="https://in.linkedin.com/in/ankhi-34556226" target="_blank" rel="noopener noreferrer">
          <button className="bg-teal-500 hover:bg-teal-600 text-slate-900 px-4 py-2 rounded-md font-semibold text-sm transition">
            Connect With Me
          </button>
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none z-50 p-2"
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Drawer (Slides open vertically when active) */}
      <div className={`fixed inset-0 bg-slate-950 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navigationLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium tracking-wide text-white hover:text-teal-400 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <a href="https://in.linkedin.com/in/ankhi-34556226" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
          <button className="bg-teal-500 hover:bg-teal-600 text-slate-900 px-6 py-3 rounded-md font-semibold text-base transition">
            Connect With Me
          </button>
        </a>
      </div>
    </nav>
  );
}
