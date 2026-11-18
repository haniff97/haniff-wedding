"use client";

import React, { useState } from "react";
import { Gift, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

export default function GiftSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const bankAccounts = [
    {
      bank: "Maybank",
      accountName: "Haniff bin Hamdan",
      accountNumber: "162384910284",
    },
    {
      bank: "Bank Islam",
      accountName: "Hanini binti Hasnan",
      accountNumber: "12038020918273",
    },
  ];

  const handleCopy = (accNum: string, bank: string) => {
    navigator.clipboard.writeText(accNum);
    setCopiedBank(bank);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  return (
    <section className="py-8 px-4 max-w-md mx-auto text-center flex flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full inline-flex items-center justify-between p-5 rounded-2xl bg-white border border-[#EFA1B4]/50 shadow-sm hover:border-[#A62053] transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#A62053] group-hover:scale-105 transition-transform">
            <Gift className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="font-handwriting text-2xl font-bold text-[#A62053] block leading-none mb-1">
              Hadiah &amp; Salam Kaut
            </span>
            <span className="text-xs text-stone-500">
              Titipan tanda ingatan buat mempelai
            </span>
          </div>
        </div>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#A62053]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-stone-400 group-hover:text-[#A62053]" />
        )}
      </button>

      {isOpen && (
        <div className="w-full mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          {bankAccounts.map((item) => (
            <div
              key={item.bank}
              className="bg-white p-4 rounded-2xl border border-stone-200 text-left shadow-sm flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#A62053] uppercase tracking-wider block">
                  {item.bank}
                </span>
                <p className="font-mono text-base font-semibold text-stone-800 my-0.5">
                  {item.accountNumber}
                </p>
                <span className="text-xs text-stone-500">{item.accountName}</span>
              </div>

              <button
                onClick={() => handleCopy(item.accountNumber, item.bank)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 active:scale-95 transition-all"
              >
                {copiedBank === item.bank ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
