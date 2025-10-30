"use client";
import { motion } from "framer-motion";
const posts = [
  { slug: "digital-transformation", title: "Digital Transformation for Businesses", excerpt: "Embracing tech to drive business growth.", date: "2024-05-01" },
  { slug: "ui-ux-trends", title: "2025 UI/UX Trends", excerpt: "Latest UI & UX patterns you should know.", date: "2024-06-15" },
  { slug: "cloud-journey", title: "Your Cloud Journey", excerpt: "How to move your business to the cloud.", date: "2024-04-20" },
];
export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-16">
      <motion.h1 initial={{opacity:0, y:-32}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-700">From Our Blog</motion.h1>
      <motion.div className="flex flex-col gap-6">
        {posts.map((post, i) => (
          <motion.a
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="group block bg-white dark:bg-zinc-900 p-6 rounded-xl shadow border-l-4 border-blue-100 hover:border-blue-500 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.09 * i, duration: 0.7 }}
            whileHover={{ scale: 1.017 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="text-blue-700 font-bold text-lg group-hover:underline">{post.title}</div>
              <span className="ml-auto text-xs text-zinc-500">{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="text-zinc-600 dark:text-zinc-200 text-base">{post.excerpt}</div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
