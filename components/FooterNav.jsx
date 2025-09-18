"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { listNavAdmin } from "@/lib/list-label";

export function AppFooterNav() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 md:hidden left-0 w-full bg-white dark:bg-gray-900 shadow-inner border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-center items-center gap-10 p-2">
        {listNavAdmin.map((item, i) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={i}
              href={item.path}
              className={`flex flex-col items-center text-xs font-medium transition-all duration-200
                ${isActive 
                  ? "text-indigo-600 dark:text-indigo-300" 
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                }`}
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
