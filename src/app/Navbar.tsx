"use client";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <nav className="flex justify-center md:justify-between items-center w-full px-8 py-6 shadow-lg sticky top-0 z-50 bg-white/75 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900">
      <motion.a href="/" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-blue-600 tracking-tight mr-10">AppDost</motion.a>
      <motion.ul initial="hidden" animate="visible" className="flex space-x-6 font-medium text-zinc-700 dark:text-zinc-200">
        <motion.li whileHover={{ scale: 1.05 }}><a href="/about">About</a></motion.li>
        <motion.li whileHover={{ scale: 1.05 }}><a href="/services">Services</a></motion.li>
        <motion.li whileHover={{ scale: 1.05 }}><a href="/portfolio">Portfolio</a></motion.li>
        <motion.li whileHover={{ scale: 1.05 }}><a href="/careers">Careers</a></motion.li>
        <motion.li whileHover={{ scale: 1.05 }}><a href="/blog">Blog</a></motion.li>
        <motion.li whileHover={{ scale: 1.05 }}><a href="/contact">Contact</a></motion.li>
      </motion.ul>
    </nav>
  );
}



