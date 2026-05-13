import { ReactNode } from "react";
import clsx from "clsx";

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

export function AuthCard({
  children,
  className,
}: AuthCardProps) {
  return (
    <div
      className={clsx(
        "w-full rounded-[28px] border border-slate-200/70 bg-white/90 p-8 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10",
        className
      )}
    >
      {children}
    </div>
  );
}