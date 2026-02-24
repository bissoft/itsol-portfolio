import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cloud, Shield, Github, Cpu, Database, Server, Lock, CpuIcon, BrainCircuit, Network } from "lucide-react";

const services = [
  {
    id: "software",
    name: "Software Development",
    icon: <BrainCircuit className="w-5 h-5" />,
    description: "We believe traditional software development has often failed to meet evolving business demands. As a modern software development company, we adopt an industry-agnostic approach and leverage AI capabilities to build custom enterprise software solutions that cater to businesses of all sizes' unique needs.",
    features: [
      "Custom Software Development",
      "Product Development",
      "Software Consulting",
      "Enterprise Development",
      "Offshore Software Development"

    ],
    tech: [
      { icon: <Cpu className="w-8 h-8" />, name: "TensorFlow" },
      { icon: <Database className="w-8 h-8" />, name: "PyTorch" },
      { icon: <Server className="w-8 h-8" />, name: "OpenCV" }
    ],
    path: "/custom-software-development"
  },
  {
    id: "application",
    name: "Application Development",
    icon: <BrainCircuit className="w-5 h-5" />,
    description: "ITL delivers a comprehensive range of application services, encompassing development, migration, modernization, testing, and more. We empower enterprises to align applications with evolving business needs. Our expertise extends to crafting various complex web, mobile, and cloud applications, streamlining internal operations, facilitating business transactions, and digitizing customer-oriented services across diverse industries.",
    features: [
      "      Custom Application Development",
      "Application Migration",
      "Application Integration",
      "Application Modernization",
      "Application Management",
    ],
    tech: [
      { icon: <Cpu className="w-8 h-8" />, name: "TensorFlow" },
      { icon: <Database className="w-8 h-8" />, name: "PyTorch" },
      { icon: <Server className="w-8 h-8" />, name: "OpenCV" }
    ],
    path: "/web-app-development"
  },
  {
    id: "ai",
    name: "AI Development",
    icon: <BrainCircuit className="w-5 h-5" />,
    description: "Catalyze transformative growth with ITL's AI & ML implementation and development services engineered to enhance operational flexibility, revolutionize customer engagement, and generate new revenue streams.",
    features: [
      "      AI Strategy and Consulting",
      "AI Model Development and Customization",
      "Advanced Machine Learning Solutions",
      "Generative AI and NLP Solutions",
      "Data Analytics and Visualization",

    ],
    tech: [
      { icon: <Cpu className="w-8 h-8" />, name: "TensorFlow" },
      { icon: <Database className="w-8 h-8" />, name: "PyTorch" },
      { icon: <Server className="w-8 h-8" />, name: "OpenCV" }
    ],
    path: "/data-&-ai"
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    icon: <Cloud className="w-5 h-5" />,
    description: "Embark on a cloud-first journey tailored to your business needs. We help enterprises scale and adapt to evolving needs within a secure hybrid or pure cloud environment by leveraging our end-to-end and outcome-based cloud development services. We engineer custom solutions tailored to business needs, featuring integrated security and connectivity for seamless deployment and customization. We navigate integration challenges, ensuring barrier-free data exchange and flawless ecosystem performance.",
    features: [
      "Cloud Strategy & Consulting",
      "Cloud App Modernization",
      "Comprehensive DevOps",
      "Cloud Managed Services (Azure)",
      "Cyber Security",
      "Cloud Infrastructure",
      "Cloud Migration",
      "IAAS, SAAS & PAAS Services",
    ],
    tech: [
      { icon: <Cloud className="w-8 h-8" />, name: "AWS" },
      { icon: <Cloud className="w-8 h-8" />, name: "Azure" },
      { icon: <Cloud className="w-8 h-8" />, name: "GCP" }
    ],
    path: "/devops-&-cloud"
  },
  {
    id: "testing",
    name: "Software Testing and QA",
    icon: <Cloud className="w-5 h-5" />,
    description: "We provide comprehensive quality assurance services, thoroughly examining software from end to end or focusing on critical aspects. Our testing specialists, well-versed in the latest best practices, ensure successful software development. Outsourcing QA and testing to our top engineers yields reduced overhead, faster release cycles, and access to specialized experts and tools. ITL's flexible engagement models guarantee a seamless partnership, whether you require a few QA engineers or an entire automation team.",
    features: [
      "Testing and QA outsourcing",
      "Functional Testing",
      "Usability Testing",
      "Performance Testing",

    ],
    tech: [
      { icon: <Cloud className="w-8 h-8" />, name: "AWS" },
      { icon: <Cloud className="w-8 h-8" />, name: "Azure" },
      { icon: <Cloud className="w-8 h-8" />, name: "GCP" }
    ],
    path: "/software-quality-accurance"
  },

  {
    id: "ITservices",
    name: "Managed IT Services",
    icon: <Lock className="w-5 h-5" />,
    description: "ITL, a leading managed IT services provider, elevates businesses by expertly managing IT environments. We assume the entire scope of managed IT services, alleviating our clients' management workload. Our specialists seamlessly integrate into in-house IT teams, optimizing processes and implementing relevant methodologies. We ensure high-performance, secure, and user-friendly software, enhancing its functional capabilities. By guaranteeing the stability and protection of IT infrastructures, we empower businesses with resilient and secure processes.",
    features: [
      "IT Consulting",
      "IT Outsourcing",
      "IT Infrastructure",
    ],
    tech: [
      { icon: <CpuIcon className="w-8 h-8" />, name: "Ethereum" },
      { icon: <Database className="w-8 h-8" />, name: "Hyperledger" },
      { icon: <Lock className="w-8 h-8" />, name: "Solidity" }
    ],
    path: "/managed-it-systems"
  },
  {
    id: "platform",
    name: "Platform Consulting",
    icon: <Code className="w-5 h-5" />,
    description: "ITL is your ally across cutting-edge platforms. From unlocking Microsoft's cloud potential with Azure Consulting to optimizing performance via AWS Consulting. We elevate customer relationships with Salesforce and transform digital experiences through Adobe Consulting. Our Microsoft Consulting seamlessly integrates technologies for your business to thrive digitally. Partner with us to harness these platforms, propelling your business towards unparalleled success.",
    features: [
      "Azure Consulting",
      "AWS Consulting",
      "Salesforce Consulting",
    ],
    tech: [
      { icon: <Code className="w-8 h-8" />, name: "React" },
      { icon: <Server className="w-8 h-8" />, name: "Node.js" },
      { icon: <Database className="w-8 h-8" />, name: "GraphQL" }
    ],
    path: "/platform-consulting"
  },

  {
    id: "emerging",
    name: "Emerging Innovations",
    icon: <Network className="w-5 h-5" />,
    description: "ITL propels businesses into the future by seamlessly integrating emerging technologies like Blockchain, Data Science, and IoT. Our Managed IT services allow organizations to delegate IT needs, freeing resources for core operations. Elevating software development, we harness emerging tools and technologies to enhance design, code generation, and testing. Join us for cutting-edge solutions that transform industries, ensuring your sustained competitive edge.",
    features: [
      "Data Science",
      "Big Data",
      "Blockchain",
    ],
    tech: [
      { icon: <Cloud className="w-8 h-8" />, name: "Kubernetes" },
      { icon: <Github className="w-8 h-8" />, name: "Docker" },
      { icon: <Server className="w-8 h-8" />, name: "Terraform" }
    ],
    path: "/emerging-technologies"
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-sky-50/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software engineering services for digital transformation. We build the systems that power modern enterprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Services Navigation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  className={`group w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 border ${selectedService.id === service.id
                    ? 'bg-blue-50 border-blue-200 shadow-md'
                    : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                    }`}
                  onClick={() => setSelectedService(service)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-2 rounded-lg transition-colors ${selectedService.id === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-500 group-hover:text-gray-700'
                    }`}>
                    {service.icon}
                  </div>
                  <span className={`font-medium text-lg ${selectedService.id === service.id ? 'text-blue-900' : 'text-gray-600 group-hover:text-gray-900'
                    }`}>
                    {service.name}
                  </span>
                  {selectedService.id === service.id && (
                    <motion.div layoutId="activeIndicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl h-full relative overflow-hidden"
              >
                {/* Decorative blob */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50/50 rounded-full blur-[60px] pointer-events-none" />

                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4 text-gray-900 relative z-10">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white shadow-lg">
                    {selectedService.icon}
                  </div>
                  {selectedService.name}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                  {selectedService.description}
                </p>

                <div className="relative z-10">
                  <h4 className="font-semibold mb-6 text-lg text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 rounded-full" />
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors flex items-center gap-2 group"
                      onClick={() => navigate(selectedService.path)}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;