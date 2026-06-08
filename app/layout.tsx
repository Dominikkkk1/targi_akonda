import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Akonda | Wystawa Maszyn – Siemianowice Śląskie 25–26 Czerwca",
  description:
    "Zapraszamy na wystawę maszyn introligatorskich Akonda w Siemianowicach Śląskich. Plotery iEcho PK, gilotyny, foliarki i maszyny introligatorskie. 25–26 czerwca 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="overflow-x-hidden">
      <body className={`${montserrat.variable} ${montserrat.className} antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
