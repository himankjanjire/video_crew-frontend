// Update these paths to match your project
import aboutHeroImg from "../assets/about/hero.webp";
import core1 from "../assets/about/c1.webp";
import core2 from "../assets/about/c2.webp";
import core3 from "../assets/about/c3.webp";
import wc1 from "../assets/about/Image/wc1.webp";
import wc2 from "../assets/about/Image/wc2.webp";
import wc3 from "../assets/about/Image/wc3.webp";
import backupbg from "../assets/home/back1.png";
import FeatureCard, {
  type FeatureCardData,
} from "../components/common/FeatureCard";
import LogoSlider from "../components/common/LogoSlider";
import HeroSection from "../components/common/HeroSection";
import FullWidthBackground from "../components/common/FullWithBg";
import backdownbg from "../assets/home/back2.png";

const sliderTexts = [
  {
    subtitle:
      "고객 맞춤 영상 콘텐츠 제작의 정점을 경험하세요. 비디오크루와 함께라면 당신의 비전이 현실이 됩니다.\n" +
      "최고의 품질과 창의성으로 귀사의 브랜드 가치를 높여드립니다.",
    title: "비디오크루만의 특별함",
  },
  {
    subtitle:
      "기획부터 촬영, 편집까지 믿고 맡길 수 있는 파트너. 전문적인 노하우로 최상의 결과물을 약속드립니다.\n" +
      "체계적인 프로세스와 풍부한 경험으로 완벽한 결과물을 보장합니다.",
    title: "원스톱 영상제작 솔루션",
  },
  {
    subtitle:
      "차별화된 퀄리티와 만족도를 제공하는 비디오크루. 최신 장비와 숙련된 전문가들이 함께합니다.\n" +
      "4K, 8K 촬영 장비와 드론, 특수 장비를 활용한 차별화된 영상미를 선사합니다.",
    title: "최고의 전문가와 장비",
  },
  {
    subtitle:
      "합리적인 비용으로 최고의 가치를 전달하는 비디오크루. 귀사의 예산에 맞는 최적의 솔루션을 제공합니다.\n" +
      "투자 대비 최고의 효율을 보장하는 맞춤형 패키지로 고객 만족을 실현합니다.",
    title: "합리적인 가격 정책",
  },
];

const coreValueCards: FeatureCardData[] = [
  {
    image: core1,
    title: "Customer-centric",
    desc: "기획 상담부터 납품, 피드백, 사후관리까지 모든 과정에서 고객의 입장에서 생각하고 행동합니다.",
  },
  {
    image: core2,
    title: "Problem Solving",
    desc: "다양한 현장 경험과 노하우로 돌발 상황에도 빠르고 유연하게 대처합니다.",
  },
  {
    image: core3,
    title: "Result-driven",
    desc: "고객이 진짜 원하는 결과, 실질적인 비즈니스 성과를 위해 끝까지 책임집니다.",
  },
];

export default function About() {
  return (
    <main className="bg-black text-white  font-sans w-full pt-24">
      {/* HERO SECTION */}
      <section className="w-full  max-w-7xl mx-auto overflow-hidden ">
        <div className="w-full px-6 md:px-0 md:flex  justify-around items-center">
          <div>
            <p className="text-gray-400">Who we are, Video Crew​</p>
            <h1 className="text-3xl md:text-4xl font-black drop-shadow-md mb-4">
              스토리로 말하는 영상 콘텐츠,
              <br />
              시선을 사로잡는 영상,
              <br />더 이상 고민하지 마세요!
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mb-8">
            비디오크루는 다양한 업종의 프로젝트 경험과 탄탄한 영상 기획, 촬영,
            편집, 컨텐츠 마케팅까지
            <br className="hidden md:inline" />
            영상 콘텐츠의 A부터 Z까지 직접 책임집니다.
            <br />
            언제나 고객 중심, 언제나 결과 중심, 언제나 새로운 시각을 추구합니다.
          </p>
        </div>
      </section>
      <HeroSection sliderTexts={sliderTexts} backgroundImage={aboutHeroImg} />
      <LogoSlider padding={true} />
      <FullWidthBackground src={backupbg} />

      {/* CORE VALUE */}
      <section className="max-w-6xl mx-auto w-full py-16 my-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-black mb-7 tracking-tight text-center">
          Core Value
        </h2>
        <p className="text-center text-base text-white/80 mb-12">
          비디오크루의 핵심가치와 철학, 그리고 원칙을 소개합니다.
          <br />
          우리는 언제나 '고객중심', '문제해결력', '결과중심' 으로 움직입니다.
        </p>
        <FeatureCard data={coreValueCards} />
      </section>
      <FullWidthBackground src={backdownbg} />
      {/* WORK CULTURE */}
      <section className="max-w-6xl mx-auto w-full pt-12 pb-20 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-black mb-7 tracking-tight text-center">
          Work Culture
        </h2>
        <p className="text-center text-base text-white/80 mb-12">
          비디오크루만의 일하는 방식과 조직 DNA를 경험해보세요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="relative aspect-square flex flex-col justify-end p-7 text-white border-[1px] border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:border-white/50 cursor-pointer"
            style={{
              backgroundImage: `url(${wc1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 4px 32px rgba(22,29,43,0.25)",
            }}
          >
            <div className="absolute inset-0 bg-black/50 transition-all duration-300 hover:bg-black/40"></div>
            <div className="relative z-10 w-full lg:w-[60%] transform transition-all duration-300 group-hover:translate-y-[-10px]">
              <div className="font-bold text-lg mb-2 hover:text-blue-400">
                Agile Performance
              </div>
              <div className="opacity-80 text-sm">
                빠르게 기획, 실행, 피드백하며 끊임없이 개선하는 에자일 방식으로
                일합니다.
              </div>
            </div>
          </div>
          <div
            className="relative aspect-square flex flex-col justify-end p-7 text-white border-[1px] border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:border-white/50 cursor-pointer"
            style={{
              backgroundImage: `url(${wc2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 4px 32px rgba(22,29,43,0.25)",
            }}
          >
            <div className="absolute inset-0 bg-black/50 transition-all duration-300 hover:bg-black/40"></div>
            <div className="relative z-10 w-full lg:w-[60%] transform transition-all duration-300 group-hover:translate-y-[-10px]">
              <div className="font-bold text-lg mb-2 hover:text-blue-400">
                Effectiveness
              </div>
              <div className="opacity-80 text-sm">
                모든 회의와 결정, 실행의 이유를 명확히 결과 중심으로 나아갑니다.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div
            className="
      relative 
      w-full
      h-[60vh]          
      flex flex-col justify-end 
      p-7 text-white 
      border-[1px] border-gray-800
      transition-all duration-300 
      hover:scale-[1.01] 
      hover:border-white/50
      cursor-pointer
    "
            style={{
              backgroundImage: `url(${wc3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow: "0px 4px 32px rgba(22,29,43,0.25)",
            }}
          >
            <div className="absolute inset-0 bg-black/50 transition-all duration-300 hover:bg-black/40"></div>
            <div className="relative z-10 w-full lg:w-[60%] transform transition-all duration-300 group-hover:translate-y-[-10px]">
              <div className="font-bold text-lg mb-2 hover:text-blue-400">
                Knowledge Sharing
              </div>
              <div className="opacity-80 text-sm">
                팀원간 노하우, 정보, 자료를 적극적으로 공유하며 함께 성장합니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
