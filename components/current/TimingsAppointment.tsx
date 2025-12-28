"use client";

import { motion } from "framer-motion";
import { Clock, CalendarCheck, Phone, MessageCircle } from "lucide-react";

export default function TimingsAppointment() {
  return (
    <section id="appointment" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Clinic Timings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Clinic Timings</h3>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li className="flex justify-between border-b pb-2">
                <span>Monday – Saturday</span>
                <span className="font-medium">9:00 AM – 1:00 PM</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Evening</span>
                <span className="font-medium">5:00 PM – 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-red-500">Closed</span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              * Emergency consultation available on call
            </p>
          </motion.div>

          {/* Appointment CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              <CalendarCheck size={16} /> Easy Appointment
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Book Your Appointment Today
            </h3>

            <p className="text-gray-600 text-lg max-w-xl">
              Avoid waiting time. Call or WhatsApp us to schedule your visit with our doctor.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition"
              >
                <MessageCircle size={18} /> WhatsApp Appointment
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
