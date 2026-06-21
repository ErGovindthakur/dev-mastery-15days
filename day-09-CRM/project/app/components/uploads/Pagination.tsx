"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: Props) {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  function changePage(
    page: number
  ) {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    params.set(
      "page",
      page.toString()
    );

    router.push(
      `/uploads?${params.toString()}`
    );
  }

  return (
    <div
      className="
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-slate-800
      bg-slate-900
      p-4
    "
    >
      <button
        disabled={currentPage <= 1}
        onClick={() =>
          changePage(currentPage - 1)
        }
        className="
          flex
          items-center
          gap-2
          rounded-lg
          px-4
          py-2
          hover:bg-slate-800
          disabled:opacity-50
        "
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      <span className="text-slate-400">
        Page {currentPage} of{" "}
        {totalPages}
      </span>

      <button
        disabled={
          currentPage >= totalPages
        }
        onClick={() =>
          changePage(currentPage + 1)
        }
        className="
          flex
          items-center
          gap-2
          rounded-lg
          px-4
          py-2
          hover:bg-slate-800
          disabled:opacity-50
        "
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
}