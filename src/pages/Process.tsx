import React, { useEffect, useState } from "react";
import fallbackImg from "../assets/fallback.jpg";
import heroImg from "../assets/Process/1.webp";
import step2Img from "../assets/Process/2.webp";
import step3Img from "../assets/Process/3.webp";
import step4Img from "../assets/Process/4.webp";
import step5Img from "../assets/Process/5.webp";
import step6Img from "../assets/Process/6.webp";
import step7Img from "../assets/Process/7.webp";
import "../App.css";
import { NavLink } from "react-router-dom";

interface FeatureCardData {
  image: string;
  title: string;
  desc: string;
  stepNum: string;
  subtitle?: string;
}

interface FeatureCardProps {
  data: FeatureCardData;
  alignRight?: boolean;
}

function ImgWithFallback({
  image,
  children,
  ...props
}: {
  image: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [imgSrc, setImgSrc] = React.useState(image);
  return (
    <div
      {...props}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 4px 32px rgba(22,29,43,0.25)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ...props.style,
      }}
      className={`relative overflow-x-hidden border-[1px] border-gray-800 aspect-[16/9] flex flex-col justify-end hover:transform hover:scale-[1.02] hover:shadow-2xl ${
        props.className || ""
      }`}
    >
      <div className="absolute inset-0 bg-black/50 z-0 transition-opacity duration-300 hover:bg-black/40" />
      <img
        src={imgSrc}
        alt=""
        onError={() => setImgSrc(fallbackImg)}
        className="w-0 h-0 opacity-0"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function ProcessFeatureCard({ data, alignRight = false }: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col ${alignRight ? "items-end" : "items-start"}`}
    >
      <div className="mb-2">
        <span className="block text-5xl md:text-7xl font-black text-gray-600/50 select-none transition-colors duration-300 hover:text-gray-500/70">
          {data.stepNum}
        </span>
      </div>
      <ImgWithFallback
        image={data.image}
        className="w-full max-w-xl min-w-[250px]"
      >
        <div
          className={`p-7 w-full lg:w-3/4 flex flex-col ${
            alignRight
              ? "text-right ml-auto items-end"
              : "text-left mr-auto items-start"
          }`}
        >
          {data.subtitle && (
            <div className="text-base md:text-lg italic font-medium mb-2 transition-transform duration-300 hover:translate-x-2">
              {data.subtitle}
            </div>
          )}
          <h3 className="font-bold text-lg md:text-xl mb-1 transition-colors duration-300 hover:text-yellow-400">
            {data.title}
          </h3>
          <div className="flex">
            <p className="opacity-80 text-gray-300 text-sm md:text-base transition-opacity duration-300 hover:opacity-100">
              {data.desc}
              <NavLink
                to="#"
                className="text-white text-sm mt-2 transition-all duration-300 hover:text-yellow-400 hover:pl-2"
              >
                See more →
              </NavLink>
            </p>
          </div>
        </div>
      </ImgWithFallback>
    </div>
  );
}

const processSteps: FeatureCardData[] = [
  {
    stepNum: "01",
    image: step2Img,
    title: "상담 및 목표 설정",
    subtitle: "(Consultation & Goal Setting)​",
    desc: "비디오크루는 고객님의 입장에서 먼저 고민합니다. 영상 제작의 궁극적인 목적(예: 브랜드 인지도 향상, 제품 판매 증진, 정보 전달)과 기대 효과, 주요 타겟 시청자,...",
  },
  {
    stepNum: "02",
    image: step3Img,
    title: "영상 기획 및 전략 수립",
    subtitle: "(Video Planning & Strategy)​",
    desc: "설정된 목표와 예산을 바탕으로 영상의 핵심 콘셉트, 주요 스토리라인, 창의적인 표현 전략을 구체화합니다. 비디오크루는 이 기획 단계를 영상의 성패를 좌우하는 가장 중요한...",
  },
  {
    stepNum: "03",
    image: step4Img,
    title: "프리 프로덕션 및 구성안 확정",
    subtitle: "(Pre-Production & Storyboard/Script Confirmation)​",
    desc: "​확정된 기획안을 바탕으로 영상의 실제 제작을 위한 모든 세부 사항을 준비하고 설계합니다. 촬영용 최종 스크립트 작성, 각 장면의 구도와 움직임을 시각화하는 스토리보드(콘티) 제작,...",
  },
  {
    stepNum: "04",
    image: step5Img,
    title: "제작 및 촬영",
    subtitle: "(Production & Filming)",
    desc: "모든 준비가 완료된 프리 프로덕션 단계를 거쳐, 전문 촬영팀이 실제 영상 촬영을 진행합니다. 프로젝트의 성격과 규모에 최적화된 촬영 장비(카메라, 조명, 음향 등)를 활용하여,...",
  },
  {
    stepNum: "05",
    image: step6Img,
    title: "편집 및 후반 작업",
    subtitle: "(Editing & Post-Production)",
    desc: "촬영된 원본 영상을 편집하여 영상의 전체적인 흐름과 리듬을 만듭니다. 컷 편집, 색 보정(Color Grading), 사운드 믹싱, 필요한 경우 2D/3D 모션 그래픽 및 CG 작업,...",
  },
  {
    stepNum: "06",
    image: step7Img,
    title: "최종 검토, 전달 및 활용 지원",
    subtitle: " (Final Review, Delivery & Utilization Support)",
    desc: "완성된 영상은 내부 QA(품질 관리) 및 고객님의 최종 검토를 거쳐 최상의 퀄리티로 약속된 파일 형식(예: MP4, MOV 등) 및 사양으로 전달됩니다. 여기서 끝이 아닙니다...",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const ProcessPage = () => {
  const isMobile = useIsMobile();
  return (
    <div className="bg-black pt-24 process_section text-white font-sans min-h-screen px-4 py-0 w-full">
      {/* HERO */}
      <section className="w-full max-w-7xl border-[1px] border-gray-700 mx-auto grid md:grid-cols-2 gap-10  items-center relative">
        <div className="p-4">
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            영상제작 프로세스​
          </h1>
          <p className="text-white/85 text-lg md:text-xl mb-2">
            비디오크루만의 영상제작 프로세스를 통해 고객의 니즈에 부합하는
            <br className="hidden md:block" />
            최적의 콘텐츠를 디자인하여 제공합니다.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            *과업의 형태에 따라 프로세스는 변동될 수 있습니다.
          </p>
        </div>

        <ImgWithFallback
          children={""}
          image={heroImg}
          className=" h-full aspect-[16/9] border-[1.5px] border-gray-700 shadow-lg"
        />
      </section>

      {/* TIMELINE */}
      <div className="relative w-full max-w-6xl mx-auto pt-10 pb-16">
        <div
          className="relative"
          style={{ height: `${processSteps.length * 280 + 200}px` }} // Add buffer
        >
          {processSteps.map((step, idx) => {
            const isRight = idx % 2 === 1;
            const baseRowGap = 280;
            let topOffset = idx * baseRowGap;
            if (isMobile) {
              topOffset += idx * 140; // Adds 40px extra space between steps
            } else if (idx > 0) {
              topOffset += isRight ? -10 : 60;
            }

            const cardWidth = "47%";
            const cardPositionClass = isMobile
              ? "left-1/2 transform -translate-x-1/2"
              : isRight
              ? "right-0"
              : "left-0";

            return (
              <React.Fragment key={step.stepNum}>
                {/* CARD */}
                <div
                  className={`absolute w-full md:w-[80%] lg:w-[47%] ${cardPositionClass}`}
                  style={{
                    top: `${topOffset}px`,
                    zIndex: 10 + idx,
                  }}
                >
                  <ProcessFeatureCard
                    data={step}
                    alignRight={!isMobile && isRight}
                  />
                </div>

                {/* ARROW CONNECTOR */}
                {idx < processSteps.length - 1 && (
                  <>
                    {isMobile ? (
                      // ↓ Vertical arrow for mobile
                      <div className="relative h-10 flex justify-center items-center">
                        {/* <div className="vertical-dotted-arrow" /> */}
                      </div>
                    ) : (
                      // Desktop layout
                      <>
                        {!isRight && (
                          <div
                            className="absolute horizontal-dotted-arrow"
                            style={{
                              top: `${topOffset + 360}px`,
                              left: `calc(${cardWidth} + 0px)`,
                              width: "80px",
                              height: "0px",
                              borderTop: "2px dotted #ccc",
                              zIndex: 5,
                            }}
                          />
                        )}
                        {isRight && (
                          <>
                            <div
                              className="absolute horizontal-dotted-arrow-reverse"
                              style={{
                                top: `${topOffset + 300}px`,
                                left: `calc(100% - ${cardWidth} - 160px)`,
                                width: "160px",
                                height: "0px",
                                borderTop: "2px dotted #ccc",
                                zIndex: 5,
                              }}
                            />
                            <div
                              className="absolute vertical-dotted-arrow"
                              style={{
                                top: `${topOffset + 300}px`,
                                left: `calc(100% - ${cardWidth} - 160px)`,
                                width: "0px",
                                height: "140px",
                                borderLeft: "2px dotted #ccc",
                                zIndex: 5,
                              }}
                            />
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessPage; // Rest of the code remains the same...
