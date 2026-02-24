import { motion } from "framer-motion";
import {
  Database, Cpu, BrainCircuit, LineChart, Network, Binary, Shield,
  ArrowRight, Rocket, Layers, BarChart2, Globe, Clock, Circle, ChevronRight,
  Cloud, Server, Code, Lock, Sparkles, BarChart,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataAndAI = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [hoveredCapability, setHoveredCapability] = useState(null);
  const navigate = useNavigate()

  const capabilities = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust pipelines and warehouses for structured and unstructured data",
      color: "from-blue-400 to-blue-600",
      path: "/devops-&-cloud"
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description: "Predictive models and AI solutions tailored to your business needs",
      color: "from-blue-400 to-blue-600",
      path: "/data-&-ai"
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights",
      color: "from-blue-400 to-blue-600",
      path: "/data-&-ai"
    },
    {
      icon: Network,
      title: "Computer Vision",
      description: "Image and video analysis for automation and quality control",
      color: "from-blue-400 to-blue-600",
      path: "/emerging-technologies"
    },
    {
      icon: Binary,
      title: "NLP Systems",
      description: "Text analysis, generation, and conversational AI",
      color: "from-blue-400 to-blue-600",
      path: "/emerging-technologies"
    },
    {
      icon: Shield,
      title: "AI Governance",
      description: "Ethical AI frameworks and compliance solutions",
      color: "from-blue-400 to-blue-600",
      path: "/cyber-security-services"
    }
  ];

  const developmentApproach = [
    {
      phase: "Discovery",
      icon: Layers,
      points: [
        "Data landscape assessment",
        "Use case identification",
        "ROI analysis"
      ],
      color: "blue"
    },
    {
      phase: "Data Prep",
      icon: Database,
      points: [
        "Data collection & cleaning",
        "Feature engineering",
        "Data labeling"
      ],
      color: "blue"
    },
    {
      phase: "Modeling",
      icon: Cpu,
      points: [
        "Algorithm selection",
        "Model training",
        "Validation & testing"
      ],
      color: "blue"
    },
    {
      phase: "Deployment",
      icon: Cloud,
      points: [
        "API development",
        "Integration pipelines",
        "Performance monitoring"
      ],
      color: "blue"
    }
  ];

  const technologyStacks = {
    "ai": [
      { name: "TensorFlow", description: "End-to-end ML platform", icon: "TF" },
      { name: "PyTorch", description: "Flexible deep learning framework", icon: "PT" },
      { name: "Hugging Face", description: "State-of-the-art NLP models", icon: "HF" }
    ],
    "data": [
      { name: "Snowflake", description: "Cloud data warehouse", icon: "SF" },
      { name: "Spark", description: "Large-scale data processing", icon: "SP" },
      { name: "Airflow", description: "Workflow orchestration", icon: "AF" }
    ],
    "visualization": [
      { name: "Tableau", description: "Business intelligence", icon: "TB" },
      { name: "Power BI", description: "Interactive dashboards", icon: "PB" },
      { name: "Looker", description: "Data exploration", icon: "LK" }
    ]
  };

  const caseStudies = [
    {
      title: "Predictive Maintenance",
      description: "AI system reducing equipment downtime by 40%",
      impact: "$2.8M annual savings",
      technologies: ["TensorFlow", "IoT Sensors", "Time Series"],
      icon: Cpu,
      color: "blue"
    },
    {
      title: "Customer Churn Analysis",
      description: "ML model identifying at-risk customers",
      impact: "22% retention improvement",
      technologies: ["XGBoost", "Snowflake", "Tableau"],
      icon: BarChart,
      color: "blue"
    },
    {
      title: "Fraud Detection",
      description: "Real-time transaction monitoring system",
      impact: "90% fraud caught early",
      technologies: ["PyTorch", "Kafka", "Graph DB"],
      icon: Shield,
      color: "blue"
    }
  ];

  const dataTypes = [
    {
      type: "Structured Data",
      examples: ["SQL databases", "Spreadsheets", "CRM systems"],
      icon: Database
    },
    {
      type: "Unstructured Data",
      examples: ["Documents", "Images", "Video files"],
      icon: Server
    },
    {
      type: "Time Series",
      examples: ["Sensor data", "Stock prices", "Weather data"],
      icon: Clock
    },
    {
      type: "Graph Data",
      examples: ["Social networks", "Recommendations", "Fraud patterns"],
      icon: Network
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
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
            Data and AI
          </motion.div>
        </div>
      </motion.div>
      {/* Animated Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden ">
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
            <p className="text-sm font-medium text-blue-600">Data & AI Solutions</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Transform <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Data into Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We build AI-powered systems that extract insights, automate decisions, and create competitive advantages from your data.
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
              Start Your AI Journey <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/case-studies")}
            >
              See Case Studies <ArrowRight size={18} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Data & AI Capabilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            End-to-end solutions to unlock the value in your data
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
              className={`bg-white p-8 rounded-2xl border ${hoveredCapability === index ? "border-blue-300" : "border-gray-200"
                } transition-all shadow-sm hover:shadow-md relative overflow-hidden group`}
            >
              {/* Animated background highlight */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>

              <div className={`bg-gradient-to-r ${capability.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 relative z-10`}>
                <capability.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{capability.description}</p>

              {/* Animated "Learn More" link */}
              <motion.div
                className="mt-4 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCapability === index ? 1 : 0 }}
              >
                <div onClick={() => navigate(capability.path)} className="text-blue-500 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                  Learn more <ArrowRight size={14} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Development Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured approach to building effective AI systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 -ml-0.5 origin-top"
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
                <h3 className="text-xl font-semibold mb-3">{stage.phase}</h3>

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
                      <span className={`text-blue-500 mt-1`}>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cutting-edge tools for data processing and AI development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-blue-50 p-1 rounded-xl border border-blue-100">
              {Object.keys(technologyStacks).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "text-blue-600 hover:text-blue-800"
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
                  <div className={`bg-blue-100 text-blue-600 p-3 rounded-lg`}>
                    <span className="font-bold">{tech.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Types Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Types We Work With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We extract insights from all forms of enterprise data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataTypes.map((dataType, index) => (
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
                <dataType.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{dataType.type}</h3>
              <ul className="space-y-2">
                {dataType.examples.map((example, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transformative AI solutions delivering measurable business impact
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
              className={`bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all shadow-lg group`}
            >
              <div className={`h-48 bg-blue-100 flex items-center justify-center`}>
                <study.icon size={48} className={`text-blue-500 group-hover:scale-110 transition-transform`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                  <Sparkles size={16} className={`text-blue-500`} />
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

      {/* Animated CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Unleash AI in Your Business?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's build intelligent systems that transform your data into competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => navigate("/get-in-touch")}

              >
                Start Your AI Project <ArrowRight size={18} />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Book a Data Assessment <ArrowRight size={18} />
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DataAndAI;