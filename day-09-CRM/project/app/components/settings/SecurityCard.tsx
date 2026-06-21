export default function SecurityCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-red-500/20
        bg-red-500/5
        p-6
      "
    >
      <h3 className="text-xl font-semibold text-red-400">
        Danger Zone
      </h3>

      <p className="mt-2 text-slate-400">
        Delete account and all CRM data.
      </p>

      <button
        className="
          mt-5
          rounded-xl
          bg-red-600
          px-5
          py-3
          text-white
        "
      >
        Delete Account
      </button>
    </div>
  );
}