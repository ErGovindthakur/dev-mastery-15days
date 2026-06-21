import Link from "next/link";

import {
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

interface Dealer {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  creditLimit: number;
}

interface Props {
  dealers: Dealer[];
}

export default function DealerTable({
  dealers,
}: Props) {
  if (dealers.length === 0) {
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
        <h3 className="text-xl font-semibold text-slate-100">
          No Dealers Found
        </h3>

        <p className="mt-2 text-slate-400">
          Dealers will appear here after
          CSV uploads.
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
        shadow-xl
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-800
          px-6
          py-5
        "
      >
        <div>
          <h2 className="text-xl font-semibold text-white">
            Dealers
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Manage your dealer network
          </p>
        </div>

        <span
          className="
            rounded-full
            bg-blue-500/10
            px-4
            py-2
            text-sm
            text-blue-400
          "
        >
          {dealers.length} Dealers
        </span>
      </div>

      {/* Table */}

      <table className="w-full">
        <thead>
          <tr
            className="
              border-b
              border-slate-800
              text-left
              text-sm
              text-slate-400
            "
          >
            <th className="px-6 py-4">
              Dealer
            </th>

            <th className="px-6 py-4">
              Contact
            </th>

            <th className="px-6 py-4">
              Location
            </th>

            <th className="px-6 py-4">
              Credit Limit
            </th>

            <th className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {dealers.map((dealer) => (
            <tr
              key={dealer.id}
              className="
                border-b
                border-slate-800
                transition-all
                hover:bg-slate-800/40
              "
            >
              {/* Dealer */}

              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-500/10
                      text-sm
                      font-bold
                      text-blue-400
                    "
                  >
                    {dealer.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      {dealer.name}
                    </p>

                    <p className="text-sm text-slate-400">
                      {dealer.email}
                    </p>
                  </div>
                </div>
              </td>

              {/* Contact */}

              <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone size={16} />

                  {dealer.phone}
                </div>
              </td>

              {/* City */}

              <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={16} />

                  {dealer.city}
                </div>
              </td>

              {/* Credit */}

              <td className="px-6 py-5">
                <span
                  className="
                    rounded-xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-2
                    font-medium
                    text-emerald-400
                  "
                >
                  ₹
                  {Number(
                    dealer.creditLimit
                  ).toLocaleString()}
                </span>
              </td>

              {/* Action */}

              <td className="px-6 py-5">
                <Link
                  href={`/dealers/${dealer.id}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-blue-400
                    transition
                    hover:text-blue-300
                  "
                >
                  View

                  <ArrowRight
                    size={16}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}