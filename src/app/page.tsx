"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  // Animated background opacity based on scroll (start at 0.7, fade to 0)
  const startOpacity = 0.7;
  const [bgOpacity, setBgOpacity] = useState(startOpacity);

  useEffect(() => {
    const handleScroll = () => {
      // Opacity goes from 0.7 (top) down to 0 after 350px
      const y = window.scrollY;
      const max = 350;
      let progress = Math.min(1, y / max); // 0 (top) to 1 (max)
      let o = startOpacity * (1 - progress);
      setBgOpacity(o);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-gradient-to-tr from-blue-100 via-white to-zinc-50 dark:from-black dark:via-zinc-900 dark:to-zinc-950 font-sans overflow-x-hidden">
      {/* Animated image background (fades OUT on scroll) */}
      <motion.div 
        aria-hidden
        style={{ opacity: bgOpacity }}
        initial={{ opacity: startOpacity }}
        animate={{ opacity: bgOpacity }}
        transition={{ duration: 0.32 }}
        className="pointer-events-none z-0 fixed inset-0 w-full h-full"
      >
        <img 
          src="/hero-bg.png" 
          alt="Futuristic background" 
          className="w-full h-full object-cover" 
          style={{ opacity: 0.94 }}
        />
      </motion.div>
      {/* Overlay content, positioned above background */}
      <div className="relative z-10">
        {/* Hero section */}
        <section className="pt-32 pb-20 flex flex-col items-center text-center gap-8 relative">
          <motion.h1 initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration: 1}} className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
            Transform Your
            <br/>
            <span className="text-zinc-800 dark:text-zinc-200">Ideas Into <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Digital</span></span>
            <br/>
            <span className="text-zinc-800 dark:text-zinc-200">Reality</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5, duration:1 }} className="max-w-2xl text-lg md:text-2xl text-zinc-600 dark:text-zinc-100">
            Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.
          </motion.p>
          <motion.a href="/services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block mt-4 px-8 py-3 font-semibold rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors">
            Explore Our Services
          </motion.a>

          {/* Floating tiles (right side) */}
          <div className="hidden md:block">
            <motion.div initial={{ opacity:0, x:80, y:-40 }} animate={{ opacity:1, x:0, y:0 }} transition={{ duration:0.7, delay:0.2 }} className="absolute right-10 top-4 bg-white/95 dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 px-5 py-4">
              <div className="text-xs text-zinc-500 mb-1">Web Development</div>
              <div className="text-blue-700 font-extrabold">+10 Projects</div>
            </motion.div>
            <motion.div initial={{ opacity:0, x:110, y:80 }} animate={{ opacity:1, x:0, y:0 }} transition={{ duration:0.7, delay:0.35 }} className="absolute right-6 top-40 bg-white/95 dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 px-5 py-4">
              <div className="text-xs text-zinc-500 mb-1">Fast Delivery</div>
              <div className="text-blue-700 font-extrabold">On Time</div>
            </motion.div>
            <motion.div initial={{ opacity:0, x:60, y:160 }} animate={{ opacity:1, x:0, y:0 }} transition={{ duration:0.7, delay:0.5 }} className="absolute right-14 top-64 bg-white/95 dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 px-5 py-4">
              <div className="text-xs text-zinc-500 mb-1">Mobile Apps</div>
              <div className="text-blue-700 font-extrabold">+4 Apps</div>
            </motion.div>
          </div>
        </section>
        {/* Services grid */}
        <section className="w-full py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <motion.div initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} viewport={{ once:true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Android Development","Web Development","UI/UX Design","CRM Software","Cloud Solutions","Cybersecurity"].map((srv, idx) => (
              <motion.div key={srv} initial={{ opacity:0, y:30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration:0.6, delay:0.1*idx }} className="group bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg border hover:shadow-2xl transition duration-400 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 mb-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600 flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
                  {idx+1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{srv}</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Exciting, future-ready solutions tailored for your business. Explore more soon!</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/* Testimonials + Stats */}
        <section className="w-full py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
            <motion.blockquote initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} transition={{ duration: 0.8 }} viewport={{ once:true }} className="bg-blue-50 dark:bg-zinc-900 p-6 rounded-lg text-zinc-600 dark:text-zinc-200 border-l-4 border-blue-400 shadow">
              “AppDost+ never disappoints. From concept to launch, they deliver on time and beyond expectations.”
              <footer className="italic mt-2">— Happy Client</footer>
            </motion.blockquote>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-6">
            <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 0.7, delay:0.2}} viewport={{ once:true }} className="text-center">
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <div className="text-zinc-700 dark:text-zinc-200 text-lg">Web Projects</div>
            </motion.div>
            <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 0.7, delay:0.4}} viewport={{ once:true }} className="text-center">
              <div className="text-4xl font-bold text-blue-600">4+</div>
              <div className="text-zinc-700 dark:text-zinc-200 text-lg">Mobile Apps • On Time</div>
            </motion.div>
          </div>
        </section>
        {/* Animated CTA */}
        <section className="py-14 flex flex-col items-center bg-gradient-to-br from-blue-600/10 to-cyan-300/10 dark:from-black dark:to-zinc-900">
          <motion.h2 initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.9 }} viewport={{ once:true }} className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 dark:text-cyan-300">Let’s Build Something Amazing Together</motion.h2>
          <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale:0.95 }} className="px-8 py-3 font-semibold rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-colors">Get Free Consultation</motion.a>
        </section>
      </div>
    </div>
  );
}
