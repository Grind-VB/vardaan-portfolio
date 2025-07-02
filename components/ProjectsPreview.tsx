"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-center font-serif mb-10">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl border border-gray-700 bg-white dark:bg-gray-900 shadow-md p-6 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-400 whitespace-pre-line mb-4">
              {project.content}
            </p>

            <div className="mt-4 flex gap-4 flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  🌐 Live Site
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  🧠 GitHub Repo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
