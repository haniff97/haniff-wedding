import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Majlis Kesyukuran Haniff & Hanini #HaniNeedAHaniff",
  description: "Majlis Kesyukuran Haniff & Hanini - Ahad, 24 Januari 2027",
  openGraph: {
    title: "Majlis Kesyukuran Haniff & Hanini",
    description: "Undangan Majlis Kesyukuran - Ahad, 24 Januari 2027 | Kota Bharu, Kelantan",
    images: ["/images/cover_couple.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#FAF3ED] text-[#482834]">
        {children}
      </body>
    </html>
  );
}
