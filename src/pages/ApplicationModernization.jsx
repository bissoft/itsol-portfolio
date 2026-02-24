import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Cloud, Database, Lock, RefreshCw, Zap, ArrowRight, ChevronRight, CheckCircle, Server, Code, Layers, Smartphone, Shield, Gauge, Rocket, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApplicationModernization = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless transition of legacy applications to modern cloud platforms",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/devops-&-cloud"
    },
    {
      icon: RefreshCw,
      title: "Replatforming",
      description: "Lift-and-shift approach with minimal code changes for faster ROI",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/devops-&-cloud"
    },
    {
      icon: Code,
      title: "Refactoring",
      description: "Restructuring existing code for improved performance and maintainability",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/custom-software-development"
    },
    {
      icon: Cpu,
      title: "Microservices",
      description: "Decomposing monoliths into independently deployable services",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/custom-software-development"
    },
    {
      icon: Database,
      title: "Database Modernization",
      description: "Migrating to modern database technologies with optimized performance",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/data-&-ai"
    },
    {
      icon: Smartphone,
      title: "UI Modernization",
      description: "Revitalizing user interfaces with modern frameworks and responsive design",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/ui-ux-design"
    },
    {
      icon: Layers,
      title: "Containerization",
      description: "Packaging applications with Docker and Kubernetes for portability",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/containerization-and-orchestration-services"
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Identifying and resolving bottlenecks in legacy applications",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    }
  ];

  const caseStudies = [
    {
      title: "Mainframe to Cloud Migration",
      description: "Modernized insurance core systems reducing operational costs by 60%",
      icon: <Cloud className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "60% cost reduction",
      tags: ["AWS", "Microservices", "Mainframe"]
    },
    {
      title: "Legacy .NET Modernization",
      description: "Refactored monolithic application improving deployment speed by 80%",
      icon: <RefreshCw className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "80% faster deployments",
      tags: [".NET Core", "Azure", "CI/CD"]
    },
    {
      title: "Java EE to Cloud Native",
      description: "Transformed enterprise application increasing scalability 5x",
      icon: <Server className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "5x scalability",
      tags: ["Kubernetes", "Spring Boot", "GCP"]
    }
  ];

  const benefits = [
    {
      name: "Reduced Costs",
      progress: 75,
      color: "bg-blue-500",
      icon: <Zap className="text-blue-500" />
    },
    {
      name: "Improved Performance",
      progress: 90,
      color: "bg-blue-500",
      icon: <Gauge className="text-blue-500" />
    },
    {
      name: "Enhanced Security",
      progress: 85,
      color: "bg-blue-500",
      icon: <Shield className="text-blue-500" />
    },
    {
      name: "Faster Time-to-Market",
      progress: 70,
      color: "bg-blue-500",
      icon: <Rocket className="text-blue-500" />
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
            Application Modernization
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
          <p className="text-sm font-medium text-blue-600">Application Modernization</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Modernize Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Legacy Applications</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Transform outdated systems into agile, cloud-native applications that drive business growth.
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
            Assess Your Apps <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/case-studies")}
          >
            View Case Studies <ArrowRight size={18} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Modernization Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tailored approaches to bring your applications into the modern era
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modernization Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The measurable impact of application modernization
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
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
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-gray-800">{benefit.name}</span>
                    <motion.span
                      className="font-medium text-blue-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 1 }}
                    >
                      {benefit.progress}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <motion.div
                      className={`${benefit.color} h-2.5 rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${benefit.progress}%` }}
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

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modernization Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-world transformations delivering measurable results
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
            <h2 className="text-3xl font-bold mb-6">Our Modernization Approach</h2>
            <p className="text-gray-600 mb-6">
              A structured methodology to ensure successful application transformations:
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: <CheckCircle className="text-blue-500 mt-1" />,
                  title: "Assessment & Planning",
                  description: "Comprehensive analysis of your current application landscape"
                },
                {
                  icon: <Server className="text-blue-500 mt-1" />,
                  title: "Architecture Design",
                  description: "Creating future-proof technical blueprints"
                },
                {
                  icon: <Code className="text-blue-500 mt-1" />,
                  title: "Incremental Modernization",
                  description: "Phased implementation minimizing business disruption"
                },
                {
                  icon: <Shield className="text-blue-500 mt-1" />,
                  title: "Security Integration",
                  description: "Embedding modern security practices throughout"
                },
                {
                  icon: <Gauge className="text-blue-500 mt-1" />,
                  title: "Performance Testing",
                  description: "Ensuring applications meet modern performance standards"
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
            {/* Animated tech elements */}
            {[
              { icon: <Cloud className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 32, delay: 0 },
              { icon: <Database className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 24, delay: 1 },
              { icon: <Cpu className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 28, delay: 2 }
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

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">Ready to Modernize Your Applications?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg relative z-10">
            Let's discuss how we can transform your legacy systems into modern, agile applications
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => navigate("/get-in-touch")}

            >
              Get Free Assessment
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
              className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 flex items-center justify-center gap-2"
            >
              Contact Experts
              <ArrowRight size={18} />
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ApplicationModernization;