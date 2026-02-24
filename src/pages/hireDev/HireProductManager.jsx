import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart2,
  Target,
  Users,
  Zap,
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  Cloud,
  GitMerge,
  Layout,
  PieChart,
  Clipboard,
  TrendingUp,
  Globe,
  Shield,
  Command,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireProductManager = () => {
  const [activeTab, setActiveTab] = useState("why-pm");
  const [expandedFeature, setExpandedFeature] = useState(null);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const features = [
    {
      icon: <Target className="text-blue-500 w-8 h-8" />,
      title: "Product Strategy",
      description: "Align product vision with business goals",
      extended: "Our Product Managers craft data-driven roadmaps that bridge technical capabilities with market opportunities, ensuring your product delivers maximum business value.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Users className="text-blue-500 w-8 h-8" />,
      title: "User-Centric Approach",
      description: "Deep customer understanding",
      extended: "We employ user research, persona development, and journey mapping to ensure products solve real problems for your target audience.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <BarChart2 className="text-blue-500 w-8 h-8" />,
      title: "Market Analysis",
      description: "Competitive positioning & differentiation",
      extended: "Our PMs conduct thorough market research to identify gaps, trends, and opportunities that give your product a competitive edge.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <GitMerge className="text-blue-500 w-8 h-8" />,
      title: "Cross-Functional Leadership",
      description: "Bridge between teams",
      extended: "We excel at aligning engineering, design, and business stakeholders to deliver cohesive products on time and within budget.",
      bgColor: "bg-amber-50"
    }
  ];

  const benefits = [
    {
      title: "Faster Time-to-Market",
      description: "Streamlined decision-making",
      icon: <Zap className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Higher ROI",
      description: "Focus on valuable features",
      icon: <TrendingUp className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Reduced Risk",
      description: "Data-driven prioritization",
      icon: <Shield className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Team Alignment",
      description: "Clear product direction",
      icon: <Users className="text-blue-500 w-6 h-6" />
    }
  ];

  const hiringModels = [
    {
      title: "Full-Time PM",
      description: "Dedicated product leader",
      price: "$8,000+/mo",
      features: ["Strategic ownership", "Team leadership", "Stakeholder management"],
      popular: true,
      icon: <Target className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Product Team",
      description: "Complete product unit",
      price: "Custom",
      features: ["Product Manager", "UX Researcher", "Data Analyst", "Scrum Master"],
      popular: false,
      icon: <Users className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Interim PM",
      description: "Short-term leadership",
      price: "$90-$150/hr",
      features: ["Product audit", "Roadmap creation", "Team onboarding"],
      popular: false,
      icon: <Clock className="text-blue-500 w-6 h-6" />
    }
  ];

  const methodologies = [
    {
      category: "Frameworks",
      items: ["Lean Startup", "Jobs-to-be-Done", "Design Thinking", "Agile"],
      icon: <Layout className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Analytics",
      items: ["A/B Testing", "Funnel Analysis", "Cohort Analysis", "KPI Dashboards"],
      icon: <PieChart className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Tools",
      items: ["Jira", "Productboard", "Amplitude", "Mixpanel"],
      icon: <Command className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Documentation",
      items: ["PRDs", "User Stories", "Release Notes", "OKRs"],
      icon: <Clipboard className="text-blue-500 w-5 h-5" />
    }
  ];

  return (
    <div className="bg-white text-gray-800">
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
                                             Strategic Product Leadership
                                                </motion.div>
                                              </div>
                                            </motion.div>
      {/* Hero Section with Strategy Focus */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* <motion.div 
                className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 gap-2"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <BarChart2 className="w-4 h-4" />
                <p className="text-sm font-medium">Strategic Product Leadership</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire Expert <span className="text-blue-600">Product Managers</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Transform your product vision into successful execution with our strategic product leaders.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center cursor-pointer gap-2 shadow-lg shadow-blue-100"
                  onClick={()=> navigate('/get-in-touch')}

                >
                  Find Your PM <ArrowRight size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white border-2 cursor-pointer border-blue-300 text-blue-600 rounded-lg font-medium flex items-center gap-2"
                  onClick={()=> navigate('/case-studies')}

                >
                  View Case Studies
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <TrendingUp className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Product Growth</h3>
                        <p className="text-gray-600">From MVP to scale with strategic guidance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Users className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">User Focus</h3>
                        <p className="text-gray-600">Evidence-based product decisions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <GitMerge className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Team Alignment</h3>
                        <p className="text-gray-600">Clear priorities for all stakeholders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with PM Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Product Management Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How our Product Managers drive product success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`${feature.bgColor} p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer`}
              onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
                <AnimatePresence>
                  {expandedFeature === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-600 overflow-hidden mt-auto"
                    >
                      <p>{feature.extended}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-blue-600 font-medium text-sm">
                    {expandedFeature === i ? 'Show less' : 'Learn more'}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFeature === i ? 180 : 0 }}
                  >
                    <ChevronDown className="text-blue-500" size={18} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Product Management Toolkit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Frameworks and methodologies we employ to build successful products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {method.icon}
                  <h3 className="text-xl font-bold text-blue-600">{method.category}</h3>
                </div>
                <ul className="space-y-3">
                  {method.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Business Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Business Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How hiring our Product Managers delivers measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hiring Models with Strategic Options */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Strategic Hiring Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement models for product leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {hiringModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-xl border ${model.popular ? 'border-blue-300 shadow-lg relative' : 'border-gray-200'} transition-all overflow-hidden`}
              >
                {model.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white px-4 py-2 text-sm font-medium text-center">
                    Most Effective
                  </div>
                )}
                <div className="p-8 pt-12">
                  <div className="flex items-center gap-3 mb-4">
                    {model.icon}
                    <h3 className="text-2xl font-bold">{model.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{model.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="text-blue-500 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-medium ${model.popular ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'} mt-auto cursor-pointer`}
                  onClick={()=> navigate('/get-in-touch')}

                  >
                    Start Strategizing
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Strategy Focus */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Product Strategy?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how our Product Managers can align your product with business goals and user needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg flex items-center gap-2 cursor-pointer"
                  onClick={()=> navigate('/get-in-touch')}

              >
                Book Strategy Session <ArrowRight size={18} />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2"
              >
                Get Product Audit
              </motion.button> */}
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default HireProductManager;