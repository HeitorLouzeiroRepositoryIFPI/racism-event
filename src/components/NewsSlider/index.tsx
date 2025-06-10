import type { NewsSliderProps } from './types';
import { useNewsSlider } from './useNewsSlider';
import { NewsCard } from './NewsCard';
import { SliderControls } from './SliderControls';
import { SliderIndicators } from './SliderIndicators';

export function NewsSlider({ 
  newsData, 
  autoPlay = true, 
  autoPlayInterval = 6000, 
  className = '',
  maxArticles = 6
}: NewsSliderProps) {
  const {
    selectedArticles,
    currentIndex,
    goToSlide,
    goToPrevious,
    goToNext
  } = useNewsSlider(newsData.articles, maxArticles, autoPlay, autoPlayInterval);

  if (!selectedArticles || selectedArticles.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">Nenhuma notícia disponível</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      {/* Container principal do slider */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {selectedArticles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>

        {/* Controles de navegação */}
        <SliderControls
          currentIndex={currentIndex}
          totalSlides={selectedArticles.length}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      </div>

      {/* Indicadores */}
      <SliderIndicators
        currentIndex={currentIndex}
        totalSlides={selectedArticles.length}
        onSlideChange={goToSlide}
      />
    </div>
  );
}

// Re-exportar tipos para facilitar o uso
export type { NewsSliderProps, NewsArticle, NewsData } from './types';
