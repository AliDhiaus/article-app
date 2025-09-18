"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/app/redux/slices/UserSlice";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  }

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
                      ? "bg-gray-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300"
                      : "text-white dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="sidebar-link-label">{item.label}</span>
                </Link>
              );
            })}
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-red-50 dark:hover:bg-red-950"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex flex-col items-center justify-center text-white gap-2 md:flex-row p-4 text-sm text-center">
            © 2025<span>MyApp</span>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
