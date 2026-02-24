import { motion } from "framer-motion";
import {
  MonitorSmartphone, Code, LayoutTemplate, Smartphone, Zap, Globe, Cpu,
  ArrowRight, Rocket, Database, Server, GitBranch, Layers, BarChart2, Shield, Clock,
  ChevronRight,
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

const WebAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const containerRef = useRef(null);

  // Background elements configuration
  const floatingBlobs = [
    { color: "bg-blue-100", size: 300, position: { x: 10, y: 20 }, delay: 0 },
    { color: "bg-blue-50", size: 400, position: { x: 80, y: 30 }, delay: 2 },
    { color: "bg-blue-100", size: 250, position: { x: 30, y: 70 }, delay: 4 }
  ];

  const features = [
    {
      icon: MonitorSmartphone,
      title: "Responsive Design",
      description: "Flawless experience across all devices with adaptive layouts",
      color: "from-blue-400 to-blue-600",
      path: "/web-app-development"
    },
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "React, Next.js, Vue, and Angular for cutting-edge solutions",
      color: "from-blue-400 to-blue-600",
      path: "/web-app-development"
    },
    {
      icon: LayoutTemplate,
      title: "UI/UX Focused",
      description: "Intuitive interfaces with user-centric design principles",
      color: "from-blue-400 to-blue-600",
      path: "/ui-ux-design"
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "App-like experience with offline capabilities",
      color: "from-blue-400 to-blue-600",
      path: "/mobile-app-development"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "90+ Lighthouse scores with optimized assets",
      color: "from-blue-400 to-blue-600",
      path: "/web-app-development"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "CDN-powered delivery for worldwide audiences",
      color: "from-blue-400 to-blue-600",
      path: "/devops-&-cloud"
    }
  ];

  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    backend: ["Node.js", "Express", "GraphQL", "Firebase", "MongoDB", "PostgreSQL"],
    devops: ["AWS", "Docker", "CI/CD", "Serverless", "Vercel", "Kubernetes"]
  };

  const caseStudies = [
    {
      title: "E-Commerce Platform",
      description: "Built a high-performance solution increasing conversions by 45%",
      impact: "10,000+ concurrent users during peak seasons",
      technologies: ["React", "Node.js", "MongoDB"],
      icon: MonitorSmartphone,
      color: "blue-400"
    },
    {
      title: "SaaS Application",
      description: "Developed a scalable platform with real-time collaboration",
      impact: "Reduced onboarding time by 60%",
      technologies: ["Next.js", "GraphQL", "AWS"],
      icon: Globe,
      color: "blue-500"
    },
    {
      title: "Enterprise Dashboard",
      description: "Created a data visualization platform for business analytics",
      impact: "Processed 1M+ data points daily",
      technologies: ["TypeScript", "D3.js", "Firebase"],
      icon: BarChart2,
      color: "blue-600"
    }
  ];

  const processSteps = [
    { title: "Discovery", description: "Requirement analysis & planning", icon: Layers },
    { title: "Design", description: "UI/UX & system architecture", icon: LayoutTemplate },
    { title: "Development", description: "Agile implementation", icon: Code },
    { title: "Testing", description: "Quality assurance", icon: Shield },
    { title: "Deployment", description: "Production rollout", icon: Rocket },
    { title: "Maintenance", description: "Ongoing support", icon: Clock }
  ];

  const navigate = useNavigate()
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
            Web App Development
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Animated background elements */}
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
            <p className="text-sm font-medium text-blue-600">Web App Development</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">High-Performance</span> Web Applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We create responsive, scalable web applications that deliver exceptional
            user experiences and measurable business results.
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
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 font-semibold shadow-lg flex items-center gap-2 text-white cursor-pointer"
              onClick={() => navigate('/get-in-touch')}
            >
              Start Your Project <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl border-blue-300 text-blue-500 border-2 font-semibold hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/case-studies')}

            >
              View Case Studies <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to your business requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
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
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6`}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <feature.icon size={24} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Animated "Learn More" link */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                >
                  <div onClick={() => navigate(feature.path)} className="text-blue-600 text-sm font-medium flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Tech Stack Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cutting-edge technologies powering our web applications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-blue-600 p-1 rounded-xl border border-white">
              {Object.keys(techStack).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors cursor-pointer ${activeTab === tab
                      ? "bg-white text-gray-800"
                      : "text-white hover:text-white/80"
                    }`}
                >
                  {tab}
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
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {techStack[activeTab].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-white p-4 rounded-lg border border-blue-200 hover:border-blue-300 text-center shadow-sm"
              >
                <div className="text-blue-500 text-sm mb-1">{activeTab}</div>
                <h3 className="font-medium text-gray-800">{tech}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured approach to building successful web applications
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
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: 0.2 * index }}
                className={`relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8 lg:mt-16"
                  }`}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <step.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Mobile timeline connector */}
                {index < processSteps.length - 1 && (
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

      {/* Interactive Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Web App Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transformative solutions delivering measurable results
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
                      className={`bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs`}
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

      {/* Interactive Tech Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Framework Comparison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choosing the right technology for your project needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "React", bestFor: "SPAs, Complex UIs", perf: "Fast", learning: "Moderate" },
            { name: "Next.js", bestFor: "SSR, SEO", perf: "Very Fast", learning: "Moderate" },
            { name: "Vue", bestFor: "Prototyping", perf: "Fast", learning: "Easy" }
          ].map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{framework.name}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Best For</p>
                  <p className="font-medium text-gray-800">{framework.bestFor}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Performance</p>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 rounded-full ${framework.perf === "Very Fast" ? "bg-blue-500 w-full" :
                        framework.perf === "Fast" ? "bg-blue-400 w-3/4" : "bg-blue-300 w-1/2"
                      }`} />
                    <span className="text-gray-800">{framework.perf}</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Learning Curve</p>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 rounded-full ${framework.learning === "Easy" ? "bg-blue-300 w-1/3" :
                        framework.learning === "Moderate" ? "bg-blue-400 w-2/3" : "bg-blue-500 w-full"
                      }`} />
                    <span className="text-gray-800">{framework.learning}</span>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Web App?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can create a high-performance web application for your business
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
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 flex items-center justify-center gap-2 cursor-pointer"
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

export default WebAppDevelopment;