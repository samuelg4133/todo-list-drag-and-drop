import { ComponentProps, ElementType } from "react";

import { VariantProps } from "tailwind-variants";

import { RenderIf } from "../render-if";
import { Spinner } from "../spinner";
import { styles } from "./styles";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof styles> & {
    leftIcon?: ElementType;
    loading?: boolean;
    rightIcon?: ElementType;
    type: "button" | "submit" | "reset";
  };

export function Button({
  children,
  className,
  variant,
  disabled,
  leftIcon: LeftIcon,
  loading = false,
  rightIcon: RightIcon,
  size,
  ...props
}: ButtonProps) {
  return (
    <span>
      <button
        className={styles({ className, variant, size })}
        data-loading={loading}
        disabled={loading || disabled}
        {...props}
      >
        <RenderIf condition={!loading} fallback={<Spinner />}>
          {LeftIcon && <LeftIcon className="size-5" />}
          {children}
          {RightIcon && <RightIcon className="size-5" />}
        </RenderIf>
      </button>
    </span>
  );
}
