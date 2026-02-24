import { motion } from "framer-motion";
import { useState } from "react";
import { Activity, AlertCircle, BarChart2, Cpu, Database, Eye, Filter, Globe, HardDrive, Server, Shield, Zap, ArrowRight, ChevronRight, CheckCircle, Clock, Code, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MonitoringLoggingServices = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate()
  const services = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "24/7 visibility into system performance and health metrics",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    },
    {
      icon: HardDrive,
      title: "Centralized Logging",
      description: "Aggregate and analyze logs from all systems in one place",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    },
    {
      icon: AlertCircle,
      title: "Alerting & Incident Management",
      description: "Proactive notifications and automated response workflows",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Historical trends and capacity planning insights",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Detect and respond to security threats in real-time",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/cyber-security-services"
    },
    {
      icon: Globe,
      title: "Distributed Tracing",
      description: "Track requests across microservices architectures",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    },
    {
      icon: Filter,
      title: "Log Filtering & Parsing",
      description: "Extract meaningful insights from noisy log data",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    },
    {
      icon: Database,
      title: "Long-term Log Retention",
      description: "Compliant storage with fast search capabilities",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Monitoring",
      description: "Reduced downtime incidents by 65% with proactive alerting",
      icon: <Activity className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "65% fewer outages",
      tags: ["Prometheus", "Grafana", "PagerDuty"]
    },
    {
      title: "FinTech Security Logging",
      description: "Achieved SOC 2 compliance with centralized audit logging",
      icon: <Shield className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "SOC 2 Compliance",
      tags: ["ELK Stack", "SIEM", "AWS"]
    },
    {
      title: "SaaS Performance Optimization",
      description: "Improved response times by 40% through metrics analysis",
      icon: <BarChart2 className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "40% faster responses",
      tags: ["Datadog", "New Relic", "Kubernetes"]
    }
  ];

  const metrics = [
    {
      name: "Mean Time to Detect (MTTD)",
      progress: 75,
      color: "bg-blue-500",
      icon: <Clock className="text-blue-500" />
    },
    {
      name: "Mean Time to Resolve (MTTR)",
      progress: 68,
      color: "bg-blue-500",
      icon: <Zap className="text-blue-500" />
    },
    {
      name: "System Availability",
      progress: 99.9,
      color: "bg-blue-500",
      icon: <CheckCircle className="text-blue-500" />
    },
    {
      name: "Alert Accuracy",
      progress: 92,
      color: "bg-blue-500",
      icon: <Eye className="text-blue-500" />
    }
  ];

  const tools = [
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Visualization" },
    { name: "ELK Stack", category: "Logging" },
    { name: "Datadog", category: "APM" },
    { name: "New Relic", category: "Observability" },
    { name: "Splunk", category: "SIEM" },
    { name: "Loki", category: "Log Aggregation" },
    { name: "Jaeger", category: "Distributed Tracing" }
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
            Monitoring and Logging Service
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
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

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
        >
          <p className="text-sm font-medium text-blue-600">Observability Services</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Advanced <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Monitoring & Logging</span> Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Gain full-stack visibility, detect issues before they impact users, and troubleshoot faster with comprehensive observability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/get-in-touch")}

          >
            Get Observability Audit <ArrowRight size={18} />
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
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Observability Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            End-to-end solutions for monitoring, logging, and alerting across your stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className={`bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md relative overflow-hidden group`}
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

              <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 relative z-10`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10 mb-4">{service.description}</p>

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: hoveredService === index ? 1 : 0, x: hoveredService === index ? 0 : -5 }}
              >
                <div onClick={() => navigate(service.path)} className="text-blue-500 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                  Learn more <ChevronRight size={14} className="mt-0.5" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Observability Metrics We Improve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Measurable impact on critical monitoring and logging indicators
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-blue-100 transition-all">
                  {metric.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-gray-800">{metric.name}</span>
                    <motion.span
                      className="font-medium text-blue-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 1 }}
                    >
                      {metric.progress}{metric.name.includes("Availability") ? "% uptime" : "% improvement"}
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <motion.div
                      className={`${metric.color} h-2.5 rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      <motion.div
                        className="absolute right-0 top-0 w-2 h-2.5 bg-white rounded-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 1 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Monitoring & Logging Toolbox</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We work with all leading observability platforms and can recommend the best fit for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {tool.category === "Monitoring" && <Activity size={24} />}
                {tool.category === "Visualization" && <BarChart2 size={24} />}
                {tool.category === "Logging" && <Database size={24} />}
                {tool.category === "APM" && <Cpu size={24} />}
                {tool.category === "Observability" && <Eye size={24} />}
                {tool.category === "SIEM" && <Shield size={24} />}
                {tool.category === "Log Aggregation" && <HardDrive size={24} />}
                {tool.category === "Distributed Tracing" && <Globe size={24} />}
              </div>
              <h3 className="font-semibold mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-500">{tool.category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Observability Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-world examples of monitoring and logging transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="bg-blue-100 p-2 rounded-full"
                  whileHover={{ rotate: 15 }}
                >
                  {caseStudy.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{caseStudy.description}</p>

              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Zap className="text-blue-500" size={16} />
                  <span className="text-sm font-medium text-blue-600">{caseStudy.impact}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl my-16 border border-blue-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Observability Implementation Process</h2>
            <p className="text-gray-600 mb-6">
              A structured approach to building effective monitoring and logging:
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: <CheckCircle className="text-blue-500 mt-1" />,
                  title: "Requirements Analysis",
                  description: "Understand your systems and observability needs"
                },
                {
                  icon: <Code className="text-blue-500 mt-1" />,
                  title: "Tool Selection",
                  description: "Recommend and implement the right monitoring stack"
                },
                {
                  icon: <Server className="text-blue-500 mt-1" />,
                  title: "Instrumentation",
                  description: "Configure agents, exporters, and log collectors"
                },
                {
                  icon: <AlertCircle className="text-blue-500 mt-1" />,
                  title: "Alerting Strategy",
                  description: "Define meaningful thresholds and notification channels"
                },
                {
                  icon: <BarChart2 className="text-blue-500 mt-1" />,
                  title: "Dashboard Design",
                  description: "Create actionable visualizations for your teams"
                }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-64 lg:h-96"
          >
            {/* Animated monitoring elements */}
            {[
              { icon: <Activity className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 32, delay: 0 },
              { icon: <Database className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 24, delay: 1 },
              { icon: <AlertCircle className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 28, delay: 2 }
            ].map((element, i) => (
              <motion.div
                key={i}
                className={`absolute ${element.color} border-2 ${element.border} rounded-full flex items-center justify-center`}
                style={{
                  width: element.size,
                  height: element.size,
                  left: i === 0 ? '0' : i === 1 ? 'right-0 top-1/4' : 'left-1/4 bottom-0'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: element.delay
                }}
              >
                {element.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2
            }}
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">Ready to Transform Your Observability?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg relative z-10">
            Let's implement monitoring and logging that gives you real operational insights
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => navigate("/get-in-touch")}

            >
              Speak to an Expert
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => navigate("/get-in-touch")}

            >
              Speak to an Expert
              <ArrowRight size={18} />
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MonitoringLoggingServices;