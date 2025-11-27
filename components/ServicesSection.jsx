"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Syringe, Activity, SmilePlus } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "General Consultation",
      desc: "Comprehensive check-ups and medical advice for all age groups.",
      icon: <Stethoscope size={40} className="text-blue-600" />,
    },
    {
      title: "Diabetes Management",
      desc: "Accurate treatment and lifestyle guidance for long-term control.",
      icon: <Syringe size={40} className="text-blue-600" />,
    },
    {
      title: "Heart Health",
      desc: "Diagnosis & treatment for cardiac-related symptoms and conditions.",
      icon: <HeartPulse size={40} className="text-blue-600" />,
    },
    {
      title: "Infection Treatment",
      desc: "Quick and effective treatment for fever, cold, flu, and infections.",
      icon: <Activity size={40} className="text-blue-600" />,
    },
    {
      title: "Skin & Allergy Care",
      desc: "Treatment for rashes, allergies, skin infections, and irritations.",
      icon: <SmilePlus size={40} className="text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-blue-100"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
