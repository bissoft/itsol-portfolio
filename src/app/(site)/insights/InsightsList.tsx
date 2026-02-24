"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  Filter,
  Calendar,
  User,
  FileText,
  Video,
  BookOpen,
} from "lucide-react";
import { BlogsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";

interface InsightsListProps {
  initialData: BlogsData;
}

const InsightsList = ({ initialData }: InsightsListProps) => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "insights" }),
      });

      if (res.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error("Subscription failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };
  const tabs = ["All", "Article", "Whitepaper", "Webinar"];

  const filteredBlogs = initialData.blogs.filter((blog) => {
    const matchesTab = activeTab === "All" || blog.type === activeTab;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleAction = (item: any) => {
    if (item.type === "Whitepaper" && item.link && item.link.endsWith(".pdf")) {
      const link = document.createElement("a");
      link.href = item.link;
      link.download = item.title.replace(/\s+/g, "_") + ".pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (item.link) {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-indigo-600/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Latest Insights & <br />{" "}
              <span className="text-blue-500">Resources</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Explore our collection of expert perspectives, industry
              deep-dives, and technical guides designed to help your business
              evolve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex bg-gray-100 p-1 rounded-xl w-full md:w-auto overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab === "Article" && (
                  <BookOpen size={14} className="inline mr-2" />
                )}
                {tab === "Whitepaper" && (
                  <FileText size={14} className="inline mr-2" />
                )}
                {tab === "Webinar" && (
                  <Video size={14} className="inline mr-2" />
                )}
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
            />
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleAction(blog)}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10" />
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                          blog.type === "Whitepaper"
                            ? "bg-white text-gray-900"
                            : blog.type === "Webinar"
                              ? "bg-red-500 text-white"
                              : "bg-blue-600 text-white"
                        }`}
                      >
                        {blog.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        {blog.category}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-4">
                      {blog.title}
                    </h3>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-[10px] uppercase overflow-hidden">
                          {blog.authorImage ? (
                            <img
                              src={blog.authorImage}
                              alt={blog.author}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            blog.author?.substring(0, 2) || "IT"
                          )}
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                          {blog.author || "ITSOL Team"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs group-hover:gap-3 transition-all">
                        {blog.type === "Whitepaper" ? "Download" : "Read More"}
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-40">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setActiveTab("All");
                  setSearchQuery("");
                }}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Never miss an <span className="text-blue-500">Insight.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Join 5,000+ industry leaders who receive our weekly deep-dives
              into the future of digital ecosystems.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all whitespace-nowrap disabled:opacity-50"
              >
                {submitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsList;
