"use client";
import { motion } from "framer-motion";
import  {timeLineData} from "../data/projectsData";

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-slate-700 ml-4 md:ml-32 space-y-12 py-4">
      {timeLineData.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8"
        >
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 border-4 border-slate-900" />
          <span className="text-sm font-semibold text-teal-400">{item.year}</span>
          <h3 className="text-xl font-bold mt-1">{item.role} @ <span className="text-slate-300">{item.company}</span></h3>
          <p className="text-slate-400 mt-2 max-w-2xl">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}