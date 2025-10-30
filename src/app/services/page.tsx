"use client";
import { motion } from "framer-motion";
const services = [
  {title: "Android App Development", icon: "📱", desc: "Powerful mobile apps for Android platforms."},
  {title: "Web Development", icon: "🌐", desc: "Robust, scalable, beautiful web solutions."},
  {title: "UI/UX Design", icon: "🎨", desc: "User-first digital product design and research."},
  {title: "CRM Software", icon: "💼", desc: "Custom CRM to empower your customer relationships."},
  {title: "Cloud Solutions", icon: "☁️", desc: "Next-gen infrastructure and cloud transformation."},
  {title: "Cybersecurity", icon: "🔒", desc: "Protecting your business from evolving threats."},
];
export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-20 pb-16">
      <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-700">Our Services</motion.h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((srv, i) => (
          <motion.div
            key={srv.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.07 * i }}
            whileHover={{ scale: 1.08 }}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg border-t-4 border-blue-300 p-8 flex flex-col items-center text-center cursor-pointer hover:border-blue-600 transition-all group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{srv.icon}</div>
            <div className="font-bold text-lg mb-2 text-blue-700">{srv.title}</div>
            <div className="text-zinc-500 dark:text-zinc-200">{srv.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
