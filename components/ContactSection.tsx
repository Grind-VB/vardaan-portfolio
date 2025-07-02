"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold font-serif mb-6">Let's Connect</h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Have an idea, collaboration, or just want to say hello?  
        I’d love to hear from you!
      </p>

      <a
        href="mailto:vardaan@example.com"
        className="inline-block mt-4 px-6 py-3 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900 transition-colors duration-300"
      >
        📧 Send Email
      </a>

      <div className="mt-8 flex justify-center gap-6 text-2xl">
        <a href="https://github.com/vardaanbazaz" target="_blank" className="hover:text-primary transition">
          🐙 GitHub
        </a>
        <a href="https://linkedin.com/in/vardaanbazaz" target="_blank" className="hover:text-primary transition">
          💼 LinkedIn
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" className="hover:text-primary transition">
          🐦 Twitter
        </a>
      </div>
    </motion.section>
  );
}
