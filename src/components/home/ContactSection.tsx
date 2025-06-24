"use client";
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    href: "mailto:karimkhaled549@gmail.com",
    icon: Mail,
    tooltip: "Email",
    display: "info@digitx.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/karim549549",
    icon: Github,
    tooltip: "GitHub",
    display: "github.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karim-khaled-5711aa233/",
    icon: Linkedin,
    tooltip: "LinkedIn",
    display: "linkedin.com/in/yourusername",
  },
];

export function ContactSection() {
  return (
    <section className="dark:bg-transparent bg-white w-full p-10 mt-10 flex items-center justify-center flex-col gap-10">
      <motion.h1
        className="capitalize text-neutral-900 dark:text-white text-3xl md:text-5xl fontbold"
        style={{ fontFamily: "var(--font-oswald)" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
      >
        <span className="text-transparent bg-clip-text mr-3 bg-gradient-to-r from-neutral-500 to-neutral-700">
          Get In
        </span>
        Touch With Me !
      </motion.h1>
      <motion.div
        className="flex items-center justify-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <p className="text-neutral-600 dark:text-transparent dark:bg-clip-text max-w-3xl dark:bg-gradient-to-b dark:from-neutral-500 dark:to-neutral-700">
          I&apos;m always looking for new opportunities and collaborations. If you have any questions or want to work together, please don&apos;t hesitate to contact me. I&apos;m always looking for new opportunities and collaborations. If you have any questions or want to work together
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col my-20 md:flex-row items-center justify-center gap-10 border border-neutral-200 dark:border-white/10 rounded-xl bg-white/70 dark:bg-black/40 p-4 md:px-10 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      >
        {contacts.map((contact, idx) => (
          <React.Fragment key={contact.label}>
            {idx > 0 && (
              <div className="hidden md:block h-20 w-px bg-neutral-200 dark:bg-white/10 mx-2" />
            )}
            {idx > 0 && (
              <div className="block md:hidden w-4/5 h-px bg-neutral-200 dark:bg-white/10 my-2 mx-auto" />
            )}
            <div className="flex mb-3 flex-col items-center gap-2 min-w-[200px]">
              <span className="text-xs bg-neutral-200 dark:bg-neutral-900 px-2 py-1 rounded-xs text-neutral-800 dark:text-neutral-100 mb-1 font-semibold tracking-wide uppercase self-start text-left">{contact.label}</span>
              <div className="flex flex-row items-center gap-3 border border-neutral-200 dark:border-white/10 rounded-lg bg-white/80 dark:bg-black/60 px-4 py-2 w-full group transition-all duration-300">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        <motion.span
                          initial={false}
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="flex items-center justify-center border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-background rounded-md p-2 hover:bg-accent transition-all duration-300"
                        >
                          <contact.icon className="w-6 h-6 text-neutral-600 dark:text-neutral-300 hover:text-sky-400 transition-colors duration-300" />
                        </motion.span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      {contact.tooltip}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span className="font-medium text-neutral-800 dark:text-neutral-200 text-xs md:text-sm truncate">
                  {contact.display}
                </span>
                <span
                  className="flex items-center justify-center transition-transform duration-300 ml-0 md:ml-2 rotate-[-45deg] group-hover:rotate-0"
                >
                  <span className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md flex items-center justify-center">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400 group-hover:text-sky-400 transition-colors duration-300"><path d="M5 10h10M10 5l5 5-5 5"/></svg>
                  </span>
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
} 