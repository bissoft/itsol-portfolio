import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. A standard MVP might take 6-10 weeks, while enterprise solutions can take 4-8 months. We provide detailed timeline estimates after our initial discovery phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! We offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements to ensure your software remains robust."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into our development process. We follow industry best practices including encryption, secure authentication (OAuth/JWT), regular security audits, and compliance with standards like GDPR and HIPAA where applicable."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We offer team augmentation services where our developers integrate seamlessly with your in-house team, following your workflows and communication channels (Slack, Jira, etc.) to boost productivity."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern stacks: React, Next.js, and Vue for frontend; Node.js, Python, and Go for backend; AWS and Azure for cloud infrastructure; and Flutter/React Native for mobile development."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our process and services.
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
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-blue-200 shadow-lg' : 'border-gray-200 hover:border-blue-100'}`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
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
