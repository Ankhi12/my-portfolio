"use client";
import './globals.css';
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import { techStack } from "../data/projectsData";
import BannerImage from "../images/BannerImage.jpg";
import Education from "../images/Education.jpg";
import IELTS from "../images/IELTS.jpg";
import Recom1 from "../images/Recom1.jpg";
import Recom2 from "../images/Recom2.jpg";
import Recom3 from "../images/Recom3.JPG";
import SEOCert from "../images/SEOCert.jpg";
import TWritingCert from "../images/TWritingCert.jpg";


export default function HomePage() {

  const recommendations = [
    Recom1.src,
    Recom2.src,
    Recom3.src,
  ];

  return (

    <div className = "space-y-32">
      
      {/* Banner Two-Column Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className='w-3/4 flex justify-center items-center'>
              <img src={BannerImage.src} 
                alt="Banner" 
                className=" rounded-xl shadow-2xl shadow-black/80 shadow-2xl rotate-3 shadow-white/30 rotate-4 object-cover h-[55vh]"
              />
          </div>
          <div className='flex flex-col justify-center space-y-8 p-4'>
              <h1 className="text-5xl font-extrabold tracking-tight">Hi, I'm a <span className="tracking-wide text-teal-400 underline decoration-wavy decoration-white decoration-3 underline-offset-8">UI Developer</span></h1>
              <p className="text-lg text-slate-300 leading-relaxed"> Who builds <strong> production-level</strong> intuitive and responsive UIs with technical SEO, all while working in Marketing.</p>
          </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="flex flex-col items-center justify-center space-y-8">
        <div style={{ overflowX: "hidden" }} className='text-3xl  font-bold  border-b border-slate-800 pb-4'>
      
           <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false }}
           >
           <h2>Professional Milestones</h2>
            {/* <p>This content slides slowly from the right as you scroll down.</p> */}
           </motion.div>
        </div>
        <Timeline />
      </section>

      {/* Tech Stack Grid Section */}
      <section className="space-y-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold border-b border-slate-800 pb-4">Core Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, i) => (
            <div key={i} className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center gap-4 hover:border-teal-400/50 transition">
              <tech.icon className="text-4xl text-teal-400" />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>


       {/* Certification & Education */}
      <section className="space-y-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 place-items-center w-full max-w-7xl mx-auto px-4">
        {/* Heading spans 2 columns on mobile, and all 4 columns on medium/large screens */}
          <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 col-span-2 md:col-span-4 w-full text-center">
            Education & <span className="text-teal-400">Certifications</span>
          </h2>
          
          <img 
            src={Education.src} 
            alt="Education"
            className="w-full h-auto max-w-[360px] object-cover border border-gray-300 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img 
            src={IELTS.src} 
            alt="IELTS"
            className="w-full h-auto max-w-[360px] object-cover border border-gray-300 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img 
            src={SEOCert.src} 
            alt="SEO Certification"
            className="w-full h-auto max-w-[360px] object-cover border border-gray-300 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img 
            src={TWritingCert.src} 
            alt="Technical Writing Certification"
            className="w-full h-auto max-w-[360px] object-cover border border-gray-300 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
      </section>


      {/* Recommendation */}
      <section className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 w-full text-center">
          Recieved <span className='text-teal-400'>Recommendations</span>
        </h2>  

        {/* Flex wrapper centers 3 items on desktop and wraps into a 2x2 layout on mobile */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 w-full">
          <img 
            src={Recom1.src} 
            className='w-full md:w-auto md:flex-1 shadow-2xl shadow-gray-400/50 max-w-[360px] h-auto object-cover rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105'
          />
          <img 
            src={Recom2.src} 
            className='w-full md:w-auto md:flex-1 shadow-2xl shadow-gray-400/50 max-w-[360px] h-auto object-cover rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105'
          />
          <img 
            src={Recom3.src} 
            className='w-full md:w-auto md:flex-1 shadow-2xl shadow-gray-400/50 max-w-[360px] h-auto object-cover rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105'
          />     
        </div>
      </section>
    </div>
      
  );
}