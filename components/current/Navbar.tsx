"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Clinic Name */}
          <div className="text-xl font-semibold text-blue-700 tracking-wide">
            Demo Doctor Clinic
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
            <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="#about" className="hover:text-blue-600 transition">About</Link>
            <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border text-gray-700"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 flex flex-col gap-4 text-gray-700 font-medium">
            <Link onClick={() => setOpen(false)} href="#home">Home</Link>
            <Link onClick={() => setOpen(false)} href="#services">Services</Link>
            <Link onClick={() => setOpen(false)} href="#about">About</Link>
            <Link onClick={() => setOpen(false)} href="#contact">Contact</Link>

            <div className="flex gap-3 pt-2">
              <a
                href="tel:+919999999999"
                className="flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-full border border-blue-600 text-blue-600"
              >
                <Phone size={16} />
                Call
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-full bg-green-500 text-white"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
