import { twMerge } from "tailwind-merge";

type ErrorMessageProps = {
  error: string;
  className?: string;
};

export function ErrorMessage({ className, error }: ErrorMessageProps) {
  return (
    <p className={twMerge("text-xs font-semibold text-red-500", className)}>
      {error}
    </p>
  );
}
