"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { listNavAdmin } from "@/lib/list-label";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={`shadow-lg h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
        flex flex-col transition-all duration-300 w-full hover:w-36`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="flex-1 mt-2 px-2 py-1">
        <NavigationMenu className="flex flex-col gap-2">
          {listNavAdmin.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <NavigationMenuLink key={i} asChild>
                <Link
                  href={item.path}
                  className={`flex flex-row w-full gap-3 p-2 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`}
                >
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span
                    className={`overflow-hidden whitespace-nowrap transition-all duration-300
                      ${isHovered ? "opacity-100" : "opacity-0"} md:opacity-100`}
                  >
                    {item.label}
                  </span>
                </Link>
              </NavigationMenuLink>
            );
          })}
        </NavigationMenu>
      </nav>

      <div className="flex flex-col items-center justify-center gap-2 md:flex-row p-4 border-t border-indigo-500 text-sm text-center">
        © 2025<span>MyApp</span>
      </div>
    </aside>
  );
};

export default Sidebar;
