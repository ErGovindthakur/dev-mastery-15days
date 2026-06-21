export default function RecentUploads() {
  const uploads = [
    {
      id: 1,
      filename: "upload.csv",
      status: "Completed",
    },
    {
      id: 2,
      filename: "dealers.csv",
      status: "Completed",
    },
  ];

  return (
    <div className="mt-8 rounded-xl border bg-gray-900 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Recent Uploads
      </h3>

      <div className="space-y-3">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className="flex items-center justify-between border-b pb-3"
          >
            <span>
              {upload.filename}
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-green-700">
              {upload.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}