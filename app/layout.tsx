import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/current/Navbar";
import Footer from "@/components/current/Footer";
import StickyCTA from "@/components/current/StickyCTA"; // ← add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Ramesh Patil | Family & General Physician in Pune",
  description:
    "Trusted family doctor providing general medical care, consultations, and preventive treatment in Pune. Call or WhatsApp for appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <StickyCTA /> {/* Mobile Call + WhatsApp */}
      </body>
    </html>
  );
}
