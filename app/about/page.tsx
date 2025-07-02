"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6 py-24"
      >
        <h1 className="text-4xl font-serif font-bold mb-6">About Me</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          I’m Vardaan, a B.Tech student from India passionate about building thoughtful, immersive software — especially in AI, full-stack web, and agritech innovation.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
          I love blending traditional themes (like nature, calm, and culture) with modern technology — whether it’s a personal portfolio or a mission-critical app for farmers.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400">
          My long-term dream is to live and build in Japan 🇯🇵, and I’m currently preparing to pursue a master’s there while freelancing and growing my skillset.
        </p>
      </motion.section>
    </Layout>
  );
}
