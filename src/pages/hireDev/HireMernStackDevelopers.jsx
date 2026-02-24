import { motion, AnimatePresence } from "framer-motion";
import { 
  Code,
  Database,
  Server,
  Cpu,
  Shield,
  GitMerge,
  Layers,
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
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireMERNStackDevelopers = () => {
  const [activeTab, setActiveTab] = useState("why-mern");
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
      icon: <Code className="text-blue-500 w-8 h-8" />,
      title: "Full-Stack JavaScript",
      description: "End-to-end development with one language",
      extended: "Our MERN developers are proficient in JavaScript across the entire stack, ensuring seamless integration between frontend and backend components.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Database className="text-blue-500 w-8 h-8" />,
      title: "MongoDB Expertise",
      description: "Flexible NoSQL database solutions",
      extended: "We design scalable MongoDB architectures with proper indexing, aggregation pipelines, and data modeling for optimal performance.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Server className="text-blue-500 w-8 h-8" />,
      title: "Node.js Backend",
      description: "High-performance server-side applications",
      extended: "Our developers build robust RESTful APIs and real-time applications using Express.js with proper middleware and security implementations.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Layers className="text-blue-500 w-8 h-8" />,
      title: "React Frontend",
      description: "Interactive user interfaces",
      extended: "We create dynamic, responsive UIs with React, leveraging hooks, context API, and modern state management solutions.",
      bgColor: "bg-blue-50"
    }
  ];

  const benefits = [
    {
      title: "Faster Development",
      description: "Single language across the stack",
      icon: <Zap className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Grows with your user base",
      icon: <BarChart2 className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Real-time Capabilities",
      description: "WebSocket and event-driven apps",
      icon: <RefreshCw className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Cost Effective",
      description: "Open-source technologies",
      icon: <CreditCard className="text-blue-500 w-6 h-6" />
    }
  ];

  const hiringModels = [
    {
      title: "Dedicated MERN Team",
      description: "Complete project development",
      price: "Custom",
      features: ["Frontend specialists", "Backend engineers", "Database experts", "DevOps"],
      popular: false,
      icon: <GitMerge className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Full-Stack Developer",
      description: "Skilled in entire MERN stack",
      price: "$5,000+/mo",
      features: ["End-to-end features", "API development", "UI implementation"],
      popular: true,
      icon: <Code className="text-blue-500 w-6 h-6" />
    },
    {
      title: "MERN Migration",
      description: "Convert legacy systems",
      price: "From $15,000",
      features: ["Architecture redesign", "Data migration", "Performance optimization"],
      popular: false,
      icon: <RefreshCw className="text-blue-500 w-6 h-6" />
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Redux", "Material UI"],
      icon: <Layers className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "GraphQL"],
      icon: <Server className="text-blue-500 w-5 h-5" />
    },
    {
      category: "Database",
      items: ["MongoDB", "Mongoose", "Redis", "Firestore"],
      icon: <Database className="text-blue-500 w-5 h-5" />
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      icon: <Cpu className="text-blue-500 w-5 h-5" />
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
                                             Hire MERN Developer
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
                <Code className="w-4 h-4" />
                <p className="text-sm font-medium">Full-Stack JavaScript Experts</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire Expert <span className="text-blue-600">MERN Stack Developers</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Build scalable, high-performance web applications with our specialized MERN development team.
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
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-100  cursor-pointer"
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
                  View MERN Projects
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
                  {/* MERN Stack Illustration */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-md">
                      {/* Stack layers */}
                      <div className="flex flex-col gap-4">
                        {/* MongoDB layer */}
                        <motion.div 
                          className="h-16 bg-blue-100 rounded-lg border border-blue-200 shadow-sm flex items-center justify-center"
                          animate={{ x: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Database className="text-blue-600 w-8 h-8" />
                          <span className="ml-2 font-bold text-blue-800">MongoDB</span>
                        </motion.div>
                        
                        {/* Express layer */}
                        <motion.div 
                                                  className="h-16 bg-blue-100 rounded-lg border border-blue-200 shadow-sm flex items-center justify-center"

                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        >
                          <Server className="text-blue-600 w-8 h-8" />
                          <span className="ml-2 font-bold text-blue-800">Express</span>
                        </motion.div>
                        
                        {/* React layer */}
                        <motion.div 
                          className="h-16 bg-blue-100 rounded-lg border border-blue-200 shadow-sm flex items-center justify-center"
                          animate={{ x: [0, -3, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                        >
                          <Layers className="text-blue-600 w-8 h-8" />
                          <span className="ml-2 font-bold text-blue-800">React</span>
                        </motion.div>
                        
                        {/* Node layer */}
                        <motion.div 
                          className="h-16 bg-blue-100 rounded-lg border border-blue-200 shadow-sm flex items-center justify-center"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        >
                          <Cpu className="text-blue-600 w-8 h-8" />
                          <span className="ml-2 font-bold text-blue-800">Node.js</span>
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

      {/* Features Section with MERN Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">MERN Stack Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized skills for building modern web applications
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
            <h2 className="text-3xl font-bold mb-4">MERN Tech Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern technologies we use to build web applications
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose MERN</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advantages of the MERN stack for your project
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
            <h2 className="text-3xl font-bold mb-4">Flexible Hiring Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MERN development teams tailored to your needs
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
              Ready to Build Your MERN Application?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how our MERN experts can help you build a scalable, high-performance web application.
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
                Schedule Consultation <ArrowRight size={18} />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2"
              >
                Get Technical Review
              </motion.button> */}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HireMERNStackDevelopers;