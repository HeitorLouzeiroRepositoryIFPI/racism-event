import type { ReactNode } from 'react';

export function Content({ children, classes }: { children: ReactNode, classes?: string }) {
  return (
    <div className={`${classes} px-4 py-10 sm:px-8 sm:py-16 flex flex-col sm:flex-row items-center justify-center gap-8`}>
      {children}
    </div>
  );
}
