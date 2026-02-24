import { motion } from "framer-motion";
import { Code, Shield, Cpu, GitBranch, BarChart2, Server, Clock, ArrowRight, ChevronDown, Check, Star, Award, Users, MessageSquare, Mail, Phone, Database, Network, Layers,Cloud,MapPin, ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RealEstate = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [expandedCase, setExpandedCase] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const stats = [
    { value: "200+", label: "Projects Completed", icon: <Code className="text-blue-600" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star className="text-blue-600" /> },
    { value: "50+", label: "Technologies Used", icon: <Cpu className="text-blue-600" /> },
    { value: "24/7", label: "Support", icon: <Clock className="text-blue-600" /> }
  ];

  const services = [
    {
      icon: <Code className="text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed for your specific business needs"
    },
    {
      icon: <Server className="text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and migration services"
    },
    {
      icon: <Shield className="text-blue-600" />,
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital assets"
    },
    {
      icon: <BarChart2 className="text-blue-600" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights"
    }
  ];

  const solutions = [
    {
      title: "Web Development",
      description: "High-performance websites and web applications",
      icon: <Code className="text-blue-600" />
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android applications for all business needs",
      icon: <Cpu className="text-blue-600" />
    },
    {
      title: "Enterprise Software",
      description: "Custom solutions for large-scale business operations",
      icon: <Database className="text-blue-600" />
    },
    {
      title: "DevOps",
      description: "Streamlined development and deployment pipelines",
      icon: <GitBranch className="text-blue-600" />
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "E-commerce Platform",
      challenge: "Legacy system unable to handle peak traffic loads",
      solution: "Developed microservices architecture with auto-scaling",
      results: [
        "Handled 10x more traffic during peak seasons",
        "Reduced page load time by 70%",
        "Increased conversion rate by 25%"
      ]
    },
    {
      id: 2,
      name: "Healthcare SaaS",
      challenge: "Needed HIPAA-compliant patient management system",
      solution: "Built secure cloud-based platform with audit logging",
      results: [
        "Achieved full HIPAA compliance",
        "Reduced administrative workload by 40%",
        "Scaled to 500+ healthcare providers"
      ]
    },
    {
      id: 3,
      name: "FinTech Mobile App",
      challenge: "Required real-time transaction processing with 99.99% uptime",
      solution: "Implemented distributed architecture with failover mechanisms",
      results: [
        "Processed 1M+ transactions daily",
        "Maintained 99.99% uptime SLA",
        "Reduced fraud incidents by 90%"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Their team delivered our enterprise software ahead of schedule while exceeding all performance benchmarks.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      rating: 5
    },
    {
      quote: "The cybersecurity solution they implemented protected us from a major ransomware attack in the first month.",
      author: "Michael Chen",
      role: "CIO, Financial Services",
      rating: 5
    },
    {
      quote: "Our mobile app developed by them has 4.9 stars on both app stores with over 100k downloads.",
      author: "Emma Rodriguez",
      role: "Product Manager, Retail",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$25K",
      period: "project",
      description: "Ideal for MVPs and small-scale applications",
      features: [
        "Basic features development",
        "Single platform deployment",
        "Standard UI/UX",
        "3 months support"
      ],
      cta: "Start Project"
    },
    {
      name: "Enterprise",
      price: "$100K+",
      period: "project",
      description: "Comprehensive solutions for large businesses",
      features: [
        "Custom feature development",
        "Multi-platform deployment",
        "Premium UI/UX",
        "DevOps integration",
        "1 year support",
        "Dedicated team"
      ],
      cta: "Get Enterprise Plan",
      popular: true
    },
    {
      name: "Dedicated Team",
      price: "Custom",
      period: "monthly",
      description: "Extended team for ongoing development",
      features: [
        "Flexible team composition",
        "Agile development process",
        "Continuous deployment",
        "Priority support",
        "Regular code reviews"
      ],
      cta: "Contact for Details"
    }
  ];

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "We work with a wide range of technologies including JavaScript/TypeScript (React, Angular, Node.js), Python (Django, Flask), Java/Kotlin, Swift, .NET, and cloud platforms like AWS, Azure, and GCP."
    },
    {
      question: "What's your development process?",
      answer: "We follow Agile methodologies with 2-week sprints, daily standups, and continuous integration/delivery. Each project includes discovery, design, development, testing, and deployment phases with client involvement throughout."
    },
    {
      question: "How do you ensure code quality?",
      answer: "We implement rigorous code reviews, automated testing (unit, integration, E2E), static code analysis, and maintain high test coverage (typically 80%+). All code goes through QA before deployment."
    },
    {
      question: "What about post-launch support?",
      answer: "All our projects include a warranty period with bug fixes. We offer ongoing maintenance plans with SLAs for response times. For critical systems, we provide 24/7 monitoring and support options."
    }
  ];

  const toggleCase = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
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
                       CReal estate
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
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
              className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200"
          >
            <p className="text-sm font-medium text-blue-600">Custom Software Solutions</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Software Development</span> Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            We build scalable, secure software solutions that drive business growth and digital transformation
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
              onClick={() => navigate("/get-in-touch")}

            >
               Get Free Consultation <ArrowRight size={20} />
            </motion.button>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg"
            >
              Get Free Consultation
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Software Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            End-to-end solutions for all your digital transformation needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
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
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Specialized expertise across platforms and industries
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-blue-50 rounded-lg p-1 border border-blue-100">
            {[
              { id: 'services', label: 'Services' },
              { id: 'cases', label: 'Case Studies' },
              { id: 'pricing', label: 'Pricing' }
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
          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Comprehensive Software Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Development</h3>
                  <ul className="space-y-4">
                    {[
                      "Custom application development",
                      "API and microservices architecture",
                      "Legacy system modernization",
                      "Database design and optimization",
                      "Third-party integrations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Consulting</h3>
                  <ul className="space-y-4">
                    {[
                      "Technology stack evaluation",
                      "Cloud migration strategy",
                      "DevOps implementation",
                      "Security audits",
                      "Digital transformation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Maintenance & Support</h3>
                <p className="text-gray-700 mb-6">
                  Our ongoing support services ensure your software remains secure, up-to-date, 
                  and continues to meet your evolving business needs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg cursor-pointer"
               onClick={()=>window.open('https://calendly.com/etechnocrat/saas-app')}
                >
                  Explore Support Plans
                </motion.button>
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
              <h2 className="text-2xl font-bold mb-8">Software Development Case Studies</h2>
              
              <div className="space-y-6">
                {successStories.map((caseStudy) => (
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

          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Development Pricing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-xl border ${
                      plan.popular 
                        ? 'border-blue-300 shadow-lg' 
                        : 'border-gray-200 shadow-sm'
                    } overflow-hidden`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-end mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-500 ml-1">/{plan.period}</span>
                      </div>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-3 rounded-lg font-medium cursor-pointer ${
                          plan.popular
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                            : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}
                   onClick={()=>window.open('https://calendly.com/etechnocrat/saas-app')}
                      >
                        {plan.cta}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            What our clients say about working with us
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
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

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Industry Recognition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Awards and certifications that demonstrate our expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Top Development Firm 2023", icon: <Award className="text-blue-600" /> },
            { name: "AWS Partner Network", icon: <Server className="text-blue-600" /> },
            { name: "Google Cloud Certified", icon: <Cloud className="text-blue-600" /> },
            { name: "Security Excellence Award", icon: <Shield className="text-blue-600" /> }
          ].map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-3 rounded-full"
                >
                  {award.icon}
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{award.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything you need to know about our services
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`transform transition-transform text-blue-500 ${
                    activeFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100"
          >
            <h2 className="text-3xl font-bold mb-6">Contact Our Team</h2>
            <p className="text-gray-600 mb-8">
              Ready to discuss your software project? Our experts are available to help you plan, estimate, and execute your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a       href="mailto:info@itsolz.tech"
className="text-blue-600 hover:underline">
                         info@itsolz.tech

                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <a href="tel:+923367912623" className="text-blue-600 hover:underline">
                      +92-336-7912623

                  </a>
                </div>
              </div>
              
            <div className="flex items-start gap-4">
  <div className="bg-blue-100 p-3 rounded-full">
    <MapPin className="text-blue-600" />
  </div>
  <div className="space-y-4">
    <h4 className="font-semibold mb-1">Our Offices</h4>
    
    {/* Pakistan Office */}
    <div>
      <p className="font-semibold text-gray-800">Pakistan Office</p>
      <p className="text-gray-600">LUMS, DHA Phase 4, Lahore, Pakistan</p>
    </div>

    {/* UK Office */}
    <div>
      <p className="font-semibold text-gray-800">UK Office</p>
      <p className="text-gray-600">36 Hatherley Grove, London, W2 5RB, United Kingdom</p>
    </div>
  </div>
</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Needed
            </label>
            <select
              id="service"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="cloud">Cloud Solutions</option>
              <option value="enterprise">Enterprise Software</option>
              <option value="consulting">Technology Consulting</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us about your project requirements..."
              required
            ></textarea>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-lg font-semibold shadow-lg cursor-pointer"
              onClick={() => navigate("/get-in-touch")}

          >
            Get Free Consultation
          </motion.button>
        </form>
      </motion.div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-12 text-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-800/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Ready to Build Your Software Solution?</h2>
      <p className="text-blue-200 max-w-2xl mx-auto mb-8 relative z-10">
        Let's discuss how we can transform your ideas into high-performance digital products.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
          onClick={() => navigate("/get-in-touch")}
        >
          Start Your Project
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 cursor-pointer"
          onClick={() => navigate("/case-studies")}
        >
          View Case Studies
        </motion.button>
      </div>
    </motion.div>
  </section>
</div>
);
};

export default RealEstate;