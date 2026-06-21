"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Upload,
  Users,
  Settings,
  ChevronLeft,
} from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({
  open,
  setOpen,
}: Props) {
  const pathname =
    usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Uploads",
      href: "/uploads",
      icon: Upload,
    },
    {
      label: "Dealers",
      href: "/dealers",
      icon: Users,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={`
        fixed
        left-0
        top-0
        z-50
        h-screen
        border-r
        border-slate-800
        bg-slate-950
        transition-all
        duration-300
        ${
          open
            ? "w-72"
            : "w-24"
        }
      `}
    >
      {/* Logo */}

      <div
        className="
          flex
          h-20
          items-center
          justify-between
          px-6
        "
      >
        {open && (
          <h1
            className="
              text-2xl
              font-bold
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            CRM Pro
          </h1>
        )}

        <button
          onClick={() =>
            setOpen(!open)
          }
          className="
            rounded-xl
            p-2
            hover:bg-slate-900
          "
        >
          <ChevronLeft />
        </button>
      </div>

      {/* Navigation */}

      <nav className="px-4">
        {links.map((link) => {
          const Icon =
            link.icon;

          const active =
            pathname.startsWith(
              link.href
            );

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                mb-2
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                transition-all
                ${
                  active
                    ? `
                      bg-blue-500/10
                      text-blue-400
                      border
                      border-blue-500/20
                    `
                    : `
                      text-slate-400
                      hover:bg-slate-900
                    `
                }
              `}
            >
              <Icon size={20} />

              {open && (
                <span>
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Card */}

      {open && (
        <div
          className="
            absolute
            bottom-6
            left-4
            right-4
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-4
          "
        >
          <p className="font-medium">
            Govind Kumar
          </p>

          <p className="text-sm text-slate-400">
            Full Stack Developer
          </p>
        </div>
      )}
    </aside>
  );
}