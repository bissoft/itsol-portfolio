"use client";

import { motion, LayoutGroup } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  LayoutGrid,
  MonitorSmartphone,
  Smartphone,
  Cpu,
  Cloud,
  ArrowRight,
  CheckCircle,
  BarChart2,
  Globe,
  Users,
  Server,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";

import { ProjectsData } from "@/lib/cms-defaults";

const Portfolio = ({ data }: { data: ProjectsData }) => {
  const router = useRouter();

  /* ------------------- STATE ------------------- */
  const [activeCategory, setActiveCategory] = useState("all");
  const [slideIdx, setSlideIdx] = useState(0);
  const [isPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ------------------- DATA ------------------- */
  const categories = [
    { id: "all", name: "All", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "web", name: "Web", icon: <MonitorSmartphone className="w-4 h-4" /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "ai", name: "AI", icon: <Cpu className="w-4 h-4" /> },
    { id: "cloud", name: "Cloud", icon: <Cloud className="w-4 h-4" /> },
  ];

  const projects = data.projects;

  /* ------------------- STATS DATA ------------------- */
  const stats = [
    {
      value: "150+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: <BarChart2 className="w-6 h-6" />,
    },
    {
      value: "12+",
      label: "Industries Served",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      value: "5M+",
      label: "Users Impacted",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  /* ------------------- AUTO-PLAY LOGIC ------------------- */
  const goNext = () => {
    setSlideIdx((i) => (i + 1) % projects.length);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        goNext();
      }, 5000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, slideIdx]);

  /* ------------------- RENDER ------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <LayoutGroup>
        {/* Navigation & Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
        >
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -3, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Back
            </span>
          </motion.button>

          <div className="flex items-center gap-1 sm:gap-2">
            <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm"
            >
              Portfolio
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-hidden py-32 sm:py-40 px-6 text-center"
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            <ParticleBackground color="#3B82F6" density={40} />
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-block bg-gradient-to-r from-blue-100 to-blue-100 px-6 py-2 rounded-full mb-6"
            >
              <p className="text-sm font-semibold text-blue-700 tracking-wide">
                {data.heading}
              </p>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Crafting{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 animate-gradient">
                Digital Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {data.subheading}
            </p>
          </motion.div>
        </motion.section>

        {/* WorkProcess Component here if available */}
        <WorkProcess />

        {/* Featured Projects Bento Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Featured Work
                </h2>
                <p className="text-gray-600">
                  Selected projects that define our excellence.
                </p>
              </div>
              <button
                onClick={() => router.push("/portfolio")}
                className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
              >
                View Portfolio <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
              {/* Manual grid items for featured projects can go here similar to original */}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              All Projects
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  layout
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.icon}
                  {cat.name}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(
                  (p) =>
                    activeCategory === "all" || p.category === activeCategory,
                )
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) =>
                          (e.currentTarget.src =
                            "https://via.placeholder.com/600x400?text=Project")
                        }
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <button
                        onClick={() => router.push(`/case-study/${project.id}`)}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        <Testimonials data={data.testimonials} />

        {/* CTA */}
        <section className="py-20 px-6">
          <motion.div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 rounded-3xl p-10 sm:p-16 text-center text-white max-w-5xl mx-auto shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {data.ctaHeading || "Ready to Build Something Great?"}
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              {data.ctaButtonText || "Start Your Project"}
            </motion.button>
          </motion.div>
        </section>
      </LayoutGroup>
    </div>
  );
};

export default Portfolio;
