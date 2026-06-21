"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

interface Props {
  toggleSidebar: () => void;
}

export default function Header({
  toggleSidebar,
}: Props) {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-slate-800
        bg-slate-950/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-20
          items-center
          justify-between
          px-8
        "
      >
        {/* Left */}

        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="
              rounded-xl
              border
              border-slate-800
              p-2
              hover:bg-slate-900
            "
          >
            <Menu size={18} />
          </button>

          <div>
            <h2 className="text-xl font-bold">
              CRM Dashboard
            </h2>

            <p className="text-sm text-slate-400">
              Manage uploads and dealers
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          <div
            className="
              hidden
              md:flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              px-4
              py-2
            "
          >
            <Search
              size={16}
              className="text-slate-500"
            />

            <input
              placeholder="Search..."
              className="
                bg-transparent
                outline-none
                text-sm
              "
            />
          </div>

          <button
            className="
              rounded-xl
              border
              border-slate-800
              p-2
              hover:bg-slate-900
            "
          >
            <Bell size={18} />
          </button>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              font-semibold
            "
          >
            G
          </div>
        </div>
      </div>
    </header>
  );
}