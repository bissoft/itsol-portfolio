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
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireElixirDevelopers = () => {
  const [activeTab, setActiveTab] = useState("why-choose");
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
      icon: <Zap className="text-blue-500 w-8 h-8" />,
      title: "High Performance",
      description: "Elixir runs on the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems.",
      extended: "Our developers leverage BEAM's capabilities to build systems that handle millions of concurrent connections with minimal resources."
    },
    {
      icon: <Server className="text-blue-500 w-8 h-8" />,
      title: "Scalability",
      description: "Built for horizontal scaling to grow with your business needs.",
      extended: "Elixir's lightweight processes allow for effortless scaling across cores and machines without complex architectures."
    },
    {
      icon: <Shield className="text-blue-500 w-8 h-8" />,
      title: "Fault Tolerance",
      description: "Self-healing systems that minimize downtime.",
      extended: "Leveraging OTP principles, we build systems that recover automatically from failures without losing data."
    },
    {
      icon: <Globe className="text-blue-500 w-8 h-8" />,
      title: "Real-time Capabilities",
      description: "Perfect for applications requiring live updates and interactions.",
      extended: "Using Phoenix Channels and LiveView, we create immersive real-time experiences with minimal latency."
    }
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce infrastructure costs with highly efficient systems"
    },
    {
      title: "Faster Time-to-Market",
      description: "Elixir's productivity accelerates your development cycle"
    },
    {
      title: "Future-proof Architecture",
      description: "Designed to evolve with your business needs"
    },
    {
      title: "Expert Guidance",
      description: "Access to senior Elixir developers with production experience"
    }
  ];

  const hiringModels = [
    {
      title: "Dedicated Team",
      description: "A complete team working exclusively on your project",
      price: "Custom"
    },
    {
      title: "Monthly Retainer",
      description: "Fixed monthly hours with flexible allocation",
      price: "$5,000+"
    },
    {
      title: "Hourly Engagement",
      description: "Pay-as-you-go model for specific tasks",
      price: "$80-$120/hr"
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
                                       Hire Elixir Developer
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
                <p className="text-sm font-medium">Hire Elite Elixir Talent</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire Expert <span className="text-blue-600">Elixir Developers</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Build scalable, fault-tolerant applications with our vetted Elixir engineers. 
                Augment your team or outsource complete projects.
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
                  <h3 className="text-2xl font-bold mb-4">Why Elixir?</h3>
                  <p className="text-gray-600 mb-6">
                    Elixir combines Ruby's elegant syntax with Erlang's battle-tested 
                    infrastructure for building scalable and maintainable applications.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Cpu />, text: "Concurrent" },
                      { icon: <Database />, text: "Distributed" },
                      { icon: <Shield />, text: "Fault-tolerant" },
                      { icon: <Globe />, text: "Real-time" }
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
          <h2 className="text-3xl font-bold mb-4">Elixir Development Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our developers bring deep expertise across the Elixir ecosystem to deliver 
            robust solutions tailored to your needs.
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Business Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How hiring our Elixir developers translates to tangible business outcomes
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
        </div>
      </section>

      {/* Hiring Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Flexible Hiring Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the engagement model that best fits your project requirements
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg cursor-pointer font-medium ${i === 1 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}
                  onClick={()=> navigate('/get-in-touch')}

              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
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
              Ready to Build with Elixir?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how our Elixir experts can bring your project to life with 
              scalable, maintainable code.
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2 cursor-pointer"
                  onClick={()=> navigate('/sales')}

              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions about hiring Elixir developers? Fill out the form and 
              our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">Email</h3>
                  <p className="text-lg font-medium">contact@example.com</p>
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-green-50 border border-green-200 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-600">
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
                    <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
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

export default HireElixirDevelopers;