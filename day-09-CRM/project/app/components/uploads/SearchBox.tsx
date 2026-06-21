"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  function handleSearch(
    value: string
  ) {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    params.set("search", value);

    params.set("page", "1");

    router.push(
      `/uploads?${params.toString()}`
    );
  }

  return (
    <input
      type="text"
      placeholder="Search filename..."
      defaultValue={
        searchParams.get("search") ?? ""
      }
      onChange={(e) =>
        handleSearch(e.target.value)
      }
      className="border p-2 rounded w-full"
    />
  );
}