"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

import { getFaqsData } from "@/lib/cms";
import { FaqsData } from "@/lib/cms-defaults";

const FaqSection = () => {
  const [data, setData] = React.useState<FaqsData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [openIndex, setOpenIndex] = useState(0);

  React.useEffect(() => {
    async function loadData() {
      const fetched = await getFaqsData();
      setData(fetched);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading || !data) return null;

  const { heading, subheading, faqs } = data;

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-6">
            <HelpCircle size={32} />
          </div>
          <h2
            className="text-4xl font-bold text-gray-900 mb-6 font-display"
            dangerouslySetInnerHTML={{
              __html: heading.replace(
                "Questions",
                '<span class="text-blue-600">Questions</span>',
              ),
            }}
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? "border-blue-200 shadow-lg" : "border-gray-200 hover:border-blue-100"}`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? "text-blue-600" : "text-gray-900"}`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-full transition-colors duration-300 ${openIndex === index ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
                >
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
