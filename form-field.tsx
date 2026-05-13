import { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  children: ReactNode;
  helper?: string;
};

export function FormField({
  label,
  children,
  helper,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-600 ml-1">
        {label}
      </label>

      {children}

      {helper && (
        <p className="text-xs leading-5 text-slate-400 ml-1">
          {helper}
        </p>
      )}
    </div>
  );
}