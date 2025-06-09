import type { ReactNode } from "react";

export function TextField({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-300 p-4 rounded-lg flex justify-center items-center m-4">
      {children}
    </div>
  );
}
