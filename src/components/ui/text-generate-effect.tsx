"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 2,
  delay = 0.2,
  style={},
}: {
  words: string;
  className?: string;
  duration?: number;
  delay?: number;
  style?: React.CSSProperties;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration,
          delay: stagger(delay),
        }
      );
    }
  }, [isInView, animate, duration, delay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={cn(className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {renderWords()}
    </motion.div>
  );
}; 