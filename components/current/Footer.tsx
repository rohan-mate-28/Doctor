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
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">Dr. Ramesh Patil</h3>
          <p className="mt-3 text-gray-300">
            Providing trusted medical care with compassion and dedication.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Emergency consultation available on call
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href="tel:+919604795870" className="hover:text-white">
                + 91 96047 95870
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:contact@democlinic.com" className="hover:text-white">
                contact@democlinic.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              Shivaji Nagar, Pune, Maharashtra
            </li>
          </ul>
        </div>

        {/* Timings */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Clinic Hours</h4>
          <p className="text-gray-300">
            Monday – Saturday: 10 AM – 7 PM <br />
            Sunday: Closed
          </p>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Demo Clinic. All Rights Reserved.
      </div>
    </footer>
  );
}
