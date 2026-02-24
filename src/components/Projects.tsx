"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { ProjectsData, defaultProjectsData } from "@/lib/cms-defaults";

interface ProjectsProps {
  data?: ProjectsData;
}

const Projects = ({ data }: ProjectsProps) => {
  const { heading, subheading, projects } = data || defaultProjectsData;
  const targetRef = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex flex-col md:flex-row h-screen items-center overflow-hidden w-full">
        {/* TOP/LEFT COLUMN: Header */}
        <div className="w-full md:w-[40%] lg:w-[30%] h-auto md:h-full flex flex-col justify-center px-6 py-10 md:pl-20 md:pr-4 shrink-0 relative z-20 bg-white shadow-sm md:shadow-none">
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-8 md:w-12 h-1 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 text-xs md:text-sm font-semibold tracking-wider uppercase">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {heading.split(" ").slice(0, -2).join(" ")}{" "}
            <br className="hidden md:block" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              {heading.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-sm mt-4 md:mt-8 line-clamp-2 md:line-clamp-none">
            {subheading}
          </p>
          <button
            onClick={() => router.push("/portfolio")}
            className="mt-6 md:mt-8 px-5 py-2.5 md:px-6 md:py-3 bg-gray-900 text-white rounded-full text-sm md:text-base font-medium w-fit hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
          >
            View Portfolio <ArrowRight size={18} className="md:w-5 md:h-5" />
          </button>
        </div>

        {/* BOTTOM/RIGHT COLUMN: Horizontal Scroll Mask */}
        <div className="w-full md:w-[60%] lg:w-[70%] h-full overflow-hidden flex items-center relative z-10 bg-gray-50/50">
          {/* Mask Gradient on Left edge (only on desktop) */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none hidden md:block"></div>

          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-8 pl-6 md:pl-10 pr-20 items-center h-full"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative h-[450px] md:h-[70vh] w-[85vw] md:w-[45vw] overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl shrink-0 cursor-pointer flex flex-col hover:shadow-2xl transition-all duration-300"
                onClick={() => router.push(`/case-study/${project.id}`)}
              >
                {/* Background with Overlay - subtly visible */}
                <div
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />

                {/* Content Container */}
                <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                  {/* Top: Tags & Title */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] md:text-xs font-semibold rounded-full border border-blue-200">
                        {project.category}
                      </span>
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] md:text-xs rounded-full border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    {project.stats && (
                      <p className="text-lg md:text-xl font-bold text-blue-600 mt-1 md:mt-2">
                        {project.stats}
                      </p>
                    )}
                  </div>

                  {/* Bottom: Testimonial */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex gap-3 md:gap-4">
                      <div className="w-1 h-full bg-blue-500 rounded-full min-h-[30px] md:min-h-[40px]"></div>
                      <div>
                        <p className="text-gray-700 text-sm md:text-base italic mb-1 line-clamp-2 md:line-clamp-3">
                          "{project.testimonial?.quote}"
                        </p>
                        <p className="text-gray-500 font-medium text-[10px] md:text-xs">
                          — {project.testimonial?.author}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            ))}

            {/* End Card - More Prominent */}
            <div
              className="w-[85vw] md:w-[35vw] shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl h-[450px] md:h-[70vh] shadow-2xl text-white relative overflow-hidden group cursor-pointer"
              onClick={() => router.push("/portfolio")}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 text-center px-6 md:px-8">
                <h3 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
                  Want to see more?
                </h3>
                <p className="text-blue-100 text-sm md:text-lg mb-6 md:mb-8 max-w-[200px] md:max-w-md mx-auto">
                  Explore our full portfolio.
                </p>
                <button className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white text-blue-600 flex items-center justify-center hover:scale-110 transition-all shadow-xl mx-auto">
                  <ArrowRight size={28} className="md:w-8 md:h-8" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
