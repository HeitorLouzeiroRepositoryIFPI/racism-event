import type { ReactNode } from "react";

interface TextFieldProps {
  children: ReactNode;
  classes?: string;
}

export function TextField({ children, classes = "" }: TextFieldProps) {
  return (
    <div className={`text-center sm:text-left w-full sm:max-w-2xl ${classes}`}>
      {children}
    </div>
  );
}
