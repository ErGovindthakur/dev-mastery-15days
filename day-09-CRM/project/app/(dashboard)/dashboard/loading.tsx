export default function Loading() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="
            h-40
            animate-pulse
            rounded-3xl
            bg-slate-800
          "
        />
      ))}
    </div>
  );
}