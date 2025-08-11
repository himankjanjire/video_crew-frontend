import React, { useEffect, useRef } from "react";
import p1 from "../../assets/home/cases/Group 41.png";
import p2 from "../../assets/home/cases/Group 42.png";
import p3 from "../../assets/home/cases/Group 43.png";
import p4 from "../../assets/home/cases/Group 44.png";
import p5 from "../../assets/home/cases/Group 45.png";
import b1 from "../../assets/home/cases/Group 46.png";
import b2 from "../../assets/home/cases/Rectangle 16.png";
import b3 from "../../assets/home/cases/Group 48.png";
import b4 from "../../assets/home/cases/Rectangle 11.png";
import b5 from "../../assets/home/cases/Rectangle 15.png";
import { NavLink } from "react-router-dom";

const imagesP = [p1, p2, p3, p4, p5];
const imagesB = [b1, b2, b3, b4, b5];

// Helper for robust auto-scrolling, works for both directions
function useAutoScroll(ref: React.RefObject<HTMLDivElement | null>, speed: number) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let frameId: number;

    function animateScroll() {
      if (!container) return;
      container.scrollLeft += speed;
      // Reset when at duplicate halfway point (for both directions)
      const max = container.scrollWidth / 2;
      if (speed > 0 && container.scrollLeft >= max) {
        container.scrollLeft = 0;
      } else if (speed < 0 && container.scrollLeft <= 0) {
        container.scrollLeft = max;
      }
      frameId = requestAnimationFrame(animateScroll);
    }

    frameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(frameId);
  }, [ref, speed]);
}

export default function Portfolio() {
  const scrollRefP = useRef<HTMLDivElement>(null);
  const scrollRefB = useRef<HTMLDivElement>(null);

  // Use the revised hook
  useAutoScroll(scrollRefP, -0.7);
  useAutoScroll(scrollRefB, 0.7);

  const renderCarousel = (
    items: string[],
    ref: React.RefObject<HTMLDivElement | null>,
  ) => {
    // Robust: always at least 6–8 slides (works for 3 original images)
    const MINCOUNT = 6;
    let duplicated: string[] = [];
    while (duplicated.length < MINCOUNT * 2)
      duplicated = duplicated.concat(items);
    return (
      <div
        ref={ref}
        className="w-full flex gap-6 overflow-x-auto select-none "
        style={{
          scrollbarWidth: "none",
          minWidth: "100%",
        }}
      >
        {duplicated.map((img, idx) => (
          <div
            key={idx}
            className="relative min-w-[360px] h-[240px] overflow-hidden group"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-black max-w-7xl mx-auto text-white my-24">
      <div className="w-full flex flex-col items-center justify-center mx-auto ">
        <h3 className="text-xl md:text-2xl font-extrabold mb-4">
          비디오크루의 영상제작 사례
        </h3>
        <p className="text-white mb-1">
          당신의 이야기에 생명을 불어넣는 영상, 비디오크루가 만듭니다.
        </p>
        <p className="text-white mb-8">모든 프레임에 가치를 담다, 비디오크루</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <div>{renderCarousel(imagesP, scrollRefP)}</div>
        <div>{renderCarousel(imagesB, scrollRefB)}</div>
      </div>
      {/* Button */}
      <div className="w-full mt-12 flex justify-center">
        <NavLink
          to="portfolio"
          className="px-8 py-3 bg-[#1575F9] text-white font-bold font-sans rounded hover:bg-[#0053c7] transition"
        >
          포트폴리오 전체보기
        </NavLink>
      </div>
    </section>
  );
}
