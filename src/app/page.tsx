"use client";

import React, { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CoverScreen from "@/components/CoverScreen";
import HeroDetails from "@/components/HeroDetails";
import QuranVerse from "@/components/QuranVerse";
import AudioPlayer from "@/components/AudioPlayer";
import CoupleSection from "@/components/CoupleSection";
import CountdownSection from "@/components/CountdownSection";
import EventDetails from "@/components/EventDetails";
import PhotoGallery from "@/components/PhotoGallery";
import RsvpSection from "@/components/RsvpSection";
import ClosingSection from "@/components/ClosingSection";
import ScrollIndicator from "@/components/ScrollIndicator";

function WeddingContent() {
  const searchParams = useSearchParams();
  const guestName =
    searchParams.get("to") || searchParams.get("guest") || undefined;

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch(() => setIsPlayingMusic(false));
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF3ED] flex justify-center items-start selection:bg-[#EFA1B4] selection:text-[#6D1A36]">
      {/* Background audio element */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://cdn.pixabay.com/download/audio/2022/05/16/audio_c9769351e2.mp3?filename=acoustic-wedding-111003.mp3"
      />

      {/* Main Container: Seamless mobile-first experience, no artificial card border/frame */}
      <main className="w-full max-w-[460px] min-h-screen bg-[#FAF3ED] relative overflow-x-hidden flex flex-col">
        {/* Cover / Splash Screen with curtains */}
        <CoverScreen
          isOpen={isInvitationOpen}
          onOpen={handleOpenInvitation}
          guestName={guestName}
        />

        {/* Invitation Content (scrollable after opening) */}
        <div
          className={`transition-opacity duration-1000 ${
            isInvitationOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none select-none h-0 overflow-hidden"
          }`}
        >
          <ScrollIndicator />
          <HeroDetails />
          <QuranVerse />
          <AudioPlayer
            isPlaying={isPlayingMusic}
            onTogglePlay={toggleMusic}
            audioRef={audioRef}
          />
          <CoupleSection />
          <CountdownSection />
          <EventDetails />
          <PhotoGallery />
          <RsvpSection defaultGuestName={guestName} />
          <ClosingSection />
        </div>
      </main>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF3ED]" />}>
      <WeddingContent />
    </Suspense>
  );
}
