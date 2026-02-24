import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, BrainCircuit, HardDrive, Eye, Bot, Satellite, Atom, Glasses, ArrowRight, ChevronRight, Zap, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmergingTechnologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const navigate = useNavigate();
  const technologies = [
    {
      icon: HardDrive,
      title: "Web3 & Blockchain",
      description: "Decentralized applications and smart contracts",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/blockchain-&-web3.0"
    },
    {
      icon: BrainCircuit,
      title: "Generative AI",
      description: "Creative and predictive AI systems",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/data-&-ai"
    },
    {
      icon: Glasses,
      title: "Metaverse",
      description: "Immersive virtual environments",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/get-in-touch"
    },
    {
      icon: Bot,
      title: "Autonomous Systems",
      description: "Self-learning robotic solutions",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/data-&-ai"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image recognition",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/data-&-ai"
    },
    {
      icon: Satellite,
      title: "Edge Computing",
      description: "Distributed processing networks",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/devops-&-cloud"
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Next-gen processing power",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/get-in-touch"
    },
    {
      icon: Cpu,
      title: "Neuromorphic Chips",
      description: "Brain-inspired computing",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/get-in-touch"
    }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Digital Twins",
      description: "Created virtual replicas of manufacturing systems that reduced downtime by 40%",
      icon: <Cpu className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "40% reduction in downtime",
      tags: ["AI Models", "IoT Sensors", "Predictive Analytics"]
    },
    {
      title: "Blockchain Supply Chain",
      description: "Implemented transparent tracking system that improved audit efficiency by 65%",
      icon: <HardDrive className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "65% audit efficiency gain",
      tags: ["Smart Contracts", "Hyperledger", "Supply Chain"]
    },
    {
      title: "AR Workforce Training",
      description: "Developed immersive training modules that accelerated onboarding by 50%",
      icon: <Glasses className="text-blue-500" />,
      color: "bg-blue-100",
      impact: "50% faster onboarding",
      tags: ["AR Glasses", "Unity 3D", "XR Training"]
    }
  ];

  const trends = [
    {
      name: "AI Democratization",
      progress: 80,
      color: "bg-blue-500",
      icon: <BrainCircuit className="text-blue-500" />
    },
    {
      name: "Quantum Readiness",
      progress: 35,
      color: "bg-blue-500",
      icon: <Atom className="text-blue-500" />
    },
    {
      name: "Spatial Computing",
      progress: 60,
      color: "bg-blue-500",
      icon: <Glasses className="text-blue-500" />
    },
    {
      name: "Bio-Digital Convergence",
      progress: 45,
      color: "bg-blue-500",
      icon: <Bot className="text-blue-500" />
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
            Emerging Technologies
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
            <p className="text-sm font-medium text-blue-600">Emerging Technologies</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Shaping the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Future</span> Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We pioneer cutting-edge technological solutions that redefine what's possible for your business.
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
              Explore Our Tech <ArrowRight size={18} />
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
      </motion.section>

      {/* Technologies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frontier Technologies We Master</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Leveraging tomorrow's innovations to solve today's challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onHoverStart={() => setHoveredTech(index)}
              onHoverEnd={() => setHoveredTech(null)}
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

              <div className={`bg-gradient-to-r ${tech.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 relative z-10`}>
                <tech.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">{tech.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10 mb-4">{tech.description}</p>

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: hoveredTech === index ? 1 : 0, x: hoveredTech === index ? 0 : -5 }}
              >
                <button
                  onClick={() => navigate(tech.path)}
                  className="text-blue-500 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline"
                >
                  Learn more <ChevronRight size={14} className="mt-0.5" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Adoption Trends */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Adoption Curve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Where emerging technologies stand in enterprise adoption
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {trends.map((trend, index) => (
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
                  {trend.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-gray-800">{trend.name}</span>
                    <motion.span
                      className="font-medium text-blue-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 1 }}
                    >
                      {trend.progress}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <motion.div
                      className={`${trend.color} h-2.5 rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${trend.progress}%` }}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pioneering Implementations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-world applications of frontier technologies
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

      {/* Future Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl my-16 border border-blue-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-6">Preparing for the Next Tech Revolution</h2>
            <p className="text-gray-600 mb-6">
              We help businesses anticipate and adapt to technological shifts through our Future Readiness Program:
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: <BrainCircuit className="text-blue-500 mt-1" />,
                  title: "Technology Scouting",
                  description: "Identifying relevant emerging technologies for your industry"
                },
                {
                  icon: <Cpu className="text-blue-500 mt-1" />,
                  title: "Pilot Programs",
                  description: "Controlled implementation of promising technologies"
                },
                {
                  icon: <HardDrive className="text-blue-500 mt-1" />,
                  title: "Future Skills Training",
                  description: "Upskilling your team for the tech landscape of tomorrow"
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
            {/* Animated tech spheres */}
            {[
              { icon: <Cpu className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 32, delay: 0 },
              { icon: <HardDrive className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 24, delay: 1 },
              { icon: <Glasses className="text-blue-500" />, color: "bg-blue-100", border: "border-blue-200", size: 28, delay: 2 }
            ].map((sphere, i) => (
              <motion.div
                key={i}
                className={`absolute ${sphere.color} border-2 ${sphere.border} rounded-full flex items-center justify-center`}
                style={{
                  width: sphere.size,
                  height: sphere.size,
                  left: i === 0 ? '0' : i === 1 ? 'right-0 top-1/4' : 'left-1/4 bottom-0'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: sphere.delay
                }}
              >
                {sphere.icon}
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

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">Future-Proof Your Business</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg relative z-10">
            Partner with us to leverage cutting-edge technologies before your competitors do
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => navigate("/get-in-touch")}

            >
              Start Tech Assessment
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
              Book Consultation
              <ArrowRight size={18} />
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EmergingTechnologies;