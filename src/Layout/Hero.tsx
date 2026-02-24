"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import ContactModal from "../components/ContactModal";
import { HeroData } from "@/lib/cms-defaults";

interface HeroProps {
  data?: HeroData;
}

const Hero = ({ data }: HeroProps) => {
  // Default values (fallback)
  const badgeText = data?.badgeText || "Empowering Digital Evolution";
  const headlineLine1 = data?.headlineLine1 || "End-to-End Digital Solutions";
  const headlineLine2 = data?.headlineLine2 || "in One Place";
  const subtext =
    data?.subtext ||
    "We architect robust digital solutions that scale. From <span class='text-blue-600 font-medium'>AI-driven platforms</span> to <span class='text-blue-600 font-medium'>enterprise ecosystems</span>, we turn complex challenges into elegant software.";
  const button1Text = data?.button1Text || "Get Started";
  const button1Link = data?.button1Link || "#";
  const button2Text = data?.button2Text || "Let's Talk";
  const button2Link =
    data?.button2Link || "https://calendly.com/etechnocrat/saas-app";
  const leadMagnetTitle = data?.leadMagnetTitle || "Strategic Playbook";
  const leadMagnetSubtitle = data?.leadMagnetSubtitle || "Modernization";
  const leadMagnetTag = data?.leadMagnetTag || "2026 Edition";
  const backgroundImage = data?.backgroundImage;
  const backgroundVideo = data?.backgroundVideo;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white">
      {/* 1. Dynamic Tech Grid Background */}
      {/* 1. Dynamic Background (Video > Image > Tech Grid) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundVideo ? (
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/70"></div>{" "}
            {/* Overlay to ensure text readability */}
          </div>
        ) : backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
          </div>
        )}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent z-10" />
      </div>

      {/* 2. Ambient Gradient Glows directly behind text */}
      <motion.div
        animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10"
      />

      <div className="absolute inset-0 z-0">
        <ParticleBackground color="#3B82F6" density={30} />
      </div>

      <div className="z-10 relative max-w-8xl mx-auto w-full flex flex-col items-center pt-30 pb-10">
        {/* CENTER COLUMN: Text Content */}
        <div className="text-center flex flex-col items-center px-6 lg:px-0 max-w-5xl mx-auto relative z-20">
          {/* Badge / Top Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-1"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {badgeText}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight"
          >
            {headlineLine1} <br />
            <span className="text-blue-600">{headlineLine2}</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: subtext }}
          ></motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollBy({ top: 800, behavior: "smooth" })} // Or use Link if button1Link is internal
              className="group px-8 py-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 cursor-pointer"
            >
              {button1Text}
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(button2Link, "_blank")}
              className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold text-lg hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {button2Text}
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT ELEMENT: Lead Magnet Card (Absolute) */}
        <div className="hidden xl:block absolute right-8 top-[72%] -translate-y-1/2 z-10 w-[260px]">
          {/* Glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full bg-white/80 rounded-2xl overflow-hidden border border-blue-100 backdrop-blur-xl shadow-xl hover:shadow-blue-200/50 transition-shadow duration-500"
          >
            <div className="relative h-40 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-4 group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>

              <div className="relative z-10 text-center p-3 border border-white/20 bg-white/10 backdrop-blur-md rounded-xl w-full">
                <h3 className="text-sm font-bold text-white leading-tight mb-0.5">
                  {leadMagnetTitle}
                </h3>
                <h3 className="text-lg font-extrabold text-white leading-none mb-1">
                  {leadMagnetSubtitle}
                </h3>
                <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/30 text-[10px] font-semibold text-white border border-blue-400/30">
                  {leadMagnetTag}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xs font-bold text-gray-900 mb-1 leading-snug">
                Digital Transformation Roadmap
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors font-semibold group text-xs"
              >
                Get the whitepaper
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Card Stacked */}
        <div className="xl:hidden w-full max-w-[280px] mt-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full bg-white/80 rounded-2xl overflow-hidden border border-blue-100 backdrop-blur-xl shadow-xl"
          >
            <div className="relative h-40 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-4 group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

              <div className="relative z-10 text-center p-3 border border-white/20 bg-white/10 backdrop-blur-md rounded-xl w-full">
                <h3 className="text-sm font-bold text-white leading-tight mb-0.5">
                  {leadMagnetTitle}
                </h3>
                <h3 className="text-lg font-extrabold text-white leading-none mb-1">
                  {leadMagnetSubtitle}
                </h3>
                <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/30 text-[10px] font-semibold text-white border border-blue-400/30">
                  {leadMagnetTag}
                </span>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xs font-bold text-gray-900 mb-1">
                Digital Transformation Roadmap
              </h3>
              <span className="text-blue-600 font-semibold text-xs">
                Download Now &rarr;
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 4s linear infinite;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
