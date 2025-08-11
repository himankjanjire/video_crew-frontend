import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import backupbg from "../assets/home/back1.png";
import backdownbg from "../assets/home/back2.png";
import FullWidthBackground from "../components/common/FullWithBg";
import Portfolio from "../components/home/Portfolio";
import LogoAndStats from "../components/home/Logo&Stats";

export default function Home() {
  return (
    <div className="bg-black">
      {/* HERO SECTION */}
      <HeroSection />

      <HowItWorks />
      <FullWidthBackground src={backupbg} />
      {/* PORTFOLIO SECTION with auto-scroll */}

      <Portfolio />
      <FullWidthBackground src={backdownbg} />

      {/* CLIENT LOGOS & STATS SECTION */}
      <LogoAndStats />
    </div>
  );
}
