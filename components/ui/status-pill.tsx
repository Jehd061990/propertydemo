"use client";

export function StatusPill({
  label,
  variant,
}: {
  label: string;
  variant?: "success" | "warning" | "danger" | "neutral";
}) {
  const tone =
    variant === "success"
      ? "bg-emerald-100 text-emerald-700"
      : variant === "warning"
        ? "bg-amber-100 text-amber-700"
        : variant === "danger"
          ? "bg-rose-100 text-rose-700"
          : "bg-slate-100 text-slate-700";
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tone}`}
    >
      {label}
    </span>
  );
}
