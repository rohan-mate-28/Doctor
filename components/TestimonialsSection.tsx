"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amit Sharma",
      feedback:
        "Dr. Rohan Mate is an exceptional doctor. He listens with patience and explains every detail clearly. I felt completely confident about my treatment.",
      stars: 5,
      image: "/user1.png",
    },
    {
      name: "Priya Deshmukh",
      feedback:
        "Amazing experience! Dr. Mate’s diagnosis is spot on, and he always ensures comfort and clarity. Highly trustworthy!",
      stars: 5,
      image: "/user2.png",
    },
    {
      name: "Rahul Patil",
      feedback:
        "One of the most caring doctors I've met. He treated me with kindness and professionalism. I recovered much faster than expected!",
      stars: 5,
      image: "/user3.png",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Patient <span className="text-blue-600">Testimonials</span>
        </motion.h2>

        {/* Testimonial Card */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto p-10 max-w-3xl bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl border border-blue-100"
        >
          {/* User Image */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-2 border-blue-200">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonial.stars }).map((_, i) => (
              <Star
                key={i}
                size={22}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>

          {/* Feedback */}
          <p className="text-gray-700 text-lg leading-relaxed italic">
            “{testimonial.feedback}”
          </p>

          {/* Name */}
          <h3 className="mt-6 text-xl font-semibold text-gray-900">
            — {testimonial.name}
          </h3>
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === i ? "bg-blue-600 w-6" : "bg-blue-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
