"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-20 pb-16">
      <motion.span initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-3">About AppDost</motion.span>
      <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700">
        Your Trusted Partner for
        <br/>Complete <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Digital</span>
        <br/>Transformation
      </motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className="text-xl text-zinc-700 dark:text-zinc-100 mb-10 max-w-3xl">
        AppDost is your partner for complete digital transformation. Founded in 2025, we are a full-service IT solutions provider specializing in turning innovative ideas into powerful, market-ready products. Our expertise spans the entire development lifecycle, from intuitive UI/UX design to robust software development.
      </motion.p>
      <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.4, duration:0.6}} className="grid md:grid-cols-3 gap-8 my-10">
        {[{
          title: "User-Centric Design",
          desc: "Intuitive UI/UX that guarantees user satisfaction and engagement",
        },{
          title: "Cutting-Edge Technology",
          desc: "Latest frameworks and tools for scalable, robust solutions",
        },{
          title: "Client-Focused Approach",
          desc: "Your success is our priority, every step of the way",
        }].map((item) => (
          <motion.div key={item.title} whileHover={{scale:1.04}} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow text-left border-t-4 border-blue-400">
            <div className="text-xl font-semibold text-blue-700 mb-2">{item.title}</div>
            <div className="text-zinc-600 dark:text-zinc-200">{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once:true }} transition={{duration:0.6}} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
        {[{
          k:"100%", v:"Client Satisfaction"
        },{k:"15+", v:"Projects Delivered"},{k:"24/7", v:"Support Available"},{k:"Fast", v:"Turnaround Time"}].map(s => (
          <div key={s.k} className="rounded-xl bg-blue-50 dark:bg-zinc-900 p-6 text-center shadow">
            <div className="text-3xl font-extrabold text-blue-700">{s.k}</div>
            <div className="text-xs mt-1 text-zinc-600 dark:text-zinc-300">{s.v}</div>
          </div>
        ))}
      </motion.div>
      <a href="/services" className="inline-block mt-2 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Discover Our Services</a>
    </div>
  );
}



