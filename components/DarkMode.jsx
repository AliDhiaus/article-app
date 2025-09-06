"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full text-slate-600 bg-transparent hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </Button>
  );
};

export default DarkMode;
