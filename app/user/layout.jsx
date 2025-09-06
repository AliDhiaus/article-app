import React from "react";
import Navbar from "../../components/Navbar";

const layout = ({ children }) => {
  
  return (
    <div>
      <Navbar />
      <main className="p-4 w-full">
        <div className="bg-white dark:bg-slate-900">
          {children}
        </div>
      </main>
    </div>
  );
}

export default layout