type PhotoProps = {
  /** Base file name in /public/images, without size suffix or extension */
  name: string;
  alt: string;
  width: number;
  height: number;
  /** Generated widths available for this image (see scripts/optimize-images.mjs) */
  widths: number[];
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function Photo({ name, alt, width, height, widths, sizes, className, priority = false }: PhotoProps) {
  const srcSet = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");
  const fallback = `/images/${name}-${widths[widths.length - 1]}.webp`;

  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
