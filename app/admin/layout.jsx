import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "@/components/Header";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col h-dvh w-full">
      <div className="z-30">
        <Header />
      </div>
      <div className="flex flex-1">
        <div className="relative z-20 h-full w-14 md:w-36 transition-all duration-300 ">
          <Sidebar />
        </div>
        <main className="p-4 w-full z-0">
            <div className='shadow-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md p-4'>
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};

export default layout;
