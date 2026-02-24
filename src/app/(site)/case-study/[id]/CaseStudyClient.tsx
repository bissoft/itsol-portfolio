"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Code2,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  User,
  Quote,
  Monitor,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

import type { IProjectItem } from "@/lib/models/Projects";

interface CaseStudyClientProps {
  project: IProjectItem;
  nextProject: IProjectItem;
}

// Helper to safely format dates for Schema.org
const safelyFormatDate = (dateString?: string) => {
  if (!dateString) return new Date().toISOString();
  try {
    // Remove ordinal suffixes (st, nd, rd, th) from numeric component
    // e.g. "13th Feb, 2025" -> "13 Feb, 2025" which is more widely parsable
    const cleanDate = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
    const date = new Date(cleanDate);
    return isNaN(date.getTime())
      ? new Date().toISOString()
      : date.toISOString();
  } catch (e) {
    return new Date().toISOString();
  }
};

const CaseStudyClient = ({ project, nextProject }: CaseStudyClientProps) => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handling project not found in client (though server should catch it first)
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Case Study Not Found
          </h1>
          <p className="text-gray-500">
            The project you are looking for does not exist.
          </p>
          <button
            onClick={() => router.push("/portfolio")}
            className="text-blue-600 font-semibold hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // Default gradient if bgColor is missing
  const gradientClass = project.bgColor || "from-blue-600 to-indigo-700";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.description,
            image: project.images?.[0] || project.imageUrl,
            author: {
              "@type": "Organization",
              name: "ITSOL",
            },
            publisher: {
              "@type": "Organization",
              name: "ITSOL",
              logo: {
                "@type": "ImageObject",
                url: "https://itsol.tech/logo.png",
              },
            },
            datePublished: safelyFormatDate(project.date),
          }),
        }}
      />

      {/* --- Hero Section --- */}
      <header
        className={`relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br ${gradientClass}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Portfolio", href: "/portfolio" },
                { label: project.title },
              ]}
              theme="dark"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {project.client && (
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-medium">
                  <User size={14} /> {project.client}
                </span>
              )}
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-medium">
                <Calendar size={14} /> {project.year}
              </span>
              {/* Categories */}
              {project.tags && project.tags.length > 0 ? (
                (project.tags || []).map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-medium uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-end">
              <div className="lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- Stats Section --- */}
      {project.results && project.results.length > 0 && (
        <div className="relative z-20 -mt-12 px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {(project.results || []).map((res, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-1"
                >
                  <span className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {res.metric}
                  </span>
                  <span className="text-gray-500 font-medium text-xs lg:text-sm uppercase tracking-wide">
                    {res.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* --- Main Content Layout --- */}
      <main className="max-w-7xl mx-auto px-6 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-8 space-y-16">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-video relative group"
            >
              <Image
                src={project.images?.[0] || project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </motion.div>

            {/* Challenge */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 bg-red-50 rounded-xl text-red-500">
                  <ArrowRight size={20} />
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  The Challenge
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Solution */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 bg-green-50 rounded-xl text-green-500">
                  <CheckCircle2 size={20} />
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Solution
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.solution}
              </p>

              {project.images?.[1] && (
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mt-8 group relative aspect-video">
                  <Image
                    src={project.images?.[1] || ""}
                    alt="Solution Interface"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  />
                </div>
              )}
            </section>

            {/* Process / Timeline */}
            {project.process && (
              <section>
                <div className="flex items-center gap-3 mb-10">
                  <span className="p-2.5 bg-purple-50 rounded-xl text-purple-600">
                    <Layers size={20} />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    The Process
                  </h2>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:left-[19px] before:w-0.5 before:bg-gray-200">
                  {(project.process || []).map((step, idx) => (
                    <div key={idx} className="relative pl-14">
                      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-4 border-blue-500 z-10 shadow-sm flex items-center justify-center text-xs font-bold text-blue-500">
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.phase}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full">
                        <Calendar size={12} /> {step.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <Quote className="absolute top-10 left-10 text-white/5 w-40 h-40 -z-0 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <div className="mb-6 opacity-50">
                    <Quote size={40} />
                  </div>
                  <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 text-white/90">
                    "{project.testimonial?.quote || ""}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {project.testimonial?.author?.[0] || "?"}
                    </div>
                    <div>
                      <p className="font-bold text-lg">
                        {project.testimonial?.author || ""}
                      </p>
                      <p className="text-blue-200 text-sm">
                        {project.testimonial?.role || ""}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Additional Gallery - Grid */}
            {project.images && project.images.length > 2 && (
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(project.images || []).slice(2).map((img, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 relative h-56"
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${i}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <aside className="lg:col-span-4 h-full">
            <div className="sticky top-32 space-y-8">
              {/* Project Information Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Project Details
                </h3>

                <ul className="space-y-6">
                  {project.client && (
                    <li className="group">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-0.5">
                            Client
                          </p>
                          <p className="text-gray-900 font-medium">
                            {project.client}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}
                  {project.location && (
                    <li className="group">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-0.5">
                            Location
                          </p>
                          <p className="text-gray-900 font-medium">
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}
                  {project.date && (
                    <li className="group">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <Calendar size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-0.5">
                            Date
                          </p>
                          <p className="text-gray-900 font-medium">
                            {project.date}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <li className="group">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <Monitor size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-0.5">
                            Type
                          </p>
                          <p className="text-gray-900 font-medium">
                            {(project.technologies || []).join(", ")}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>

                {project.website && (
                  <a
                    href={
                      project.website.startsWith("http")
                        ? project.website
                        : `https://${project.website}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Visit Live Site <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Tech Stack Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600" /> Technology
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- Next Project Navigation --- */}
      {nextProject && (
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div
              onClick={() => router.push(`/case-study/${nextProject.id}`)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[400px] flex items-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {(nextProject.images?.[0] || nextProject.imageUrl) && (
                  <Image
                    src={nextProject.images?.[0] || nextProject.imageUrl}
                    alt="Next Case Study"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${nextProject.bgColor || "from-gray-900 via-gray-900"} to-transparent opacity-90 group-hover:opacity-85 transition-opacity duration-500`}
                />
              </div>

              <div className="relative z-10 p-8 md:p-16 w-full flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-sm font-bold uppercase tracking-widest">
                      Next Case Study
                    </span>
                    <div className="h-px w-12 bg-white/30" />
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight group-hover:text-blue-200 transition-colors">
                    {nextProject.title}
                  </h2>

                  <p className="text-lg text-white/70 line-clamp-2">
                    {nextProject.description}
                  </p>

                  <div className="flex items-center gap-2 pt-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium">
                      {nextProject.category}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium">
                      {nextProject.year}
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black hover:scale-110 transition-all duration-300 text-white">
                    <ArrowRight size={40} strokeWidth={1.5} />
                  </div>
                  <span className="mt-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- CTA Section --- */}
      <section className="bg-white border-t border-gray-200 py-32 px-6 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-50/[0.2] -z-10" />
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            We help ambitious companies alike to build products that matter.
            Let's discuss how we can bring similar results to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 w-full sm:w-auto hover:-translate-y-1"
            >
              Start Your Project
            </button>
            <button
              onClick={() => router.push("/portfolio")}
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all w-full sm:w-auto hover:-translate-y-1"
            >
              View More Cases
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyClient;
