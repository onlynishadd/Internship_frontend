"use client";
import { motion } from "framer-motion";
const services = [
  {title: "Android App Development", icon: "📱", desc: "Custom Android applications built with the latest technologies to bring your ideas to life.", bullets: ["Native & Hybrid Apps","Play Store Deployment","Maintenance & Support"]},
  {title: "Web Development", icon: "🌐", desc: "Responsive and scalable web applications tailored to your business needs.", bullets: ["Responsive Design","E-commerce Solutions","Progressive Web Apps"]},
  {title: "UI/UX Development", icon: "🎨", desc: "Beautiful, intuitive user interfaces that enhance user experience and engagement.", bullets: ["User Research","Wireframing","Brand Identity"]},
  {title: "CRM Software", icon: "💼", desc: "Comprehensive CRM solutions to manage customer relationships and boost productivity.", bullets: ["Custom Development","Integration Services","Training & Support"]},
  {title: "Cloud Solutions", icon: "☁️", desc: "Scalable cloud infrastructure and migration services for modern businesses.", bullets: ["AWS, Azure, GCP","Migration Services","Performance Tuning"]},
  {title: "Cybersecurity", icon: "🔒", desc: "Protect your business with robust security solutions and best practices.", bullets: ["Security Audits","Penetration Testing","Compliance"]},
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
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg border-t-4 border-blue-300 p-8 flex flex-col items-start text-left cursor-pointer hover:border-blue-600 transition-all group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{srv.icon}</div>
            <div className="font-bold text-lg mb-2 text-blue-700">{srv.title}</div>
            <div className="text-zinc-500 dark:text-zinc-200 mb-4">{srv.desc}</div>
            <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
              {srv.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Development Process Section */}
      <section className="mt-16 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 text-zinc-900 dark:text-zinc-100">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }} transition={{duration:0.6}} className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 dark:text-cyan-300">Our Development Process</motion.h2>
        <p className="text-center text-zinc-600 dark:text-zinc-300 mt-2 mb-8">A proven methodology that ensures quality, efficiency, and client satisfaction</p>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { num: 1, title: "Discovery & Planning", desc: "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones." },
            { num: 2, title: "Design & Prototype", desc: "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins." },
            { num: 3, title: "Development & Testing", desc: "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms." },
            { num: 4, title: "Deployment & Support", desc: "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly." },
          ].map((s, i) => (
            <motion.div
              key={s.num}
              initial={{opacity:0, y:24}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once:true }}
              transition={{duration:0.5, delay:0.05*i}}
              className="relative bg-white dark:bg-zinc-900 rounded-xl shadow p-6 md:p-7 flex items-start gap-4 border-l-4 border-blue-400"
            >
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center text-lg md:text-xl font-bold shadow">{s.num}</div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg md:text-xl mb-1">{s.title}</div>
                <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-300">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}



