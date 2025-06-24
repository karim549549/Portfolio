"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
  sectionIndex,
  sectionTitle,
  sectionCenters,
  beamContainerRef,
}: {
  children: React.ReactNode;
  className?: string;
  sectionIndex?: string | number;
  sectionTitle?: string;
  sectionCenters?: number[];
  beamContainerRef?: React.RefObject<HTMLDivElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  // Build zig-zag SVG path
  let zigzagPath = "";
  const beamX = 20;
  const stepX = 80;
  const leftX = beamX - stepX + 110;
  const rightX = beamX + stepX + 110;
  if (sectionCenters && sectionCenters.length > 0) {
    zigzagPath = `M ${beamX} 0`;
    sectionCenters.forEach((y, i) => {
      // Vertical to section center
      zigzagPath += ` L ${beamX} ${y}`;
      // Horizontal step (alternate right/left)
      if (i < sectionCenters.length - 1) {
        const dir = i % 2 === 0 ? rightX : leftX;
        zigzagPath += ` L ${dir} ${y}`;
      }
    });
    // Final vertical to bottom if needed
    // zigzagPath += ` L ${beamX} ${svgHeight}`;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full mb-10 w-full max-w-7xl", className)}
    >
      <div className="relative w-full flex">
        {/* Beam and indicator only on lg screens, inside the container */}
        <div ref={beamContainerRef} className="hidden lg:block absolute left-0 top-0 h-full w-24 z-30">
          <div className="relative h-full flex items-center justify-center">
            <svg
              viewBox={`0 0 60 ${svgHeight}`}
              width="60"
              height={svgHeight}
              className="block mx-auto"
              aria-hidden="true"
            >
              <motion.path
                d={zigzagPath || `M 10 0 L 10 ${svgHeight}`}
                fill="none"
                stroke="#9091A0"
                strokeOpacity="0.16"
                transition={{ duration: 10 }}
              ></motion.path>
              <motion.path
                d={zigzagPath || `M 10 0 L 10 ${svgHeight}`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.25"
                className="motion-reduce:hidden"
                transition={{ duration: 10 }}
              ></motion.path>
              <defs>
                <motion.linearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="0"
                  y1={y1}
                  y2={y2}
                >
                  <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                  <stop stopColor="#18CCFC"></stop>
                  <stop offset="0.325" stopColor="#6344F5"></stop>
                  <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                </motion.linearGradient>
              </defs>
            </svg>
            {/* Section indicator attached to the beam at the current section center */}
            {sectionCenters && sectionCenters.length > 0 && (
              <div
                className="absolute  left-0 p-1 bg-transparent justify-between rounded-md backdrop-blur-sm items-center h-[20rem] flex flex-col items-center gap-2 pointer-events-none"
                style={{
                  top: sectionCenters[Number(sectionIndex) - 1] - 32,
                }}
              >
                {sectionIndex && (
                  <span className="bg-gradient-to-r from-pink-500 via-violet-500/80 to-violet-500/70 text-transparent bg-clip-text text-6xl font-bold drop-shadow-lg animate-bounce transition-all duration-500 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-pink-500 dark:via-violet-500/80 dark:to-violet-500/70 text-neutral-800">
                    {String(sectionIndex).padStart(2, '0')}
                  </span>
                )}
                {sectionTitle && (
                  <span className="uppercase rotate-270 relative text-neutral-800 dark:text-white tracking-[0.4rem] text-lg font-semibold ">
                    <div className="absolute p-2 -top-1 left-2 w-30 h-full bg-violet-400/30 dark:bg-violet-500/70 blur-sm -z-10" />
                    {sectionTitle}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div ref={contentRef} className="flex-1">{children}</div>
      </div>
    </motion.div>
  );
};
