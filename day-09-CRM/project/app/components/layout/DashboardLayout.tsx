"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <div
        className={`
          transition-all
          duration-300
          ${
            sidebarOpen
              ? "lg:ml-72"
              : "lg:ml-24"
          }
        `}
      >
        <Header
          toggleSidebar={() =>
            setSidebarOpen(
              !sidebarOpen
            )
          }
        />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}