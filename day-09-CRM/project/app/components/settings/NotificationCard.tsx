export default function NotificationCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <h3 className="text-xl font-semibold">
        Notifications
      </h3>

      <div className="mt-6 space-y-4">
        <label className="flex justify-between">
          <span>
            Email Notifications
          </span>

          <input
            type="checkbox"
            defaultChecked
          />
        </label>

        <label className="flex justify-between">
          <span>
            Upload Alerts
          </span>

          <input
            type="checkbox"
            defaultChecked
          />
        </label>
      </div>
    </div>
  );
}