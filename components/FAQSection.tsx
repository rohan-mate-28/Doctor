"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of treatments do you provide?",
    answer:
      "I provide comprehensive diagnosis and treatment for common illnesses, chronic conditions, preventive care, and personalized treatment plans.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through the 'Book Appointment' button or call our clinic directly for assistance.",
  },
  {
    question: "Do you accept emergency cases?",
    answer:
      "Yes, emergency cases are accepted based on availability. For critical emergencies, please visit the nearest hospital immediately.",
  },
  {
    question: "Do you provide online consultations?",
    answer:
      "Yes, online consultations are available. You can select the option while booking an appointment.",
  },
  {
    question: "How can I view my previous reports?",
    answer:
      "After signing in, you can view your medical records, prescriptions, and reports in the patient portal.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-gray-600 max-w-xl mx-auto"
        >
          Find answers to the most common questions patients ask.
        </motion.p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
type FAQItemProps = {
  question: string;
  answer: string;
};
function FAQItem({ question, answer }:FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-xl shadow-md border border-gray-200 px-6 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </div>

      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 text-gray-600"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
}
