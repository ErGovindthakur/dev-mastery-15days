import {
  getDealerDetails,
}
from "@/modules/dealer/dealer.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DealerPage({
  params,
}: Props) {
  const { id } =
    await params;

  const dealer =
    await getDealerDetails(
      Number(id)
    );

  if (!dealer) {
    return (
      <>
        Dealer not found
      </>
    );
  }

  return (
    <>
      <div
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
      >
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          {dealer.name}
        </h1>

        <div className="mt-6 space-y-3">
          <p>
            Email:
            {dealer.email}
          </p>

          <p>
            Phone:
            {dealer.phone}
          </p>

          <p>
            City:
            {dealer.city}
          </p>

          <p>
            State:
            {dealer.state}
          </p>

          <p>
            Credit:
            ₹{dealer.creditLimit}
          </p>
        </div>
      </div>
    </>
  );
}