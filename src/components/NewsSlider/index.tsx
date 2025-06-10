import { useState, useEffect, useMemo } from 'react';

export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsData {
  articles: NewsArticle[];
}

interface NewsSliderProps {
  newsData: NewsData;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  maxArticles?: number;
}

export function NewsSlider({ 
  newsData, 
  autoPlay = true, 
  autoPlayInterval = 6000, 
  className = '',
  maxArticles = 6
}: NewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Função para embaralhar array (algoritmo Fisher-Yates)
  const shuffleArray = (array: NewsArticle[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Seleciona artigos aleatórios e limita a quantidade
  const articles = useMemo(() => {
    const shuffledArticles = shuffleArray(newsData.articles);
    return shuffledArticles.slice(0, maxArticles);
  }, [newsData.articles, maxArticles]);

  useEffect(() => {
    if (!autoPlay || articles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === articles.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, articles.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? articles.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === articles.length - 1 ? 0 : currentIndex + 1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  if (!articles || articles.length === 0) {
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
          {articles.map((article, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative bg-white min-h-[400px] flex flex-col">
                {/* Imagem da notícia */}
                {article.urlToImage && (
                  <div className="h-48 sm:h-56 overflow-hidden relative">
                    <img 
                      src={article.urlToImage} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Badge da fonte */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-orange-600 rounded-full shadow-lg">
                        {article.source.name}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Conteúdo da notícia */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Autor */}
                  {article.author && (
                    <p className="text-sm text-orange-600 font-medium mb-2">
                      Por {article.author}
                    </p>
                  )}
                  
                  {/* Título */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {truncateText(article.title, 120)}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 text-sm sm:text-base mb-6 flex-1 leading-relaxed">
                    {truncateText(article.description, 180)}
                  </p>
                  
                  {/* Footer com data e botão */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      {formatDate(article.publishedAt)}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      Ler mais
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        {articles.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
              aria-label="Slide anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
              aria-label="Próximo slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicadores */}
      {articles.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-orange-600 scale-125 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de slides */}
      {articles.length > 1 && (
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} de {articles.length}
          </span>
        </div>
      )}
    </div>
  );
}
