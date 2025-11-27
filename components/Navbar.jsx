"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/70 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="text-3xl font-bold text-blue-600 tracking-tight">
            Dr. Rohan Mate
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          {["Home", "About", "Services", "Testimonials"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="relative group cursor-pointer"
              >
                {item}
                {/* underline animation */}
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}

          <motion.a
            href="https://wa.me/919604795870"
            target="_blank"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
            className="px-5 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 hover:shadow-lg transition-all"
          >
            Book Appointment
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800">
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu (animated slide) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6 md:hidden"
      >
        <div className="flex justify-end mb-6">
          <X size={28} onClick={() => setOpen(false)} />
        </div>

        <div className="flex flex-col gap-6 text-gray-700 text-lg font-medium">
          {["Home", "About", "Services", "Testimonials"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 transition-all"
              >
                {item}
              </a>
            )
          )}

          <a
            href="https://wa.me/919604795870"
            target="_blank"
            className="mt-4 px-5 py-3 bg-green-500 text-white text-center rounded-full"
          >
            Book Appointment
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
