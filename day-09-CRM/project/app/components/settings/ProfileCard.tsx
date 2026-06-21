export default function ProfileCard() {
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
        Profile
      </h3>

      <div className="mt-6 flex items-center gap-4">
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-cyan-500
            text-xl
            font-bold
          "
        >
          G
        </div>

        <div>
          <h4 className="font-medium">
            Govind Kumar
          </h4>

          <p className="text-slate-400">
            Full Stack Developer
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input
          defaultValue="Govind Kumar"
          className="
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            p-3
          "
        />

        <input
          defaultValue="govind@example.com"
          className="
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            p-3
          "
        />
      </div>
    </div>
  );
}