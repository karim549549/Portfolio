"use client";
import React from "react";
import { Code, Database, PenTool, GitBranch, ChevronsDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroCard } from "@/components/home/HeroCard";

const skills = [
  {
    icon: <Code className="w-6 h-6 text-sky-400" />,
    title: "Frontend Development",
    description: "Building responsive and performant user interfaces with modern frameworks like React, Next.js, and Vue.",
  },
  {
    icon: <Database className="w-6 h-6 text-green-400" />,
    title: "Backend Architecture",
    description: "Designing and implementing robust, scalable server-side applications, APIs, and database solutions.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-amber-400" />,
    title: "UI/UX Design",
    description: "Creating intuitive, user-centric designs that bridge the gap between user needs and business goals.",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-rose-400" />,
    title: "DevOps & Deployment",
    description: "Automating development pipelines and deploying applications with a focus on reliability and scalability.",
  }
];

export function HeroSection() {
  const cardsRef = React.useRef(null);
  return (
    <div className="w-full flex justify-center  lg:flex-row flex-col mt-20  p-10 gap-10  relative ">
      <div
        className="
          absolute
          bottom-0
          right-0
          z-0
          pointer-events-none
          w-[60vw]
          h-[32vw]
          rounded-full
          opacity-85
          blur-3xl
          rotate-[25deg]
          bg-[radial-gradient(68.54%_68.72%_at_80%_80%,_hsla(210,100%,85%,.13)_0,_hsla(210,100%,55%,.07)_50%,_hsla(210,100%,45%,0)_80%)]
        "
      />
      <div  className="p-5 flex flex-col gap-5 ">
        <TextGenerateEffect
          words="Hello ,"
          className="md:text-7xl bg-gradient-to-r from-sky-500 via-violet-500 font-bold to-pink-500 bg-clip-text text-transparent   text-4xl tracking-widest md:leading-20 "
          duration={1.5}
          delay={0.18}
          style={{ fontFamily: 'var(--font-railways)' }}
        />
        <TextGenerateEffect
          words="i'm developer"
          className="ml-10  bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 text-transparent bg-clip-text uppercase text-3xl md:text-3xl tracking-widest leading-10  font-[var(--font-caprasimo)]"
          duration={1.5}
          delay={0.58}
          style={{ fontFamily: 'var(--font-railways)' }}
        />
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-lg leading-6 tracking-wide md:text-md  text-sm text-neutral-600">
          A creative problem solver who sees software not just as code, but as a tool for designing clean, thoughtful systems that serve real human needs. I care deeply about clarity, simplicity, and building solutions that scale—not just in performance, but in purpose. Driven by curiosity and a love for elegant structure, I approach development as a craft, always aiming to improve how things work and how they feel.
        </motion.p>
        <button
          className="group cursor-pointer  w-fit relative overflow-hidden px-8 flex items-center gap-2 rounded-lg bg-violet-500/10 text-violet-300 transition-all duration-300 hover:bg-violet-500/20 border border-violet-500/20 py-3 hover:shadow-[0_0_15px_-3px_rgba(124,58,237,0.3)]"
          >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div className="absolute w-10 h-10 rounded-full blur-lg bg-violet-500/20 transition-all duration-500 group-hover:bg-violet-500/30 group-hover:w-48 group-hover:-translate-x-6 group-hover:scale-y-125" />
            <span style={{fontFamily: 'var(--font-oswald)'}} className="relative z-10 transition-all duration-300 group-hover:text-violet-200 group-hover:drop-shadow-[0_0_5px_rgba(167,139,250,0.3)]">
              See my work
            </span>
            <div className="relative z-10 transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110">
                <ChevronsDownIcon className="w-5 h-5 text-violet-400 transition-all  duration-300 group-hover:rotate-270   group-hover:text-violet-200 group-hover:scale-110" />
            </div>
        </button>
      </div>
      <div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12"
          >
            {skills.map((skill) => (
              <HeroCard
                className="card-float"
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </motion.div>
      </div>
    </div>
  );
}