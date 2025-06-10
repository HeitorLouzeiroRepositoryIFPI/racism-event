import type { SliderIndicatorsProps } from './types';

export function SliderIndicators({ 
  currentIndex, 
  totalSlides, 
  onSlideChange 
}: SliderIndicatorsProps) {
  if (totalSlides <= 1) return null;

  return (
    <>
      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-orange-600 scale-125 shadow-md' 
                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de slides */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} de {totalSlides}
        </span>
      </div>
    </>
  );
}
