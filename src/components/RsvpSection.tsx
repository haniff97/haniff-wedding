"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Send } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  status: "Hadir" | "Tidak Hadir" | "Belum Pasti";
  pax: number;
  message: string;
  createdAt: string;
}

export default function RsvpSection({ defaultGuestName }: { defaultGuestName?: string }) {
  const [name, setName] = useState(defaultGuestName || "");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"Hadir" | "Tidak Hadir" | "Belum Pasti">("Hadir");
  const [pax, setPax] = useState<number>(2);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoadingWishes, setIsLoadingWishes] = useState(true);

  // Fetch real wishes from backend on load
  useEffect(() => {
    fetch("/api/rsvp")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const loaded: Wish[] = data.map((item: any) => ({
            id: item.id || String(Math.random()),
            name: item.name,
            status: item.status || "Hadir",
            pax: item.pax || 0,
            message: item.message || "",
            createdAt: item.date ? `${item.date} ${item.time || ""}` : "Baru tadi",
          }));
          setWishes(loaded);
        }
      })
      .catch((err) => {
        console.error("Gagal memuatkan ucapan:", err);
      })
      .finally(() => {
        setIsLoadingWishes(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    try {
      // Fire festive confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#A62053", "#EFA1B4", "#D4A359", "#FAF3ED"],
      });

      const newWish: Wish = {
        id: Date.now().toString(),
        name: name.trim(),
        status,
        pax: status === "Hadir" ? pax : 0,
        message: message.trim(),
        createdAt: "Baru tadi",
      };

      // Send to server API to save in JSON and Excel (.csv)
      try {
        await fetch("/api/rsvp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            phone: phone.trim(),
            status,
            pax: status === "Hadir" ? pax : 0,
            message: message.trim(),
          }),
        });
      } catch (err) {
        console.error("Ralat menyimpan ke server:", err);
      }

      setWishes([newWish, ...wishes]);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-12 px-6 sm:px-8 max-w-md mx-auto text-center flex flex-col items-center select-none">
      <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-[#A62053] mb-2">
        Pengesahan Kehadiran &amp; Ucapan
      </h2>
      <p className="font-handwriting text-xl text-[#801B3C] mb-8">
        Sila sahkan kehadiran anda sebelum 10 Januari 2027
      </p>

      {/* RSVP Form Card */}
      <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EFA1B4]/40 text-left mb-12">
        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-[#A62053] mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-handwriting text-3xl font-bold text-[#A62053] mb-2">
              Terima Kasih!
            </h3>
            <p className="text-sm text-[#801B3C] mb-6 max-w-xs">
              Pengesahan kehadiran dan ucapan anda telah berjaya disimpan. Kami amat berbesar hati menantikan kehadiran anda ke Majlis Kesyukuran ini!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-semibold text-[#A62053] underline hover:opacity-80"
            >
              Hantar respons lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#801B3C] mb-1.5">
                Nama Penuh *
              </label>
              <input
                type="text"
                required
                placeholder="cth: Ahmad Zulkifli"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#A62053] bg-stone-50/50 text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#801B3C] mb-1.5">
                No. Telefon (WhatsApp)
              </label>
              <input
                type="tel"
                placeholder="cth: 012-3456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#A62053] bg-stone-50/50 text-sm"
              />
            </div>

            {/* Attendance Status */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#801B3C] mb-2">
                Status Kehadiran *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Hadir", "Tidak Hadir", "Belum Pasti"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setStatus(opt)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                      status === opt
                        ? "bg-[#A62053] text-white border-[#A62053] shadow-sm"
                        : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Number of Pax (only if Hadir) */}
            {status === "Hadir" && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#801B3C] mb-2">
                  Jumlah Kehadiran (Bilangan Tetamu)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPax(num)}
                      className={`flex-1 py-2 rounded-xl text-sm font-semibold border transition-all ${
                        pax === num
                          ? "bg-[#A62053] text-white border-[#A62053]"
                          : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Wishes / Ucapan */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#801B3C] mb-1.5">
                Ucapan &amp; Doa Buat Mempelai
              </label>
              <textarea
                rows={3}
                placeholder="Tuliskan ucapan tahniah atau doa anda di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#A62053] bg-stone-50/50 text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#A62053] text-white font-medium shadow-md hover:bg-[#8e1945] active:scale-95 transition-all text-sm disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Menghantar..." : "Hantar Pengesahan & Ucapan"}</span>
            </button>
          </form>
        )}
      </div>

      {/* Wishes Wall (Message Board) */}
      <div className="w-full text-left">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-handwriting text-3xl font-bold text-[#A62053]">
            Ucapan Tetamu ({wishes.length})
          </h3>
          <span className="text-xs text-[#801B3C]/70">Wishes Wall</span>
        </div>

        {isLoadingWishes ? (
          <div className="py-6 text-center text-xs text-[#801B3C]/60">
            Memuatkan ucapan...
          </div>
        ) : wishes.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#EFA1B4]/30 text-center">
            <p className="font-handwriting text-2xl text-[#801B3C]">
              Belum ada ucapan lagi.
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Jadilah yang pertama mengirimkan ucapan &amp; doa buat mempelai! ✨
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 p-4 rounded-2xl border border-[#EFA1B4]/30 shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-sm text-[#482834]">
                    {item.name}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.status === "Hadir"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : item.status === "Tidak Hadir"
                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {item.status} {item.pax > 0 && `(${item.pax} pax)`}
                  </span>
                </div>
                {item.message && (
                  <p className="font-handwriting text-xl text-[#801B3C] leading-relaxed">
                    &ldquo;{item.message}&rdquo;
                  </p>
                )}
                <span className="block text-[10px] text-stone-400 mt-2">
                  {item.createdAt}
                </span>
              </div>
            ))}
          </div>
        )}


      </div>
    </section>
  );
}
