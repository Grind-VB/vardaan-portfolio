"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm px-3 py-1 border border-gray-500 rounded hover:bg-gray-700 transition"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
