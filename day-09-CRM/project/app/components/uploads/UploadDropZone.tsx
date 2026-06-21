"use client";

import { useState } from "react";

import {
  useDropzone,
} from "react-dropzone";

import {
  UploadCloud,
} from "lucide-react";

import UploadProgress from "./UploadProgress";

interface Props {
  onClose: () => void;
}

export default function UploadDropzone({
  onClose,
}: Props) {
  const [file, setFile] =
    useState<File | null>(null);

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const { getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "text/csv": [".csv"],
      },

      maxFiles: 1,

      onDrop(files) {
        setFile(files[0]);
      },
    });

  async function handleUpload() {
    if (!file) return;

    setUploading(true);

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const fakeProgress =
      setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90)
            return prev;

          return prev + 10;
        });
      }, 200);

    try {
      const response =
        await fetch(
          "/api/uploads",
          {
            method: "POST",
            body: formData,
          }
        );

      clearInterval(
        fakeProgress
      );

      setProgress(100);

      if (response.ok) {
        setTimeout(() => {
          onClose();

          window.location.href =
            "/uploads";
        }, 1000);
      }
    } catch {
      clearInterval(
        fakeProgress
      );
    }
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className="
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-slate-700
          p-12
          text-center
          transition
          hover:border-blue-500
        "
      >
        <input
          {...getInputProps()}
        />

        <UploadCloud
          size={50}
          className="
            mb-4
            text-blue-400
          "
        />

        <p className="text-lg font-medium text-white">
          Drop CSV here
        </p>

        <p className="mt-2 text-slate-400">
          or click to browse
        </p>
      </div>

      {file && (
        <div
          className="
            mt-5
            rounded-xl
            border
            border-slate-800
            p-4
          "
        >
          <p className="text-white">
            {file.name}
          </p>

          <p className="text-sm text-slate-400">
            {(
              file.size /
              1024
            ).toFixed(2)}{" "}
            KB
          </p>
        </div>
      )}

      {uploading && (
        <UploadProgress
          progress={progress}
        />
      )}

      <button
        onClick={handleUpload}
        disabled={!file}
        className="
          mt-5
          w-full
          rounded-xl
          bg-blue-600
          py-3
          font-medium
          text-white
          disabled:opacity-50
        "
      >
        Upload File
      </button>
    </div>
  );
}