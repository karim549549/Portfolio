import React from "react";
import Marquee from "react-fast-marquee";
import { Rocket, Palette, Wrench, Smartphone, Lightbulb, Globe, Target } from "lucide-react";

const BannerComponent = function Banner() {
  const bannerContent = [
    { icon: <Rocket className="w-3 h-3" />, text: "Building performant full-stack apps" },
    { icon: <Palette className="w-3 h-3" />, text: "Designing elegant, user-first interfaces" },
    { icon: <Wrench className="w-3 h-3" />, text: "Turning ideas into real products" },
    { icon: <Smartphone className="w-3 h-3" />, text: "Mobile-first, responsive design" },
    { icon: <Lightbulb className="w-3 h-3" />, text: "Powered by curiosity & clean code" },
    { icon: <Globe className="w-3 h-3" />, text: "Based in Cairo, working globally" },
    { icon: <Target className="w-3 h-3" />, text: "Let's build something great together" },
  ];

  return (
    <div
      className="w-full  bg-gradient-to-r from-sky-500 via-violet-500 to-pink-300 dark:backdrop-blur-md dark:bg-white/5 border-b border-sky-200/50 dark:border-white/10 overflow-hidden relative dark:bg-gradient-to-br dark:from-sky-500/5 dark:via-violet-500/5 dark:to-pink-500/5 shadow-sm dark:shadow-[0_0_20px_rgba(14,165,233,0.05),0_0_40px_rgba(14,165,233,0.03),0_0_60px_rgba(139,92,246,0.05),0_0_80px_rgba(139,92,246,0.03),0_0_100px_rgba(236,72,153,0.05),0_0_120px_rgba(236,72,153,0.03)]"
    >
      {/* Light mode gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-violet-100/30 to-pink-100/30 dark:from-sky-500/3 dark:via-violet-500/3 dark:to-pink-500/3 pointer-events-none" />
      
      <Marquee
        speed={50}
        gradient
        gradientColor="transparent"
        gradientWidth={50}
        pauseOnHover
        className="py-2 overflow-y-hidden relative z-10"
      >
        {bannerContent.map((item, index) => (
          <span
            key={index}
            className="cursor-pointer mx-8 text-xs font-medium text-white/70  hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-105 flex items-center gap-2 drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(14,165,233,0.15),0_0_16px_rgba(139,92,246,0.1),0_0_24px_rgba(236,72,153,0.05)]"
          >
            <span className="text-sky-600 dark:text-sky-400/80">{item.icon}</span>
            {item.text}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default React.memo(BannerComponent); 