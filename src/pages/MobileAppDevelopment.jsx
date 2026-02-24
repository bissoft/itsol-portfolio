import { motion } from "framer-motion";
import {
  Smartphone, Tablet, Download, Zap, Users, Shield, Cpu, GitBranch,
  ArrowRight, Rocket, Layers, BarChart2, Globe, Clock, Circle, ChevronRight,
  ArrowLeft
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Floating blob component for background
const FloatingBlob = ({ color, size, position, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.2, 0],
        x: [0, 100, 0],
        y: [0, -50, 0],
        transition: {
          duration: 20 + Math.random() * 10,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className={`absolute rounded-full filter blur-3xl ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`
      }}
    />
  );
};

const MobileAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState("cross-platform");
  const [hoveredCapability, setHoveredCapability] = useState(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Background elements configuration
  const floatingBlobs = [
    { color: "bg-blue-100", size: 300, position: { x: 10, y: 20 }, delay: 0 },
    { color: "bg-blue-50", size: 400, position: { x: 80, y: 30 }, delay: 2 },
    { color: "bg-blue-100", size: 250, position: { x: 30, y: 70 }, delay: 4 }
  ];

  const capabilities = [
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Native and cross-platform solutions with optimized performance",
      color: "from-blue-400 to-blue-600",
      path: "/mobile-app-development"
    },
    {
      icon: Tablet,
      title: "Tablet Optimized",
      description: "Perfectly scaled UIs for larger screens with adaptive layouts",
      color: "from-blue-400 to-blue-600",
      path: "/mobile-app-development"
    },
    {
      icon: Download,
      title: "App Store Ready",
      description: "Full publishing support including ASO and compliance",
      color: "from-blue-400 to-blue-600",
      path: "/mobile-app-development"
    },
    {
      icon: Zap,
      title: "Performance Tuned",
      description: "60fps smooth animations and optimized battery usage",
      color: "from-blue-400 to-blue-600",
      path: "/mobile-app-development"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive mobile experiences with gesture navigation",
      color: "from-blue-400 to-blue-600",
      path: "/ui-ux-design"
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "End-to-end encryption and biometric authentication",
      color: "from-blue-400 to-blue-600",
      path: "/cyber-security-services"
    }
  ];

  const developmentApproach = [
    {
      phase: "Strategy",
      icon: Layers,
      points: [
        "Market research & analysis",
        "Competitor benchmarking",
        "Feature prioritization matrix"
      ],
      color: "blue-400"
    },
    {
      phase: "Design",
      icon: Tablet,
      points: [
        "Mobile-first UX prototyping",
        "Design system creation",
        "Interactive UI animations"
      ],
      color: "blue-500"
    },
    {
      phase: "Development",
      icon: Cpu,
      points: [
        "Agile sprint development",
        "Weekly test builds",
        "Device-specific optimization"
      ],
      color: "blue-600"
    },
    {
      phase: "Launch",
      icon: Download,
      points: [
        "App store submission",
        "ASO optimization",
        "Launch marketing strategy"
      ],
      color: "blue-400"
    }
  ];

  const technologyStacks = {
    "cross-platform": [
      { name: "React Native", description: "JavaScript framework by Facebook", icon: "RN", color: "blue-400" },
      { name: "Flutter", description: "Google's UI toolkit with Dart", icon: "FL", color: "blue-500" },
      { name: "Ionic", description: "Hybrid apps with web technologies", icon: "IO", color: "blue-600" }
    ],
    "native": [
      { name: "Swift", description: "For iOS/macOS development", icon: "SW", color: "blue-500" },
      { name: "Kotlin", description: "Modern Android development", icon: "KT", color: "blue-600" },
      { name: "Jetpack Compose", description: "Declarative Android UI", icon: "JC", color: "blue-400" }
    ],
    "backend": [
      { name: "Firebase", description: "Google's mobile backend", icon: "FB", color: "blue-600" },
      { name: "AWS Amplify", description: "Cloud services for apps", icon: "AWS", color: "blue-400" },
      { name: "GraphQL", description: "Efficient data fetching", icon: "GQL", color: "blue-500" }
    ]
  };

  const caseStudies = [
    {
      title: "Fitness Tracker",
      description: "Cross-platform app with real-time health metrics",
      impact: "75% increase in user engagement",
      technologies: ["React Native", "Firebase", "HealthKit"],
      icon: Smartphone,
      color: "blue-400"
    },
    {
      title: "E-Commerce App",
      description: "Mobile shopping experience with AR previews",
      impact: "2.5x higher conversion rate",
      technologies: ["Flutter", "Node.js", "ARKit"],
      icon: Tablet,
      color: "blue-500"
    },
    {
      title: "Banking Portal",
      description: "Secure mobile banking with biometric auth",
      impact: "4.9-star app store rating",
      technologies: ["Swift", "Kotlin", "OAuth 2.0"],
      icon: Shield,
      color: "blue-600"
    }
  ];

  const appTypes = [
    {
      type: "Consumer Apps",
      examples: ["Social media", "E-commerce", "Entertainment"],
      icon: Users
    },
    {
      type: "Business Apps",
      examples: ["CRM", "Field service", "Inventory"],
      icon: BarChart2
    },
    {
      type: "Lifestyle Apps",
      examples: ["Health & fitness", "Travel", "Food"],
      icon: Globe
    },
    {
      type: "Utility Apps",
      examples: ["Calculators", "Scanners", "File managers"],
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden pt-10">
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
            backgroundColor: "rgba(59, 130, 246, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">Back</span>
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
            Mobile App Development
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
          >
            <p className="text-sm font-medium text-blue-600">Mobile App Development</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Transformative <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Mobile Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We craft high-performance mobile applications that engage users and drive business growth across all platforms and devices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/get-in-touch')}

            >
              Start Your App <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 cursor-pointer rounded-xl border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 flex items-center gap-2"
              onClick={() => navigate('/portfolio')}

            >
              View Portfolio <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mobile Development Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for all mobile platforms and use cases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCapability(index)}
              onHoverEnd={() => setHoveredCapability(null)}
              className="bg-white cursor-pointer p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
            >
              {/* Animated background effect on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>

              <div className="relative z-10">
                <div className={`bg-gradient-to-r ${capability.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6`}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <capability.icon size={24} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>

                {/* Animated "Learn More" link */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCapability === index ? 1 : 0 }}
                >
                  <div onClick={() => navigate(capability.path)} className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                    Learn more <ArrowRight size={14} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mobile Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A proven methodology for successful mobile app delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 -ml-0.5 origin-top"
          />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2">
            {developmentApproach.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: 0.2 * index }}
                className={`relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8 lg:mt-16"
                  }`}
              >
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg`}>
                  <stage.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{stage.phase}</h3>

                <ul className="space-y-3">
                  {stage.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className={`text-${stage.color} mt-1`}>
                        <Circle className="h-3 w-3 fill-current" />
                      </span>
                      <span className="text-gray-600">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile timeline connector */}
                {index < developmentApproach.length - 1 && (
                  <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <Rocket className="w-full h-full text-blue-400 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Platforms</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We work with all major mobile development technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-blue-600 p-1 rounded-xl border border-white">
              {Object.keys(technologyStacks).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${activeTab === tab
                      ? "bg-white text-gray-800"
                      : "text-white hover:text-white/80"
                    }`}
                >
                  {tab.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {technologyStacks[activeTab].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-blue-100 text-blue-600 p-3 rounded-lg font-bold`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-800">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unique Component: App Types Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile App Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We develop all types of mobile applications for diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appTypes.map((appType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm"
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <appType.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{appType.type}</h3>
              <ul className="space-y-2">
                {appType.examples.map((example, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <ChevronRight size={14} className="text-blue-500" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile App Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transformative solutions delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className={`h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden`}>
                <study.icon size={48} className={`text-${study.color} group-hover:scale-110 transition-transform z-10`} />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                  <Zap size={16} className={`text-${study.color}`} />
                  <span>{study.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 50],
                transition: {
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Mobile App?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's create an app that stands out in the crowded app stores
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight size={18} />
              </motion.button> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 flex items-center justify-center gap-2"
                onClick={() => navigate('/get-in-touch')}

              >
                Book a Consultation <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;