import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CardTitleProps = ComponentProps<"h3">;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={twMerge("text-sm text-gray-700 font-semibold", className)}
      {...props}
    />
  );
}
