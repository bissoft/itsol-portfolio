import { motion } from "framer-motion";
import { Headset, Shield, Clock, Zap, Cpu, Server, Code, Cloud, Lock, ArrowRight, ChevronDown, Check, Star, Users, Clipboard, Wifi, Activity, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TechnicalSupportServices = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const navigate = useNavigate();

  // Stats Data
  const stats = [
    { value: "24/7", label: "Support Availability", icon: <Clock className="text-blue-500" /> },
    { value: "15 min", label: "Average Response Time", icon: <Zap className="text-blue-500" /> },
    { value: "98%", label: "Customer Satisfaction", icon: <Headset className="text-blue-500" /> },
    { value: "100+", label: "Supported Technologies", icon: <Cpu className="text-blue-500" /> }
  ];

  // Services Data
  const services = [
    {
      icon: <Headset className="text-blue-500" />,
      title: "Help Desk Support",
      description: "Round-the-clock technical assistance for your users"
    },
    {
      icon: <Server className="text-blue-500" />,
      title: "Infrastructure Monitoring",
      description: "Proactive system health checks and maintenance"
    },
    {
      icon: <Cloud className="text-blue-500" />,
      title: "Cloud Support",
      description: "Expert management of your cloud environments"
    },
    {
      icon: <Code className="text-blue-500" />,
      title: "Application Support",
      description: "Ongoing maintenance for your software solutions"
    }
  ];

  // Features Data
  const features = [
    {
      title: "Proactive Monitoring",
      description: "Identify and resolve issues before they impact users",
      icon: <Activity className="text-blue-500" />
    },
    {
      title: "Multi-Channel Support",
      description: "Email, chat, phone, and ticket system options",
      icon: <Headset className="text-blue-500" />
    },
    {
      title: "Security First",
      description: "Regular updates and vulnerability patching",
      icon: <Shield className="text-blue-500" />
    },
    {
      title: "Detailed Reporting",
      description: "Transparent metrics on system performance",
      icon: <Clipboard className="text-blue-500" />
    }
  ];

  // Support Tiers Data
  const supportTiers = [
    {
      tier: "Basic",
      price: "$999",
      period: "/month",
      features: [
        "Business hours support",
        "Email ticketing system",
        "Monthly health reports",
        "Basic troubleshooting"
      ],
      bestValue: false
    },
    {
      tier: "Professional",
      price: "$2,499",
      period: "/month",
      features: [
        "24/5 support coverage",
        "Phone and chat support",
        "Weekly performance reports",
        "Priority ticket handling",
        "System monitoring"
      ],
      bestValue: true
    },
    {
      tier: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "24/7 dedicated support",
        "15-minute response SLA",
        "Dedicated account manager",
        "Advanced monitoring",
        "Custom reporting",
        "On-call engineers"
      ],
      bestValue: false
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Their support team resolved our critical outage in 22 minutes - faster than our internal team could have.",
      author: "Michael Johnson",
      role: "CIO, FinTech Company",
      rating: 5
    },
    {
      quote: "We've reduced our system downtime by 80% since engaging their technical support services.",
      author: "Sarah Chen",
      role: "CTO, SaaS Platform",
      rating: 5
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What's your average response time for critical issues?",
      answer: "We guarantee 15-minute response for P1 issues and 1-hour response for P2 issues with our Enterprise plan."
    },
    {
      question: "Do you provide support for legacy systems?",
      answer: "Yes, our team has experience supporting systems across all technology generations with specialized engineers."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
                                                                            Technical Support Services
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
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              transition: { duration: 25, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200"
          >
            <p className="text-sm font-medium text-blue-600">Always-On Support</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Technical Support
            </span> Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Proactive, expert support to keep your systems running smoothly and your users productive
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
            onClick={() => navigate('/support')}

            >
              Get Support <ArrowRight size={20} />
            </motion.button>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
            >
              View Plans
            </motion.button> */}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="bg-blue-100 p-3 rounded-full"
                >
                  {stat.icon}
                </motion.div>
              </div>
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-blue-600 mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Support Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive technical support solutions tailored to your needs
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose Our Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Enterprise-grade support with a customer-first approach
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-3 rounded-lg"
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Tiers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Support Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Flexible options to match your support needs
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {supportTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: tier.bestValue ? 1.03 : 1.02 }}
              className={`relative rounded-xl overflow-hidden ${tier.bestValue ? 'border-2 border-blue-500' : 'border border-gray-200'}`}
            >
              {tier.bestValue && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold">
                  Best Value
                </div>
              )}
              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-500 ml-1">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full cursor-pointer py-3 rounded-lg font-semibold ${tier.bestValue ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}
            onClick={() => navigate('/get-in-touch')}

                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Trusted by companies worldwide for their critical support needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
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
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              transition: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"
          ></motion.div>
          
          <h2 className="text-3xl font-bold mb-4 text-white">Need Reliable Technical Support?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Our expert team is ready to keep your systems running smoothly 24/7
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold cursor-pointer"
            onClick={() => navigate('/get-in-touch')}

            >
              Get Support Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold cursor-pointer"
            onClick={() => navigate('/sales')}

            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TechnicalSupportServices;