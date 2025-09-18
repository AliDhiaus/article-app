"use client"
import React from "react";
import { Provider } from "react-redux";
import { store } from '@/app/redux/Store'

const layout = ({ children }) => {
  
  return (
    <div>
      <main className="w-full">
         <Provider store={store}>
          {children}
        </Provider>
      </main>
    </div>
  );
}

export default layout