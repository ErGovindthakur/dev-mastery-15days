interface Props {
  createdAt: Date;
  updatedAt: Date;
}

export default function UploadTimeline({
  createdAt,
  updatedAt,
}: Props) {
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
      <h2
        className="
          mb-5
          text-xl
          font-semibold
        "
      >
        Timeline
      </h2>

      <div className="space-y-5">
        <div>
          <p className="font-medium">
            Upload Created
          </p>

          <p className="text-slate-400">
            {createdAt.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="font-medium">
            Processing Completed
          </p>

          <p className="text-slate-400">
            {updatedAt.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}