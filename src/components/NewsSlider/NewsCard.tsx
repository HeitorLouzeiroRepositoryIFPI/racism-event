import type { NewsCardProps } from "./types";
import { formatDate, truncateText } from "./utils";

export function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="w-full flex-shrink-0">
      <div className="relative bg-white min-h-[350px] sm:min-h-[400px] flex flex-col">
        {/* Imagem da notícia */}
        {article.urlToImage && (
          <div className="h-64 sm:h-48 md:h-64 overflow-hidden relative">
            <img
              src={article.urlToImage}
              alt={article.title || "Imagem da notícia"}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Badge da fonte */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
              <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 text-xs font-semibold text-white bg-orange-600 rounded-full shadow-lg">
                {article.source.name}
              </span>
            </div>
          </div>
        )}

        {/* Conteúdo da notícia */}
        <div className="p-3 sm:p-4 md:p-6 px-4 sm:px-8 md:px-12 flex-1 flex flex-col">
          {/* Autor */}
          {article.author && (
            <p className="text-xs sm:text-sm text-orange-600 font-medium mb-1 sm:mb-2">
              Por {article.author}
            </p>
          )}

          {/* Título */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            {truncateText(article.title || "Título não disponível", 80)}
          </h3>

          {/* Descrição */}
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-1 leading-relaxed">
            {truncateText(article.description, 100)}
          </p>

          {/* Footer com data e botão */}
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm text-gray-500">
              {formatDate(article.publishedAt)}
            </p>
            
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Ler mais
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}