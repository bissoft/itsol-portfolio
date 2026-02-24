import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BarChart2, Shield, Users, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sales = () => {
  const [activeTab, setActiveTab] = useState('solutions');
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const navigate = useNavigate();
  const features = [
    {
      icon: <Zap className="text-blue-500" />,
      title: "Fast Implementation",
      description: "Go from contract to live in under 30 days"
    },
    {
      icon: <BarChart2 className="text-blue-500" />,
      title: "Proven Results",
      description: "Average 3.5x ROI for our clients"
    },
    {
      icon: <Shield className="text-blue-500" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified infrastructure"
    },
    {
      icon: <Users className="text-blue-500" />,
      title: "Dedicated Team",
      description: "Your own customer success manager"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      bestFor: "Small teams getting started",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "3 integrations"
      ],
      cta: "Get Started"
    },
    {
      name: "Growth",
      price: "$899",
      period: "/month",
      bestFor: "Growing businesses",
      features: [
        "Up to 50 users",
        "Advanced analytics",
        "Priority support",
        "10 integrations",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      bestFor: "Large organizations",
      features: [
        "Unlimited users",
        "Premium analytics",
        "24/7 support",
        "Unlimited integrations",
        "Dedicated infrastructure",
        "Custom SLAs"
      ],
      cta: "Contact Sales"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp",
      result: "Increased conversions by 220%",
      excerpt: "How we helped transform their digital sales funnel"
    },
    {
      company: "GlobalBank",
      result: "Reduced costs by 35%",
      excerpt: "Streamlining their customer acquisition process"
    },
    {
      company: "HealthPlus",
      result: "Grew revenue by $4.2M",
      excerpt: "Implementing our AI-powered recommendation engine"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
         <motion.div
                                                                            initial={{ opacity: 0, y: -20 }}
                                                                            animate={{ opacity: 1, y: 0 }}
                                                                            transition={{ delay: 0.5 }}
                                                                            className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8"
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
                                                                      Sales
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
          <p className="text-sm font-medium text-blue-600">Transform Your Business</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Revenue-Generating</span> Solutions
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Proven technology solutions that drive measurable business growth and operational efficiency.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
            onClick={()=>navigate('/get-in-touch')}
          >
            Get Demo <ArrowRight size={20} />
          </motion.button>
{/*           
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-blue-300 text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 cursor-pointer"
          >
            See Pricing
          </motion.button> */}
        </div>

        </motion.div>

      </motion.section>

      {/* Trust Badges */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {["TechCorp", "GlobalBank", "HealthPlus", "Finova", "CloudNine", "DataSys"].map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold text-gray-700 opacity-80 hover:opacity-100 transition-opacity"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solutions Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Solutions for Every Business Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our comprehensive suite of products adapts to your unique requirements
          </motion.p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-blue-50 rounded-lg p-1">
            {[
              { id: 'solutions', label: 'Solutions' },
              { id: 'industries', label: 'Industries' },
              { id: 'resources', label: 'Resources' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.05 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'solutions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                  >
                    <div className="mb-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="inline-block"
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'industries' && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-6">Industry-Specific Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: "Financial Services", count: "12+ clients" },
                    { name: "Healthcare", count: "8+ clients" },
                    { name: "E-Commerce", count: "25+ clients" }
                  ].map((industry, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                    >
                      <h4 className="font-bold text-lg mb-2">{industry.name}</h4>
                      <p className="text-gray-600">{industry.count}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-6">Sales Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Product Brochure", action: "Download PDF" },
                    { title: "Case Studies", action: "View Gallery" },
                    { title: "ROI Calculator", action: "Try Tool" }
                  ].map((resource, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                    >
                      <h4 className="font-bold text-lg mb-4">{resource.title}</h4>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-50"
                      >
                        {resource.action}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the plan that fits your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative rounded-xl border ${
                plan.popular 
                  ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/20' 
                  : 'border-gray-200 bg-white'
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.bestFor}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                      : 'bg-white border-2 border-blue-300 text-blue-500 hover:bg-blue-50'
                  } transition-all shadow-sm`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Proven Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how we've helped companies like yours achieve remarkable results
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
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-blue-500">{study.result}</span>
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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 relative z-10 text-white"
          >
            Ready to Accelerate Your Growth?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10 text-lg"
          >
            Our sales team is ready to craft a custom solution for your business needs.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
            onClick={()=>navigate('/get-in-touch')}

            >
              Contact Sales
            </motion.button>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Request Demo
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Sales;