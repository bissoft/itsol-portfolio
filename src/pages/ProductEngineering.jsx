import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code, Database, Server, Cloud, Users, Rocket, Shield, Layers,
  BarChart2, Zap, Globe, Clock, Smartphone, GitBranch, Cpu,
  ArrowLeft, ArrowRight, ChevronRight, Target, Award, CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductEngineering = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Code,
      title: "Full-Cycle Development",
      description: "End-to-end product development from concept to deployment and continuous improvement",
      color: "from-blue-400 to-blue-600",
      path: "/custom-software-development"
    },
    {
      icon: Cpu,
      title: "Tech Architecture",
      description: "Scalable, resilient systems designed for future growth",
      color: "from-blue-400 to-blue-600",
      path: "/custom-software-development"
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Intelligent data pipelines and storage architectures",
      color: "from-blue-400 to-blue-600",
      path: "/data-&-ai"
    },
    {
      icon: Server,
      title: "DevOps Integration",
      description: "Automated CI/CD pipelines for seamless delivery",
      color: "from-blue-400 to-blue-600",
      path: "/devops-&-cloud"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Optimized for cloud scalability and performance",
      color: "from-blue-400 to-blue-600",
      path: "/devops-&-cloud"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Agile processes with transparent communication",
      color: "from-blue-400 to-blue-600",
      path: "/custom-software-development"
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Deep dive into your business objectives and user needs",
      icon: Layers
    },
    {
      title: "Design",
      description: "Crafting intuitive interfaces and robust architectures",
      icon: BarChart2
    },
    {
      title: "Development",
      description: "Agile sprints with continuous integration",
      icon: Code
    },
    {
      title: "Testing",
      description: "Comprehensive QA and performance validation",
      icon: Shield
    },
    {
      title: "Deployment",
      description: "Smooth rollout with zero downtime",
      icon: Rocket
    },
    {
      title: "Maintenance",
      description: "Proactive monitoring and iterative improvements",
      icon: Cpu
    }
  ];

  const technologies = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Vue.js", icon: "🟩" },
      { name: "Angular", icon: "🅰️" },
      { name: "Next.js", icon: "▲" }
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "Go", icon: "🐹" }
    ],
    cloud: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔷" },
      { name: "Google Cloud", icon: "🌈" }
    ],
    mobile: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🐦" },
      { name: "iOS", icon: "🍎" },
      { name: "Android", icon: "🤖" }
    ]
  };

  const caseStudies = [
    {
      title: "Fintech Platform",
      description: "Scalable banking solution processing 1M+ transactions daily",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      title: "Healthcare SaaS",
      description: "HIPAA-compliant patient management system",
      tags: ["TypeScript", "GraphQL", "Kubernetes"]
    },
    {
      title: "Retail Analytics",
      description: "Real-time inventory and customer behavior tracking",
      tags: ["Python", "TensorFlow", "BigQuery"]
    }
  ];

  const lifecycleStages = [
    {
      stage: "MVP",
      title: "Minimum Viable Product",
      focus: "Time-to-market",
      desc: "Rapid prototyping and core feature development to validate market fit.",
      icon: Rocket,
      color: "bg-blue-100 text-blue-600"
    },
    {
      stage: "PMF",
      title: "Product-Market Fit",
      focus: "User Feedback",
      desc: "Iterative enhancements based on real user data and analytics.",
      icon: Target,
      color: "bg-purple-100 text-purple-600"
    },
    {
      stage: "Scale",
      title: "Hyper-Growth",
      focus: "Performance",
      desc: "Architectural optimization to handle millions of concurrent users.",
      icon: Activity,
      color: "bg-green-100 text-green-600"
    },
    {
      stage: "Mature",
      title: "Enterprise Grade",
      focus: "Stability",
      desc: "Robust governance, security compliance, and legacy modernization.",
      icon: Award,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  function Activity(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
      >
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

        <div className="flex items-center gap-1 sm:gap-2">
          <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
          >
            Product Engineering
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-70" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-70" />
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
            <p className="text-sm font-medium text-blue-600">Product Engineering Excellence</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Future-Ready</span> Digital Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We engineer digital products that solve real problems, scale effortlessly,
            and deliver exceptional user experiences through cutting-edge technology.
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
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg cursor-pointer flex items-center gap-2"
              onClick={() => navigate('/get-in-touch')}
            >
              Start Your Project <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 cursor-pointer flex items-center gap-2"
              onClick={() => navigate('/case-studies')}
            >
              View Case Studies <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "150+", text: "Products Launched" },
            { value: "99.9%", text: "Uptime Guarantee" },
            { value: "1M+", text: "Daily Users Supported" },
            { value: "4.9/5", text: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <p className="text-gray-600 text-sm font-medium">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 rounded-3xl my-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Evolution Lifecycle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Supporting your product at every stage of its journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifecycleStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden h-full"
            >
              <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center mb-4`}>
                <stage.icon size={20} />
              </div>
              <div className="absolute top-4 right-4 font-bold text-gray-100 text-5xl select-none -z-10">0{index + 1}</div>

              <h3 className="text-xl font-bold mb-1 text-gray-900">{stage.stage}</h3>
              <p className="text-xs font-bold text-blue-500 mb-3 uppercase tracking-wider">{stage.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Engineering Capabilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive services to take your product from idea to market leader
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
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6 relative z-10`}>
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 relative z-10">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>

              <motion.div
                className="relative z-10 mt-4"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: hoveredFeature === index ? 1 : 0, x: hoveredFeature === index ? 0 : -5 }}
              >
                <div onClick={() => navigate(feature.path)} className="text-blue-500 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                  Learn more <ChevronRight size={14} className="mt-0.5" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack with Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Modern tools for modern problems
          </p>
        </motion.div>

        <div className="flex justify-center mb-10 gap-2 flex-wrap">
          {Object.keys(technologies).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold capitalize transition-all cursor-pointer ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center max-w-5xl mx-auto">
          {technologies[activeTab].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl w-full text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-center gap-3"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-semibold text-gray-800">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl mb-16 border border-blue-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Agile, transparent, and result-oriented
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <step.icon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Globe className="text-white opacity-80" size={48} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Product?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can help you create a market-leading digital product
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg cursor-pointer"
                onClick={() => navigate('/get-in-touch')}
              >
                Book a Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductEngineering;