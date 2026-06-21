"use client";

import UploadDropzone from "./UploadDropZone";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function UploadModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
          shadow-2xl
        "
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Upload CSV
            </h2>

            <p className="mt-1 text-slate-400">
              Drag & drop your file
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              text-slate-400
              hover:text-white
            "
          >
            ✕
          </button>
        </div>

        <UploadDropzone
          onClose={onClose}
        />
      </div>
    </div>
  );
}