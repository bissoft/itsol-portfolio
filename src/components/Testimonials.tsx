"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const defaultTestimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CTO, FinTech Solutions",
    content:
      "Working with ITSOL was transformative for our platform. Their understanding of complex financial architectures and ability to deliver scalable solutions is unmatched.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Director of Product, EdTech Co",
    content:
      "The team's dedication to quality and user experience helped us launch our learning platform 2 months ahead of schedule. Exceptional communication throughout.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Founder, HealthAI",
    content:
      "We needed a partner who understood both medical compliance and modern AI tech. ITSOL delivered a secure, HIPAA-compliant solution that serves thousands of patients.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "VP Marketing, RetailGiant",
    content:
      "The e-commerce revamp increased our conversion rates by 40%. The attention to detail in the UI/UX design was exactly what we needed to stand out.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
];

interface TestimonialsProps {
  data?: any[];
}

const Testimonials = ({ data }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = data && data.length > 0 ? data : defaultTestimonials;

  if (!items || items.length === 0) return null;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by <span className="text-blue-600">Visionaries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what industry leaders are saying about their collaboration with
            us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 left-8 text-blue-100 -z-0">
              <Quote size={80} fill="currentColor" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-blue-500 to-blue-600">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={items[activeIndex].image}
                      alt={items[activeIndex].name}
                      className="w-full h-full rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(items[activeIndex].rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                    &quot;{items[activeIndex].content}&quot;
                  </blockquote>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {items[activeIndex].name}
                    </h4>
                    <p className="text-blue-600">{items[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-end gap-3 mt-8 md:mt-0 md:absolute md:bottom-12 md:right-12 z-20">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
