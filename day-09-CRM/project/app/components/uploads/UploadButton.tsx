"use client";

import { useState } from "react";

import UploadModal from "./UploadModal";

export default function UploadButton() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="
          rounded-xl
          bg-blue-600
          px-5
          py-3
          font-medium
          text-white
          transition
          hover:bg-blue-700
        "
      >
        Upload CSV
      </button>

      <UploadModal
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  );
}