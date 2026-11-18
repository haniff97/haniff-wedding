"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QuranVerse() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 px-6 max-w-lg mx-auto text-center flex flex-col items-center select-none"
    >
      {/* Candle illustration with gentle float animation */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="relative w-16 sm:w-20 aspect-[208/382] mb-6 drop-shadow-sm"
      >
        <Image
          src="/images/candle.png"
          alt="Candle"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* Quote */}
      <blockquote className="font-handwriting text-xl md:text-2xl text-[#801B3C] leading-relaxed italic mb-4">
        &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
      </blockquote>

      <p className="font-handwriting text-lg md:text-xl font-bold text-[#A62053] tracking-wide">
        QS Ar-Rum 21
      </p>
    </motion.section>
  );
}
