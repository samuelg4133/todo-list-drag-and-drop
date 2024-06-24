import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function TopButtons({ className, ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={twMerge(className, "flex items-end gap-4")} />
  );
}
