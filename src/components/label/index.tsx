import { ComponentProps, forwardRef } from "react";

import { twMerge } from "tailwind-merge";

import { ErrorMessage } from "../error-message";

type LabelProps = ComponentProps<"label"> & {
  error?: string;
  label?: string;
  required?: boolean;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ error, className, children, label, required = false, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "text-gray-600 text-sm font-semibold",
          "flex flex-col items-start gap-1 w-full",
          className
        )}
      >
        <label
          data-required={required}
          className="data-[required='true']:after:ml-0.5 data-[required='true']:after:size-6 data-[required='true']:after:text-red-700 data-[required='true']:after:content-['*']"
          ref={ref}
          {...props}
        >
          {label}
        </label>
        {children}
        {error && <ErrorMessage error={error} />}
      </div>
    );
  }
);

Label.displayName = "Label";
