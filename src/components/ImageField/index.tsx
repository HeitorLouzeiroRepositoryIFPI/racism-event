import { useState } from "react";

interface ImageFieldProps {
  src: string;
  alt: string;
  classes?: string;
  width?: number;
  height?: number;
}

export function ImageField({
  src,
  alt,
  classes = "",
  width,
  height,
}: ImageFieldProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg animate-pulse">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
      <img
        className={`w-full max-w-sm ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ${classes}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
