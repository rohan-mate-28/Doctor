"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section className="py-20 bg-white" id="appointment">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Book Your Appointment <br />
            with <span className="text-blue-600">Dr. Rohan Mate</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-md">
            Get expert medical care with a simple and quick appointment process. 
            Choose your preferred date & time or call directly for urgent needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all text-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>

            <a
              href="tel:9604795870"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="/doctor-appointment.png"
            alt="Doctor Appointment"
            className="w-full max-w-md rounded-3xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
