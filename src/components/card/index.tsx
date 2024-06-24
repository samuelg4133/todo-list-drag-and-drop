import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = ComponentProps<"div">;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "grid bg-white shadow-sm border border-neutral-300 rounded-lg p-4 gap-4",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
