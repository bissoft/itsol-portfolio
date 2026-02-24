import { motion } from "framer-motion";
import { AlertTriangle, LifeBuoy, Clock, Zap, Check, BarChart2, ArrowRight, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RescueProjects = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [expandedCase, setExpandedCase] = useState(null);
    const navigate = useNavigate();
  

  const stats = [
    { value: "85%", label: "Success Rate", icon: <Check className="text-blue-500" /> },
    { value: "6-12", label: "Weeks to Recovery", icon: <Clock className="text-blue-500" /> },
    { value: "$10M+", label: "Client Savings", icon: <BarChart2 className="text-blue-500" /> },
    { value: "24/7", label: "Crisis Support", icon: <Zap className="text-blue-500" /> }
  ];

  const rescueServices = [
    {
      icon: <AlertTriangle className="text-blue-500" />,
      title: "Emergency Assessment",
      description: "Rapid diagnosis of project health and critical issues"
    },
    {
      icon: <LifeBuoy className="text-blue-500" />,
      title: "Stabilization Plan",
      description: "Immediate actions to stop further deterioration"
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: "Recovery Roadmap",
      description: "Step-by-step plan to get back on track"
    },
    {
      icon: <Check className="text-blue-500" />,
      title: "Long-term Health",
      description: "Process improvements to prevent future issues"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      name: "FinTech Platform Rescue",
      challenge: "12 months behind schedule, $2M over budget",
      solution: "Re-architected core components, implemented agile recovery",
      results: [
        "Delivered MVP within 3 months",
        "Reduced remaining budget by 40%",
        "Secured additional $5M funding"
      ]
    },
    {
      id: 2,
      name: "E-commerce Migration Recovery",
      challenge: "Failed platform migration causing 30% revenue loss",
      solution: "Rollback strategy with phased re-implementation",
      results: [
        "Restored full functionality in 6 weeks",
        "Recovered lost revenue within 2 months",
        "Improved system performance by 65%"
      ]
    },
    {
      id: 3,
      name: "Enterprise Software Salvage",
      challenge: "Abandoned by previous vendor at 80% completion",
      solution: "Codebase audit and completion plan",
      results: [
        "Delivered project within original timeline",
        "Maintained all critical functionality",
        "Reduced technical debt by 70%"
      ]
    }
  ];

  const toggleCase = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

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
                      Rescue Projects
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
        {/* Floating background elements
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.2, 0.8, 0.2],
              transition: {
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
         */}
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
          <p className="text-sm font-medium text-blue-600">Project Recovery</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Rescue</span> Troubled Projects
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Expert intervention to salvage stalled, failing, or over-budget projects and get them back on track.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 cursor-pointer rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg"
            onClick={() => navigate('/get-in-touch')}
          >
            Emergency Contact <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
            onClick={() => navigate('/get-in-touch')}

          >
            Assess My Project
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
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all"
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Rescue Project Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive solutions to identify, stabilize, and recover troubled initiatives
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {rescueServices.map((service, index) => (
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
                  {service.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-blue-50 rounded-lg p-1 border border-blue-100">
            {[
              { id: 'process', label: 'Our Process' },
              { id: 'cases', label: 'Case Studies' },
              { id: 'signs', label: 'Warning Signs' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'text-blue-600 hover:text-blue-800'
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.05 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Our Rescue Process</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      step: "Emergency Assessment",
                      description: "48-hour rapid review of project status and critical risks",
                      duration: "1-3 days"
                    },
                    {
                      step: "Stabilization Phase",
                      description: "Immediate actions to stop bleeding and regain control",
                      duration: "1-2 weeks"
                    },
                    {
                      step: "Recovery Planning",
                      description: "Develop realistic roadmap to project completion",
                      duration: "1 week"
                    },
                    {
                      step: "Execution",
                      description: "Implement recovery plan with our team or yours",
                      duration: "4-12 weeks"
                    },
                    {
                      step: "Handover",
                      description: "Knowledge transfer and process improvements",
                      duration: "1-2 weeks"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-12 md:pl-16"
                    >
                      <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center -translate-x-1/2">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <span className="text-sm text-blue-500">{item.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'cases' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Rescue Project Case Studies</h2>
              
              <div className="space-y-6">
                {caseStudies.map((caseStudy) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleCase(caseStudy.id)}
                      className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-1">{caseStudy.name}</h3>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      <ChevronDown
                        className={`transform transition-transform text-blue-500 ${
                          expandedCase === caseStudy.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedCase === caseStudy.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Our Solution</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Results Achieved</h4>
                          <ul className="space-y-3 text-gray-600">
                            {caseStudy.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'signs' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Warning Signs Your Project Needs Rescue</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Critical Red Flags</h3>
                  <ul className="space-y-4">
                    {[
                      "Multiple missed deadlines with no recovery plan",
                      "Budget overruns exceeding 25% of original estimate",
                      "Key team members leaving or being removed",
                      "Stakeholders expressing loss of confidence",
                      "Scope creep without process or control"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <AlertTriangle className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-500">Early Warning Signs</h3>
                  <ul className="space-y-4">
                    {[
                      "Frequent scope changes without documentation",
                      "Declining team velocity or productivity",
                      "Increasing defect rates or rework",
                      "Missed milestones becoming routine",
                      "Stakeholder communication breakdowns"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <AlertTriangle className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-semibold mb-3">Don't Wait Until It's Too Late</h3>
                <p className="text-gray-600 mb-4">
                  Early intervention dramatically increases recovery success rates and reduces costs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg cursor-pointer"
            onClick={() => navigate('/get-in-touch')}

                >
                  Request Urgent Assessment
                </motion.button>
              </div>
            </motion.div>
          )}
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Need Immediate Project Assistance?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Our rescue team is available 24/7 to stabilize critical situations and develop recovery plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
            onClick={() => navigate('/get-in-touch')}

            >
              Emergency Contact
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10"
            >
              Assess My Project
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default RescueProjects;