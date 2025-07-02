"use client";

import { motion } from "framer-motion";

export default function AboutSnapshot() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold font-serif mb-6">About Me</h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        I'm a final-year B.Tech student in Data Science & AI from India, blending engineering with a deep love for Japan, nature, and meaningful technology.
      </p>

      <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
        Whether it’s building immersive UI/UX experiences, agritech apps, or real-time AI systems — I value elegance, impact, and storytelling through code.
      </p>

      <p className="text-md text-gray-600 dark:text-gray-400 italic">
        Currently learning Japanese 🇯🇵 and planning a master's journey toward a cozy career under Mt. Fuji 🌸
      </p>
    </motion.section>
  );
}
