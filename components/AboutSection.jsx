"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - TITLE + CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Dr. Rohan Mate</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Dr. Rohan Mate is a highly trusted and experienced medical professional
            known for his compassionate approach and accurate diagnosis.
            With a strong dedication to patient care, he believes in providing
            treatment that is transparent, reliable, and tailored to each patient’s needs.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With years of experience in medical practice, Dr. Mate focuses on delivering
            the best healthcare solutions while maintaining a friendly and approachable
            environment for patients of all age groups.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-5 border rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-2xl font-bold text-blue-600">8+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div className="p-5 border rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-2xl font-bold text-blue-600">1000+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>

            <div className="p-5 border rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-2xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600">Special Treatments</p>
            </div>

            <div className="p-5 border rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-2xl font-bold text-blue-600">5⭐</h3>
              <p className="text-gray-600">Patient Rating</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-[300px] md:w-[400px] h-[420px] rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white">
            <img
              src="/doctor-about.png" // Replace with your real image
              className="w-full h-full object-cover"
              alt="About Doctor"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
