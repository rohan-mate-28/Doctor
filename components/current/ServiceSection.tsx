"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Activity,
  Syringe,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: "General Consultation",
    desc: "Complete medical consultation and treatment for common health issues."
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Diabetes & Blood Pressure Care",
    desc: "Regular monitoring, guidance, and treatment for diabetes and BP."
  },
  {
    icon: <Baby size={28} />,
    title: "Child & Elderly Care",
    desc: "Dedicated healthcare services for children and senior citizens."
  },
  {
    icon: <Activity size={28} />,
    title: "Fever, Cold & Infection",
    desc: "Quick diagnosis and effective treatment for fever and infections."
  },
  {
    icon: <Syringe size={28} />,
    title: "Vaccination Services",
    desc: "Safe and timely vaccinations as per medical guidelines."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Preventive Health Care",
    desc: "Health advice and preventive care to maintain long-term wellness."
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
            Comprehensive healthcare services provided with care, trust, and
            medical expertise for all age groups.
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

        {/* Soft Trust Line */}
        <p className="text-center text-gray-600 mt-12">
          ✔ Personalised care &nbsp; • &nbsp; ✔ Affordable consultation &nbsp; • &nbsp; ✔ Trusted by families
        </p>

      </div>
    </section>
  );
}
