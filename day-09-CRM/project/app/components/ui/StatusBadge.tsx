interface Props {
  status: string;
}

export default function StatusBadge({
  status,
}: Props) {
  const styles = {
    COMPLETED:
      "bg-emerald-500/10 text-emerald-400",

    FAILED:
      "bg-red-500/10 text-red-400",

    PROCESSING:
      "bg-amber-500/10 text-amber-400",
  };

  return (
    <span
      className={`
      rounded-full
      px-3
      py-1
      text-xs
      font-medium
      ${
        styles[
          status as keyof typeof styles
        ]
      }
    `}
    >
      {status}
    </span>
  );
}