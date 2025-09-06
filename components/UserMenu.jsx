"use client";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cookies from "js-cookie";

const UserMenu = () => {
  const router = useRouter();
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole(Cookies.get("role"));
  }, []);

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    Cookies.remove("role", { path: "/" });
    router.push("/login");
  };

  return (
    <Menubar className="rounded-full border-0">
      <MenubarMenu>
        <MenubarTrigger className="md:block rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
          <User className="w-5 h-5 text-gray-700" />
        </MenubarTrigger>
        <MenubarContent className="w-40">
          <MenubarItem className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <Link href={role === "User" ? "/user/profile" : "/admin/profile" } className="w-full">
              Profile
            </Link>
          </MenubarItem>
          <MenubarItem className="p-0">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
