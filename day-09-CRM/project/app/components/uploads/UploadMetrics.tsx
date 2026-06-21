interface Props {
  totalRows: number;
  insertedRows: number;
  failedRows: number;
}

export default function UploadMetrics({
  totalRows,
  insertedRows,
  failedRows,
}: Props) {
  const successRate =
    totalRows === 0
      ? 0
      : Math.round(
          (insertedRows / totalRows) * 100
        );

  const cards = [
    {
      title: "Total Rows",
      value: totalRows,
    },
    {
      title: "Inserted",
      value: insertedRows,
    },
    {
      title: "Failed",
      value: failedRows,
    },
    {
      title: "Success Rate",
      value: `${successRate}%`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-6
          "
        >
          <p className="text-slate-400">
            {card.title}
          </p>

          <h3
            className="
              mt-3
              text-4xl
              font-bold
              text-slate-100
            "
          >
            {card.value}
          </h3>
        </div>
      ))}
    </div>
  );
}