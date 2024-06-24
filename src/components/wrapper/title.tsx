import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type HeaderTitleProps = ComponentProps<"section"> & {
  title: string;
  subtitle?: string;
  children?: ReactElement | ReactElement[];
};

export function HeaderTitle({
  children,
  className,
  subtitle,
  title,
  ...props
}: HeaderTitleProps) {
  return (
    <section
      className={twMerge(
        "flex items-end gap-4 flex-wrap max-md:ml-2 max-md:gap-2 relative",
        className
      )}
      {...props}
    >
      <span
        className="flex flex-col items-start gap-1 text-justify text-gray-800"
        id="wrapper-header-title"
      >
        <h1 className="text-xl font-semibold max-md:text-lg">{title}</h1>

        {subtitle && (
          <p className="text-gray-500 font-normal max-md:text-sm">{subtitle}</p>
        )}
      </span>
      {children}
    </section>
  );
}
