export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string | null;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export interface NewsData {
  articles: NewsArticle[];
}

export interface NewsSliderProps {
  newsData: NewsData;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  maxArticles?: number;
}

export interface NewsCardProps {
  article: NewsArticle;
}

export interface SliderControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export interface SliderIndicatorsProps {
  currentIndex: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}
