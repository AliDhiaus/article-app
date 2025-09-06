import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "@/components/Header";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col h-dvh w-full">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-4 w-full">
            <div className='shadow-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md p-4'>
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};

export default layout;
