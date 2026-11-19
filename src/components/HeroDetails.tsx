"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export default function HeroDetails() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight * 0.95, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-between py-6 px-4 bg-[#FAF3ED] overflow-hidden select-none">
      {/* ── Upper Curtains (framing top left and right) ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 pointer-events-none z-0"
        style={{ width: "42%", aspectRatio: "603 / 954" }}
      >
        <Image
          src="/images/curtain_ul.webp"
          alt=""
          fill
          priority
          className="object-contain object-top-left"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 right-0 pointer-events-none z-0"
        style={{ width: "41%", aspectRatio: "554 / 931" }}
      >
        <Image
          src="/images/curtain_ur.webp"
          alt=""
          fill
          priority
          className="object-contain object-top-right"
        />
      </motion.div>

      {/* ── Center Content ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-4 select-none"
      >
        {/* "Majlis Kesyukuran" (Curved vector text path) */}
        <div className="w-full max-w-[250px] h-[46px] flex items-center justify-center mb-2">
          <svg viewBox="0 0 250 46" className="w-full h-full overflow-visible">
            <path
              id="heroWeddingCurve"
              d="M 12,40 Q 125,8 238,40"
              fill="none"
            />
            <text
              className="fill-[#A62053] font-handwriting text-[25px] font-bold tracking-wider"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              <textPath href="#heroWeddingCurve" startOffset="50%" textAnchor="middle">
                Majlis Kesyukuran
              </textPath>
            </text>
          </svg>
        </div>

        {/* Groom & Bride Names */}
        <div className="flex flex-col items-center justify-center text-center my-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-handwriting text-6xl sm:text-7xl font-bold text-[#A62053] tracking-wide leading-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Haniff
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="font-handwriting text-4xl sm:text-5xl font-bold text-[#A62053] my-2 leading-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            &amp;
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-handwriting text-6xl sm:text-7xl font-bold text-[#A62053] tracking-wide leading-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Hanini
          </motion.h1>
        </div>

        {/* Date: "Ahad, 24 Januari 2027" */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="font-handwriting text-2xl sm:text-3xl font-bold text-[#A62053] tracking-wide mt-6 mb-2"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Ahad, 24 Januari 2027
        </motion.p>
      </motion.div>

      {/* ── Lower Curtain Corners ── */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none z-0"
        style={{ width: "24%", aspectRatio: "231 / 464" }}
      >
        <Image
          src="/images/curtain_ll.webp"
          alt=""
          fill
          priority
          className="object-contain object-bottom-left"
        />
      </div>
      <div
        className="absolute bottom-0 right-0 pointer-events-none z-0"
        style={{ width: "24%", aspectRatio: "231 / 464" }}
      >
        <Image
          src="/images/curtain_lr.webp"
          alt=""
          fill
          priority
          className="object-contain object-bottom-right"
        />
      </div>

      {/* ── Bottom Scroll Indicator Button (circle with bouncing double chevron) ── */}
      <motion.div
        className="relative z-10 mb-4 sm:mb-6 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-handwriting text-base font-bold text-[#A62053]/80 mb-1 tracking-wider group-hover:text-[#A62053] transition-colors">
          Tatal ke bawah
        </span>
        <button
          onClick={scrollToNext}
          title="Tatal ke bawah"
          className="w-12 h-12 rounded-full border-2 border-[#A62053] bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#A62053] hover:bg-[#A62053] hover:text-white group-hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
        >
          <ChevronsDown className="w-6 h-6 stroke-[2.2]" />
        </button>
      </motion.div>
    </section>
  );
}
