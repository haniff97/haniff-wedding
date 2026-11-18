"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const targetDate = new Date("2027-01-24T10:00:00+08:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="py-12 px-6 sm:px-8 max-w-md mx-auto text-center flex flex-col items-center select-none"
    >
      <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-[#A62053] mb-4">
        save the Date
      </h2>

      {/* Calendar Graphic with subtle gentle sway */}
      <motion.div
        animate={{ rotate: [-1.2, 1.2, -1.2] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="relative w-28 h-32 mb-3 flex flex-col items-center justify-center drop-shadow-sm"
      >
        <svg
          viewBox="0 0 100 110"
          fill="none"
          stroke="#C87232"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-[#C87232]"
        >
          {/* Calendar top coils */}
          <path d="M28 14 C28 8 36 8 36 14 C36 20 28 20 28 14" />
          <path d="M46 14 C46 8 54 8 54 14 C54 20 46 20 46 14" />
          <path d="M64 14 C64 8 72 8 72 14 C72 20 64 20 64 14" />
          {/* Card outline */}
          <rect x="15" y="16" width="70" height="80" rx="12" />
          <line x1="15" y1="36" x2="85" y2="36" strokeDasharray="2 3" />
        </svg>
        <span className="absolute top-11 font-handwriting text-3xl font-bold text-[#A62053]">
          24
        </span>
      </motion.div>

      <p className="font-handwriting text-2xl font-bold text-[#A62053] mb-8">
        Day, 24 01 2027
      </p>

      {/* Live Countdown Grid with staggered card pop-in */}
      <div className="grid grid-cols-4 gap-3 w-full max-w-xs mb-4">
        {[
          { label: "Hari", val: timeLeft.days },
          { label: "Jam", val: timeLeft.hours },
          { label: "Minit", val: timeLeft.minutes },
          { label: "Saat", val: timeLeft.seconds },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white shadow-sm border border-[#EFA1B4]/40"
          >
            <span className="text-2xl font-bold text-[#A62053] font-handwriting">
              {String(item.val).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-semibold text-[#801B3C]/70 uppercase tracking-wider">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
