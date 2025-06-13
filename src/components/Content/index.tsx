import type { ReactNode, HTMLAttributes } from "react";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  classes?: string;
}

export function Content({ children, classes, ...otherProps }: ContentProps) {
  return (
    <div
      className={`${classes} px-6 py-10 sm:px-8 sm:py-16 flex flex-col sm:flex-row items-center justify-center gap-8`}
      {...otherProps}
    >
      {children}
    </div>
  );
}
