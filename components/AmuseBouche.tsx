"use client";

import { motion } from "framer-motion";

export default function AmuseBouche() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto py-16 px-6"
    >
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-serif">
        I build interfaces that feel like mountain rain — calm, immersive, and made with care.
      </p>
    </motion.section>
  );
}
