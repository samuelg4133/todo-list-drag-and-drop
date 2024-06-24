import { Fragment, PropsWithChildren, ReactNode } from "react";

interface RenderIfProps {
  condition: boolean;
  fallback?: ReactNode;
}

export const RenderIf = ({
  condition,
  children,
  fallback: Fallback = <Fragment />,
}: PropsWithChildren<RenderIfProps>) =>
  condition ? <Fragment>{children}</Fragment> : Fallback;
