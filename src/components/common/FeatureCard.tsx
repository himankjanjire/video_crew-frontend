interface FeatureCardData {
  image: string;
  title: string;
  desc: string;
}

interface FeatureCardProps {
  data: FeatureCardData[];
}

export default function FeatureCard({ data }: FeatureCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((f, i) => (
        <div
          key={i}
          className="relative aspect-square flex flex-col justify-end p-7 text-white border-[1px] border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            backgroundImage: `url(${f.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 4px 32px rgba(22,29,43,0.25)",
          }}
        >
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 hover:bg-black/40"></div>
          <div className="relative z-10 w-full lg:w-[60%] transition-transform duration-300 hover:translate-y-[-8px]">
            <div className="font-bold text-lg mb-2">{f.title}</div>
            <div className="opacity-80 text-sm">{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export type { FeatureCardData };
