import { motion } from "framer-motion";
import { Building2, Shield, BarChart2, Globe, Users, Clock, ArrowRight, Check, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Enterprises = () => {
  const [activeTab, setActiveTab] = useState('solutions');
  const navigate = useNavigate();

  const stats = [
    { value: "Fortune 500", label: "Clients", icon: <Building2 className="text-blue-500" /> },
    { value: "99.99%", label: "Uptime SLA", icon: <Shield className="text-blue-500" /> },
    { value: "3.5x", label: "Average ROI", icon: <BarChart2 className="text-blue-500" /> },
    { value: "24/7", label: "Enterprise Support", icon: <Clock className="text-blue-500" /> }
  ];

  const solutions = [
    {
      icon: <Building2 className="text-blue-500" />,
      title: "Digital Transformation",
      description: "Modernize legacy systems with our proven framework"
    },
    {
      icon: <Globe className="text-blue-500" />,
      title: "Global Scalability",
      description: "Deploy worldwide with localized compliance"
    },
    {
      icon: <Shield className="text-blue-500" />,
      title: "Security First",
      description: "Enterprise-grade security and compliance"
    },
    {
      icon: <Users className="text-blue-500" />,
      title: "Change Management",
      description: "Company-wide adoption strategies"
    }
  ];

  const caseStudies = [
    {
      company: "Global Financial Institution",
      result: "Reduced costs by 35%",
      excerpt: "Modernized core banking systems across 28 countries"
    },
    {
      company: "Healthcare Conglomerate",
      result: "Improved efficiency by 40%",
      excerpt: "Implemented AI-powered patient management system"
    },
    {
      company: "Retail Giant",
      result: "Increased revenue by $120M",
      excerpt: "Unified commerce platform for 500+ locations"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden pt-10">
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
                       Enterprise
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
          className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200"
        >
          <p className="text-sm font-medium text-blue-600">Enterprise Solutions</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Enterprise</span> Grade Technology
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Scalable, secure solutions designed for complex organizational needs and global deployments.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg flex items-center gap-2 shadow-lg"
              onClick={() => navigate('/get-in-touch')}

          >
            Contact Sales <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
              onClick={() => navigate('/case-studies')}

          >
            Download Whitepaper
          </motion.button>
        </div>
        </motion.div>
        
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-3 rounded-full"
                >
                  {stat.icon}
                </motion.div>
              </div>
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-2 text-blue-600"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Enterprise Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed for large-scale operations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-block"
                >
                  {solution.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Enterprise Features</h3>
              <ul className="space-y-4">
                {[
                  "Dedicated instance deployment",
                  "SOC 2 Type II compliance",
                  "Custom SLAs with 99.99% uptime",
                  "Private cloud options",
                  "On-premises deployment available",
                  "Dedicated customer success team"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <Check className="text-blue-500" size={16} />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Implementation Process</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1. Discovery",
                    description: "Comprehensive needs assessment and planning"
                  },
                  {
                    step: "2. Pilot",
                    description: "Controlled deployment to validate solution"
                  },
                  {
                    step: "3. Rollout",
                    description: "Phased implementation across organization"
                  },
                  {
                    step: "4. Optimization",
                    description: "Continuous improvement and scaling"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.step}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Enterprise Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how we've helped global enterprises transform their operations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-blue-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-blue-600">{study.result}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                <p className="text-gray-600 mb-4">{study.excerpt}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-1 text-blue-500 font-medium cursor-pointer"
              onClick={() => navigate('/case-studies')}

                >
                  Read Case Study <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security & Compliance</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our platform meets the most stringent security requirements for regulated industries.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "SOC 2 Type II",
                  "ISO 27001",
                  "GDPR",
                  "HIPAA",
                  "PCI DSS",
                  "FedRAMP"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white p-4 rounded-lg border border-gray-200 text-center shadow-sm hover:border-blue-300"
                  >
                    <p className="font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Request Compliance Documentation</h3>
              <p className="text-gray-600 mb-6">
                Our security team can provide detailed documentation for your compliance review.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Company Email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select Compliance Standard</option>
                    <option>SOC 2 Type II</option>
                    <option>ISO 27001</option>
                    <option>GDPR</option>
                    <option>HIPAA</option>
                    <option>PCI DSS</option>
                    <option>FedRAMP</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg"
                >
                  Request Documents
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Ready to Transform Your Enterprise?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Schedule a consultation with our enterprise solutions team to discuss your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
              onClick={() => navigate('/get-in-touch')}

            >
              Contact Enterprise Sales
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10"
            >
              Request Demo
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Enterprises;