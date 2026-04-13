"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-xl font-semibold text-red-500">
        Something went wrong 😢
      </h2>

      <p className="text-gray-600 mt-2">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Try Again
      </button>
    </div>
  );
}