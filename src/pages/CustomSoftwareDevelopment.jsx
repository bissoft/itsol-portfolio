import { motion } from "framer-motion";
import {
  Code, Cpu, Settings, Puzzle, Server, Database, GitBranch, Shield,
  ArrowRight, Rocket, Layers, BarChart2, Zap, Globe, Clock, Smartphone,
  CircleDashed, Circle, ChevronRight,
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

const CustomSoftwareDevelopment = () => {
  const [activeTechTab, setActiveTechTab] = useState("languages");
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  // Background elements configuration
  const floatingBlobs = [
    { color: "bg-blue-100", size: 300, position: { x: 10, y: 20 }, delay: 0 },
    { color: "bg-blue-50", size: 400, position: { x: 80, y: 30 }, delay: 2 },
    { color: "bg-blue-100", size: 250, position: { x: 30, y: 70 }, delay: 4 }
  ];

  const solutions = [
    {
      icon: Puzzle,
      title: "Tailored Solutions",
      description: "Custom-built software designed specifically for your unique business processes and workflows",
      color: "from-blue-400 to-blue-600",
      path: "/product-development"
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Intelligent automation of repetitive tasks to boost efficiency and reduce errors",
      color: "from-blue-400 to-blue-600",
      path: "/data-&-ai"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Custom databases and analytics systems to turn data into actionable insights",
      color: "from-blue-400 to-blue-600",
      path: "/data-&-ai"
    },
    {
      icon: GitBranch,
      title: "Integration Ready",
      description: "Seamless connectivity with your existing tools and enterprise systems",
      color: "from-blue-400 to-blue-600",
      path: "/devops-&-cloud"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance-ready architectures",
      color: "from-blue-400 to-blue-600",
      path: "/cyber-security-services"
    },
    {
      icon: Server,
      title: "Scalable Architecture",
      description: "Future-proof systems designed to grow with your business needs",
      color: "from-blue-400 to-blue-600",
      path: "/devops-&-cloud"
    }
  ];

  const developmentProcess = [
    {
      phase: "Discovery",
      activities: [
        "Comprehensive requirement analysis",
        "Feasibility study & ROI projection",
        "Technology stack selection"
      ],
      icon: Layers,
      color: "blue-400"
    },
    {
      phase: "Design",
      activities: [
        "System architecture planning",
        "UI/UX prototyping",
        "Database schema design"
      ],
      icon: BarChart2,
      color: "blue-500"
    },
    {
      phase: "Development",
      activities: [
        "Agile sprint development",
        "Peer code reviews",
        "Continuous integration"
      ],
      icon: Code,
      color: "blue-600"
    },
    {
      phase: "Deployment",
      activities: [
        "Staging environment testing",
        "Load & performance testing",
        "Phased production rollout"
      ],
      icon: Rocket,
      color: "blue-400"
    },
    {
      phase: "Maintenance",
      activities: [
        "24/7 performance monitoring",
        "Feature updates & enhancements",
        "Security patches & upgrades"
      ],
      icon: Shield,
      color: "blue-500"
    }
  ];

  const technologyStacks = {
    languages: [
      { name: "TypeScript", description: "Statically typed JavaScript for large-scale apps", icon: "TS", color: "blue-400" },
      { name: "Python", description: "Versatile language for data and backend services", icon: "PY", color: "blue-500" },
      { name: "Java", description: "Enterprise-grade applications", icon: "JV", color: "blue-600" },
      { name: "C#", description: ".NET ecosystem for Windows applications", icon: "C#", color: "blue-400" }
    ],
    frameworks: [
      { name: "React/Next.js", description: "Modern frontend development", icon: "RCT", color: "blue-500" },
      { name: "Node.js", description: "JavaScript runtime for backend", icon: "ND", color: "blue-600" },
      { name: "Spring Boot", description: "Enterprise Java framework", icon: "SB", color: "blue-400" },
      { name: "Django", description: "Python web framework", icon: "DJ", color: "blue-500" }
    ],
    databases: [
      { name: "PostgreSQL", description: "Relational database", icon: "PG", color: "blue-600" },
      { name: "MongoDB", description: "NoSQL document database", icon: "MG", color: "blue-400" },
      { name: "Redis", description: "In-memory data store", icon: "RD", color: "blue-500" },
      { name: "Elasticsearch", description: "Search & analytics engine", icon: "ES", color: "blue-600" }
    ]
  };

  const caseStudies = [
    {
      title: "Manufacturing ERP",
      description: "Custom enterprise resource planning system for industrial equipment manufacturer",
      impact: "Reduced operational costs by 35%",
      technologies: ["C#", ".NET", "SQL Server"],
      icon: Settings,
      color: "blue-400"
    },
    {
      title: "Healthcare Analytics",
      description: "Patient data analysis platform for hospital network",
      impact: "Improved diagnosis accuracy by 28%",
      technologies: ["Python", "Django", "PostgreSQL"],
      icon: Database,
      color: "blue-500"
    },
    {
      title: "Logistics Automation",
      description: "Custom fleet management and routing system",
      impact: "Increased delivery efficiency by 42%",
      technologies: ["Java", "Spring", "MongoDB"],
      icon: GitBranch,
      color: "blue-600"
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
            Custom Software Development
          </motion.div>
        </div>
      </motion.div>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {floatingBlobs.map((blob, index) => (
          <FloatingBlob key={index} {...blob} />
        ))}
      </div>

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
            <p className="text-sm font-medium text-blue-600">Custom Software Development</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Bespoke <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Software Solutions</span> for Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We engineer custom software that aligns perfectly with your operational needs,
            giving you a competitive edge through technology innovation.
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
              onClick={() => navigate("/get-in-touch")}
            >
              Get Started <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/case-studies")}

            >
              View Case Studies <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Custom Development Approach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tailored solutions designed to solve your specific business challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredSolution(index)}
              onHoverEnd={() => setHoveredSolution(null)}
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
                <div className={`bg-gradient-to-r ${solution.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6`}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <solution.icon size={24} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>

                {/* Animated "Learn More" link */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSolution === index ? 1 : 0 }}
                >
                  <div onClick={() => navigate(solution.path)} className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                    Learn more <ArrowRight size={14} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured methodology to ensure quality and alignment with your goals
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
            {developmentProcess.map((step, index) => (
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
                  <step.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.phase}</h3>

                <ul className="space-y-3">
                  {step.activities.map((activity, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className={`text-${step.color} mt-1`}>
                        <Circle className="h-3 w-3 fill-current" />
                      </span>
                      <span className="text-gray-600">{activity}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile timeline connector */}
                {index < developmentProcess.length - 1 && (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Agnostic Approach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We select the perfect technology stack for your specific requirements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-blue-600 p-1 rounded-xl border border-white">
              {Object.keys(technologyStacks).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTechTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${activeTechTab === tab
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
            key={activeTechTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {technologyStacks[activeTechTab].map((tech, index) => (
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

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Software Success Stories</h2>
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

      {/* Unique Component: Customization Spectrum */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customization Spectrum</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From configuration to full custom development - we cover the entire spectrum
          </p>
        </motion.div>

        <div className="relative h-2 bg-gray-200 rounded-full max-w-4xl mx-auto mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-full" />

          {[
            { position: "5%", label: "Off-the-Shelf", description: "Pre-built solutions with minimal configuration" },
            { position: "35%", label: "Configured", description: "Customized existing platforms" },
            { position: "65%", label: "Customized", description: "Significant modifications to base systems" },
            { position: "95%", label: "Bespoke", description: "Fully custom-built from scratch" }
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`absolute -top-4 transform -translate-x-1/2`}
              style={{ left: point.position }}
            >
              <div className="relative">
                <div className="h-4 w-4 bg-white rounded-full border-2 border-blue-500" />
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-48 text-center">
                  <div className="text-sm font-medium text-gray-800">{point.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{point.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            We help you determine the right level of customization based on your budget,
            timeline, and long-term business objectives.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 rounded-lg bg-white border border-gray-300 text-blue-600 font-medium hover:bg-blue-50 inline-flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/get-in-touch")}
          >
            Assess Your Needs <ChevronRight size={16} />
          </motion.button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready for Custom Software?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can build the perfect solution for your unique business needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </motion.button> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => navigate("/get-in-touch")}

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

export default CustomSoftwareDevelopment;