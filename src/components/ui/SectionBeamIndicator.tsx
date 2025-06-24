"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import { TracingBeam } from "@/components/ui/TracingBeam";

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

export function SectionBeamIndicator({
  sections,
}: {
  sections: Section[];
}) {
  const [current, setCurrent] = useState(0);
  const [sectionCenters, setSectionCenters] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const beamContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let minDist = Infinity;
      let activeIdx = 0;
      const centers: number[] = [];
      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const centerY = rect.top + rect.height / 2;
          if (beamContainerRef.current) {
            const beamRect = beamContainerRef.current.getBoundingClientRect();
            centers[idx] = centerY - beamRect.top;
          } else {
            centers[idx] = centerY;
          }
          const dist = Math.abs(centerY - window.innerHeight / 2);
          if (dist < minDist) {
            minDist = dist;
            activeIdx = idx;
          }
        }
      });
      setCurrent(activeIdx);
      setSectionCenters(centers);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TracingBeam
      sectionIndex={current + 1}
      sectionTitle={sections[current].title}
      sectionCenters={sectionCenters}
      beamContainerRef={beamContainerRef as React.RefObject<HTMLDivElement>}
    >
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          ref={el => { sectionRefs.current[idx] = el; }}
          className="w-full lg:ml-24"
        >
          {section.content}
        </section>
      ))}
    </TracingBeam>
  );
} 