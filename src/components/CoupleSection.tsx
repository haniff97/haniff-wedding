"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="py-12 px-6 sm:px-8 max-w-md mx-auto text-center flex flex-col items-center select-none">
      {/* Invitation Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7 }}
        className="font-handwriting text-xl text-[#801B3C] leading-snug px-4 mb-10"
      >
        Dengan memohon rahmat &amp; ridho Allah SWT, kami mengundang
        bapa/ibu/saudara/i untuk hadir pada pernikahan:
      </motion.p>

      {/* Groom & Bride Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="font-handwriting text-4xl md:text-5xl font-bold text-[#A62053] mb-8"
      >
        Groom &amp; Bride
      </motion.h2>

      {/* Groom Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center mb-10"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative w-64 aspect-[903/1129] mb-4 drop-shadow-md cursor-pointer"
        >
          <Image
            src="/images/groom.webp"
            alt="Groom Haniff"
            fill
            className="object-contain"
          />
        </motion.div>
        <h3 className="font-handwriting text-5xl font-bold text-[#A62053] mb-2">
          Haniff
        </h3>
        <p className="font-handwriting text-2xl font-bold text-[#801B3C] leading-snug">
          Bapa (Hamdan bin Mohd Nawawi)
          <br />
          &amp; Ibu (NorHaizan binti Mohameed)
        </p>
      </motion.div>

      {/* Divider with ampersand */}
      <motion.div
        initial={{ scale: 0, rotate: -25 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="my-2 flex items-center justify-center"
      >
        <span className="font-handwriting text-5xl font-bold text-[#A62053]">
          &amp;
        </span>
      </motion.div>

      {/* Bride Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center mb-8"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative w-64 aspect-[903/1129] mb-4 drop-shadow-md cursor-pointer"
        >
          <Image
            src="/images/bride.webp"
            alt="Bride Hanini"
            fill
            className="object-contain"
          />
        </motion.div>
        <h3 className="font-handwriting text-5xl font-bold text-[#A62053] mb-2">
          Hanini
        </h3>
        <p className="font-handwriting text-2xl font-bold text-[#801B3C] leading-snug">
          Bapa (Hasnan bin Abd Hamid)
          <br />
          &amp; Ibu (Hasnah binti Sait)
        </p>
      </motion.div>
    </section>
  );
}
