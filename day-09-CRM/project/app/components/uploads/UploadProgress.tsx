interface Props {
  progress: number;
}

export default function UploadProgress({
  progress,
}: Props) {
  return (
    <div className="mt-5">
      <div className="mb-2 flex justify-between">
        <span>
          Uploading...
        </span>

        <span>
          {progress}%
        </span>
      </div>

      <div
        className="
          h-3
          rounded-full
          bg-slate-800
        "
      >
        <div
          className="
            h-3
            rounded-full
            bg-blue-500
            transition-all
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}