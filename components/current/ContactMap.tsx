"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

/* 🔧 CLINIC CONFIG (CHANGE ONLY THIS FOR NEW CLIENT) */
const CLINIC = {
  name: "Demo Doctor Clinic",
  phone: "+919604795870",
  email: "contact@democlinic.com",
  address: "Sant Tukaram Nagar, Pune, Maharashtra",
  whatsapp: "919604795870",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6!2d73.8029579!3d18.581702",
};

export default function ContactMap() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const whatsappMsg = `Hello Doctor,%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(
      `https://wa.me/${CLINIC.whatsapp}?text=${whatsappMsg}`,
      "_blank"
    );

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    form.reset();
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Visit Our Clinic</h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <MapPin className="text-blue-600" />
                <span>{CLINIC.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="text-blue-600" />
                <span>{CLINIC.phone}</span>
              </div>
              <div className="flex gap-3">
                <Mail className="text-blue-600" />
                <span>{CLINIC.email}</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
 <iframe
  title="Shree Clinic Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6!2d73.8029579!3d18.581702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8cf6fb70839:0xa9f5388321d37aea!2sShree%20Clinic%20Sant%20Tukaram%20Nagar%20Lane%20No.1!5e0!3m2!1sen!2sin!4v1730000000000"
  className="w-full h-72 border-0 rounded-xl shadow-lg"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8 relative"
          >
            <h3 className="text-2xl font-bold mb-6">Send Enquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700">
                Send on WhatsApp
              </button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center rounded-3xl"
              >
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h4 className="text-xl font-semibold">Thank You!</h4>
                <p className="text-gray-600">We’ll contact you shortly.</p>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
