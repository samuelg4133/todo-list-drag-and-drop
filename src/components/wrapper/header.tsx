import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = ComponentProps<"header">;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "flex h-min w-full flex-wrap items-end justify-between gap-8 self-stretch",
        className
      )}
      {...props}
    />
  );
}
