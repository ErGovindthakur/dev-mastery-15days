interface Props {
  totalUploads: number;
  totalDealers: number;
  totalErrors: number;
  successRate: number;
}

export default function StatsCards({
  totalUploads,
  totalDealers,
  totalErrors,
  successRate,
}: Props) {
  const cards = [
    {
      title: "Uploads",
      value: totalUploads,
    },
    {
      title: "Dealers",
      value: totalDealers,
    },
    {
      title: "Errors",
      value: totalErrors,
    },
    {
      title: "Success",
      value: `${successRate}%`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
          rounded-2xl
          border
          bg-zinc-950
          p-6
          shadow-sm
          transition-all
          hover:-translate-y-1
          hover:shadow-lg
        "
        >
          <p className="text-slate-500">
            {card.title}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}