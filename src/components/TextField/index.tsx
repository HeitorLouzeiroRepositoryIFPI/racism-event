import type { ReactNode } from "react";

export function TextField({ children }: { children: ReactNode }) {
  return (
    <div className="text-center sm:text-left w-full sm:max-w-2xl">
      {children}
    </div>
  );
}
