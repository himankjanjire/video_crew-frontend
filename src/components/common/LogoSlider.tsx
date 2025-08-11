import { useEffect, useRef } from "react";
import l1 from "../../assets/home/logos/l1.png";
import l2 from "../../assets/home/logos/l2.png";
import l3 from "../../assets/home/logos/l3.png";
import l4 from "../../assets/home/logos/l4.png";
import l5 from "../../assets/home/logos/l5.png";
import l6 from "../../assets/home/logos/l6.png";
import l7 from "../../assets/home/logos/l7.png";

const logos = [l1, l2, l3, l4, l5, l6, l7];

export default function LogoSlider({
  padding = false,
  maxWidth = "max-w-[85vw]",
  marginX = "mx-auto",
}: {
  padding?: boolean;
  maxWidth?: string;  // e.g. "max-w-5xl", "max-w-7xl"
  marginX?: string;   // e.g. "mx-auto", "mx-8"
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const speed = 0.8;
    let animationId: number;

    const animate = () => {
      if (!container) return;
      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    // OUTER CONTAINER controls the component’s width and margin on the page
    <div
      className={`
        relative w-full max-w-7xl mx-auto 
        ${maxWidth} 
        ${marginX}
      `}
    >
      <div
        ref={sliderRef}
        className={`
          flex overflow-x-scroll whitespace-nowrap
          gap-12 no-scrollbar max-w-7xl mx-auto
          ${padding ? "px-4 sm:px-8 md:px-12 lg:px-24" : ""}
        `}
        style={{
          scrollBehavior: "auto",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Client Logo"
            className="h-10 md:h-14 max-w-[140px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
            style={{ objectFit: "contain" }}
          />
        ))}
      </div>
    </div>
  );
}
