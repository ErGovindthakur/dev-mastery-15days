"use client";

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
    <div className="flex gap-4 mt-4">
      <button
        disabled={currentPage <= 1}
        onClick={() =>
          changePage(currentPage - 1)
        }
      >
        Previous
      </button>

      <span>
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
      >
        Next
      </button>
    </div>
  );
}