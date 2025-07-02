"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-2xl border border-gray-700 bg-white dark:bg-gray-900 shadow-md p-6 transition-all duration-300 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 text-sm">
        {tech.map((t) => (
          <span
            key={t}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
