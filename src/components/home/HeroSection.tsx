import herobg from "../../assets/home/hhero.png";
import HeroSection from "../common/HeroSection";

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

export default function HomeHeroSection() {
  return <HeroSection sliderTexts={sliderTexts} backgroundImage={herobg} />;
}
