interface ErrorItem {
  id: number;
  rowNumber: number;
  columnName: string;
  message: string;
}

interface Props {
  errors: ErrorItem[];
}

export default function ErrorList({
  errors,
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
        Validation Errors
      </h2>

      {errors.length === 0 ? (
        <p className="text-emerald-400">
          No validation errors 🎉
        </p>
      ) : (
        <div className="space-y-3">
          {errors.map((error) => (
            <div
              key={error.id}
              className="
                rounded-xl
                border
                border-red-900
                bg-red-500/5
                p-4
              "
            >
              <p className="font-medium">
                Row {error.rowNumber}
              </p>

              <p className="text-red-400">
                {error.message}
              </p>

              <p className="text-slate-500">
                Column:
                {" "}
                {error.columnName}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}