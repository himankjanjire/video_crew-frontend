import statsbg from "../../assets/home/hback5.png";
import LogoSlider from "../common/LogoSlider";

const stats = [
  { value: "10+", label: "진행 케이스 수" },
  { value: "100+", label: "진행 프로젝트" },
  { value: "100%", label: "고객 만족도" },
  { value: "90%", label: "프로젝트 재진행률" },
];

export default function LogoAndStats() {

  return (
    <section className="border-t border-white/10">
      {/* Logos Slider */}
      <LogoSlider />

      {/* Stats Section with Background */}
      <div
        className="py-14 px-6 md:px-20"
        style={{
          backgroundImage: `url(${statsbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-5">
          {stats.map((stat, idx) => {
            // Separate number and symbol
            const match = stat.value.match(/^(\d+)([\+\%])?$/);
            const number = match ? match[1] : stat.value;
            const symbol = match && match[2] ? match[2] : "";

            return (
              <div key={idx} className="text-center text-white">
                <div className="text-3xl font-black text-[#1575F9] mb-1">
                  {number}
                  {symbol && (
                    <sup className="text-lg font-bold align-super">
                      {symbol}
                    </sup>
                  )}
                </div>
                <div className="text-sm opacity-85">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
