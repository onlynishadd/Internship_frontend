"use client";
import { motion } from "framer-motion";
const jobs = [
  { title: "Frontend Developer", type: "Full-time", location: "Remote / Delhi", desc: "React/Next.js pro, great UI skills." },
  { title: "Backend Engineer", type: "Full-time", location: "Delhi/Hybrid", desc: "Node.js, APIs, scaling experience." },
  { title: "UI/UX Designer", type: "Part-time", location: "Remote", desc: "Design systems, Figma, user empathy." },
];
export default function CareersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-20 pb-16">
      <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700">Careers at AppDost+</motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="text-lg text-zinc-700 dark:text-zinc-100 mb-10 max-w-2xl">
        Join a team of passionate techies, creative thinkers, and customer champions. We nurture talent, encourage growth, and value diversity. Perks include WFH, hackathons, wellness, and more!
      </motion.p>
      <h2 className="text-2xl font-bold mb-8 text-blue-700">Open Positions</h2>
      <motion.div className="flex flex-col gap-6">
        {jobs.map((job, i)=> (
          <motion.div
            key={job.title}
            className="bg-white dark:bg-zinc-800 border-t-4 border-blue-200 rounded-lg shadow px-6 py-5 group hover:border-blue-600 transition-all cursor-pointer relative"
            initial={{ opacity:0, y:25 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{once:true}}
            transition={{ duration:0.6, delay: 0.12*i }}
            whileHover={{ scale:1.02, boxShadow: "0 8px 24px #60a5fa44" }}
          >
            <div className="flex items-center gap-4 mb-1">
              <div className="text-xl font-bold text-blue-700 group-hover:text-blue-900">{job.title}</div>
              <span className="ml-auto text-xs text-zinc-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full">{job.type}</span>
            </div>
            <div className="text-zinc-500 mb-2">{job.location}</div>
            <div className="text-zinc-600 dark:text-zinc-200 mb-1">{job.desc}</div>
            <button className="absolute right-6 bottom-5 px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold shadow hover:bg-blue-700 transition-colors">Apply</button>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-14 text-center text-zinc-600 dark:text-zinc-400">
        No match? Email your CV at <a href="mailto:team@appdost.in" className="text-blue-700 hover:underline">team@appdost.in</a>
      </div>
    </div>
  );
}
