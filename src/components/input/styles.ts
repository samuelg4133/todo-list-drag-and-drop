import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const styles = tv({
  base: twMerge(
    "flex px-4 w-full items-center gap-2 self-stretch",
    "rounded-lg bg-white",
    "placeholder:text-gray-400 font-normal",
    "disabled:bg-gray-200 read-only:bg-gray-100 disabled:border-gray-200"
  ),
  variants: {
    state: {
      default:
        "border-gray-300 border text-gray-900 autofill:text-gray-900 focus:border-cyan-400 focus:outline-cyan-400 focus:ring-0 enabled:hover:border-gray-400",
      error:
        "border-2 border-red-500 text-gray-900 autofill:text-gray-900 focus:border-red-500 focus:outline-red-500 focus:ring-0 disabled:border-red-500",
    },
    size: {
      xs: "h-6 text-xs",
      sm: "h-8 text-xs",
      base: "h-10 text-xs",
      l: "h-12 text-sm",
      xl: "h-14 text-base",
    },
  },
  defaultVariants: {
    state: "default",
    size: "l",
  },
});
