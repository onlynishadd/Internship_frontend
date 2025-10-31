"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

const featured: Project[] = [
  { id: 1, title: "BEU Mate – Bihar Engineering", desc: "An AI-powered study companion for B.Tech students offering personalized learning, exam guidance, and performance tracking.", img: "/project-alpha.png" },
  { id: 2, title: "Devskillquest", desc: "An interactive learning platform designed for aspiring developers to master coding skills through projects, peer reviews, and challenges.", img: "/beta-crm.png" },
  { id: 3, title: "The Weddings Chapter", desc: "A premium wedding planning platform connecting couples with top vendors, managing budgets, timelines, and guest lists.", img: "/gamma-site.png" },
];

const openSource: Project[] = [
  { id: 101, title: "Deepfake Detection", desc: "Advanced learning model for detecting manipulated media using AI; helps ensure authenticity and trust.", img: "/delta-cloud.png" },
  { id: 102, title: "NobBot", desc: "Smart automation bot built with Python for task scheduling, reminders, and productivity workflows.", img: "/epsilon-ui.png" },
  { id: 103, title: "EduTools", desc: "Micro-utilities to enhance online education workflows — annotations, quick grading, and sharing.", img: "/zeta-secure.png" },
  { id: 104, title: "DialogFlow Chatbot", desc: "Intelligent chatbot using Google Dialogflow for natural language support and lead capture.", img: "/project-alpha.png" },
];

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const renderGrid = (projects: Project[]) => (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((proj, i) => (
        <motion.div
          key={proj.id}
          className="relative shadow-lg rounded-xl overflow-hidden group cursor-pointer border-t-4 border-blue-200 hover:border-blue-500 transition-all"
          whileHover={{ scale: 1.045 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          onClick={() => setSelected(proj)}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * i }}
        >
          <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
          <div className="p-5 bg-white dark:bg-zinc-900">
            <div className="text-lg font-bold text-blue-800 mb-1">{proj.title}</div>
            <div className="text-zinc-600 dark:text-zinc-200 text-sm">{proj.desc}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pt-20 pb-16">
      <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-700 text-center">Our Featured Projects</motion.h1>
      <p className="text-center text-zinc-600 dark:text-zinc-300 mb-10">Real solutions for real businesses – explore our successful projects</p>
      {renderGrid(featured)}

      <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }} transition={{duration:0.6}} className="text-2xl md:text-3xl font-extrabold mt-16 mb-2 text-blue-700 text-center">Open Source & Innovation Projects</motion.h2>
      <p className="text-center text-zinc-600 dark:text-zinc-300 mb-10">Explore our contributions to AI, automation, and educational technology</p>
      {renderGrid(openSource)}

      {/* Modal Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="bg-white dark:bg-zinc-950 rounded-lg shadow-xl max-w-md w-full p-8 m-6 relative" initial={{ y: 70, scale:0.96, opacity:0 }} animate={{ y:0, scale:1, opacity:1 }} exit={{ y:60, scale:0.95, opacity:0 }} transition={{ duration:0.35 }} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
              <button className="absolute top-2 right-4 text-2xl text-zinc-400 hover:text-blue-600" onClick={() => setSelected(null)}>&times;</button>
              <img src={selected.img} alt={selected.title} className="w-full rounded mb-5 h-44 object-cover" />
              <div className="text-2xl font-bold text-blue-700 mb-2">{selected.title}</div>
              <div className="text-zinc-600 dark:text-zinc-200 mb-4">{selected.desc}</div>
              <div className="text-sm text-zinc-500">(Project details coming soon...)</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
