"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 py-24 text-center"
    >
      <h1 className="text-4xl font-serif font-bold mb-6">Resume</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
        You can view or download my latest resume below.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:brightness-110 dark:bg-yellow-400 dark:text-black transition"
      >
        📄 View / Download Resume
      </a>
    </motion.main>
  );
}
