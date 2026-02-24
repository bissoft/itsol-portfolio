"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { getBlogsData } from "@/lib/cms";
import { BlogsData } from "@/lib/cms-defaults";

const Insights = () => {
  const [data, setData] = React.useState<BlogsData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    async function loadData() {
      const fetched = await getBlogsData();
      setData(fetched);
      setLoading(false);
    }
    loadData();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  if (loading || !data) return null;

  const { heading, blogs } = data;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {heading}
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/insights")}
              className="hidden md:flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors mr-4 cursor-pointer"
            >
              View All Insights <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="text-gray-600 group-hover:text-blue-600"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
            >
              <ArrowRight
                size={20}
                className="text-gray-600 group-hover:text-blue-600"
              />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => {
                if (
                  item.type === "Whitepaper" &&
                  item.link &&
                  item.link.endsWith(".pdf")
                ) {
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
              }}
              className="min-w-[320px] md:min-w-[400px] snap-start group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-gray-100">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10" />
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with type */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                      item.type === "Whitepaper"
                        ? "bg-white text-gray-900"
                        : item.type === "Webinar"
                          ? "bg-red-500 text-white"
                          : "bg-blue-600 text-white"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="pr-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-4">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-[10px] uppercase overflow-hidden">
                      {item.authorImage ? (
                        <img
                          src={item.authorImage}
                          alt={item.author}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        item.author?.substring(0, 2) || "IT"
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {item.author || "ITSOL Team"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all duration-300">
                    {item.type === "Whitepaper"
                      ? "Get the whitepaper"
                      : "Read Now"}{" "}
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Spacer for right padding */}
          <div className="min-w-[20px]"></div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <button
            onClick={() => router.push("/insights")}
            className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 w-full cursor-pointer"
          >
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
