"use client";
import { useEffect } from "react";
import {  stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.5,
  delay = 0.2,
  filter = true,
  style = {},
}: {
  words: string;
  className?: string;
  duration?: number;
  delay?: number;
  filter?: boolean;
  style?: React.CSSProperties;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(delay),
      }
    );
  }, [animate, delay, duration, filter]);


  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => (
          <span
            key={word + idx}
            className={`opacity-0 bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] drop-shadow-[0_0_12px_rgba(149,50,204,0.5)]`}
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn(className)} style={style}>
      {renderWords()}
    </div>
  );
}; 