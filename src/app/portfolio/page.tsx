"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

const projects: Project[] = [
  { id: 1, title: "Project Alpha", desc: "Enterprise mobile app for logistics.", img: "/project-alpha.png" },
  { id: 2, title: "Beta CRM", desc: "Custom CRM web solution.", img: "/beta-crm.png" },
  { id: 3, title: "Gamma Site", desc: "Modern business website design.", img: "/gamma-site.png" },
  { id: 4, title: "Delta Cloud", desc: "Secure cloud migration.", img: "/delta-cloud.png" },
  { id: 5, title: "Epsilon UI", desc: "Cutting-edge UI/UX overhaul.", img: "/epsilon-ui.png" },
  { id: 6, title: "Zeta Secure", desc: "Comprehensive cybersecurity.", img: "/zeta-secure.png" },
];

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <div className="mx-auto max-w-6xl px-4 pt-20 pb-16">
      <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-700">Our Portfolio</motion.h1>
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
