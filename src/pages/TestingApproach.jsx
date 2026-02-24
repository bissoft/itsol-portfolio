import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef } from "react";
import {
  ShieldCheck,
  Code,
  ClipboardCheck,
  Bug,
  Server,
  Zap,
  BarChart2,
  Cpu,
  Layers,
  GitBranch,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  X,
  Menu,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TestingApproach = () => {
  const containerRef = useRef();
  const navigate = useNavigate();
  const [activeMethodology, setActiveMethodology] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const methodologies = [
    {
      title: "Agile Testing",
      description:
        "Continuous testing integrated with agile development cycles for rapid feedback",
      icon: <GitBranch className="text-blue-500" size={24} />,
      benefits: [
        "Early defect detection",
        "Faster release cycles",
        "Better collaboration between dev and QA",
      ],
      process: [
        {
          step: "1",
          title: "Sprint Planning",
          description: "Define testable user stories",
        },
        {
          step: "2",
          title: "Test Design",
          description: "Create tests parallel to development",
        },
        {
          step: "3",
          title: "Continuous Execution",
          description: "Automated regression suites",
        },
        {
          step: "4",
          title: "Sprint Review",
          description: "Quality metrics reporting",
        },
      ],
    },
    {
      title: "Risk-Based Testing",
      description:
        "Focus on high-risk areas to optimize testing efforts and resources",
      icon: <ShieldCheck className="text-blue-500" size={24} />,
      benefits: [
        "Efficient resource allocation",
        "Higher ROI on testing",
        "Focused on business-critical areas",
      ],
      process: [
        {
          step: "1",
          title: "Risk Assessment",
          description: "Identify high-risk components",
        },
        {
          step: "2",
          title: "Priority Mapping",
          description: "Create risk matrix",
        },
        {
          step: "3",
          title: "Test Allocation",
          description: "Distribute efforts by risk level",
        },
        {
          step: "4",
          title: "Dynamic Adjustment",
          description: "Update based on findings",
        },
      ],
    },
    {
      title: "Shift-Left Testing",
      description:
        "Early testing in the SDLC to prevent defects rather than detect them",
      icon: <ArrowRight className="text-blue-500" size={24} />,
      benefits: [
        "Reduced cost of fixes",
        "Higher quality deliverables",
        "Improved team productivity",
      ],
      process: [
        {
          step: "1",
          title: "Requirements Review",
          description: "Testability analysis",
        },
        {
          step: "2",
          title: "Static Testing",
          description: "Code reviews and analysis",
        },
        {
          step: "3",
          title: "Unit Test Coverage",
          description: "Developer testing",
        },
        {
          step: "4",
          title: "Component Testing",
          description: "Early integration checks",
        },
      ],
    },
  ];

  const testingTools = [
    {
      name: "Selenium",
      category: "Web Automation",
      icon: <Layers className="text-blue-500" />,
    },
    {
      name: "Playwright",
      category: "E2E Testing",
      icon: <Cpu className="text-blue-500" />,
    },
    {
      name: "Jest",
      category: "Unit Testing",
      icon: <Code className="text-blue-500" />,
    },
    {
      name: "JMeter",
      category: "Performance",
      icon: <Zap className="text-blue-500" />,
    },
    {
      name: "Postman",
      category: "API Testing",
      icon: <Server className="text-blue-500" />,
    },
    {
      name: "Cypress",
      category: "Component Testing",
      icon: <ClipboardCheck className="text-blue-500" />,
    },
  ];

  const testingPhases = [
    {
      phase: "Unit Testing",
      description: "Isolated component validation by developers",
      coverage: "80-90%",
      tools: "Jest, Mocha, PHPUnit",
    },
    {
      phase: "Integration Testing",
      description: "Verifying component interactions",
      coverage: "Critical paths",
      tools: "Cypress, TestNG",
    },
    {
      phase: "System Testing",
      description: "End-to-end business scenario validation",
      coverage: "100% requirements",
      tools: "Selenium, Playwright",
    },
    {
      phase: "Performance Testing",
      description: "Load, stress and scalability testing",
      coverage: "Peak usage scenarios",
      tools: "JMeter, Gatling",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800" ref={containerRef}>
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
            Testing Approach
          </motion.div>
        </div>
      </motion.div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-300"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.3, 0.8, 0.3],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center bg-blue-100 text-blue-600 px-6 py-2 rounded-full"
          >
            <ShieldCheck className="mr-2" />
            <span>Quality Assurance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Testing Approach
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl"
          >
            A strategic, data-driven methodology to ensure your software meets
            the highest quality standards while optimizing time and resources.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer"
              onClick={() => navigate("/get-in-touch")}
            >
              Get Custom QA Plan
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Methodology Tabs */}
      <section id="methodologies" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-blue-500">Testing Methodologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored approaches that adapt to your project requirements and
              development methodology
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm p-1 border border-gray-200">
                {methodologies.map((method, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-6 rounded-lg transition-colors ${activeMethodology === index
                      ? "bg-blue-50 border border-blue-100"
                      : "hover:bg-gray-50"
                      }`}
                    onClick={() => setActiveMethodology(index)}
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{method.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMethodology}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 h-full"
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {methodologies[activeMethodology].title} Process
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {methodologies[activeMethodology].process.map((step, i) => (
                      <motion.div
                        whileHover={{ y: -5 }}
                        key={i}
                        className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                      >
                        <div className="flex items-start">
                          <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            {step.step}
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">{step.title}</h4>
                            <p className="text-gray-600 text-sm">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {methodologies[activeMethodology].benefits.map(
                        (benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                              size={16}
                            />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Tools */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-blue-500">Testing Toolbox</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading tools and frameworks we leverage to deliver
              comprehensive test coverage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {testingTools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {tool.icon}
                </div>
                <h3 className="font-bold mb-1">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testing Phases */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comprehensive{" "}
              <span className="text-blue-500">Testing Phases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered testing strategy that validates quality at every
              stage
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>

            {testingPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 lg:mb-16 ${index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2"
                  }`}
              >
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative">
                  <div className="absolute -top-4 -left-4 bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{phase.phase}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>

                  <div className="flex flex-wrap gap-4">
                    <div className="bg-blue-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-600">Coverage:</span>
                      <span className="font-medium ml-2">{phase.coverage}</span>
                    </div>
                    <div className="bg-blue-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-600">Tools:</span>
                      <span className="font-medium ml-2">{phase.tools}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

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
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 50],
                transition: {
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          ))}

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Implement Our Proven Testing Approach?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can tailor our testing methodology to your
              specific project needs.
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
                Get QA Consultation
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TestingApproach;
