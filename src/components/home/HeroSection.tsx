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
  return (
    <div className="w-full relative flex flex-col items-center mt-20 p-10 gap-10 min-h-[700px] lg:min-h-[700px] bg-white dark:bg-black">
      {/* Background Gradient */}
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
          bg-[radial-gradient(68.54%_68.72%_at_80%_80%,_hsla(210,100%,85%,.13)_0,_hsla(210,100%,55%,.07)_50%,_hsla(210,100%,45%,0)_80%)] dark:bg-[radial-gradient(68.54%_68.72%_at_80%_80%,_hsla(210,100%,85%,.13)_0,_hsla(210,100%,55%,.07)_50%,_hsla(210,100%,45%,0)_80%)]"
        />
      {/* Headline, Subheadline, Description, Button as a group */}
      <motion.div
        className="p-0 flex flex-col gap-5 lg:absolute lg:top-10 lg:left-10 lg:rotate-[-3deg] lg:z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        exit={{ opacity: 0, y: 40 }}
      >
        <TextGenerateEffect
          words="Hello ,"
          className="md:text-7xl bg-gradient-to-r from-sky-500 via-violet-500 uppercase  to-pink-500 bg-clip-text text-transparent text-4xl tracking-widest md:leading-20 "
          duration={1.5}
          delay={0.18}
          style={{ fontFamily: 'var(--font-railways)' }}
        />
        <TextGenerateEffect
          words="i'm developer"
          className="ml-10 bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 text-transparent bg-clip-text uppercase text-3xl md:text-4xl tracking-widest leading-10 "
          duration={1.5}
          delay={0.58}
          style={{ fontFamily: 'var(--font-railways)' }}
        />
        <motion.p
          initial={false}
          className="max-w-lg leading-6 tracking-wide md:text-md text-sm text-neutral-700 dark:text-neutral-300 bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl border border-neutral-200 dark:border-white/20 px-4 py-3 shadow-lg"
        >
          A creative problem solver who sees software not just as code, but as a tool for designing clean, thoughtful systems that serve real human needs. I care deeply about clarity, simplicity, and building solutions that scale—not just in performance, but in purpose. Driven by curiosity and a love for elegant structure, I approach development as a craft, always aiming to improve how things work and how they feel.
        </motion.p>
        <div className="lg:ml-10">
          <button
            className="group cursor-pointer w-fit relative overflow-hidden px-8 flex items-center gap-2 rounded-lg bg-violet-500/10 text-violet-700 dark:text-violet-300 transition-all duration-300 hover:bg-violet-500/20 border border-violet-300 dark:border-violet-500/20 py-3 hover:shadow-[0_0_15px_-3px_rgba(124,58,237,0.3)]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div className="absolute w-10 h-10 rounded-full blur-lg bg-violet-500/20 transition-all duration-500 group-hover:bg-violet-500/30 group-hover:w-48 group-hover:-translate-x-6 group-hover:scale-y-125" />
            <span style={{ fontFamily: 'var(--font-oswald)' }} className="relative z-10 transition-all duration-300 group-hover:text-violet-800 dark:group-hover:text-violet-200 group-hover:drop-shadow-[0_0_5px_rgba(167,139,250,0.3)]">
              See my work
            </span>
            <div className="relative z-10 transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110">
              <ChevronsDownIcon className="w-5 h-5 text-violet-400 dark:text-violet-400 transition-all duration-300 group-hover:rotate-270 group-hover:text-violet-800 dark:group-hover:text-violet-200 group-hover:scale-110" />
            </div>
          </button>
        </div>
      </motion.div>
      {/* Scattered Cards */}
      {/* On small/medium screens, show cards in a column with gap-8. On lg+, use absolute scattered layout. */}
      <div className="w-full">
        <div className="flex flex-col gap-8 lg:hidden mt-12">
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{ opacity: 0, rotate: -20 }}
          >
            <HeroCard
              className="card-float"
              key={skills[0].title}
              icon={skills[0].icon}
              title={skills[0].title}
              description={skills[0].description}
              animationDelay="0s"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{ opacity: 0, rotate: 20 }}
          >
            <HeroCard
              className="card-float"
              key={skills[1].title}
              icon={skills[1].icon}
              title={skills[1].title}
              description={skills[1].description}
              animationDelay="3s"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -16 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{ opacity: 0, rotate: -16 }}
          >
            <HeroCard
              className="card-float"
              key={skills[2].title}
              icon={skills[2].icon}
              title={skills[2].title}
              description={skills[2].description}
              animationDelay="6s"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 16 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 16 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <HeroCard
              className="card-float"
              key={skills[3].title}
              icon={skills[3].icon}
              title={skills[3].title}
              description={skills[3].description}
              animationDelay="9s"
            />
          </motion.div>
        </div>
        {/* lg+ scattered layout */}
        <div className="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:right-0 lg:z-0">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: -6 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{ opacity: 0, rotate: -20 }}
            className="lg:absolute lg:top-10 lg:right-24 lg:rotate-[-6deg]"
          >
            <HeroCard
              className="card-float"
              key={skills[0].title}
              icon={skills[0].icon}
              title={skills[0].title}
              description={skills[0].description}
              animationDelay="0s"
            />
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, rotate: 20 }}
            whileInView={{ opacity: 1, rotate: 4 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{ opacity: 0, rotate: 20 }}
            className="lg:absolute lg:top-56 lg:right-10 lg:rotate-[4deg]"
          >
            <HeroCard
              className="card-float"
              key={skills[1].title}
              icon={skills[1].icon}
              title={skills[1].title}
              description={skills[1].description}
              animationDelay="3s"
            />
          </motion.div>
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, rotate: -16 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{ opacity: 0, rotate: -16 }}
            className="lg:absolute lg:bottom-32 lg:left-82 lg:rotate-[-3deg]"
          >
            <HeroCard
              className="card-float"
              key={skills[2].title}
              icon={skills[2].icon}
              title={skills[2].title}
              description={skills[2].description}
              animationDelay="6s"
            />
          </motion.div>
          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, rotate: 16 }}
            whileInView={{ opacity: 1, rotate: 7 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            exit={{ opacity: 0, rotate: 16 }}
            className="lg:absolute lg:bottom-10 lg:right-40 lg:rotate-[7deg]"
          >
            <HeroCard
              className="card-float"
              key={skills[3].title}
              icon={skills[3].icon}
              title={skills[3].title}
              description={skills[3].description}
              animationDelay="9s"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}