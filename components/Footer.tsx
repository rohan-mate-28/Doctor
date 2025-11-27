"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1A2F] text-white py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10"
      >

        {/* Logo / Brand */}
        <div>
          <h3 className="text-2xl font-bold">Dr. Rohan Mate</h3>
          <p className="mt-3 text-gray-300">
            Providing trusted medical care with compassion and dedication.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              +91 96047 95870
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              doctor@example.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              Shivaji Nagar, Pune, Maharashtra
            </li>
          </ul>
        </div>

        {/* Quick Note */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Clinic Hours</h4>
          <p className="text-gray-300">
            Monday – Saturday: 10 AM – 7 PM <br />
            Sunday: Closed
          </p>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6"
      >
        © {new Date().getFullYear()} Dr. Rohan Mate. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
