import StatusBadge from "@/app/components/ui/StatusBadge";

interface Props {
  filename: string;
  status: string;
}

export default function UploadSummary({
  filename,
  status,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      p-8
    "
    >
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="
              text-3xl
              font-bold
              text-slate-100
            "
          >
            {filename}
          </h1>

          <p className="mt-2 text-slate-400">
            Upload Processing Report
          </p>
        </div>

        <StatusBadge
          status={status}
        />
      </div>
    </div>
  );
}