import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Database, Smartphone, Cloud, PenTool, Layout, Terminal, Globe, Cpu } from "lucide-react";
import "./HireTeam.css";

const HireTeam = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = ["Frontend", "Backend", "Mobile", "CMS", "Database", "Cloud"];

  const technologies = {
    Frontend: [
      { name: "React Js", icon: Code, count: 120 },
      { name: "Angular", icon: Layout, count: 85 },
      { name: "Vue Js", icon: Layout, count: 70 },
      { name: "Next Js", icon: Globe, count: 90 },
      { name: "HTML5/CSS3", icon: Code, count: 150 },
    ],
    Backend: [
      { name: "Node Js", icon: Server, count: 110 },
      { name: ".NET Core", icon: Terminal, count: 95 },
      { name: "Python", icon: Terminal, count: 130 },
      { name: "Java", icon: Server, count: 100 },
      { name: "Go", icon: Terminal, count: 40 },
    ],
    Mobile: [
      { name: "Flutter", icon: Smartphone, count: 80 },
      { name: "React Native", icon: Smartphone, count: 95 },
      { name: "iOS Swift", icon: Smartphone, count: 60 },
      { name: "Android Kotlin", icon: Smartphone, count: 75 },
    ],
    CMS: [
      { name: "WordPress", icon: PenTool, count: 200 },
      { name: "Shopify", icon: PenTool, count: 150 },
      { name: "Magento", icon: PenTool, count: 50 },
      { name: "Webflow", icon: PenTool, count: 40 },
    ],
    Database: [
      { name: "MongoDB", icon: Database, count: 90 },
      { name: "PostgreSQL", icon: Database, count: 80 },
      { name: "MySQL", icon: Database, count: 120 },
      { name: "Redis", icon: Database, count: 45 },
    ],
    Cloud: [
      { name: "AWS", icon: Cloud, count: 100 },
      { name: "Azure", icon: Cloud, count: 85 },
      { name: "Google Cloud", icon: Cloud, count: 70 },
      { name: "Docker", icon: Cpu, count: 95 },
    ]
  };

  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Soft backdrop elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200/[0.2] bg-[size:20px_20px]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Hire Your <span className="text-blue-600">Dream Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access a pool of top-tier developers, designers, and engineers ready to scale your business.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {technologies[activeCategory].map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center gap-4 cursor-pointer hover:-translate-y-1"
              >
                <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <tech.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {tech.count}+ Experts
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 font-medium">Don't see what you're looking for?</p>
          <button
            onClick={() => window.open("https://calendly.com/etechnocrat/saas-app", "_blank")}
            className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 cursor-pointer"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireTeam;