"use client";
import { useState } from "react";
import { motion } from "framer-motion";
function validate(values: any) {
  const errors: any = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Invalid email address";
  if (!values.message) errors.message = "Message cannot be empty";
  return errors;
}
export default function ContactPage() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  function handleChange(e: any) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    const err = validate(values);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true); setValues({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3500);
    }
  }
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-16 flex flex-col md:flex-row gap-12 items-start">
      {/* Contact info */}
      <motion.aside initial={{opacity:0, x:-24}} animate={{opacity:1, x:0}} transition={{duration:0.75}} className="flex-1 mb-8 md:mb-0 md:pr-10">
        <div className="text-3xl font-bold text-blue-700 mb-3">Contact AppDost+</div>
        <div className="mb-6 text-zinc-500 dark:text-zinc-300">Let's connect for your next project, partnership or idea!</div>
        <div className="mb-2 font-medium"><span className="text-zinc-500">Email:</span> <a className="text-blue-700 hover:underline" href="mailto:hello@appdost.in">hello@appdost.in</a></div>
        <div className="mb-2 font-medium"><span className="text-zinc-500">Phone:</span> <a className="text-blue-700 hover:underline" href="tel:+91000001234">+91 00000 1234</a></div>
        <div className="mb-2 font-medium"><span className="text-zinc-500">Location:</span> Delhi, India</div>
      </motion.aside>
      {/* Animated form */}
      <motion.form initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} transition={{duration:0.77}} onSubmit={handleSubmit} className="flex-1 w-full space-y-7 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg border-t-4 border-blue-400">
        <div className="text-xl font-semibold mb-3 text-blue-700">Send us a message</div>
        <div>
          <input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} className={`w-full p-3 rounded-md border-2 ${errors.name ? 'border-red-400' : 'border-zinc-200 dark:border-zinc-700'} focus:border-blue-400 outline-none bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition`} />
          {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} className={`w-full p-3 rounded-md border-2 ${errors.email ? 'border-red-400' : 'border-zinc-200 dark:border-zinc-700'} focus:border-blue-400 outline-none bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition`} />
          {errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
        </div>
        <div>
          <textarea name="message" placeholder="Your message..." rows={4} value={values.message} onChange={handleChange} className={`w-full p-3 rounded-md border-2 ${errors.message ? 'border-red-400' : 'border-zinc-200 dark:border-zinc-700'} focus:border-blue-400 outline-none bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition`} />
          {errors.message && <div className="text-xs text-red-500 mt-1">{errors.message}</div>}
        </div>
        <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}} type="submit" className="w-full px-5 py-3 rounded-full font-semibold bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow">Send Message</motion.button>
        <motion.div initial={{scale:0.91, opacity:0}} animate={sent ? {scale:1, opacity:1} : {scale:0.91, opacity:0}} className="text-green-600 font-medium text-center mt-2">
          Message sent! We'll get back to you soon.
        </motion.div>
      </motion.form>
    </div>
  );
}
