"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Nav from "./Nav";

export default function Header() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const HIDE_AFTER_SCROLL_Y = 200;
  const SHOW_ON_SCROLL_UP_DELTA = 10;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = lastScrollY - currentScrollY;

        if (currentScrollY > HIDE_AFTER_SCROLL_Y && scrollDelta < 0) {
          setIsBannerVisible(false);
        } else if (scrollDelta > SHOW_ON_SCROLL_UP_DELTA) {
          setIsBannerVisible(true);
        }

        setLastScrollY(currentScrollY);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full "
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Banner isVisible={isBannerVisible} />
      <Nav />
    </motion.header>
  );
} 