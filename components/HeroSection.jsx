"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full pt-28 pb-20 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Health,  
            <span className="text-blue-600 block">
              Our Priority.
            </span>
          </h1>

          <p className="text-gray-600 md:text-lg leading-relaxed">
            Meet <span className="font-semibold text-blue-700">Dr. Rohan Mate</span>,  
            a trusted medical professional dedicated to providing  
            compassionate, expert care for you and your family.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.me/919604795870"
              target="_blank"
              className="px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow hover:bg-green-600 transition-all"
            >
              Book Appointment
            </a>

            <a
              href="#services"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-all"
            >
              View Services
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] md:w-[380px] h-[380px] rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white">
            <Image
              src="/Herodoc.png" 
              alt="Doctor"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
