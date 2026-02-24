"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Shield,
  Activity,
  Clock,
  Users,
  ArrowRight,
  ChevronDown,
  Check,
  Star,
  Award,
  Code,
  Cloud,
  Lock,
  ChevronRight,
  ArrowLeft,
  Rocket,
  Settings,
  Zap,
  Globe,
  Cpu,
  Database,
  Server,
  Smartphone,
  CheckCircle2,
  ListChecks,
  List,
  Layers,
  LayoutGrid,
  BrainCircuit,
  ShieldCheck,
  Wrench,
  Terminal,
  GitBranch,
  Container,
  MonitorSmartphone,
  Boxes,
  Network,
  Blocks,
  Timer,
  Clipboard,
  UserPlus,
  LayoutDashboard,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Icon Map for dynamic icons
const iconMap: Record<string, any> = {
  HeartPulse,
  Shield,
  Activity,
  Clock,
  Users,
  ArrowRight,
  ChevronDown,
  Check,
  Star,
  Award,
  Code,
  Cloud,
  Lock,
  ChevronRight,
  ArrowLeft,
  Rocket,
  Settings,
  Zap,
  Globe,
  Cpu,
  Database,
  Server,
  Smartphone,
  CheckCircle2,
  ListChecks,
  List,
  Layers,
  LayoutGrid,
  BrainCircuit,
  ShieldCheck,
  Wrench,
  Terminal,
  GitBranch,
  Container,
  MonitorSmartphone,
  Boxes,
  Network,
  Blocks,
  Timer,
  Clipboard,
  UserPlus,
  LayoutDashboard,
};

const IconRenderer = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const Icon = iconMap[name] || Activity;
  return <Icon className={className || "text-blue-500"} />;
};

export default function DynamicEngagementClient({
  initialData,
  slug,
}: {
  initialData: any;
  slug: string;
}) {
  const data = initialData;
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const router = useRouter();

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20">
      {/* Breadcrumb / Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-all text-sm font-medium cursor-pointer"
          >
            <ArrowLeft size={18} className="text-blue-600" />
            Back
          </button>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Engagement</span>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wider text-xs">
              {data.slug || slug}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {data.heroBadge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide border border-blue-200"
            >
              {data.heroBadge}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-gray-900 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              {data.heroTitle?.split(" ")[0]}
            </span>{" "}
            {data.heroTitle?.split(" ").slice(1).join(" ")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {data.heroDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            >
              Start Now
            </Link>
            <Link
              href="#process"
              className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all"
            >
              See Our Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {data.stats && data.stats.length > 0 && (
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group"
                >
                  <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    <IconRenderer name={stat.iconName} className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {data.process && data.process.length > 0 && (
        <section id="process" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our Engagement Process
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A seamless transition to a partnership built on trust and
                delivery
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {data.process.map((step: any, i: number) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
                >
                  <button
                    onClick={() =>
                      setExpandedStep(expandedStep === i ? null : i)
                    }
                    className="w-full flex items-center justify-between p-8 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                        0{i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">
                          {step.description?.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`text-gray-300 group-hover:text-blue-600 transition-all ${expandedStep === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedStep === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-8"
                      >
                        <div className="pt-4 border-t border-gray-50 flex items-start gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                            <IconRenderer
                              name={step.iconName}
                              className="w-7 h-7 text-white"
                            />
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-24 bg-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Measurable improvements for your business reliability and bottom
                line
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {data.benefits.map((benefit: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-white/20 rounded-xl text-white">
                      <IconRenderer
                        name={benefit.iconName}
                        className="w-6 h-6 text-white"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Dynamic Sections */}
      {data.customSections?.map((section: any, idx: number) => (
        <section key={idx} className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
              {section.title}
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
            {section.subheading && (
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                {section.subheading}
              </p>
            )}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items?.map((item: any, itemIdx: number) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: itemIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:border-blue-100 transition-all hover:bg-white hover:shadow-2xl group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                    <IconRenderer name={item.iconName} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-700 to-indigo-900 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Build Your Team Today
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss the engagement model that best fits your business
            goals and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-blue-800 rounded-2xl font-black text-lg shadow-xl hover:bg-gray-50 transition-all transform hover:scale-105"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
