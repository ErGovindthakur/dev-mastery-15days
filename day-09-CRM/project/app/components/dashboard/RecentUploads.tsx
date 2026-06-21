import Link from "next/link";

import {
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";

interface Upload {
  id: number;
  filename: string;
  status: string;
  totalRows: number;
}

interface Props {
  uploads: Upload[];
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles = {
    COMPLETED:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

    FAILED:
      "bg-red-500/10 text-red-400 border border-red-500/20",

    PROCESSING:
      "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  };

  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${
          styles[
            status as keyof typeof styles
          ] ??
          "bg-slate-800 text-slate-300"
        }
      `}
    >
      {status}
    </span>
  );
}

export default function RecentUploads({
  uploads,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-6
        shadow-lg
      "
    >
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-100">
            Recent Uploads
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Latest CSV upload activity
          </p>
        </div>

        <Link
          href="/uploads"
          className="
            text-sm
            font-medium
            text-blue-400
            hover:text-blue-300
          "
        >
          View All
        </Link>
      </div>

      {/* Empty State */}

      {uploads.length === 0 ? (
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-slate-700
            p-8
            text-center
          "
        >
          <p className="text-slate-400">
            No uploads found
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {uploads.map((upload) => (
            <Link
              key={upload.id}
              href={`/uploads/${upload.id}`}
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-800
                bg-slate-800/40
                p-4
                transition-all
                hover:border-blue-500/30
                hover:bg-slate-800
              "
            >
              {/* Left */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-blue-400
                  "
                >
                  <FileSpreadsheet
                    size={22}
                  />
                </div>

                <div>
                  <h4 className="font-medium text-slate-100">
                    {upload.filename}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    {upload.totalRows} rows
                    • Upload #{upload.id}
                  </p>
                </div>
              </div>

              {/* Right */}

              <div className="flex items-center gap-4">
                <StatusBadge
                  status={upload.status}
                />

                <ArrowRight
                  size={18}
                  className="
                    text-slate-500
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:text-blue-400
                  "
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}