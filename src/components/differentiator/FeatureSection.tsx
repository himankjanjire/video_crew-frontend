const features = [
  {
    title: "예산을 초과하는 추가 비용이 발생하지 않을까?",
    desc: "추가 비용이 발생하지 않으며, 처음부터 투명한 견적을 제시",
  },
  {
    title: "기성 영상 템플릿에 내용을 억지로 맞추지는 않을까?",
    desc: "맞춤형 제작 방식으로 고객사의 니즈를 100% 반영한 솔직한 영상만을 제공",
  },
  {
    title: "진행 상황을 중간에 확인할 수 있을까?",
    desc: "주기적 보고서 제공으로 프로젝트 진행 과정을 투명하게 공유",
  },
];

export default function FeatureSection() {
  return (
    <section className=" w-full py-14 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#18191e] p-8 shadow-md hover:scale-[1.03] transition-transform duration-200 flex flex-col"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-relaxed">
              {item.title}
            </h3>
            <p className="text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
