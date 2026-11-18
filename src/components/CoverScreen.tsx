"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

interface CoverScreenProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

export default function CoverScreen({
  isOpen,
  onOpen,
  guestName,
}: CoverScreenProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF3ED] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut", delay: 0.6 },
          }}
        >
          {/* Main Container: Mobile 100%, Desktop centered max 460px */}
          <div className="relative w-full max-w-[460px] h-full flex flex-col items-center justify-between py-6 px-4 select-none overflow-hidden">
            
            {/* ══════════════════════════════════════
                TOP CURTAIN VALANCE (Last Layer / Behind Side Curtains: z-10)
                Slides UP on open
            ══════════════════════════════════════ */}
            <motion.div
              className="absolute top-0 left-0 right-0 w-full pointer-events-none z-10"
              initial={{ y: 0 }}
              exit={{
                y: "-110%",
                transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] },
              }}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: "1366 / 459" }}
              >
                <Image
                  src="/images/top_curtain.png"
                  alt="Top Curtain"
                  fill
                  priority
                  className="object-contain object-top"
                />
              </div>
            </motion.div>

            {/* ══════════════════════════════════════
                LEFT CURTAIN GROUP (Upper Left + Lower Left: z-30 in front of top curtain)
                Slides OUT to the left on open
            ══════════════════════════════════════ */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-30"
              initial={{ x: 0 }}
              exit={{
                x: "-105%",
                transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] },
              }}
            >
              {/* Upper Left Curtain */}
              <div
                className="absolute top-0 left-0"
                style={{ width: "30%", aspectRatio: "603 / 954" }}
              >
                <Image
                  src="/images/curtain_ul.png"
                  alt=""
                  fill
                  priority
                  className="object-contain object-top-left"
                />
              </div>

              {/* Lower Left Curtain */}
              <div
                className="absolute bottom-0 left-0"
                style={{ width: "17%", aspectRatio: "231 / 464" }}
              >
                <Image
                  src="/images/curtain_ll.png"
                  alt=""
                  fill
                  priority
                  className="object-contain object-bottom-left"
                />
              </div>
            </motion.div>

            {/* ══════════════════════════════════════
                RIGHT CURTAIN GROUP (Upper Right + Lower Right: z-30 in front of top curtain)
                Slides OUT to the right on open
            ══════════════════════════════════════ */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-30"
              initial={{ x: 0 }}
              exit={{
                x: "105%",
                transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] },
              }}
            >
              {/* Upper Right Curtain */}
              <div
                className="absolute top-0 right-0"
                style={{ width: "29%", aspectRatio: "554 / 931" }}
              >
                <Image
                  src="/images/curtain_ur.png"
                  alt=""
                  fill
                  priority
                  className="object-contain object-top-right"
                />
              </div>

              {/* Lower Right Curtain */}
              <div
                className="absolute bottom-0 right-0"
                style={{ width: "17%", aspectRatio: "231 / 464" }}
              >
                <Image
                  src="/images/curtain_lr.png"
                  alt=""
                  fill
                  priority
                  className="object-contain object-bottom-right"
                />
              </div>
            </motion.div>

            {/* ══════════════════════════════════════
                CENTER CONTENT (Z-20, between curtains)
                Pure vector & typography — ZERO background artifacts
            ══════════════════════════════════════ */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-between py-1">
              
              {/* Top Spacer below Top Curtain Valance */}
              <div
                className="w-full shrink-0 select-none pointer-events-none"
                style={{ height: "clamp(60px, 11vh, 95px)" }}
              />

              {/* 2. "The wedding of" (Curved vector text path, no PNG background) */}
              <div className="w-full max-w-[270px] h-[48px] flex items-center justify-center select-none my-0.5">
                <svg viewBox="0 0 270 48" className="w-full h-full overflow-visible">
                  <path
                    id="weddingCurve"
                    d="M 15,42 Q 135,10 255,42"
                    fill="none"
                  />
                  <text
                    className="fill-[#A62053] font-handwriting text-[27px] font-bold tracking-wider"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    <textPath href="#weddingCurve" startOffset="50%" textAnchor="middle">
                      The wedding of
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* 3. Couple Photo (Clean rounded frame) */}
              <div
                className="relative my-1 drop-shadow-md rounded-2xl overflow-hidden"
                style={{ width: "48%", maxWidth: "205px", aspectRatio: "395 / 339" }}
              >
                <Image
                  src="/images/cover_couple.png"
                  alt="Haniff & Hanini"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* 4. Names: "Haniff & Hanini" (HTML typography, zero background) */}
              <div className="flex flex-col items-center justify-center text-center select-none my-1">
                <h1
                  className="font-handwriting text-5xl sm:text-6xl font-bold text-[#A62053] tracking-wide leading-none"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Haniff
                </h1>
                <span
                  className="font-handwriting text-2xl sm:text-3xl font-bold text-[#A62053] my-0.5 leading-none"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  &amp;
                </span>
                <h1
                  className="font-handwriting text-5xl sm:text-6xl font-bold text-[#A62053] tracking-wide leading-none"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Hanini
                </h1>
              </div>

              {/* 5. Date: "24.1.2027" (HTML typography) */}
              <p
                className="font-handwriting text-2xl sm:text-3xl font-bold tracking-widest text-[#A62053] select-none my-0.5"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                24.1.2027
              </p>

              {/* 6. Guest Badge (if ?to= parameter is in URL) */}
              {guestName && (
                <div className="my-1 bg-white/95 px-4 py-1.5 rounded-xl border border-[#EFA1B4] shadow-sm text-center">
                  <p className="text-[9px] text-[#801B3C]/70 uppercase tracking-wider font-semibold">
                    Kepada
                  </p>
                  <p className="font-handwriting text-lg font-bold text-[#801B3C] max-w-[200px] truncate">
                    {guestName}
                  </p>
                </div>
              )}

              {/* 7. Open Invitation Button (Real styled button, zero background artifacts) */}
              <button
                type="button"
                onClick={onOpen}
                className="relative px-8 py-2.5 bg-[#A62053] hover:bg-[#801B3C] active:scale-95 text-white font-handwriting text-2xl font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 select-none my-1"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                <Mail className="w-5 h-5 stroke-[2.2]" />
                <span>Open Invitation</span>
              </button>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
