"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  UserPlus,
  Video,
  Bell,
  ShieldCheck,
  BarChart3,
  Heart,
  Clock,
  Sparkles,
  Zap,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import Image from "next/image";

const HealthcareAppClient = () => {
  const appTypes = [
    {
      title: "Telemedicine Apps",
      desc: "Instant video consultations, smart scheduling, and secure e-prescribing for patients and doctors.",
      icon: Video,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Patient Portals",
      desc: "Full access to medical history, lab results, and secure messaging with healthcare providers.",
      icon: UserPlus,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "M-Health & Wellness",
      desc: "Fitness tracking, mental health modules, and personalized nutrition plans with AI integration.",
      icon: Heart,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "RPM Dashboards",
      desc: "Mobile interfaces for chronic disease management through Bluetooth-connected medical devices.",
      icon: BarChart3,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const features = [
    { title: "Real-time Chat", icon: MessageSquare },
    { title: "Video Conferencing", icon: Video },
    { title: "Secure Data Storage", icon: ShieldCheck },
    { title: "Push Notifications", icon: Bell },
    { title: "Health Kit Integration", icon: Sparkles },
    { title: "Symptom Checkers", icon: CheckCircle2 },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-black mb-8 border border-blue-100 uppercase tracking-widest"
            >
              <Smartphone size={16} /> Patient-First Design
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.95] tracking-tight"
            >
              Modern Apps For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">
                Connected Health.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-gray-600 mb-12 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              We design and develop high-impact healthcare mobile applications
              that bridge the gap between patients and providers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1">
                Start Developing Now
              </button>
              <button className="px-10 py-5 bg-gray-100 text-gray-800 rounded-2xl font-black text-xl hover:bg-gray-200 transition-all hover:-translate-y-1">
                View Demo Apps
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Mockup */}
      <section className="py-24 relative overflow-hidden bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                alt="Healthcare Mobile Design"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${app.color} p-10 rounded-[3rem] border border-blue-50/50 shadow-sm hover:shadow-xl transition-all group cursor-default`}
              >
                <div className="w-16 h-16 rounded-[1.25rem] bg-white flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                  <app.icon size={32} />
                </div>
                <h3 className="text-2xl font-extrabold mb-6 text-gray-900 group-hover:text-blue-700 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  {app.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600/80 group-hover:text-blue-700">
                  Explore Features <Sparkles size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-900 rounded-[5rem] mx-4 my-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight">
              Seamless Features. Every App.
            </h2>
            <p className="text-xl text-blue-200">
              Our engineering core includes these essential modules by default.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-300/20">
                  <feat.icon size={24} />
                </div>
                <div className="text-sm font-black uppercase tracking-widest leading-tight">
                  {feat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-10 leading-tight">
            Empower Your Patients <br /> With Elegant Mobility.
          </h2>
          <p className="text-2xl text-gray-500 mb-16 font-medium">
            Get a dedicated development team for your healthcare mobile project
            and launch within months, not years.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <button className="px-14 py-7 bg-blue-700 text-white rounded-3xl font-black text-2xl hover:bg-blue-800 transition-all shadow-2xl hover:-translate-y-2">
              Schedule A Demo
            </button>
            <button className="px-14 py-7 bg-white border-2 border-gray-100 text-gray-900 rounded-3xl font-black text-2xl hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-1">
              Contact Strategy Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Tool icons placeholder
const MessageSquare = (props: any) => <Bell {...props} />;

export default HealthcareAppClient;
