"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Music, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function AudioPlayer({
  isPlaying,
  onTogglePlay,
  audioRef,
}: AudioPlayerProps) {
  return (
    <>
      {/* Embedded in-page Vinyl record section from Details.png */}
      <section className="flex flex-col items-center justify-center my-8 text-center px-4">
        <div
          onClick={onTogglePlay}
          className="cursor-pointer group flex flex-col items-center"
        >
          <div className="relative w-44 h-44 mb-3 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/vinyl_player.webp"
              alt="Vinyl Record Player"
              fill
              className={`object-contain transition-all ${
                isPlaying ? "animate-spin-slow" : ""
              }`}
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A62053] text-white text-sm font-medium shadow-md hover:bg-[#8e1945] active:scale-95 transition-all"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span>Hentikan Muzik</span>
              </>
            ) : (
              <>
                <Music className="w-4 h-4" />
                <span>Klik untuk mainkan lagu..</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Floating floating pill player on scroll */}
      <div className="fixed bottom-6 right-5 z-40">
        <button
          onClick={onTogglePlay}
          title={isPlaying ? "Senyapkan muzik" : "Mainkan muzik"}
          className={`p-3.5 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${
            isPlaying
              ? "bg-[#A62053] text-white animate-pulse"
              : "bg-white text-[#A62053] border-2 border-[#A62053]"
          }`}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
}
