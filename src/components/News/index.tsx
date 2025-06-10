import { useState, useEffect } from 'react';

export interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  category?: string;
}

interface NewsSliderProps {
  news: News[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function NewsSlider({ 
  news: news, 
  autoPlay = true, 
  autoPlayInterval = 5000, 
  className = '' 
}: NewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || news.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, news.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? news.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === news.length - 1 ? 0 : currentIndex + 1);
  };

  if (!news || news.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">Nenhuma notícia disponível</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Container principal do slider */}
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {news.map((news) => (
            <div key={news.id} className="w-full flex-shrink-0">
              <div className="relative bg-white">
                {/* Imagem da notícia */}
                {news.image && (
                  <div className="h-48 sm:h-64 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Conteúdo da notícia */}
                <div className="p-6 sm:p-8">
                  {/* Categoria */}
                  {news.category && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                      {news.category}
                    </span>
                  )}
                  
                  {/* Título */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  
                  {/* Data */}
                  <p className="text-sm text-gray-500">
                    {new Date(news.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        {news.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Slide anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
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
      {news.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Componente de exemplo para demonstrar o uso
export function NewsExample() {
  const sampleNews: News[] = [
    {
      id: 1,
      title: "Nova Lei de Combate ao Racismo é Aprovada",
      description: "O Congresso Nacional aprovou uma nova legislação que fortalece as medidas de combate ao racismo no país, incluindo penalidades mais severas e programas de conscientização.",
      date: "2025-06-08",
      category: "Legislação",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Programa de Inclusão Social Alcança 100 Mil Beneficiários",
      description: "O programa governamental de inclusão social atingiu a marca de 100 mil pessoas beneficiadas, promovendo oportunidades de emprego e educação para comunidades vulneráveis.",
      date: "2025-06-05",
      category: "Programa Social",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Conferência Internacional Sobre Direitos Humanos",
      description: "Brasil sediará importante conferência internacional focada em direitos humanos e igualdade racial, reunindo especialistas de mais de 50 países.",
      date: "2025-06-02",
      category: "Evento",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Últimas Notícias</h2>
        <NewsSlider news={sampleNews} />
      </div>
    </div>
  );
}