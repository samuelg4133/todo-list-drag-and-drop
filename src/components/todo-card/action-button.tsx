import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: twMerge(
    "flex items-center justify-center relative",
    "after:absolute after:h-8 after:w-8 after:rounded-full after:opacity-50 after:content-['']"
  ),
  variants: {
    variant: {
      blue: "hover:text-blue-700 text-blue-500 after:hover:bg-blue-200",
      red: "hover:text-red-700 text-red-500 after:hover:bg-red-200",
    },
  },
});

type ActionButtonProps = ComponentProps<"button"> & VariantProps<typeof styles>;

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={styles({
          className,
          variant,
        })}
        type="button"
        ref={ref}
        {...props}
      />
    );
  }
);

ActionButton.displayName = "ActionButton";
