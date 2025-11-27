"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mt-3"
        >
          Contact us for appointments, queries, or medical assistance.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 mt-14">
          
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5">
              <p className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 96047 95870</span>
              </p>

              <p className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>doctor@example.com</span>
              </p>

              <p className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Shivaji Nagar, Pune, Maharashtra, India</span>
              </p>
            </div>

            {/* Contact Form */}
            <form className="mt-10 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1398257610193!2d73.84149977465903!3d18.56292546888086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8350f7df65%3A0x6c3c3b31dadd76e0!2sShivaji%20Nagar%2C%20Pune!5e0!3m2!1sen!2sin!4v170000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
