export default function ActivityFeed() {
  const activities = [
    "upload.csv processed",
    "dealer.csv uploaded",
    "2 validation errors found",
  ];

  return (
    <div className="rounded-2xl border bg-zinc-950 p-6">
      <h3 className="mb-4 text-lg font-semibold">
        Activity Feed
      </h3>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item}
            className="flex gap-3"
          >
            <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}