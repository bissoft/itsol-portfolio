import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Cpu, 
  Layers, 
  Globe, 
  Smartphone, 
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
  GitBranch,
  Monitor,
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireReactJsDevelopers = () => {
  const [activeTab, setActiveTab] = useState("why-react");
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
      title: "Component-Based Architecture",
      description: "Reusable components for faster development",
      extended: "Our React developers build modular UI components that can be reused across your application, reducing development time and ensuring consistency."
    },
    {
      icon: <Smartphone className="text-blue-500 w-8 h-8" />,
      title: "Responsive Design",
      description: "Flawless experience across all devices",
      extended: "We implement responsive design principles with React to ensure your application looks and works perfectly on desktops, tablets, and mobile devices."
    },
    {
      icon: <Shield className="text-blue-500 w-8 h-8" />,
      title: "Performance Optimized",
      description: "Virtual DOM for efficient updates",
      extended: "Our team leverages React's virtual DOM and optimization techniques like memoization and code splitting to deliver blazing-fast applications."
    },
    {
      icon: <GitBranch className="text-blue-500 w-8 h-8" />,
      title: "State Management",
      description: "Efficient data flow with Redux/Context",
      extended: "We implement robust state management solutions like Redux, Context API, or Zustand to handle complex application states predictably."
    }
  ];

  const benefits = [
    {
      title: "Faster Development",
      description: "Reusable components accelerate delivery"
    },
    {
      title: "Rich Ecosystem",
      description: "Access to thousands of React libraries"
    },
    {
      title: "SEO Friendly",
      description: "Next.js for server-side rendering"
    },
    {
      title: "Community Support",
      description: "Backed by Facebook and open-source community"
    }
  ];

  const hiringModels = [
    {
      title: "Dedicated Team",
      description: "Complete React team for your project",
      price: "Custom",
      features: ["Project manager", "UI/UX designer", "QA engineers"]
    },
    {
      title: "Full-time Developer",
      description: "Single dedicated React engineer",
      price: "$4,500+/mo",
      features: ["40+ hours/week", "Direct communication", "Flexible engagement"]
    },
    {
      title: "Hourly Consulting",
      description: "Pay-as-you-go React expertise",
      price: "$70-$120/hr",
      features: ["Specific features", "Code reviews", "Performance optimization"]
    }
  ];

  const reactEcosystem = [
    {
      category: "Frameworks",
      items: ["Next.js", "Gatsby", "Remix", "React Native"]
    },
    {
      category: "State Management",
      items: ["Redux", "Context API", "Zustand", "Recoil"]
    },
    {
      category: "UI Libraries",
      items: ["Material UI", "Ant Design", "Chakra UI", "Tailwind CSS"]
    },
    {
      category: "Testing",
      items: ["Jest", "React Testing Library", "Cypress", "Enzyme"]
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
                                                   Hire Reactjs Developer
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
                <p className="text-sm font-medium">Hire Top React Talent</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire Expert <span className="text-blue-600">React.js Developers</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Build interactive, high-performance user interfaces with our vetted React engineers. 
                From SPAs to PWAs, we deliver exceptional React solutions.
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
                  className="px-8 py-3 bg-white border-2 border-blue-300 text-blue-600 rounded-lg font-medium flex items-center cursor-pointer gap-2"
                  onClick={()=> navigate('/portfolio')}

                >
                  View Portfolio
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
                  <h3 className="text-2xl font-bold mb-4">Why React.js?</h3>
                  <p className="text-gray-600 mb-6">
                    React's component-based architecture and virtual DOM make it ideal for 
                    building dynamic, high-performance user interfaces.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Layers />, text: "Components" },
                      { icon: <Zap />, text: "Fast" },
                      { icon: <Globe />, text: "SPA" },
                      { icon: <Smartphone />, text: "Mobile" }
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
          <h2 className="text-3xl font-bold mb-4">React.js Development Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our React developers bring deep technical knowledge to build 
            interactive, high-performance user interfaces.
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

      {/* React Ecosystem Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">React Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the complete React ecosystem to deliver optimal solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reactEcosystem.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
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
            How hiring our React.js developers delivers value to your organization
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
                    Recommended
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
                  className={`w-full py-3 cursor-pointer rounded-lg font-medium ${i === 1 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}
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
              Ready to Build with React.js?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how our React experts can help you build interactive, 
              high-performance user interfaces tailored to your needs.
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

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions about hiring React.js developers? Our team will get 
              back to you within 24 hours.
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
      </section>
    </div>
  );
};

export default HireReactJsDevelopers;