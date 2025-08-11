import React from "react";
import imgsrc from '../assets/Main/image 1.webp';

export default function ImgWithFallback({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [imgSrc, setImgSrc] = React.useState(src);
  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(imgsrc)}
    />
  );
}