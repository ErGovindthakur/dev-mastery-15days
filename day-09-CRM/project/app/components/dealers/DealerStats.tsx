interface Props {
  totalDealers: number;
  totalCredit: string;
}

export default function DealerStats({
  totalDealers,
  totalCredit,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >
        <p>Total Dealers</p>

        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          {totalDealers}
        </h2>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >
        <p>Total Credit</p>

        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          ₹{totalCredit}
        </h2>
      </div>
    </div>
  );
}