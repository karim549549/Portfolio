"use client";

import ThemeSwitch from "./ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Contact, FileText } from "lucide-react";
import Image from "next/image";
import proImage from '@/assets/proImage.jpg';
import { Tooltip, TooltipTrigger , TooltipProvider , TooltipContent } from "@/components/ui/tooltip";
import React from "react";

const NavComponent = function Nav() {
  return (
    <nav className="w-full flex items-center justify-center p-1 bg-white shadow-md dark:bg-transparent dark:backdrop-blur-md dark:shadow-md relative">
      <div className="container max-auto max-w-7xl flex items-center p-1 justify-between relative z-10">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Avatar className="cursor-pointer hover:scale-105 transition-transform duration-200">
                <AvatarImage className="w-10 h-10 rounded-full" src={proImage.src} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-transparent sm:max-w-xl shadow-none">
              <DialogTitle className="sr-only">User Profile Image</DialogTitle>
              <Image 
                src={proImage} 
                alt="User Profile" 
                className="w-full h-auto object-cover rounded-full"
              />
            </DialogContent>
          </Dialog>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <ThemeSwitch/>
          </li>
          <li>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="cursor-pointer w-10 h-10 rounded-md border border-border bg-background hover:bg-accent transition-all duration-300 ease-in-out flex items-center justify-center">
                    <FileText className="w-4 h-4 text-slate-700 dark:text-white" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  <p>View CV</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <hr className="h-8 border-l border-zinc-700/80 dark:border-white/20" />
          <li>
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="cursor-pointer w-10 h-10 rounded-md border border-border bg-background hover:bg-accent transition-all duration-300 ease-in-out flex items-center justify-center">
                      <Contact className="w-4 h-4 text-slate-700 dark:text-white" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    <p> Contact Now   </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(NavComponent); 