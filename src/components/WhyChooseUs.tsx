"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhyChooseUsData, defaultWhyChooseUsData } from "@/lib/cms-defaults";
import IconRenderer from "./IconRenderer";

interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const { heading, subheading, features } = data || defaultWhyChooseUsData;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-6">
              Why Partner With ITSOL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {heading.split("\\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line.trim()}
                  {i !== heading.split("\\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {subheading}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <IconRenderer iconName={feature.iconName} size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
