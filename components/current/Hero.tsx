"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
              10+ Years of Medical Experience
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Dr. Demo Name <br />
              <span className="text-blue-600">Family & General Physician</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-xl">
              Providing trusted, compassionate, and affordable healthcare for
              families. Your health is our priority.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition"
              >
                <MessageCircle size={18} />
                WhatsApp Appointment
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl"></div>
            <img
              src="/doctor-about.png"
              alt="Doctor"
              className="w-72 md:w-96 rounded-3xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
