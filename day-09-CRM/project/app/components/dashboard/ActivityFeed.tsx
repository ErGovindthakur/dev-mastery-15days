import {
  FileSpreadsheet,
  Clock3,
} from "lucide-react";

interface Upload {
  id: number;
  filename: string;
  createdAt: Date;
}

interface Props {
  uploads: Upload[];
}

export default function ActivityFeed({
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
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-100">
          Activity Feed
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Latest upload activities
        </p>
      </div>

      <div className="space-y-6">
        {uploads.map((upload, index) => (
          <div
            key={upload.id}
            className="relative flex gap-4"
          >
            {/* Timeline Line */}

            {index !== uploads.length - 1 && (
              <div
                className="
                  absolute
                  left-5
                  top-10
                  h-full
                  w-px
                  bg-slate-700
                "
              />
            )}

            {/* Icon */}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-blue-500/10
                text-blue-400
              "
            >
              <FileSpreadsheet size={18} />
            </div>

            {/* Content */}

            <div className="flex-1">
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-800/40
                  p-4
                  transition-all
                  hover:border-blue-500/40
                  hover:bg-slate-800
                "
              >
                <h4 className="font-medium text-slate-100">
                  {upload.filename}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  CSV uploaded and processed successfully
                </p>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-slate-500
                  "
                >
                  <Clock3 size={14} />

                  <span>
                    {new Date(
                      upload.createdAt
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}