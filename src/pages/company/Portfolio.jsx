/* --------------------------------------------------------------
   Portfolio – Modern, Professional, Mobile-First, Animated (JSX)
   -------------------------------------------------------------- */
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  LayoutGrid,
  MonitorSmartphone,
  Smartphone,
  Cpu,
  Cloud,
  Rocket,
  ArrowRight,
  CheckCircle,
  BarChart2,
  Globe,
  Users,
  Lightbulb,
  Palette,
  Server,
  Play,
  Pause,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const navigate = useNavigate();

  /* ------------------- STATE ------------------- */
  const [activeCategory, setActiveCategory] = useState("all");
  const [slideIdx, setSlideIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null); // No type needed in JS

  /* ------------------- DATA ------------------- */
  const categories = [
    { id: "all", name: "All", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "web", name: "Web", icon: <MonitorSmartphone className="w-4 h-4" /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "ai", name: "AI", icon: <Cpu className="w-4 h-4" /> },
    { id: "cloud", name: "Cloud", icon: <Cloud className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Amelia.ai",
      category: "ai",
      client: "ILT Solutions",
      year: "2023",
      description:
        "An AI-powered virtual assistant transforming customer experience with advanced artificial intelligence for efficient and personalized support.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        "Enhanced customer support",
        "Increased engagement",
        "Streamlined interactions",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl: "https://ilt-sa.com/assets/img/new/600x600_AgenticAI.jpg",
      icon: <Cpu />,
    },
    {
      id: 2,
      title: "Thomas Platform",
      category: "web",
      client: "Thomas Inc.",
      year: "2023",
      description:
        "A supplier financial management system with an intuitive dashboard for tracking transactions, pending payments, and payment history.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        "Improved transparency",
        "Efficient financial management",
        "Reduced errors",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl:
        "https://ilt-sa.com/assets/img/new-portfolio/thomas-platform.webp",
      icon: <MonitorSmartphone />,
    },
    {
      id: 3,
      title: "Implement Plus",
      category: "web",
      client: "Positive Implementation Co.",
      year: "2023",
      description:
        "A professional website showcasing mobile and electronic charging solutions in Saudi Arabia, with seamless user experience.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        "Enhanced online presence",
        "Improved user engagement",
        "Streamlined navigation",
      ],
      bgColor: "from-teal-500 to-cyan-600",
      imageUrl: "https://ilt-sa.com/assets/img/new-portfolio/implement.webp",
      icon: <MonitorSmartphone />,
    },
    {
      id: 4,
      title: "TypingFlow",
      category: "ai",
      client: "TypingFlow Inc.",
      year: "2023",
      description:
        "AI-powered content solutions delivering high-quality, SEO-friendly, and engaging content for diverse industries.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        "Increased traffic",
        "Improved SEO rankings",
        "Engaging content",
      ],
      bgColor: "from-cyan-500 to-blue-600",
      imageUrl: "https://ilt-sa.com/assets/img/new/typingflow.png",
      icon: <Cpu />,
    },
    {
      id: 5,
      title: "TekTIME",
      category: "web",
      client: "TekTIME Solutions",
      year: "2023",
      description:
        "A platform for scheduling, conducting, and managing meetings with collaboration and task management features.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        "Boosted productivity",
        "Automated reporting",
        "Enhanced collaboration",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/tektime.png",
      icon: <MonitorSmartphone />,
    },
    {
      id: 6,
      title: "Real Estate",
      category: "web",
      client: "Real Estate Co.",
      year: "2023",
      description:
        "A platform facilitating property listings, transactions, and management with CRM integration for lead tracking.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        "Improved lead management",
        "Enhanced customer engagement",
        "Streamlined transactions",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl:
        "https://ilt-sa.com/assets/img/portfolio-pages/Real%20Estate.png",
      icon: <MonitorSmartphone />,
    },
    {
      id: 7,
      title: "Product and Inventory Management",
      category: "web",
      client: "Inventory Solutions",
      year: "2023",
      description:
        "A system for adding, editing, and categorizing products with real-time inventory tracking and low-stock alerts.",
      technologies: ["React", "Node.js", "MongoDB"],
      results: [
        "Accurate stock levels",
        "Reduced out-of-stock issues",
        "Efficient operations",
      ],
      bgColor: "from-teal-500 to-cyan-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/sale.png",
      icon: <Server />,
    },
    {
      id: 8,
      title: "E-Learning Platform",
      category: "web",
      client: "EduTech Innovations",
      year: "2023",
      description:
        "A virtual classroom platform with interactive tools, seamless course management, and engaging content delivery.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      results: [
        "Enhanced learning experience",
        "Increased student engagement",
        "Scalable platform",
      ],
      bgColor: "from-cyan-500 to-blue-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/e-learnig.png",
      icon: <MonitorSmartphone />,
    },
    {
      id: 9,
      title: "EntreSuite CRM",
      category: "web",
      client: "EntreSuite Inc.",
      year: "2023",
      description:
        "A CRM platform with intuitive dashboards and advanced analytics to streamline client interactions.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      results: [
        "Improved client management",
        "Data-driven insights",
        "Increased efficiency",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/entre-suit.png",
      icon: <MonitorSmartphone />,
    },
    {
      id: 10,
      title: "Law Trolly",
      category: "web",
      client: "Law Trolly Co.",
      year: "2023",
      description:
        "A self-service contracts system streamlining contract management for sales teams.",
      technologies: ["React", "Express", "MongoDB"],
      results: [
        "Simplified contract processes",
        "Improved efficiency",
        "Enhanced user experience",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/lawtrolly.png",
      icon: <Server />,
    },
    {
      id: 11,
      title: "Videotoon",
      category: "web",
      client: "Videotoon Inc.",
      year: "2023",
      description:
        "A platform for creating animated videos, ideal for businesses, educators, and creatives.",
      technologies: ["React", "Tailwind CSS", "Three.js"],
      results: [
        "Simplified animation creation",
        "Increased user engagement",
        "Creative flexibility",
      ],
      bgColor: "from-teal-500 to-cyan-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/videotoon.png",
      icon: <MonitorSmartphone />,
    },
    {
      id: 12,
      title: "TikTok Marketing Partner",
      category: "mobile",
      client: "Videotoon Inc.",
      year: "2023",
      description:
        "A platform leveraging TikTok-optimized animations for maximum reach and impact.",
      technologies: ["React", "Node.js", "TikTok API"],
      results: [
        "Increased brand reach",
        "Enhanced engagement",
        "Optimized content delivery",
      ],
      bgColor: "from-cyan-500 to-blue-600",
      imageUrl:
        "https://ilt-sa.com/assets/img/portfolio-pages/tiktok-banner.png",
      icon: <Smartphone />,
    },
    {
      id: 13,
      title: "Basafa Digital",
      category: "web",
      client: "Basafa Digital Co.",
      year: "2023",
      description:
        "A suite of software solutions to streamline operations and support digital transformation.",
      technologies: ["React", "Django", "PostgreSQL"],
      results: [
        "Improved operational efficiency",
        "Enhanced user experience",
        "Scalable solutions",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl:
        "https://ilt-sa.com/assets/img/portfolio-pages/basafa-digital.png",
      icon: <MonitorSmartphone />,
    },
    {
      id: 14,
      title: "Noticer Email Dashboard",
      category: "web",
      client: "Noticer Inc.",
      year: "2023",
      description:
        "A data-driven dashboard for creating, scheduling, and analyzing email campaigns.",
      technologies: ["React", "Node.js", "MongoDB"],
      results: [
        "Improved campaign performance",
        "Enhanced analytics",
        "Streamlined workflows",
      ],
      bgColor: "from-blue-500 to-blue-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/noticer.png",
      icon: <MonitorSmartphone />,
    },
    {
      id: 15,
      title: "Documint (NFT)",
      category: "web",
      client: "Documint Co.",
      year: "2023",
      description:
        "A platform for creating, managing, and showcasing secure, verifiable NFTs.",
      technologies: ["React", "Ethereum", "IPFS"],
      results: [
        "Secure digital assets",
        "Improved creator trust",
        "Enhanced asset management",
      ],
      bgColor: "from-teal-500 to-cyan-600",
      imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/documint.png",
      icon: <Server />,
    },
  ];

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

  /* ------------------- AUTO-PLAY CAROUSEL ------------------- */
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        goNext();
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, slideIdx]);

  const goPrev = () => {
    setDirection(-1);
    setSlideIdx((i) => (i - 1 + projects.length) % projects.length);
  };

  const goNext = () => {
    setDirection(1);
    setSlideIdx((i) => (i + 1) % projects.length);
  };

  const goTo = (i) => {
    setDirection(i > slideIdx ? 1 : -1);
    setSlideIdx(i);
  };

  const slideVariants = {
    enter: (d) => ({
      x: d > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (d) => ({
      x: d < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    }),
  };

  /* ------------------- RENDER ------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <LayoutGroup>
        {/* Back Button & Breadcrumb */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex items-center gap-3 px-6 pt-8 sm:pt-12"
        >
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ x: -4, backgroundColor: "rgba(59, 130, 246, 0.12)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 transition-transform group-hover:-translate-x-0.5" />
            <span className="text-sm font-medium text-gray-700">Back</span>
          </motion.button>

          <div className="hidden sm:flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100">
              Portfolio
            </span>
          </div>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
        >
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{
              x: -3,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Back
            </span>
          </motion.button>

          {/* Current Page Indicator - Horizontal on desktop, vertical on mobile */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
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
                Our Work
              </p>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Crafting{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 animate-gradient">
                Digital Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We transform ideas into powerful digital solutions that drive
              growth, engagement, and innovation.
            </p>
          </motion.div>
        </motion.section>

        {/* Featured Carousel */}
        <section className="py-16 px-6">
          <div className="relative max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Projects
              </h2>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg cursor-pointer"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5 text-blue-600" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </motion.button>

              <div className="overflow-hidden">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={slideIdx}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid grid-cols-1 lg:grid-cols-2"
                  >
                    <div className="relative h-64 lg:h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <motion.img
                        src={projects[slideIdx].imageUrl}
                        alt={projects[slideIdx].title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        onError={(e) =>
                          (e.currentTarget.src =
                            "https://via.placeholder.com/800x600?text=Project+Image")
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-100 rounded-xl text-blue-600">
                          {projects[slideIdx].icon}
                        </div>
                        <span className="text-sm font-medium text-gray-500">
                          {projects[slideIdx].client} •{" "}
                          {projects[slideIdx].year}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                        {projects[slideIdx].title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3 lg:line-clamp-none">
                        {projects[slideIdx].description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects[slideIdx].technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.03, x: 6 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate("/case-study/1")}
                        className="w-fit bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      >
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center gap-2 py-6 bg-gray-50">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === slideIdx ? "w-8 bg-blue-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
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

        {/* Project Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              All Projects
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Explore our diverse portfolio across web, mobile, AI, and cloud
              solutions.
            </p>

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

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* <AnimatePresence> */}
                {projects
                  .filter(
                    (p) =>
                      activeCategory === "all" || p.category === activeCategory
                  )
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -8 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300_marks"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg text-gray-900">
                            {project.title}
                          </h3>
                          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                            {project.year}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 3).map((t, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => navigate("/case-study/1")}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
                        >
                          View Details <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
              {/* </AnimatePresence> */}
            </motion.div>

            {/* <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Explore All Projects
              </motion.button>
            </div> */}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 rounded-3xl p-10 sm:p-16 text-center text-white max-w-5xl mx-auto shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a solution that exceeds
              expectations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/get-in-touch")}
              className="bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </section>
      </LayoutGroup>
    </div>
  );
};

export default Portfolio;
