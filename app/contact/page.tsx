"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto px-6 py-24"
    >
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">Let’s Connect</h1>

      <p className="text-gray-700 dark:text-gray-300 text-center mb-10">
        Have a project, opportunity, or just want to say hello?  
        Feel free to message me using the form below — I’ll get back to you as soon as I can.
      </p>

      <form
        action="https://formspree.io/f/xldnvgeq" // 🔁 REPLACE with your own Formspree endpoint later
        method="POST"
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="_replyto"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:bg-gray-900 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:brightness-110 dark:bg-yellow-400 dark:text-black transition"
        >
          📬 Send Message
        </button>
      </form>
    </motion.main>
  );
}
