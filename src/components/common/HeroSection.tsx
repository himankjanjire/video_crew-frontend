import { useEffect, useState } from "react";

interface SliderText {
  subtitle: string;
  title: string;
}

interface HeroSectionProps {
  sliderTexts: SliderText[];
  backgroundImage: string;
}

export default function HeroSection({ sliderTexts, backgroundImage }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);
  const sliderLength = sliderTexts.length;
  const DURATION = 3200;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderLength);
    }, DURATION);
    return () => clearTimeout(timer);
  }, [current, sliderLength]);

  const handleDotClick = (idx: number) => setCurrent(idx);

  return (
    <section className="relative h-[60vh] md:h-[90vh] flex items-end overflow-hidden">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: "brightness(0.7)",
          backgroundSize: "100% 100%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-transparent z-10" />
      <div
        className="relative z-20 w-full max-w-7xl mx-auto p-6 md:pb-32 pl-16 flex flex-col"
        style={{ alignItems: "flex-start" }}
      >
        <div className="relative h-[420px] overflow-hidden w-full mb-4">
          {sliderTexts.map((item, i) => (
            <div
              key={i}
              className={`
                absolute top-0 left-0 w-[460px] h-full
                flex flex-col justify-end
                transition-opacity duration-700
                ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              <p className="text-base md:text-xl text-white font-medium mb-2 drop-shadow-md">
                {item.subtitle}
              </p>
              <h1 className="text-2xl md:text-5xl font-black text-white drop-shadow-xl leading-tight">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-3">
          <div className="flex gap-2">
            {sliderTexts.map((_, idx) => (
              <button
                type="button"
                key={idx}
                aria-label={`슬라이드 ${idx + 1}`}
                onClick={() => handleDotClick(idx)}
                className={`
                  relative w-3 h-3 rounded-full border-2 transition
                  ${idx === current
                    ? "bg-white border-white"
                    : "bg-transparent border-gray-400"
                  }
                `}
                style={{
                  outline: "none",
                  transition: "background 0.2s, border 0.2s",
                }}
              >
                {idx === current && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-1 h-1 bg-black rounded-full" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export type { SliderText };