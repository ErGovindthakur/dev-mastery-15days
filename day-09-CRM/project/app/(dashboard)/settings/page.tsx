import SettingsSidebar from "@/app/components/settings/SettingSidebar";

import ProfileCard from "@/app/components/settings/ProfileCard";

import AppearanceCard from "@/app/components/settings/AppearanceCard";

import NotificationCard from "@/app/components/settings/NotificationCard";

import SecurityCard from "@/app/components/settings/SecurityCard";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your account and CRM preferences.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <SettingsSidebar />

        <div className="space-y-6 lg:col-span-3">
          <ProfileCard />

          <AppearanceCard />

          <NotificationCard />

          <SecurityCard />
        </div>
      </div>
    </div>
  );
}