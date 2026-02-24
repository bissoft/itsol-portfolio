"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText } from "lucide-react";
import { getLeadMagnetData } from "@/lib/cms";
import { LeadMagnetData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [data, setData] = useState<LeadMagnetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const fetched = await getLeadMagnetData();
      setData(fetched);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "whitepaper" }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubscribed(true);
        toast.success(result.message);

        // Trigger download if PDF URL is returned
        if (result.pdfUrl) {
          const link = document.createElement("a");
          link.href = result.pdfUrl;
          link.download = "Strategic_Playbook_2026.pdf";
          link.target = "_blank";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          toast.error("Whitepaper file not found. Please contact support.");
        }

        setTimeout(() => {
          setSubscribed(false);
          setEmail("");
        }, 3000);
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to subscribe");
    }
  };

  if (loading || !data) return null;

  return (
    <section className="bg-gray-900 border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[500px]">
        {/* Left Content Area */}
        <div className="flex-1  px-16 py-22 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              {data.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {data.heading}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
              {data.subheading}
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Work email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <Check size={20} /> Success!
                  </>
                ) : (
                  <>
                    {data.buttonText} <ArrowRight size={20} />
                  </>
                )}
              </button>
              <p className="text-xs text-gray-500 mt-4">{data.footerText}</p>
            </form>
          </motion.div>
        </div>

        {/* Right Visual Area */}
        <div className="flex-1 bg-gray-900 relative overflow-hidden flex items-center justify-center py-22 md:py-36">
          {/* Abstract Shapes */}
          {/* <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-400/30 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-[80px] pointer-events-none" /> */}

          {/* Book/Guide Mockup */}
          <motion.div
            className="relative z-10 w-[300px] h-[400px] bg-white rounded-r-xl rounded-l-sm shadow-2xl shadow-blue-900/50 flex flex-col p-8 transform rotate-y-12 rotate-3"
            initial={{ opacity: 0, y: 40, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: "1000px" }}
          >
            {/* Book Spine Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-gray-300 to-white rounded-l-sm" />

            <div className="ml-2 h-full flex flex-col relative overflow-hidden">
              {/* Abstract Cover Art */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[40px] opacity-20" />

              <div className="flex-1 mt-8">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4 block w-fit">
                  {data.whitepaperTag}
                </span>
                <h3 className="text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                  {data.whitepaperTitle}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {data.whitepaperSubtitle}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white" />
                </div>
                <FileText size={24} className="text-blue-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
