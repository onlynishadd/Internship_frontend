"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-20 pb-16">
      <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700">About AppDost+</motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="text-xl text-zinc-700 dark:text-zinc-100 mb-10 max-w-2xl">
        We believe technology should empower businesses and users. Our mission? Deliver digital solutions that blend innovation, simplicity, and impact.
      </motion.p>
      <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.5, duration:0.7}} className="grid md:grid-cols-3 gap-8 my-10">
        {["Excellence","Integrity","Collaboration"].map((val, i) => (
          <motion.div key={val} whileHover={{scale:1.04}} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow text-center border-t-4 border-blue-400">
            <div className="text-3xl font-semibold text-blue-700 mb-2">{val}</div>
            <div className="text-zinc-600 dark:text-zinc-200">Placeholder for value description.</div>
          </motion.div>
        ))}
      </motion.div>
      <h2 className="text-2xl font-bold my-8 text-blue-700">Meet the Team</h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1,2,3,4].map((n)=>(
          <motion.div whileHover={{ scale:1.08 }} key={n} className="flex flex-col gap-3 items-center bg-blue-50 dark:bg-zinc-900 rounded-lg p-5 shadow">
            <div className="w-20 h-20 rounded-full bg-blue-300 dark:bg-zinc-700 flex items-center justify-center text-2xl font-bold text-white">T{n}</div>
            <div className="font-semibold text-blue-800 dark:text-cyan-200">Teammate {n}</div>
            <div className="text-zinc-500">Position</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
