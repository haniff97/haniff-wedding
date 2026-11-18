"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavDot {
  id: string;
  label: string;
}

const navDots: NavDot[] = [
  { id: "hero", label: "Mempelai" },
  { id: "event", label: "Resepsi" },
  { id: "rsvp", label: "RSVP" },
];

export default function ScrollIndicator() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      const heroEl = document.getElementById("hero");
      const eventEl = document.getElementById("event");
      const rsvpEl = document.getElementById("rsvp");

      const rsvpTop = rsvpEl ? rsvpEl.offsetTop : Infinity;
      const eventTop = eventEl ? eventEl.offsetTop : Infinity;

      if (scrollPos >= rsvpTop) {
        setActiveId("rsvp");
      } else if (scrollPos >= eventTop) {
        setActiveId("event");
      } else {
        setActiveId("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-1.5 sm:right-2 md:right-[calc(50vw-230px-20px)] top-1/2 -translate-y-1/2 z-40 select-none pointer-events-auto">
      <div className="flex flex-col items-center gap-3.5 py-1">
        {navDots.map((dot) => {
          const isActive = activeId === dot.id;
          return (
            <div
              key={dot.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredId(dot.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Tooltip Label to the left */}
              <AnimatePresence>
                {hoveredId === dot.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 6, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-6 px-2.5 py-1 rounded-lg bg-[#801B3C] text-white text-[11px] font-medium tracking-wide shadow-md whitespace-nowrap pointer-events-none"
                  >
                    {dot.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dot Button */}
              <button
                type="button"
                onClick={() => scrollToSection(dot.id)}
                title={dot.label}
                aria-label={`Pergi ke ${dot.label}`}
                className="relative p-1 flex items-center justify-center cursor-pointer group focus:outline-none"
              >
                {isActive ? (
                  <motion.div
                    layoutId="activeDot"
                    className="w-2.5 h-2.5 rounded-full bg-[#A62053] ring-2 ring-[#EFA1B4] shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[#D8728D]/50 drop-shadow-sm group-hover:bg-[#A62053] group-hover:scale-125 transition-all" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
