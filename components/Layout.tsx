"use client";

import { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 min-h-screen text-black dark:text-white transition-colors duration-300">
      <header className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
  <h1 className="text-xl font-semibold">Vardaan’s Portfolio</h1>
  <div className="flex gap-4 items-center">
    <a href="/" className="hover:text-primary transition">Home</a>
    <a href="/about" className="hover:text-primary transition">About</a>
    <a href="/projects" className="hover:text-primary transition">Projects</a>
    <a href="/resume" className="hover:text-primary transition">Resume</a>
    <a href="/contact" className="hover:text-primary transition">Contact</a>
    <ThemeToggle />
  </div>
</header>

      
      <main className="px-6 py-10">{children}</main>

      <footer className="px-6 py-6 border-t border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Vardaan Bazaz. Made with patience, purpose, and pixels.
      </footer>

    </div>
  );
}
