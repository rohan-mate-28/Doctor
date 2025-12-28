"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Baby, Activity, Syringe, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: "General Checkup",
    desc: "Comprehensive health checkups for all age groups."
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Diabetes & BP Care",
    desc: "Regular monitoring and treatment for diabetes and blood pressure."
  },
  {
    icon: <Baby size={28} />,
    title: "Child Care",
    desc: "Gentle and trusted care for infants and children."
  },
  {
    icon: <Activity size={28} />,
    title: "Fever & Infection",
    desc: "Quick diagnosis and treatment for fever and infections."
  },
  {
    icon: <Syringe size={28} />,
    title: "Vaccination",
    desc: "Safe and timely vaccinations for all age groups."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Preventive Care",
    desc: "Health guidance to prevent future medical issues."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Medical Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Providing complete healthcare solutions with care, trust, and experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
