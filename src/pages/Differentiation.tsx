import React from "react";
import heroimg from "../assets/Differentiator/Frame 424.webp";
import diff1Img from "../assets/Differentiator/Frame 425.webp";
import diff2Img from "../assets/Differentiator/Frame 426.webp";
import diff3Img from "../assets/Differentiator/Frame 427.webp";
import diff4Img from "../assets/Differentiator/Frame 398.webp";
import statsbg from "../assets/home/hback5.png";

import fallbackImg from "../assets/fallback.jpg";
import HeroSection from "../components/common/HeroSection";
import { NavLink } from "react-router-dom";
import FeatureSection from "../components/differentiator/FeatureSection";

const differentiators = [
  {
    num: "01",
    title: "A/B 시안 제공",
    desc: "고객의 취향과 목적에 맞춰 2가지 이상 시안을 제공하여, 비교/선택의 자유와 만족도를 높입니다.",
    image: diff1Img,
  },
  {
    num: "02",
    title: "100% 투명한 정찰제",
    desc: "모든 과정과 견적, 산출 내역을 투명하게 공개하여 신뢰를 바탕으로 협업합니다.",
    image: diff2Img,
  },
  {
    num: "03",
    title: "100% 고객사 맞춤형 제작",
    desc: "세상에 하나뿐인 고객 전용 콘텐츠, 브랜드 아이덴티티와 목적을 살려 오직 한 곳만을 위한 영상을 만듭니다.",
    image: diff3Img,
  },
  {
    num: "04",
    title: "결과에 대한 자신감",
    desc: "제작 후 실제 활용, 현장 반응, 퍼포먼스까지 결과에 책임지는 사후관리까지 제공합니다.",
    image: diff4Img,
  },
];

const sliderTexts = [
  {
    subtitle: "",
    title: "",
  },
  {
    subtitle: "",
    title: "",
  },
  {
    subtitle: "",
    title: "",
  },
  {
    subtitle: "",
    title: "",
  },
];

function ImgWithFallback({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = React.useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackImg)}
      loading="lazy"
    />
  );
}

const DifferentiatorPage = () => {
  return (
    <div className="text-white min-h-screen w-full pt-24 font-sans">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto">
        <section className="w-full bg-[#090A0C] overflow-hidden hover:bg-[#0c0d10] transition-colors duration-300">
          <div className="w-full md:flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400 mb-2 hover:text-gray-300 transition-colors">
                왜 비디오크루를 선택해야 할까요? ​
              </p>
              <h1 className="text-3xl md:text-4xl font-black drop-shadow-md mb-4 hover:text-blue-400 transition-colors">
                비디오크루만의 특별함
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mb-8 hover:text-gray-300 transition-colors">
              컨설턴트가 스토리를 입히고, 전문 디자이너와 촬영감독, PD가​ 1:1
              맞춤 설계된 영상을 제공하며, 차별화된 스토리와 다양한 선택지를
              제시합니다.
            </p>
          </div>
        </section>

        <div className="mx-auto border-[1px] border-gray-800 hover:border-gray-700 transition-colors">
          <HeroSection sliderTexts={sliderTexts} backgroundImage={heroimg} />
        </div>
      </section>
      <FeatureSection />

      {/* Differentiator Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-24">
          {differentiators.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <section
                key={item.num}
                className={`flex flex-col-reverse md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                } items-center gap-10 md:gap-20 hover:transform hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Text Block */}
                <div className="flex-1 w-full">
                  <div className="relative pl-0 md:pl-10">
                    <div className="mb-2">
                      <span className="block text-5xl md:text-7xl font-black text-gray-600/50 select-none hover:text-gray-500/50 transition-colors">
                        {item.num}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-xl md:text-3xl font-bold mb-3 mt-3 md:mt-0 hover:text-blue-400 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/80 hover:text-white transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Block */}
                <div className="flex-1 w-full max-w-lg">
                  <div className="overflow-hidden border border-gray-800 shadow-xl aspect-[16/10] bg-[#16191e] hover:border-gray-600 transition-colors">
                    <ImgWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Stats Section with Background */}
      <div
        className="py-14 px-6 md:px-20 pb-20 hover:opacity-90 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${statsbg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          height: "40vh",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center mx-auto mt-5 pb-4">
          <div className="text-center text-white">
            <div className="text-3xl mb-1 hover:text-blue-400 transition-colors">
              업계 최고 수준의 맞춤형 영상 콘텐츠 비디오크루와 함께하세요!
            </div>
            <div className="w-full mt-12 flex justify-center">
              <NavLink
                to="/contact"
                className="px-8 py-3 bg-[#1575F9] text-white font-bold font-sans rounded hover:bg-[#0053c7] hover:scale-105 transition-all duration-300"
              >
                문의하기
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentiatorPage;
