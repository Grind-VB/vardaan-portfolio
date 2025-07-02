"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold font-serif tracking-tight"
      >
        Welcome to my world 🌌
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-gray-300 max-w-xl"
      >
        A quiet place where creativity meets code — scroll down and explore.
      </motion.p>
    </section>
  );
}
