import React from "react";

interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function HeroCard({ icon, title, description, className }: HeroCardProps) {
  return (
    <div
      className={`card-animate max-w-80 group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 ${className ?? ''}`}
      style={{ perspective: "800px" }}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className={"card-icon mb-4 p-3 rounded-lg w-fit transition-colors duration-300 bg-white/10 group-hover:bg-white/20"}>
          {icon}
        </div>
        {/* Title */}
        <h3 className={"text-lg text-sm font-semibold mb-2 transition-colors duration-300 text-white group-hover:text-sky-200"}>
          {title}
        </h3>
        {/* Description */}
        <p className={"text-neutral-400 text-xs transition-colors duration-300 group-hover:text-neutral-300"}>
          {description}
        </p>
      </div>
    </div>
  );
}
