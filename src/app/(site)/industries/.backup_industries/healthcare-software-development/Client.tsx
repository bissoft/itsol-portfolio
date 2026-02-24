"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  ShieldCheck,
  Database,
  Stethoscope,
  Microscope,
  Lock,
  MessageCircle,
  FileSearch,
  CheckCircle2,
  Smartphone,
  Cloud,
} from "lucide-react";
import Image from "next/image";

const HealthcareSoftwareClient = () => {
  const highlightStats = [
    { label: "Systems Integrated", value: "200+", icon: Activity },
    { label: "Patient Data Managed", value: "50M+", icon: Database },
    { label: "Compliance Score", value: "100%", icon: ShieldCheck },
    { label: "Global Reach", value: "15+", icon: GlobeAlt },
  ];

  const solutions = [
    {
      title: "EHR & EMR Systems",
      desc: "Comprehensive electronic health and medical records that streamline patient data management and physician workflows.",
      icon: Stethoscope,
    },
    {
      title: "Medical Imaging (PACS)",
      desc: "High-performance systems for radiologist review, secure storage, and real-time sharing of diagnostic images.",
      icon: Microscope,
    },
    {
      title: "Hospital Management",
      desc: "Centralized ERP solutions for resource allocation, billing, scheduling, and multi-department coordination.",
      icon: HeartPulse,
    },
    {
      title: "RPM Platforms",
      desc: "Remote Patient Monitoring modules that leverage IoT for real-time chronic care and post-op tracking.",
      icon: Activity,
    },
    {
      title: "Pharmacy ERP",
      desc: "Automated inventory, e-prescribing, and regulatory compliance for modern pharmaceutical chains.",
      icon: Database,
    },
    {
      title: "Compliance Engines",
      desc: "Built-in auditors for HIPAA, GDPR, and FHIR standards to ensure absolute data sovereignty.",
      icon: Lock,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#fafcfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-8"
              >
                <ShieldCheck size={16} /> COMPLIANCE-READY SOLUTIONS
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1]"
              >
                Intelligent <span className="text-blue-600">Healthcare</span>{" "}
                Software For Life.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed"
              >
                We build secure, FHIR-compliant, and patient-first software
                ecosystems for global medical institutions, researchers, and
                biotech pioneers.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1">
                  Connect with Specialists
                </button>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=1200&auto=format&fit=crop"
                  alt="Healthcare Software"
                  width={600}
                  height={800}
                  className="object-cover h-[600px] w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </motion.div>
              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-blue-50 max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="font-black text-gray-900">
                    HL7 / FHIR Compatible
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Fully interoperable systems for seamless data exchange across
                  jurisdictions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {highlightStats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Medical Software Expertise
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              We deliver enterprise-grade medical solutions that prioritize
              reliability and security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-blue-200 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-900 rounded-[4rem] p-16 md:p-32 relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-[250px] -mt-[250px]" />
          <div className="relative z-10 text-white">
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">
              Ready to Engineer The Future of Care?
            </h2>
            <p className="text-2xl text-blue-200 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Let's discuss how our technical expertise can help your
              institution deliver better outcomes through digital
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="px-12 py-6 bg-blue-600 text-white rounded-3xl font-black text-2xl hover:shadow-2xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
                Start Consultation
              </button>
              <button className="px-12 py-6 bg-transparent border-2 border-white/30 text-white rounded-3xl font-black text-2xl hover:bg-white/10 transition-all">
                Download PDF Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple Fallback Icon
const GlobeAlt = (props: any) => <Smartphone {...props} />;

export default HealthcareSoftwareClient;
