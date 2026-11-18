"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-0 pb-12 px-4 max-w-md mx-auto text-center overflow-hidden select-none">
      
      {/* ── Upper Curtains Framing Top ── */}
      <div
        className="absolute top-0 left-0 pointer-events-none z-0"
        style={{ width: "40%", aspectRatio: "603 / 954" }}
      >
        <Image
          src="/images/curtain_ul.webp"
          alt=""
          fill
          priority
          className="object-contain object-top-left"
        />
      </div>
      <div
        className="absolute top-0 right-0 pointer-events-none z-0"
        style={{ width: "39%", aspectRatio: "554 / 931" }}
      >
        <Image
          src="/images/curtain_ur.webp"
          alt=""
          fill
          priority
          className="object-contain object-top-right"
        />
      </div>

      {/* ── Top Chandelier / Lamp ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 -mt-3 mb-0.5"
        style={{ width: "46%", maxWidth: "195px", aspectRatio: "548 / 621" }}
      >
        <Image
          src="/images/top_chandelier.webp"
          alt="Golden Chandelier"
          fill
          priority
          className="object-contain object-top"
        />
      </motion.div>

      {/* ── Blue Window Frame with Couple Photo & Doodles ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 my-1 flex items-center justify-center"
        style={{ width: "46%", maxWidth: "195px", aspectRatio: "732 / 638" }}
      >
        {/* Yellow Star Doodle (twinkling/rotating gently) */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="absolute -top-3 -left-3 w-8 h-8 pointer-events-none z-20"
        >
          <Image
            src="/images/doodle_star.webp"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Window Illustration */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full drop-shadow-md cursor-pointer"
        >
          <Image
            src="/images/closing_window.webp"
            alt="Haniff and Hanini Window"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Sun Doodle (subtle pulse) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -bottom-2 -right-3 w-7 h-7 pointer-events-none z-20 opacity-80"
        >
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full stroke-[#4A90E2] stroke-2">
            <circle cx="16" cy="16" r="6" />
            <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── Thank You Message ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xs mx-auto my-2 px-2"
      >
        <p className="font-handwriting text-xl sm:text-2xl text-[#801B3C] leading-snug mb-3">
          Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan
          hadir dalam hari bahagia kami. Terimakasih atas segala ucapan, doa, dan
          perhatian yang diberikan.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl font-bold text-[#A62053]">
          Sampai jumpa di hari pernikahan kami!
        </p>
      </motion.div>

      {/* ── Names with Flower & Sparkles Doodles ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center mt-2 mb-6"
      >
        <div className="flex items-center justify-center gap-2">
          {/* Purple Flower Doodle (gentle sway) */}
          <motion.div
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-8 h-8 pointer-events-none"
          >
            <Image
              src="/images/doodle_flower.webp"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>

          <h3
            className="font-handwriting text-4xl sm:text-5xl font-bold text-[#A62053] tracking-wide"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Haniff &amp; Hanini
          </h3>

          {/* Pink Sparkles Doodle (gentle pulse) */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="relative w-7 h-7 pointer-events-none"
          >
            <Image
              src="/images/doodle_sparkle.webp"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Direct Text Hashtag */}
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="font-handwriting text-2xl sm:text-3xl font-bold text-[#A62053] mt-2 select-text cursor-default"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          #HaniNeedAHaniff
        </motion.p>
      </motion.div>

      {/* ── Lower Curtains ── */}
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
    </section>
  );
}
