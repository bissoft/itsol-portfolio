import { motion } from "framer-motion";
import { useState } from "react";
import { Cloud, Server, Repeat, Shield, Activity, GitBranch, ArrowRight, CheckCircle, Terminal, Database, Settings, ArrowLeft, ChevronRight, Circle, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DevOpsAndCloud = () => {
  const [activeTab, setActiveTab] = useState("cloud");
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless transition to AWS, Azure, or Google Cloud",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/devops-&-cloud"
    },
    {
      icon: Repeat,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment workflows",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/devops-&-cloud"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Manage infrastructure using Terraform and Ansible",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/devops-&-cloud"
    },
    {
      icon: Shield,
      title: "DevSecOps",
      description: "Integrated security scanning and compliance",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/cyber-security-services"
    },
    {
      icon: Activity,
      title: "Monitoring & Logging",
      description: "Real-time visibility with ELK, Prometheus, and Grafana",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/monitoring-and-logging"
    },
    {
      icon: GitBranch,
      title: "Microservices",
      description: "Container orchestration with Kubernetes",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/containerization-and-orchestration-services"
    }
  ];

  const workflowSteps = [
    {
      phase: "Plan",
      description: "Define requirements, architecture, and roadmap",
      icon: Settings,
      details: ["Capacity planning", "Security assessment", "Architecture design"]
    },
    {
      phase: "Code",
      description: "Development with version control and collaboration",
      icon: Terminal,
      details: ["Git branching strategy", "Code review policies", "Linting & formatting"]
    },
    {
      phase: "Build",
      description: "Automated compilation and package creation",
      icon: PackageIcon,
      details: ["Dependency management", "Docker image creation", "Artifact versioning"]
    },
    {
      phase: "Test",
      description: "Continuous testing and validation",
      icon: CheckCircle,
      details: ["Unit & integration tests", "Security scanning", "Performance testing"]
    },
    {
      phase: "Deploy",
      description: "Automated release to staging and production",
      icon: Rocket,
      details: ["Blue/Green deployment", "Canary releases", "Rollback strategies"]
    },
    {
      phase: "Monitor",
      description: "Real-time performance tracking and feedback",
      icon: Activity,
      details: ["Infrastructure metrics", "Application logging", "User experience tracking"]
    }
  ];

  const techStack = {
    cloud: [
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Google Cloud", icon: "gcp" }
    ],
    container: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "k8s" },
      { name: "OpenShift", icon: "openshift" }
    ],
    automation: [
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Terraform", icon: "terraform" }
    ]
  };

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
            className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm"
          >
            DevOps and Cloud
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
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
            <p className="text-sm font-medium text-blue-600">DevOps & Cloud Solutions</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Accelerate Delivery with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Intelligent Cloud</span> Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Modernize your deployment pipeline and infrastructure for speed, scalability, and security.
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
              Start Optimization <ArrowRight size={18} />
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
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud & DevOps Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            End-to-end solutions for your infrastructure and development lifecycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className={`bg-white p-8 rounded-2xl border ${hoveredService === index ? "border-blue-300" : "border-gray-200"
                } transition-all shadow-sm hover:shadow-md relative overflow-hidden group`}
            >
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

      {/* Tech Stack Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We work with industry-leading cloud platforms and DevOps tools
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          {Object.keys(techStack).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-sm font-medium capitalize transition-all ${activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {techStack[activeTab].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm hover:border-blue-300"
            >
              <div className="bg-blue-50 p-2 rounded-lg">
                <Settings className="text-blue-500" size={24} />
              </div>
              <span className="font-semibold text-gray-800">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>


      {/* DevOps Workflow - Vertical Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our DevOps Workflow</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A continuous loop of development and operations for faster delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline central line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 -ml-0.5 origin-top"
          />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: 0.1 * index }}
                className={`relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm ${index % 2 === 0 ? "lg:mr-10 xl:mr-16 text-right" : "lg:ml-10 xl:ml-16"
                  }`}
              >
                {/* Connector Dot */}
                <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10 ${index % 2 === 0 ? "-right-12 xl:-right-[70px]" : "-left-12 xl:-left-[70px]"
                  }`} />

                {/* Content */}
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:items-end" : "lg:items-start"} gap-3`}>
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-50 text-blue-600 mb-2">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.phase}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    {step.details.map((detail, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm text-gray-500 ${index % 2 === 0 ? "lg:flex-row-reverse" : "flex-row"}`}>
                        <Circle size={8} className="text-blue-400 fill-current" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900 rounded-3xl text-white overflow-hidden relative mb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Infrastructure Visualization</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Real-time insight into your entire cloud ecosystem
          </p>
        </div>

        <div className="relative h-[400px] w-full max-w-4xl mx-auto bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center justify-center overflow-hidden">
          {/* Animated Nodes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500/20 border border-blue-400/50 rounded-full p-4"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <Server className="text-blue-400" size={24} />
            </motion.div>
          ))}

          <div className="z-10 bg-slate-900/80 p-6 rounded-xl border border-slate-700 backdrop-blur-sm text-center">
            <Activity className="text-green-400 w-12 h-12 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">99.99%</div>
            <div className="text-sm text-slate-400">System Uptime</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let us help you build a resilient, automated, and secure cloud infrastructure.
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg cursor-pointer"
              onClick={() => navigate('/get-in-touch')}
            >
              Schedule Cloud Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Icon for build phase
function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export default DevOpsAndCloud;