"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, CalendarPlus } from "lucide-react";

export default function EventDetails() {
  const address =
    "Dewan Peladang Panji, Jalan Sri Panji, Kampung Belukar Lanjut Kumumin, 16100 Kota Bharu, Kelantan";
  
  const googleMapsUrl = "https://maps.app.goo.gl/21Hj2GE5knw1Ym5KA";

  const handleAddToCalendar = () => {
    // Generate Google Calendar Event Link
    const title = encodeURIComponent("Walimatulurus / Majlis Resepsi Haniff & Hanini");
    const details = encodeURIComponent(
      "Majlis Perkahwinan Haniff & Hanini #HaniNeedAHaniff\nLokasi: " + address
    );
    const location = encodeURIComponent(address);
    // 24 Jan 2027 10:00 to 16:00 MYT (UTC+8) -> 20270124T020000Z to 20270124T080000Z
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270124T020000Z/20270124T080000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, "_blank");
  };

  return (
    <motion.section
      id="event"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="py-12 px-6 sm:px-8 max-w-md mx-auto text-center flex flex-col items-center select-none"
    >
      {/* House Icon with gentle floating animation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative w-52 h-52 sm:w-56 sm:h-56 mb-2 drop-shadow-sm"
      >
        <Image
          src="/images/house.png"
          alt="House Illustration"
          fill
          className="object-contain"
        />
      </motion.div>

      <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-[#A62053] mb-4">
        Resepsi
      </h2>

      <p className="font-handwriting text-2xl font-bold text-[#801B3C] mb-1">
        Ahad, 24 Januari 2027
      </p>
      <p className="font-handwriting text-xl text-[#801B3C] font-semibold mb-6">
        10.00 Pagi &ndash; 4.00 Petang
      </p>

      {/* Address Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-[#EFA1B4]/50 shadow-sm max-w-sm mb-6"
      >
        <MapPin className="w-6 h-6 text-[#A62053] mx-auto mb-2" />
        <p className="font-handwriting text-2xl text-[#801B3C] leading-snug">
          Dewan Peladang Panji, Jalan Sri Panji, Kampung Belukar Lanjut Kumumin,
          16100 Kota Bharu, Kelantan
        </p>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#A62053] text-white font-medium shadow-md hover:bg-[#8e1945] hover:scale-[1.02] active:scale-95 transition-all text-base"
        >
          <MapPin className="w-5 h-5" />
          <span>Google Maps</span>
        </a>

        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-[#801B3C] hover:bg-white/60 active:scale-95 text-sm font-semibold transition-all mt-1 cursor-pointer"
        >
          <CalendarPlus className="w-4 h-4" />
          <span>Simpan Ke Kalendar</span>
        </button>
      </div>
    </motion.section>
  );
}
