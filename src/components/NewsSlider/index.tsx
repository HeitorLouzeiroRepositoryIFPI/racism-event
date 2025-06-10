import type { NewsSliderProps } from './types';
import { useNewsSlider } from './useNewsSlider';
import { NewsCard } from './NewsCard';
import { SliderControls } from './SliderControls';
import { SliderIndicators } from './SliderIndicators';

export function NewsSlider({ 
  newsData, 
  autoPlay = true, 
  autoPlayInterval = 10000, 
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

  // Função para obter o índice anterior de forma circular
  const getPreviousIndex = (index: number) => 
    index === 0 ? selectedArticles.length - 1 : index - 1;

  // Função para obter o próximo índice de forma circular
  const getNextIndex = (index: number) => 
    index === selectedArticles.length - 1 ? 0 : index + 1;

  const previousIndex = getPreviousIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  // Função para determinar a classe de posição de cada card
  const getCardPosition = (index: number) => {
    if (index === currentIndex) {
      return 'translate-x-0 scale-100 opacity-100 z-20'; // Centro
    } else if (index === previousIndex) {
      return 'sm:-translate-x-[30%] -translate-x-full sm:scale-90 scale-75 sm:brightness-50 brightness-0 z-10'; // Esquerda - oculto no mobile
    } else if (index === nextIndex) {
      return 'sm:translate-x-[30%] translate-x-full sm:scale-90 scale-75 sm:brightness-50 brightness-0 z-10'; // Direita - oculto no mobile
    } else {
      return 'translate-x-full scale-75 opacity-0 z-0'; // Oculto
    }
  };

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      {/* Container principal do carousel */}
      <div className="relative h-[450px] sm:h-[500px] overflow-hidden">
        
        {/* Container dos cards com animação */}
        <div className="relative w-full h-full flex items-center justify-center">
          {selectedArticles.map((article, index) => (
            <div
              key={index}
              className={`absolute w-full sm:w-2/3 h-full transition-all duration-700 ease-in-out transform ${getCardPosition(index)}`}
            >
              <div className="h-full overflow-hidden rounded-xl shadow-xl bg-white border border-gray-200 mx-4 sm:mx-0">
                <NewsCard article={article} />
              </div>
            </div>
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