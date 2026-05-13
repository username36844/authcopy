import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "flex h-11 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
