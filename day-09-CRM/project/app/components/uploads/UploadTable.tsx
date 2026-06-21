import Link from "next/link";
import StatusBadge from "../ui/StatusBadge";

type Upload = {
  id: number;
  filename: string;
  totalRows: number;
  insertedRows: number;
  failedRows: number;
  status: string;
};

interface Props {
  uploads: Upload[];
}

export default function UploadTable({
  uploads,
}: Props) {
  if (uploads.length === 0) {
    return (
      <div
        className="
        rounded-3xl
        border
        border-dashed
        border-slate-700
        bg-slate-900
        p-12
        text-center
      "
      >
        <h3 className="text-xl font-semibold text-slate-200">
          No uploads found
        </h3>

        <p className="mt-2 text-slate-400">
          Try uploading a CSV file.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
    "
    >
      <table className="w-full">
        <thead>
          <tr
            className="
            border-b
            border-slate-800
            text-left
          "
          >
            <th className="p-4">
              File
            </th>

            <th className="p-4">
              Rows
            </th>

            <th className="p-4">
              Inserted
            </th>

            <th className="p-4">
              Failed
            </th>

            <th className="p-4">
              Status
            </th>

            <th className="p-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {uploads.map((upload) => (
            <tr
              key={upload.id}
              className="
                border-b
                border-slate-800
                hover:bg-slate-800/50
              "
            >
              <td className="p-4">
                <div>
                  <p className="font-medium text-slate-100">
                    {upload.filename}
                  </p>

                  <p className="text-sm text-slate-500">
                    Upload #{upload.id}
                  </p>
                </div>
              </td>

              <td className="p-4">
                {upload.totalRows}
              </td>

              <td className="p-4 text-emerald-400">
                {upload.insertedRows}
              </td>

              <td className="p-4 text-red-400">
                {upload.failedRows}
              </td>

              <td className="p-4">
                <StatusBadge
                  status={upload.status}
                />
              </td>

              <td className="p-4">
                <Link
                  href={`/uploads/${upload.id}`}
                  className="
                    text-blue-400
                    hover:text-blue-300
                  "
                >
                  View →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}