interface Dealer {
  id: number;
  name: string;
  phone: string;
  city: string;
}

interface Props {
  dealers: Dealer[];
}

export default function DealerList({
  dealers,
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
        Valid Dealers
      </h2>

      <div className="space-y-4">
        {dealers.map((dealer) => (
          <div
            key={dealer.id}
            className="
              rounded-xl
              border
              border-slate-800
              p-4
            "
          >
            <p className="font-medium">
              {dealer.name}
            </p>

            <p className="text-slate-400">
              {dealer.phone}
            </p>

            <p className="text-slate-500">
              {dealer.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}