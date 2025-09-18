"use client";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { listNavUser } from "../lib/list-label";
import DarkMode from "./DarkMode";
import UserMenu from "./UserMenu";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="w-full">
      <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <img src="/images/cw.png" alt="logo" className="w-10 h-10" />
        </div>
        <div className="flex items-center gap-2">
          <DarkMode />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default App;
