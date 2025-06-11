import type { ReactNode } from 'react';

export function Content({ children, classes, direction = 'flex-row' }: { children: ReactNode, classes?: string, direction?: string }) {
  return (
    <div className={`${classes} px-6 py-10 sm:px-8 sm:py-16 flex flex-col sm:${direction} items-center justify-center gap-8`}>
      {children}
    </div>
  );
}
