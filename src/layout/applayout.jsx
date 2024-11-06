import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>

      <main className="min-h-screen container m-auto">
        <Header />

        <Outlet />
      </main>

      <div className="px-10 py-2 flex items-center justify-center bg-gray-500">
        Made by {"  "}
        <a classNam="underline" href="https://github.com/GULSHANITSYOU">
          @Gulshan
        </a>
        .💗 a new experience
      </div>
    </div>
  );
};

export default AppLayout;
