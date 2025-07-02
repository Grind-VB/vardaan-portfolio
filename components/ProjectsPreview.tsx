"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects"; // or inline dummyProjects

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
