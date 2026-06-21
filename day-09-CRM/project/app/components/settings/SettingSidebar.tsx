import {
  User,
  Shield,
  Bell,
  Palette,
  Database,
} from "lucide-react";

const items = [
  {
    icon: User,
    label: "Profile",
  },
  {
    icon: Shield,
    label: "Security",
  },
  {
    icon: Bell,
    label: "Notifications",
  },
  {
    icon: Palette,
    label: "Appearance",
  },
  {
    icon: Database,
    label: "Database",
  },
];

export default function SettingsSidebar() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-5
        h-fit
      "
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            className="
              mb-2
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-left
              text-slate-300
              hover:bg-slate-800
            "
          >
            <Icon size={18} />

            {item.label}
          </button>
        );
      })}
    </div>
  );
}