import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = ComponentProps<"section">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <section
      className={twMerge((className = "grid w-full gap-6"), className)}
      {...props}
    />
  );
}
