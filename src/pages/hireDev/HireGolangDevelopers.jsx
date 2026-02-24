import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Server, 
  Shield, 
  Zap,
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  BarChart2,
  Cloud,
  Binary,
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireGolangDevelopers = () => {
  const [activeTab, setActiveTab] = useState("why-golang");
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
      icon: <Zap className="text-blue-500 w-8 h-8" />,
      title: "Blazing Fast Performance",
      description: "Compiled language with near-native execution speed",
      extended: "Our Golang developers leverage the language's compiled nature and efficient garbage collection to build applications that outperform interpreted languages by orders of magnitude."
    },
    {
      icon: <Server className="text-blue-500 w-8 h-8" />,
      title: "Concurrent Programming",
      description: "Goroutines make concurrency simple and efficient",
      extended: "We use Go's lightweight goroutines and channels to build highly concurrent systems that can handle thousands of simultaneous operations with minimal resource overhead."
    },
    {
      icon: <Shield className="text-blue-500 w-8 h-8" />,
      title: "Memory Safety",
      description: "Strong typing and garbage collection prevent common vulnerabilities",
      extended: "Go's memory management and type system help us build secure applications that are resistant to buffer overflows, memory leaks, and other common security issues."
    },
    {
      icon: <Binary className="text-blue-500 w-8 h-8" />,
      title: "Systems Programming",
      description: "Ideal for building infrastructure and networking tools",
      extended: "Our teams use Go to create high-performance network services, distributed systems, and cloud infrastructure components that power modern applications."
    }
  ];

  const benefits = [
    {
      title: "Reduced Cloud Costs",
      description: "Efficient resource usage lowers infrastructure bills"
    },
    {
      title: "Faster Development",
      description: "Simple syntax and comprehensive standard library"
    },
    {
      title: "Easy Maintenance",
      description: "Strict formatting and dependency management"
    },
    {
      title: "Future-proof",
      description: "Backed by Google with growing adoption"
    }
  ];

  const hiringModels = [
    {
      title: "Dedicated Team",
      description: "Complete Golang team for your project",
      price: "Custom",
      features: ["Senior developers", "Project manager", "DevOps engineers"]
    },
    {
      title: "Full-time Developer",
      description: "Single dedicated Golang engineer",
      price: "$6,000+/mo",
      features: ["40+ hours/week", "Direct communication", "Flexible engagement"]
    },
    {
      title: "Hourly Consulting",
      description: "Pay-as-you-go Golang expertise",
      price: "$90-$150/hr",
      features: ["Performance optimization", "Code reviews", "System architecture"]
    }
  ];

  const techStack = [
    {
      category: "Frameworks",
      items: ["Gin", "Echo", "Fiber", "Beego"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "Cassandra"]
    },
    {
      category: "Cloud",
      items: ["Docker", "Kubernetes", "AWS", "GCP"]
    },
    {
      category: "Tools",
      items: ["Protocol Buffers", "gRPC", "Go Modules", "Cobra"]
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
                                             Hire Golang Developer
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
                className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm font-medium">Hire Top Golang Talent</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire Expert <span className="text-blue-600">Golang Developers</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Build high-performance, concurrent systems with our vetted Golang engineers. 
                From microservices to distributed systems, we deliver robust solutions.
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
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 cursor-pointer"
                  onClick={()=> navigate('/get-in-touch')}

                >
                  Get Started <ArrowRight size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white border-2 border-blue-300 text-blue-600 rounded-lg font-medium flex items-center gap-2 cursor-pointer"
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
                  <Code className="text-blue-500 w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Why Golang?</h3>
                  <p className="text-gray-600 mb-6">
                    Golang combines the performance of compiled languages with the simplicity 
                    of modern syntax, ideal for cloud-native applications.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Zap />, text: "Fast" },
                      { icon: <Server />, text: "Concurrent" },
                      { icon: <Shield />, text: "Secure" },
                      { icon: <Cloud />, text: "Cloud-native" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="flex items-center gap-2 bg-blue-50 px-4 py-3 rounded-lg"
                      >
                        <div className="text-blue-500">{item.icon}</div>
                        <span className="font-medium">{item.text}</span>
                      </motion.div>
                    ))}
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
          <h2 className="text-3xl font-bold mb-4">Golang Development Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Golang developers bring deep technical knowledge to build 
            high-performance, scalable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-white p-6 rounded-xl border ${expandedFeature === i ? 'border-blue-300 shadow-lg' : 'border-gray-200 hover:border-blue-200'} transition-all cursor-pointer`}
              onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <AnimatePresence>
                    {expandedFeature === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-600 overflow-hidden"
                      >
                        {feature.extended}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-medium">
                      {expandedFeature === i ? 'Show less' : 'Learn more'}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedFeature === i ? 180 : 0 }}
                    >
                      <ChevronDown className="text-blue-500" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Golang Tech Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with modern tools and technologies in the Golang ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{tech.category}</h3>
                <ul className="space-y-3">
                  {tech.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className="text-green-500 flex-shrink-0" size={16} />
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
          <h2 className="text-3xl font-bold mb-4">Business Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How hiring our Golang developers delivers value to your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-blue-600 w-8 h-8" />
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
            <h2 className="text-3xl font-bold mb-4">Flexible Hiring Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the engagement model that fits your project requirements
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
                whileHover={{ scale: 1.03 }}
                className={`bg-white p-8 rounded-xl border ${i === 1 ? 'border-blue-300 shadow-lg relative' : 'border-gray-200'} transition-all`}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <div className="text-3xl font-bold text-blue-600 mb-6">{model.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer w-full py-3 rounded-lg font-medium ${i === 1 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}
                  onClick={()=> navigate('/get-in-touch')}

                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Build with Golang?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how our Golang experts can help you build high-performance, 
              concurrent systems tailored to your needs.
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
                Schedule a Call <ArrowRight size={18} />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2"
              >
                Get Pricing Details
              </motion.button> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireGolangDevelopers;