import { ComponentProps, cloneElement, forwardRef } from "react";

import { twMerge } from "tailwind-merge";
import { VariantProps } from "tailwind-variants";

import { Label } from "../label";
import { styles } from "./styles";

export type InputProps = Omit<ComponentProps<"input">, "title" | "size"> &
  VariantProps<typeof styles> & {
    error?: string;
    label?: string;
    traillingIcon?: JSX.Element;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      id,
      label,
      name,
      size,
      traillingIcon: TraillingIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <section className="flex w-full flex-1 flex-col items-start gap-1">
        <Label
          htmlFor={id ?? name}
          error={error}
          label={label}
          required={props?.required}
        >
          <div className="relative w-full flex-1">
            <input
              className={styles({
                className: twMerge(className, TraillingIcon && "pr-10"),
                state: error ? "error" : "default",
                size,
              })}
              id={id ?? name}
              name={name}
              ref={ref}
              {...props}
            />
            {TraillingIcon &&
              cloneElement(TraillingIcon, {
                className: twMerge(
                  TraillingIcon?.props?.className,
                  "absolute w-5 h-5 right-4 bottom-[30%] flex items-center justify-center text-gray-400 cursor-pointer",
                ),
              })}
          </div>
        </Label>
      </section>
    );
  },
);

Input.displayName = "Input";
