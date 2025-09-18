"use client";
import React from "react";
import { AppSidebar } from "../../components/Sidebar";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/app/redux/Store";
import { AppFooterNav } from "@/components/FooterNav";

const layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="flex h-dvh w-full">
        <div className="z-20 h-full transition-all duration-300 ">
            <AppSidebar />
        </div>
          <main className="p-4 w-full z-0">
            <Header />
            <div className="shadow-md mt-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md p-4">
              {children}
            </div>
            <AppFooterNav />
          </main>
      </div>
    </Provider>
  );
};

export default layout;
