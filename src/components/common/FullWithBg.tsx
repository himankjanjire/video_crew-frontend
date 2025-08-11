
type FullWidthBackgroundProps = {
  src: string; // Image URL or path
  alt?: string; // Optional alt text for accessibility
};

export default function FullWidthBackground({
  src,
  alt = "",
}: FullWidthBackgroundProps) {
  return (
    <div
      className="w-full h-[40vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
      }}
      role="img"
      aria-label={alt}
    />
  );
}
