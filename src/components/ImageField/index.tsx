export function ImageField({ src, alt, classes }: { src: string; alt: string; classes?: string }) {
  return <img className={`w-full max-w-sm ${classes}`} src={src} alt={alt} />;
}
