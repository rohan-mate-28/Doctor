"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Star,
  ThumbsUp
} from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted Medical Practice",
    desc: "Ethical, transparent, and reliable medical care you can depend on."
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Patient-Centered Care",
    desc: "Every patient receives personal attention, care, and respect."
  },
  {
    icon: <Users size={28} />,
    title: "Experienced Doctor",
    desc: "Experienced in treating patients across all age groups."
  }
];

const testimonials = [
  {
    name: "Ramesh Patil",
    review:
      "Doctor explained the problem clearly and treatment was very effective.",
    rating: 5
  },
  {
    name: "Sneha Kulkarni",
    review:
      "Clinic is clean and staff is cooperative. Consultation experience was good.",
    rating: 5
  },
  {
    name: "Amit Deshmukh",
    review:
      "Very reliable family doctor. Always helpful during emergencies.",
    rating: 4
  }
];

export default function WhyChooseUsTestimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* WHY CHOOSE US */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Clinic
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Committed to quality healthcare with trust, care, and professionalism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Patient Feedback
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Sample reviews representing patient experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4 text-yellow-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 mb-4">
                “{item.review}”
              </p>

              <div className="flex items-center gap-2 text-gray-900 font-medium">
                <ThumbsUp size={18} className="text-blue-600" />
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
