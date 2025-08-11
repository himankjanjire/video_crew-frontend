import f2 from "../../assets/home/habout2/image 2.png";
import f1 from "../../assets/home/habout1.png";
import f3 from "../../assets/home/habout3.png";
import FeatureCard from "../common/FeatureCard";

const featureCards = [
  {
    image: f1,
    title: "Creative Solutions",
    desc: "틀에 박힌 영상이 아닌, ​메시지에 최적화된 독창적인 ​아이디어를 제시합니다.",
  },
  {
    image: f2,
    title: "Professional Quality",
    desc: "대기업과 협업중인 전문 컨설턴트들이 기획하며, 최신 장비와 기술력을 바탕으로 모든프로젝트에 최상의 퀄리티를 보장합니다.​",
  },
  {
    image: f3,
    title: "All-in-One Service",
    desc: "복잡한 영상 제작 과정, ​비디오크루에서는 기획부터 ​최종 납품까지 원스톱으로 ​해결해 드립니다. ",
  },
];
export default function HowItWorks() {
  return (
    <section className="max-w-[1320px] mx-auto px-6 md:px-20 py-24 flex flex-col gap-10">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Column */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-[#1575F9] font-bold text-lg md:text-xl">
            으로 쉽게! 빠르게! 신뢰도있게!
          </p>
          <h2 className="text-2xl md:text-3xl font-black leading-snug">
            영상 제작, <br />
            어떻게 하고 계신가요?
          </h2>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-center">
          <p className="text-base opacity-85 leading-relaxed">
            비디오크루는 단순한 영상 제작을 넘어, 강력한 스토리텔링과 독창적인
            시각적 표현으로 고객의 메시지에 생명력을 불어넣는 비디오 콘텐츠 전문
            그룹입니다. 기획부터 촬영, 편집, 그리고 최종 결과물에 이르기까지, 각
            분야의 전문가들이 고객의 비전을 완성도 높은 영상으로 구현합니다.
          </p>
        </div>
      </div>

      {/* Second Row - Feature Cards */}
      <FeatureCard data={featureCards} />
    </section>
  );
}
