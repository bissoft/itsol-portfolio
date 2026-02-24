import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Zap, 
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  BarChart2,
  Cloud,
  Cpu,
  Shield,
  GitMerge,
  Code,
  Layers,
  Database,
  Tablet,
  Monitor,
  Wifi,
  Battery,
  Settings,
  PieChart,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireAndroidDevelopers = () => {
  const [activeTab, setActiveTab] = useState("why-android");
  const navigate = useNavigate()
  const [expandedFeature, setExpandedFeature] = useState(null);
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
      icon: <Settings className="text-blue-500 w-8 h-8" />,
      title: "Native Performance",
      description: "Optimized for Android hardware",
      extended: "Our Android developers leverage Java and Kotlin to build apps that fully utilize Android's capabilities, ensuring buttery-smooth performance even on lower-end devices.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Wifi className="text-blue-500 w-8 h-8" />,
      title: "Material Design",
      description: "Pixel-perfect UI/UX implementation",
      extended: "We implement Google's Material Design guidelines to create intuitive, beautiful interfaces that Android users love, with attention to motion, depth, and responsive layouts.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Battery className="text-blue-500 w-8 h-8" />,
      title: "Battery Optimization",
      description: "Efficient background processing",
      extended: "Our team specializes in writing battery-efficient code, optimizing background services, and implementing modern Android power management features.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <PieChart className="text-blue-500 w-8 h-8" />,
      title: "Play Store Expertise",
      description: "Seamless deployment & updates",
      extended: "We handle the entire Play Store submission process, including store listings, screenshots, release management, and staged rollouts for your Android app.",
      bgColor: "bg-amber-50"
    }
  ];

  const benefits = [
    {
      title: "Market Dominance",
      description: "72% of global smartphone users",
      icon: <BarChart2 className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Custom Hardware",
      description: "Access to device-specific features",
      icon: <Cpu className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Offline Capabilities",
      description: "Robust data synchronization",
      icon: <Database className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Enterprise Ready",
      description: "Secure business applications",
      icon: <Shield className="text-blue-500 w-6 h-6" />
    }
  ];

  const hiringModels = [
    {
      title: "Dedicated Team",
      description: "Complete Android development team",
      price: "Custom",
      features: ["Project manager", "UI/UX designer", "QA engineers", "DevOps"],
      popular: false,
      icon: <Layers className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Senior Developer",
      description: "Experienced Android engineer",
      price: "$5,500+/mo",
      features: ["40+ hours/week", "Kotlin expertise", "Architecture design"],
      popular: true,
      icon: <Code className="text-blue-500 w-6 h-6" />
    },
    {
      title: "App Modernization",
      description: "Update legacy Android apps",
      price: "From $12,000",
      features: ["Kotlin migration", "Material 3 UI", "Performance audit"],
      popular: false,
      icon: <Zap className="text-blue-500 w-6 h-6" />
    }
  ];

  const techStack = [
    {
      category: "Languages",
      items: ["Kotlin", "Java", "C++ (NDK)"],
      icon: <Code className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Frameworks",
      items: ["Android SDK", "Jetpack Compose", "Room DB"],
      icon: <Layers className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Architecture",
      items: ["MVVM", "Clean Architecture", "MVI"],
      icon: <GitMerge className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Testing",
      items: ["Espresso", "JUnit", "MockK", "Firebase Test Lab"],
      icon: <Check className="text-blue-500 w-5 h-5" />
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
                       Android Developer
                        </motion.div>
                      </div>
                    </motion.div>
      {/* Hero Section with Phone Animation */}
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
                <Smartphone className="w-4 h-4" />
                <p className="text-sm font-medium">Android Development Experts</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire Expert <span className="text-blue-600">Android Developers</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Build high-performance, scalable Android applications with our certified Kotlin and Java developers.
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
                  Get Started <ArrowRight size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white border-2 border-blue-300 text-blue-600 rounded-lg font-medium flex items-center gap-2 cursor-pointer"
                  onClick={()=> navigate('/portfolio')}

                >
                  View Play Store Portfolio
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
                <div className="relative">
                  {/* Animated Phone Mockup */}
                  <motion.div 
                    className="w-64 h-auto mx-auto"
                    initial={{ scale: 0.9, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                      <div className="relative bg-white rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 opacity-80"></div>
                        <motion.div 
                          className="relative z-10 text-white text-center p-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Code className="w-12 h-12 mx-auto mb-4" />
                          <h3 className="text-xl font-bold mb-2">Android Excellence</h3>
                          <p className="text-sm">Native Performance</p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Android-Specific Icons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Android Development Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build Android apps that leverage platform capabilities to the fullest
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

      {/* Tech Stack Section with Android Focus */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Android Tech Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies we use for Android development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-bold text-blue-600">{tech.category}</h3>
                </div>
                <ul className="space-y-3">
                  {tech.items.map((item, j) => (
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

      {/* Benefits Section with Market Data */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Invest in Android?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key advantages of Android development for your business
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

      {/* Hiring Models with Android Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Hiring Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement models for Android development
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

      {/* CTA Section with Play Store Focus */}
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
              Ready to Launch Your Android App?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's build an Android application that stands out in the Play Store and delivers exceptional user experiences.
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
                Discuss Your App Idea <ArrowRight size={18} />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2"
              >
                Get Play Store Strategy
              </motion.button> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form with Android Focus
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6">Let's Build Your Android App</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Whether you need a new app or want to improve an existing one, our Android specialists are ready to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">Email</h3>
                    <p className="text-lg font-medium">android@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">Phone</h3>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">Hours</h3>
                    <p className="text-lg font-medium">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative"
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Thank You!</h3>
                <p className="text-blue-600">
                  Your message has been sent. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-600 mb-2">Tell us about your Android project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default HireAndroidDevelopers;