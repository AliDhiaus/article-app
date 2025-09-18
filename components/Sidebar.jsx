"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { listNavAdmin } from "@/lib/list-label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-center">
          <Image 
            src="/images/cw.png"
            alt="logo"
            width={50}
            height={50}
            style={{ width: "50px", height: "50px" }}
          />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            {listNavAdmin.map((item, i) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={`flex flex-row w-full gap-3 p-2 text-sm font-medium transition-all duration-200 rounded-md
                  ${
                    isActive
                      ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="sidebar-link-label">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row p-4 text-sm text-center">
            © 2025<span>MyApp</span>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
