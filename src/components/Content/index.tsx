import type { ReactNode } from 'react';

export function Content({ children, bgColor = 'bg-gray-100' }: { children: ReactNode, bgColor?: string }) {
  return (
    <div className={`${bgColor} px-4 py-10 sm:px-8 sm:py-16 flex flex-col sm:flex-row items-center justify-center gap-8`}>
      {children}
    </div>
  );
}
