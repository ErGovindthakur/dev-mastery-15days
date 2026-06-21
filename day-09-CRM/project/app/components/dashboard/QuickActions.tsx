import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="mb-6 flex gap-4">
      <Link
        href="/uploads"
        className="
          rounded-xl
          bg-blue-600
          px-5
          py-3
          text-white
          hover:bg-blue-700
        "
      >
        Upload CSV
      </Link>

      <Link
        href="/uploads"
        className="
          rounded-xl
          border
          px-5
          py-3
        "
      >
        View Uploads
      </Link>
    </div>
  );
}