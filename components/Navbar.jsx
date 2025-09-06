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
    <header className="w-full shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
      <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyApp
        </div>

        <div className="hidden md:block">
          <NavigationMenu className="flex gap-2">
            {listNavUser.map((item, i) => (
              <NavigationMenuLink
                key={i}
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.path} className=" dark:bg-slate-800">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenu>
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
