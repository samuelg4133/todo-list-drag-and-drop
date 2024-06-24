import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CardDescriptionProps = ComponentProps<"h3">;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <h4 className={twMerge("text-xs text-gray-500", className)} {...props} />
  );
}
