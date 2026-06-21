"use client";

import {
  Search,
} from "lucide-react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

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
    <div className="relative">
      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      <input
        type="text"
        placeholder="Search uploads..."
        defaultValue={
          searchParams.get("search") ?? ""
        }
        onChange={(e) =>
          handleSearch(e.target.value)
        }
        className="
          w-full
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          py-3
          pl-11
          pr-4
          text-slate-100
          outline-none
          transition
          focus:border-blue-500
        "
      />
    </div>
  );
}