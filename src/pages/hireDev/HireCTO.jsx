import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu,
  Shield,
  GitMerge,
  Code,
  Layers,
  Database,
  Server,
  CreditCard,
  RefreshCw,
  Globe,
  Lock,
  Zap,
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  BarChart2,
  Users,
  Briefcase,
  Target,
  PieChart,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireCTO = () => {
  const [activeTab, setActiveTab] = useState("why-cto");
  const [expandedFeature, setExpandedFeature] = useState(null);
  const navigate = useNavigate();
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
      icon: <Briefcase className="text-blue-500 w-8 h-8" />,
      title: "Technical Leadership",
      description: "Strategic technology direction",
      extended: "Our CTOs provide executive-level technical leadership, aligning technology strategy with business goals and ensuring your tech stack supports growth.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Users className="text-blue-500 w-8 h-8" />,
      title: "Team Building",
      description: "Hire & manage top talent",
      extended: "We help you build and scale high-performing engineering teams, establish development processes, and create a strong technical culture.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <PieChart className="text-blue-500 w-8 h-8" />,
      title: "Product Strategy",
      description: "Roadmap & technical vision",
      extended: "Our CTOs work with founders to define product architecture, prioritize features, and create realistic technical roadmaps for scalable growth.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Shield className="text-blue-500 w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade protection",
      extended: "We implement security best practices, compliance frameworks, and risk management strategies to protect your business and customers.",
      bgColor: "bg-blue-50"
    }
  ];

  const benefits = [
    {
      title: "Fractional Flexibility",
      description: "Part-time or full-time engagement",
      icon: <PieChart className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Startup Experience",
      description: "Proven track record with scaling",
      icon: <Zap className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Cost Efficiency",
      description: "Avoid full-time executive costs",
      icon: <CreditCard className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Immediate Impact",
      description: "Hit the ground running",
      icon: <Target className="text-blue-500 w-6 h-6" />
    }
  ];

  const hiringModels = [
    {
      title: "Fractional CTO",
      description: "Part-time technical leadership",
      price: "$5,000+/mo",
      features: ["20-30 hrs/month", "Strategic guidance", "Tech stack review", "Team assessment"],
      popular: true,
      icon: <PieChart className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Interim CTO",
      description: "Full-time temporary leadership",
      price: "$15,000+/mo",
      features: ["40+ hrs/week", "Team building", "Product roadmap", "Investor relations"],
      popular: false,
      icon: <Briefcase className="text-blue-500 w-6 h-6" />
    },
    {
      title: "CTO-as-a-Service",
      description: "Ongoing executive support",
      price: "Custom",
      features: ["Dedicated team", "Long-term strategy", "Board participation", "Mentorship"],
      popular: false,
      icon: <Server className="text-blue-500 w-6 h-6" />
    }
  ];

  const expertiseAreas = [
    {
      category: "Technical Strategy",
      items: ["Architecture design", "Tech stack selection", "Scalability planning", "Technical due diligence"],
      icon: <Cpu className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Team Leadership",
      items: ["Engineering hiring", "Performance management", "Process improvement", "Culture building"],
      icon: <Users className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Product Development",
      items: ["Roadmap planning", "MVP strategy", "Feature prioritization", "Technical debt management"],
      icon: <Code className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Business Growth",
      items: ["Investor relations", "Technical partnerships", "IP strategy", "M&A support"],
      icon: <BarChart2 className="text-blue-500 w-5 h-5" />
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
                            Executive Technology Leadership
                              </motion.div>
                            </div>
                          </motion.div>
      {/* Hero Section */}
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
                <Briefcase className="w-4 h-4" />
                <p className="text-sm font-medium">Executive Technology Leadership</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire an Expert <span className="text-blue-600">Chief Technology Officer</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Get experienced technical leadership to guide your company's technology strategy and growth.
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
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-100 cursor-pointer"
                  onClick={()=> navigate('/get-in-touch')}

                >
                  Find Your CTO <ArrowRight size={18} />
                </motion.button>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white border-2 border-blue-300 text-blue-600 rounded-lg font-medium flex items-center gap-2 cursor-pointer"

                >
                  View CTO Profiles
                </motion.button> */}
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
                <div className="relative">
                  {/* Leadership Illustration */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-md">
                      {/* Leadership hierarchy */}
                      <div className="space-y-6">
                        {/* CTO level */}
                        <motion.div 
                          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <Briefcase className="text-blue-600 w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-blue-600">Chief Technology Officer</h3>
                            <p className="text-gray-600">Technical strategy & leadership</p>
                          </div>
                        </motion.div>
                        
                        {/* Engineering managers */}
                        <motion.div 
                          className="flex justify-center gap-4"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        >
                          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3 w-1/2">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <Users className="text-blue-600 w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold">Engineering Manager</h4>
                              <p className="text-sm text-gray-600">Team leadership</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3 w-1/2">
                            <div className="bg-purple-100 p-2 rounded-lg">
                              <Code className="text-purple-600 w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold">Tech Lead</h4>
                              <p className="text-sm text-gray-600">Technical guidance</p>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Engineering team */}
                        <motion.div 
                          className="flex justify-center gap-2"
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                        >
                          {['Frontend', 'Backend', 'DevOps', 'QA'].map((role, i) => (
                            <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-center w-1/4">
                              <p className="text-sm font-medium">{role}</p>
                              <p className="text-xs text-gray-600">Engineer</p>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">CTO Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical leadership for your business
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

      {/* Expertise Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">CTO Expertise Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key domains where our CTOs provide strategic leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {area.icon}
                  <h3 className="text-xl font-bold text-blue-600">{area.category}</h3>
                </div>
                <ul className="space-y-3">
                  {area.items.map((item, j) => (
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Hire a CTO</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Benefits of bringing on technical leadership
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

      {/* Hiring Models */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Flexible Engagement Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CTO services tailored to your needs
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
                    Most Popular
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
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Need Technical Leadership?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how an experienced CTO can transform your technology strategy.
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
                Find Your CTO <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2 cursor-pointer"
                  onClick={()=> navigate('/get-in-touch')}

              >
                Get Strategy Session
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default HireCTO;