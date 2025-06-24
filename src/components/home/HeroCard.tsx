import React from "react";

interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: string;
}

export function HeroCard({ icon, title, description, className, animationDelay = '0s' }: HeroCardProps) {
  return (
    <div
      className={`card-animate max-w-80 group relative p-6 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-neutral-200 dark:border-white/10 transition-all duration-500 ${className ?? ''}`}
      style={{ perspective: "800px", animationDelay }}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className={"card-icon mb-4 p-3 rounded-lg w-fit transition-colors duration-300 bg-neutral-100 dark:bg-white/10 group-hover:bg-neutral-200 dark:group-hover:bg-white/20"}
          style={{ animationDelay }}
        >
          {icon}
        </div>
        {/* Title */}
        <h3 className={"text-lg text-sm font-semibold mb-2 transition-colors duration-300 text-neutral-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-200"}>
          {title}
        </h3>
        {/* Description */}
        <p className={"text-neutral-600 dark:text-neutral-400 text-xs transition-colors duration-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-300"}>
          {description}
        </p>
      </div>
    </div>
  );
}
