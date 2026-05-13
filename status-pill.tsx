import clsx from "clsx";

type Status =
  | "todo"
  | "in-progress"
  | "completed"
  | "review"
  | "blocked";

const variants = {
  todo: "bg-slate-100 text-slate-700",
  "in-progress": "bg-blue-50 text-blue-700",
  completed: "bg-emerald-50 text-emerald-700",
  review: "bg-amber-50 text-amber-700",
  blocked: "bg-red-50 text-red-700",
};

type StatusPillProps = {
  status: Status;
  label: string;
};

export function StatusPill({
  status,
  label,
}: StatusPillProps) {
  return (
    <div
      className={clsx(
        "inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium",
        variants[status]
      )}
    >
      {label}
    </div>
  );
}