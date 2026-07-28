"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { categories, projectsByCat } from "../../data/projectsData";

export default function ProjectsPage() {

  const [activeTab, setActiveTab] = useState("ui-dev");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-12 py-8 relative">
      
      {/* Category Selection Header Slider */}
      <div className="flex border-b border-slate-800 overflow-x-auto no-scrollbar whitespace-nowrap gap-4 md:gap-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className="relative pb-4 text-base font-semibold transition-colors focus:outline-none"
          >
            <span className={activeTab === cat.id ? "text-white" : "text-slate-400 hover:text-slate-200"}>
              {cat.name}
            </span>
            {activeTab === cat.id && (
              <motion.div layoutId="categoryUnderline" className="absolute bottom-0 left-0 right-0 h-1 bg-teal-400" />
            )}
          </button>
        ))}
      </div>

      {/* Right to Left Slider Component Frame */}
      <div className="overflow-hidden py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory pointer-events-auto"
          >
            {projectsByCat[activeTab]?.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="min-w-[280px] md:min-w-[350px] bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-teal-400 cursor-pointer snap-start flex flex-col justify-between h-56 transition shadow-lg transform hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white space-y-8">{project.title}</h3>
                  <p className="whitespace-pre-wrap text-sm text-slate-400 line-clamp-3">{project.desc}</p>
                </div>
                <span className="text-xs font-semibold text-teal-400 self-end">View Profile →</span>
              </div>
            ))}
            </motion.div>
          </AnimatePresence>
        </div>

      {/* Immersive Full Screen Overlay Pop-Up */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-slate-950/95 backdrop-blur-lg flex items-center justify-center p-6 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-white border border-slate-800 rounded-3xl max-w-4xl w-full p-8 md:p-12 relative shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full text-sm font-bold w-10 h-10 flex items-center justify-center transition"
              >
                ✕
              </button>
              <span className="text-xl uppercase tracking-widest text-teal-400 font-bold">Project Details</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-black mt-4 mb-6">{selectedProject.title}</h2>
              {selectedProject.imSrc}
              <img src = {selectedProject.imgSrc}/>
              <br/>
              <p className="text-lg text-black leading-relaxed whitespace-pre-wrap">{selectedProject.longDesc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
}
