import { ReactNode } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

export type ToastMessageProps = {
  title: string;
  message: ReactNode;
  type: "error" | "success" | "info";
};

type CustomToastProps = ToastMessageProps & {
  onClose: () => void;
  visible: boolean;
};

export function CustomToast({
  message,
  title,
  onClose,
  type,
  visible,
}: CustomToastProps) {
  return (
    <aside
      data-type={type}
      className={twMerge(
        "max-w-xs w-full bg-white shadow-lg rounded-lg",
        "pointer-events-auto flex ring-1 ring-black ring-opacity-5",
        "p-4 flex flex-row justify-between items-start gap-4",
        "duration-500 transition-all data-[type='info']:bg-blue-500",
        "data-[type='error']:bg-red-500 data-[type='success']:bg-green-500",
        visible ? "animate-enter" : "animate-leave"
      )}
    >
      <div>
        <h5 className="text-base font-semibold text-white">{title}</h5>
        <p className="text-sm text-white">{message}</p>
      </div>
      <button type="reset" onClick={onClose}>
        <XMarkIcon className="size-6 text-white" />
      </button>
    </aside>
  );
}
