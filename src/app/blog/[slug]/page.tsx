"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
const posts = [
  { slug: "digital-transformation", title: "Digital Transformation for Businesses", date: "2024-05-01", body: "Embracing tech to drive business growth.\nLorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { slug: "ui-ux-trends", title: "2025 UI/UX Trends", date: "2024-06-15", body: "Latest patterns in UI & UX.\nCurabitur viverra, velit vitae cursus sagittis..." },
  { slug: "cloud-journey", title: "Your Cloud Journey", date: "2024-04-20", body: "How to move your business to the cloud.\nSuspendisse potenti. Quisque varius, turpis id." },
];
export default function BlogArticlePage() {
  const params = useParams();
  const post = posts.find((p) => p.slug === params?.slug);
  if (!post) return <div className="p-16 text-center text-zinc-500">Article not found.</div>;
  return (
    <div className="mx-auto max-w-2xl px-4 pt-20 pb-16">
      <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.62}} className="text-3xl md:text-4xl font-bold mb-2 text-blue-700">{post.title}</motion.h1>
      <div className="text-sm text-zinc-400 mb-8">{new Date(post.date).toLocaleDateString()}</div>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.18}} className="text-zinc-700 dark:text-zinc-200 text-lg whitespace-pre-line mb-10">{post.body}</motion.p>
      <a href="/blog" className="text-blue-700 hover:underline">← Back to Blog</a>
    </div>
  );
}
