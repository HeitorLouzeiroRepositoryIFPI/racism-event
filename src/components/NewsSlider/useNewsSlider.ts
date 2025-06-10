import { useState, useEffect, useMemo } from 'react';
import type { NewsArticle } from './types';
import { shuffleArray } from './utils';

export function useNewsSlider(
  articles: NewsArticle[], 
  maxArticles: number, 
  autoPlay: boolean, 
  autoPlayInterval: number
) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Seleciona artigos aleatórios e limita a quantidade
  const selectedArticles = useMemo(() => {
    const shuffledArticles = shuffleArray(articles);
    return shuffledArticles.slice(0, maxArticles);
  }, [articles, maxArticles]);

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || selectedArticles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === selectedArticles.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, selectedArticles.length]);

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? selectedArticles.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === selectedArticles.length - 1 ? 0 : currentIndex + 1);
  };

  return {
    selectedArticles,
    currentIndex,
    goToSlide,
    goToPrevious,
    goToNext
  };
}
