import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  ShieldCheck,
  Code,
  ClipboardCheck,
  Bug,
  Server,
  Zap,
  BarChart2,
  Users,
  Globe,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  ArrowLeft,
  Smartphone,
  Layers,
  Terminal,
  Cpu,
  Activity,
  Database
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SoftwareQualityAssurance = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("automation");
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <ClipboardCheck className="text-white" size={24} />,
      title: "Test Planning",
      description: "Comprehensive test strategies tailored to your project requirements and risk assessment.",
      features: ["Test case development", "Requirement analysis", "Risk-based testing"],
      color: "from-blue-400 to-blue-600",
      path: "/software-quality-assurance"
    },
    {
      icon: <Bug className="text-white" size={24} />,
      title: "Defect Management",
      description: "Systematic identification, tracking and resolution of software defects.",
      features: ["Bug tracking systems", "Root cause analysis", "Priority classification"],
      color: "from-blue-400 to-blue-600",
      path: "/software-quality-assurance"
    },
    {
      icon: <Server className="text-white" size={24} />,
      title: "Automation Testing",
      description: "Efficient test automation frameworks for regression and performance testing.",
      features: ["Selenium/Playwright", "API testing", "CI/CD integration"],
      color: "from-blue-400 to-blue-600",
      path: "/testing-approach"
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Performance Testing",
      description: "Ensure your application performs under peak loads and stress conditions.",
      features: ["Load testing", "Stress testing", "Scalability analysis"],
      color: "from-blue-400 to-blue-600",
      path: "/testing-approach"
    }
  ];

  const tools = {
    automation: [
      { name: "Selenium", icon: <Code size={24} /> },
      { name: "Cypress", icon: <Terminal size={24} /> },
      { name: "Appium", icon: <Smartphone size={24} /> },
      { name: "Playwright", icon: <Layers size={24} /> }
    ],
    performance: [
      { name: "JMeter", icon: <Activity size={24} /> },
      { name: "LoadRunner", icon: <Zap size={24} /> },
      { name: "Gatling", icon: <BarChart2 size={24} /> }
    ],
    management: [
      { name: "JIRA", icon: <ClipboardCheck size={24} /> },
      { name: "TestRail", icon: <ShieldCheck size={24} /> },
      { name: "Zephyr", icon: <Database size={24} /> }
    ]
  };

  const processSteps = [
    {
      title: "Requirement Analysis",
      desc: "Understanding business logic and acceptance criteria.",
      icon: Globe,
      color: "text-blue-600"
    },
    {
      title: "Test Planning",
      desc: "Defining scope, strategy, and resource allocation.",
      icon: ClipboardCheck,
      color: "text-blue-600"
    },
    {
      title: "Test Design",
      desc: "Creating detailed test cases and scripts.",
      icon: Code,
      color: "text-blue-600"
    },
    {
      title: "Execution",
      desc: "Running manual and automated tests.",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      title: "Closure & Reporting",
      desc: "Final reporting and sign-off.",
      icon: CheckCircle,
      color: "text-blue-600"
    }
  ];

  const stats = [
    { value: "98%", label: "Defect Detection", icon: <ShieldCheck className="text-blue-500" /> },
    { value: "40%", label: "Cost Reduction", icon: <BarChart2 className="text-blue-500" /> },
    { value: "500+", label: "Projects Tested", icon: <Code className="text-blue-500" /> },
    { value: "50+", label: "QA Experts", icon: <Users className="text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
      >
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -3, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">Back</span>
        </motion.button>
        <div className="flex items-center gap-1 sm:gap-2">
          <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm"
          >
            Software Quality Assurance
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-70" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-70" />
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
            className="mb-6 inline-flex items-center bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium border border-blue-200"
          >
            <ShieldCheck className="mr-2" size={18} />
            Quality Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Flawless <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Software Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We ensure your software is bug-free, secure, and performant through rigorous testing methodologies and advanced automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg cursor-pointer flex items-center gap-2"
              onClick={() => navigate('/get-in-touch')}
            >
              Get QA Consultation <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border-2 border-blue-300 text-blue-500 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 cursor-pointer flex items-center gap-2"
              onClick={() => navigate('/case-studies')}
            >
              Learn More <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive QA Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            End-to-end quality assurance solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group h-full relative overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div onClick={() => navigate(service.path)} className="text-blue-500 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                Learn more <ChevronRight size={14} className="mt-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Testing Lifecycle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured approach to ensure 100% quality coverage
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 -translate-y-1/2 z-0 opacity-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className={`mx-auto w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <step.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools We Master</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We leverage industry-leading tools to deliver precision and efficiency
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tool Tabs */}
          <div className="flex justify-center mb-10 gap-2 flex-wrap">
            {Object.keys(tools).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold capitalize transition-all cursor-pointer ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {tools[activeTab].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl w-full text-center border border-gray-200 hover:border-blue-300 shadow-sm transition-all"
              >
                <div className="mx-auto bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                  <div className="text-blue-600">
                    {tool.icon}
                  </div>
                </div>
                <span className="font-semibold text-gray-800">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ensure Your Product's Success</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Don't let bugs compromise your user experience. Partner with us for world-class quality assurance.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate('/get-in-touch')}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg cursor-pointer"
              >
                Schedule a QA Audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareQualityAssurance;