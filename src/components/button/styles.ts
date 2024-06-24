import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const styles = tv({
  base: twMerge(
    "inline-flex gap-2.5 justify-center items-center shrink-0 duration-500",
    "rounded-lg font-medium text-lg data-[loading='true']:pointer-events-none focus:outline-blue-700"
  ),
  variants: {
    variant: {
      primary:
        "bg-blue-500 text-white hover:enabled:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-600",
      secondary:
        "border border-gray-300 bg-white text-brand-main hover:enabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-600",
      terceary:
        "text-brand-main hover:enabled:bg-gray-100 disabled:text-gray-600",
    },
    size: {
      xs: "px-2 text-xs sm:h-6",
      sm: "px-2.5 text-sm sm:h-8",
      base: "px-3 py-2 text-xs sm:h-10",
      l: "p-3.5 text-sm sm:h-12",
      xl: "p-4 text-base sm:h-14",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "l",
  },
});
