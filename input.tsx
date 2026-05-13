"use client";

import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { IconButton } from "./icon-button";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helper?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helper, className, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-0.5">
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={clsx(
              "flex h-11 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200",
              "hover:border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100",
              leftIcon && "pl-11",
              rightIcon && "pr-11",
              className,
            )}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              <IconButton>{rightIcon}</IconButton>
            </div>
          )}
        </div>

        {/* Helper text */}
        {helper && (
          <p className="mt-1.5 text-xs text-slate-500 ml-0.5">{helper}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
