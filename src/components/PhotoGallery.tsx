"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ZoomIn } from "lucide-react";

export default function PhotoGallery() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="py-12 px-4 max-w-lg mx-auto text-center flex flex-col items-center select-none"
    >
      <div className="flex items-center gap-2 mb-8">
        <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-[#A62053]">
          Gallery
        </h2>
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Sparkles className="w-6 h-6 text-[#D8728D]" />
        </motion.div>
      </div>

      {/* Canva Gallery Showcase */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpenModal(true)}
        className="relative w-full aspect-[1340/2707] rounded-3xl overflow-hidden shadow-sm cursor-pointer group transition-all duration-300 hover:shadow-xl"
      >
        <Image
          src="/images/gallery_full.webp"
          alt="Haniff & Hanini Photo Gallery"
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full text-xs font-semibold text-[#801B3C] flex items-center gap-2 shadow-lg">
            <ZoomIn className="w-4 h-4 text-[#A62053]" />
            <span>Lihat Foto Penuh</span>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal with Animated Fade & Zoom */}
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenModal(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto cursor-zoom-out"
          >
            <button
              onClick={() => setIsOpenModal(false)}
              className="fixed top-5 right-5 text-white/90 hover:text-white p-2.5 rounded-full bg-white/20 hover:bg-white/30 z-50 transition-all cursor-pointer"
              title="Tutup"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full aspect-[1340/2707] my-auto rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/gallery_full.webp"
                alt="Haniff & Hanini Photo Gallery Full"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
