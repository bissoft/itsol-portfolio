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
  Target,
  CheckCircle,
  FileCode,
  CheckSquare,
  CpuIcon,
  HardDrive,
  Layout,
  MessageCircle,
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
  Target,
  CheckCircle,
  FileCode,
  CheckSquare,
  CpuIcon,
  HardDrive,
  Layout,
  MessageCircle,
};

const IconRenderer = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const Icon = iconMap[name] || UserPlus;
  return <Icon className={className || "text-blue-500"} />;
};

export default function DynamicHireDevClient({
  initialData,
  slug,
}: {
  initialData: any;
  slug: string;
}) {
  const data = initialData;
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
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
            <span className="text-gray-400">Hire Dev</span>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-blue-600 font-semibold bg-gray-50 px-3 py-1 rounded-full border border-gray-100 uppercase tracking-wider text-xs">
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
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-600 text-white text-sm font-bold tracking-wide shadow-xl shadow-blue-200"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">
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
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Hire Specialists
            </Link>
            <Link
              href="#process"
              className="px-10 py-5 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-black hover:bg-gray-50 transition-all hover:border-blue-200"
            >
              Our Hiring Process
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
                  className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all text-center group border-b-4 border-b-blue-500"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <IconRenderer name={stat.iconName} className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
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
        <section id="process" className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                Streamlined <span className="text-blue-600">Onboarding</span>
              </h2>
              <div className="h-2 w-32 bg-blue-600 mx-auto rounded-full mb-10 shadow-lg shadow-blue-200"></div>
              <p className="text-gray-500 text-xl max-w-2xl mx-auto">
                How we match you with the perfect developer for your tech stack
                in record time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {data.process.map((step: any, i: number) => (
                <div
                  key={i}
                  className="bg-white rounded-[2rem] border-2 border-gray-50 overflow-hidden hover:border-blue-100 hover:shadow-2xl transition-all"
                >
                  <button
                    onClick={() =>
                      setExpandedStep(expandedStep === i ? null : i)
                    }
                    className="w-full flex items-center justify-between p-10 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 font-black text-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 font-medium">
                          {step.description?.substring(0, 80)}...
                        </p>
                      </div>
                    </div>
                    <div
                      className={`p-4 rounded-xl bg-gray-50 text-gray-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all ${expandedStep === i ? "rotate-180" : ""}`}
                    >
                      <ChevronDown size={24} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedStep === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-10 pb-10"
                      >
                        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row items-start gap-8">
                          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white flex-shrink-0 shadow-xl shadow-blue-200">
                            <IconRenderer
                              name={step.iconName}
                              className="w-10 h-10 text-white"
                            />
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed pt-2">
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

      {/* Tech Stack / Skills Section */}
      {data.techStack && data.techStack.length > 0 && (
        <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                Specialized <span className="text-blue-400">Tech Stack</span>
              </h2>
              <div className="h-2 w-32 bg-blue-500 mx-auto rounded-full mb-10"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.techStack.map((stack: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <h3 className="text-2xl font-black mb-8 text-blue-400 group-hover:text-white transition-colors">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {stack.skills?.map((skill: string, j: number) => (
                      <span
                        key={j}
                        className="px-5 py-2.5 bg-white/5 rounded-full text-sm font-bold border border-white/5 hover:bg-blue-600 hover:border-blue-400 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                The <span className="text-blue-600">ITSOL Advantage</span>
              </h2>
              <div className="h-2 w-32 bg-blue-600 mx-auto rounded-full mb-10"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {data.benefits.map((benefit: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50/50 p-12 rounded-[3.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-start gap-8">
                    <div className="p-5 bg-white shadow-xl text-blue-600 rounded-[2rem] group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-12">
                      <IconRenderer
                        name={benefit.iconName}
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4 italic">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 text-lg leading-relaxed font-medium">
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
        <section
          key={idx}
          className="py-32 bg-gray-50/30 border-t border-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight italic">
              {section.title}
            </h2>
            <div className="h-2 w-32 bg-blue-600 mx-auto rounded-full mb-10"></div>
            {section.subheading && (
              <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
                {section.subheading}
              </p>
            )}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.items?.map((item: any, itemIdx: number) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: itemIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[3rem] bg-white border border-gray-100 hover:border-blue-200 transition-all hover:shadow-3xl group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-blue-50 shadow-inner flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-translate-y-2">
                    <IconRenderer name={item.iconName} className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-[4rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-16 md:p-32 text-center relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[100px] -ml-64 -mb-64"></div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-tight">
            Ready to <span className="text-sky-400">Scale</span> Your Team?
          </h2>
          <p className="text-blue-100 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Book a consultation today and get a curated list of developer
            profiles within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="/contact"
              className="px-14 py-6 bg-white text-blue-900 rounded-[2rem] font-black text-2xl shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-110 active:scale-95"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
