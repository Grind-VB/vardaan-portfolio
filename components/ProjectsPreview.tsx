"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    title: "FarmConnect",
    description: "A Flutter app to help farmers connect with markets and storage.",
    tech: ["Flutter", "Firebase", "Dart"],
  },
  {
    title: "AgryBin",
    description: "A smart grain bin tracker for agritech supply chains.",
    tech: ["IoT", "React", "Next.js"],
  },
  {
    title: "Portfolio Theme Park",
    description: "A Next.js portfolio with immersive storytelling animations.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
  },
];

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
        {dummyProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </motion.section>
  );
}
