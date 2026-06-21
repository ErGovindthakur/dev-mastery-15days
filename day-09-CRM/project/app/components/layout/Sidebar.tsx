import Link from "next/link";

import {
  LayoutDashboard,
  Upload,
  Users,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-black text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          CRM Pro
        </h1>
      </div>

      <nav className="space-y-2 px-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-100"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/uploads"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-100"
        >
          <Upload size={18} />
          Uploads
        </Link>

        <Link
          href="/dealers"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-100"
        >
          <Users size={18} />
          Dealers
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-100"
        >
          <Settings size={18} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}