export default function AppearanceCard() {
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
        Appearance
      </h3>

      <div className="mt-6 flex gap-4">
        <button
          className="
            rounded-xl
            border
            border-blue-500
            bg-slate-800
            px-6
            py-3
          "
        >
          Dark Mode
        </button>

        <button
          className="
            rounded-xl
            border
            border-slate-700
            px-6
            py-3
          "
        >
          Light Mode
        </button>
      </div>
    </div>
  );
}