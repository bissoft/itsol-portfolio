import { motion } from "framer-motion";
import { useState } from "react";
import { HardDrive, Network, Cpu, Lock, Code, Coins, Globe, Zap, ArrowRight, ChevronRight, Link, ArrowLeft, Layers, Shield, CheckCircle, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlockChainAndWeb3 = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTab, setActiveTab] = useState("platforms");
  const navigate = useNavigate();

  const services = [
    {
      icon: HardDrive,
      title: "Blockchain Development",
      description: "Secure, decentralized ledger solutions for enterprise transparency",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/emerging-technologies"
    },
    {
      icon: Network,
      title: "dApp Development",
      description: "Decentralized applications on Ethereum & other EVM chains",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/web-app-development"
    },
    {
      icon: Cpu,
      title: "Smart Contracts",
      description: "Self-executing contract logic with formal verification",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/custom-software-development"
    },
    {
      icon: Lock,
      title: "Tokenization",
      description: "Asset digitization and custom token standards (ERC20, ERC721)",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/fintech"
    },
    {
      icon: Code,
      title: "Web3 Integration",
      description: "Seamlessly connect existing Web2 apps with blockchain",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/web-app-development"
    },
    {
      icon: Coins,
      title: "DeFi Solutions",
      description: "Decentralized finance protocols for lending and trading",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/fintech"
    }
  ];

  const blockchainFeatures = [
    {
      title: "Immutability",
      description: "Tamper-proof record keeping ensuring data integrity across the network.",
      icon: <Lock className="text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      title: "Transparency",
      description: "Publicly verifiable transactions that build trust without intermediaries.",
      icon: <Globe className="text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      title: "Security",
      description: "Cryptographic protection against fraud and unauthorized access.",
      icon: <Shield className="text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      title: "Automation",
      description: "Smart contracts execute business logic automatically when conditions are met.",
      icon: <Cpu className="text-blue-500" />,
      color: "bg-blue-100"
    }
  ];

  const platforms = {
    "platforms": [
      { name: "Ethereum", type: "Smart Contract", icon: "ETH", color: "bg-blue-100 text-blue-600" },
      { name: "Polygon", type: "Layer 2 Scaling", icon: "MATIC", color: "bg-purple-100 text-purple-600" },
      { name: "Solana", type: "High Performance", icon: "SOL", color: "bg-green-100 text-green-600" }
    ],
    "frameworks": [
      { name: "Hardhat", type: "Dev Environment", icon: "HH", color: "bg-yellow-100 text-yellow-600" },
      { name: "Truffle", type: "Dev Suite", icon: "TR", color: "bg-orange-100 text-orange-600" },
      { name: "Foundry", type: "Testing Framework", icon: "FD", color: "bg-red-100 text-red-600" }
    ],
    "storage": [
      { name: "IPFS", type: "Decentralized", icon: "IPFS", color: "bg-teal-100 text-teal-600" },
      { name: "Arweave", type: "Permanent Web", icon: "AR", color: "bg-gray-100 text-gray-600" },
      { name: "Filecoin", type: "Storage Network", icon: "FIL", color: "bg-blue-100 text-blue-600" }
    ]
  };

  const caseStudies = [
    {
      title: "Supply Chain Transparency",
      description: "Blockchain solution reduced audit times by 70% and eliminated counterfeit products",
      icon: <Network className="text-blue-500" />,
      color: "bg-blue-100",
      tags: ["Ethereum", "IPFS", "Polygon"]
    },
    {
      title: "DeFi Lending Platform",
      description: "Built a decentralized lending protocol with $50M+ TVL",
      icon: <Coins className="text-blue-500" />,
      color: "bg-blue-100",
      tags: ["Solidity", "Chainlink", "Aave"]
    },
    {
      title: "NFT Marketplace",
      description: "Created a gas-efficient NFT platform with 10K+ users",
      icon: <Lock className="text-blue-500" />,
      color: "bg-blue-100",
      tags: ["ERC-721", "OpenSea API", "ZK-Rollups"]
    }
  ];

  const roadmapSteps = [
    {
      phase: "Discovery",
      description: "Analyze use case and select optimal blockchain architecture",
      icon: Layers
    },
    {
      phase: "Design",
      description: "Architect smart contracts and tokenomics model",
      icon: Code
    },
    {
      phase: "Development",
      description: "Implement smart contracts and frontend dApp interface",
      icon: Cpu
    },
    {
      phase: "Audit",
      description: "Rigorous security audit and gas optimization",
      icon: Shield
    },
    {
      phase: "Deployment",
      description: "Mainnet launch and node infrastructure setup",
      icon: Rocket
    }
  ];

  function Rocket(props) {
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.506-1.404 10.15A22.55 22.55 0 0 1 12 15z" />
        <path d="M5 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        <path d="M12 15l2 2" />
        <path d="M15 12l2 2" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden pt-10">
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
            Blockchain and Web3.0
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
            <p className="text-sm font-medium text-blue-600">Blockchain & Web3 Innovation</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Decentralize</span> Your Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We build secure, transparent, and scalable blockchain applications that redefine trust and enable new business models.
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
              Start Building <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/case-studies")}
            >
              Explore Use Cases <ArrowRight size={18} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive services for the decentralized web
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Blockchain?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fundamental advantages of decentralized technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blockchainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Roadmap</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From idea to mainnet: our structured approach
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 -ml-0.5 origin-top"
          />

          <div className="grid grid-cols-1 gap-8 lg:gap-0">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center lg:justify-between ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col md:flex-row gap-8`}
              >
                <div className={`lg:w-[45%] w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center`}>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{step.phase}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="relative z-10 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <step.icon size={20} />
                </div>

                <div className="lg:w-[45%] w-full hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Leading blockchain ecosystems and tools
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
              {Object.keys(platforms).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {platforms[activeTab].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className={`bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${tech.color} px-3 py-2 rounded-lg font-bold min-w-[50px] text-center`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-world decentralized solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

      {/* Blockchain Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link className="text-blue-500" />
                <span className="text-sm font-medium text-blue-500">BLOCKCHAIN VISUALIZATION</span>
              </motion.div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                How Blockchain Works
              </motion.h2>
              <p className="text-gray-600 mb-6">
                A decentralized network of nodes working together to validate transactions and maintain the ledger.
              </p>

              <ul className="text-gray-600 space-y-3">
                {[
                  "Distributed Nodes", "Consensus Mechanisms", "Cryptographic Hashing", "Immutable Ledger"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-blue-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 flex items-center justify-center p-8 min-h-[400px]">
              <motion.div
                className="relative w-full h-full"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  transition: { duration: 4, repeat: Infinity }
                }}
              >
                {/* Visual Representation of Nodes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-white rounded-full border-2 border-blue-400 flex items-center justify-center shadow-lg z-10"
                    style={{
                      left: `${50 + 35 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                      top: `${50 + 35 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      y: [0, -5, 0],
                      borderColor: ["#60a5fa", "#3b82f6", "#60a5fa"],
                      transition: {
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity
                      }
                    }}
                  >
                    <Lock className="w-4 h-4 text-blue-500" />
                  </motion.div>
                ))}

                {/* Connection lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                  <circle cx="50%" cy="50%" r="35%" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                  {[...Array(6)].map((_, i) => (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 35 * Math.cos((i * 60 * Math.PI) / 180)}%`}
                      y2={`${50 + 35 * Math.sin((i * 60 * Math.PI) / 180)}%`}
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                    />
                  ))}
                </svg>

                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl z-20">
                  <Globe className="text-white w-8 h-8" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
          {/* Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute bg-white/10 rounded-full"
                style={{
                  width: Math.random() * 10 + 4 + 'px',
                  height: Math.random() * 10 + 4 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%'
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how blockchain can transform your business operations.
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg cursor-pointer"
              onClick={() => navigate('/get-in-touch')}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockChainAndWeb3;