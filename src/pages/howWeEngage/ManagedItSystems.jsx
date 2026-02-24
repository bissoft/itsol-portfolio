import { motion } from "framer-motion";
import { Server, Shield, Zap, Clock, BarChart2, Users, ArrowRight, Check, Wifi, Cloud, Database, Cpu, ChevronDown, Mail, Phone, MessageSquare, ArrowLeft, ChevronRight, Activity, Layers } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagedItSystems = () => {
  const [expandedCase, setExpandedCase] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const stats = [
    { value: "99.99%", label: "Uptime Guaranteed", icon: <Activity className="text-blue-500" /> },
    { value: "< 15m", label: "Avg. Response Time", icon: <Clock className="text-blue-500" /> },
    { value: "30%", label: "IT Cost Reduction", icon: <BarChart2 className="text-blue-500" /> },
    { value: "24/7", label: "Proactive Monitoring", icon: <Shield className="text-blue-500" /> }
  ];

  const services = [
    {
      title: "Network Management",
      description: "Comprehensive management of your network infrastructure ensuring optimal performance and security.",
      features: [
        "Continuous network monitoring",
        "Performance optimization",
        "Security patching",
        "Bandwidth management"
      ],
      icon: <Wifi className="text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      title: "Cloud Infrastructure",
      description: "End-to-end cloud management, from migration to cost optimization and security.",
      features: [
        "Cloud migration planning",
        "Cost optimization strategies",
        "Security configuration",
        "Backup & disaster recovery"
      ],
      icon: <Cloud className="text-blue-500" />,
      color: "bg-purple-50"
    },
    {
      title: "Cybersecurity",
      description: "Robust protection for your systems against evolving digital threats and vulnerabilities.",
      features: [
        "Firewall management",
        "Intrusion detection systems",
        "Vulnerability scanning",
        "Regular security audits"
      ],
      icon: <Shield className="text-blue-500" />,
      color: "bg-indigo-50"
    },
    {
      title: "Server Administration",
      description: "Proactive server maintenance to prevent downtime and ensure maximum efficiency.",
      features: [
        "Performance tuning",
        "Patch management",
        "Capacity planning",
        "Virtualization support"
      ],
      icon: <Server className="text-blue-500" />,
      color: "bg-green-50"
    }
  ];

  const benefits = [
    {
      name: "Reduced Downtime",
      description: "Proactive AI-driven monitoring prevents issues before they impact your business operations.",
      icon: <Zap className="text-blue-500" />
    },
    {
      name: "Expert Team",
      description: "Gain access to a certified team of IT professionals without the overhead of internal hiring.",
      icon: <Users className="text-blue-500" />
    },
    {
      name: "Predictable Costs",
      description: "Transition from unpredictable break-fix costs to a stable, transparent monthly managed model.",
      icon: <BarChart2 className="text-blue-500" />
    }
  ];

  const caseStudies = [
    {
      id: 1,
      name: "Global Logistics Network Overhaul",
      challenge: "Frequent network outages were costing $10k/hour in lost productivity and delays.",
      solution: "Implemented SD-WAN and 24/7 proactive monitoring with redundant failovers.",
      results: [
        "Reduced downtime by 99%",
        "Improved network speed by 40%",
        "Saved $150k in annual maintenance"
      ]
    },
    {
      id: 2,
      name: "Fintech Cloud Migration",
      challenge: "Legacy on-premise systems were limiting scalability and raising security concerns.",
      solution: "Managed seamless migration to AWS with auto-scaling and zero-trust security.",
      results: [
        "Cut infrastructure costs by 60%",
        "Achieved ISO 27001 compliance",
        "Enabled secure remote work"
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in your managed services?",
      answer: "Our core package includes 24/7 monitoring, security management, helpdesk support, performance optimization, and regular strategic reviews."
    },
    {
      question: "How quickly can you respond to issues?",
      answer: "We guarantee a 15-minute response time for critical issues. Our NOC (Network Operations Center) works 24/7 to resolve alerts often before you notice them."
    },
    {
      question: "Can you work with our existing IT team?",
      answer: "Absolutely! We often operate in a co-managed model, handling routine maintenance and security while your internal team focuses on strategic initiatives."
    }
  ];

  const toggleCase = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
      >
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -3, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">Back</span>
        </motion.button>
        <div className="flex items-center gap-1 sm:gap-2">
          <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm"
          >
            Managed IT Systems
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
            <p className="text-sm font-medium text-blue-600">Enterprise-Grade IT Support</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Reliable <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">Managed IT</span> Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Focus on your core business while we handle your technology. We provide proactive monitoring, security, and strategy to keep your systems running at peak performance.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
              onClick={() => navigate('/get-in-touch')}
            >
              Get Peace of Mind <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 cursor-pointer"
              onClick={() => navigate('/case-studies')}
            >
              View Success Stories
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive IT Management</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver end-to-end support for your entire digital ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md group"
            >
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <motion.div
                  animate={{ rotate: hoveredService === index ? [0, -10, 10, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 rounded-3xl my-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Measurable improvements for your business reliability and bottom line
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.name}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onboarding & Operations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured approach to taking over and optimizing your IT systems
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>

          <div className="space-y-12">
            {[
              { step: "Assessment", desc: "Full audit of your current infrastructure and risks", time: "Week 1" },
              { step: "Strategy", desc: "Customized management plan and SLA definition", time: "Week 2" },
              { step: "Deployment", desc: "Installation of monitoring agents and security tools", time: "Week 3" },
              { step: "Optimization", desc: "Initial remediation of critical issues and performance tuning", time: "Week 4" },
              { step: "Management", desc: "Ongoing 24/7 support and monthly strategic reporting", time: "Ongoing" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center -translate-x-1/2 z-10">
                  <span className="text-white font-bold text-xs">{index + 1}</span>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-blue-300 transition-colors">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.step}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-900 text-white rounded-3xl relative overflow-hidden my-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              See how we've transformed IT operations for other enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <h3 className="text-2xl font-bold mb-2">{study.name}</h3>
                <p className="text-blue-200 mb-6 text-sm">{study.challenge}</p>
                <div className="space-y-2">
                  {study.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-green-400" size={16} />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center bg-white"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <ChevronDown className={`text-gray-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 bg-white text-gray-600 border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Worrying About IT</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Get a free network assessment and find out how much you can save with managed services.
            </p>
            <button
              onClick={() => navigate('/get-in-touch')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg cursor-pointer"
            >
              Schedule Free Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedItSystems;