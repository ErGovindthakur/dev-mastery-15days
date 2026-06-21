interface Props {
  errors: number;
}

export default function RecentErrors({
  errors,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <h3>
        Validation Errors
      </h3>

      <p
        className="
          mt-4
          text-5xl
          font-bold
          text-red-400
        "
      >
        {errors}
      </p>
    </div>
  );
}