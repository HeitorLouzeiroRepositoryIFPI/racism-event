import type { SliderControlsProps } from './types';

export function SliderControls({ 
  totalSlides, 
  onPrevious, 
  onNext 
}: SliderControlsProps) {
  if (totalSlides <= 1) return null;

  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-2xl transition-all duration-200 hover:scale-110 border border-gray-200 z-30"
        aria-label="Slide anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-2xl transition-all duration-200 hover:scale-110 border border-gray-200 z-30"
        aria-label="Próximo slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}