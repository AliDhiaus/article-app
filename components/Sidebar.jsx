"use client";
import React from "react";
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
  
  return (
    <aside className="shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col">
      <nav className="flex-1 px-2 py-4">
        <NavigationMenu className="flex flex-col gap-1 w-full">
          {listNavAdmin.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <NavigationMenuLink
                key={i}
                asChild
                className="w-full"
              >
                <Link
                  href={item.path}
                  className={`flex flex-row w-full items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </NavigationMenuLink>
            );
          })}
        </NavigationMenu>
      </nav>

      <div className="p-4 border-t border-indigo-500 text-sm text-center">
        © 2025 MyApp
      </div>
    </aside>
  );
};

export default Sidebar;
