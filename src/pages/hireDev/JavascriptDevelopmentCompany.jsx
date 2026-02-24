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
  Layers,
  GitBranch,
  Monitor,
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JavaScriptDevelopmentCompany = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [expandedService, setExpandedService] = useState(null);
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

  const services = [
    {
      icon: <Globe className="text-blue-500 w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces",
      technologies: ["React", "Angular", "Vue", "Next.js"],
      extended: "We create pixel-perfect UIs with modern JavaScript frameworks, ensuring seamless user experiences across all devices and browsers."
    },
    {
      icon: <Server className="text-blue-500 w-8 h-8" />,
      title: "Backend Development",
      description: "Scalable server-side solutions",
      technologies: ["Node.js", "Express", "NestJS", "Serverless"],
      extended: "Our team builds robust backend systems with Node.js, creating RESTful APIs, microservices, and real-time applications."
    },
    {
      icon: <Monitor className="text-blue-500 w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end JavaScript applications",
      technologies: ["MERN", "MEAN", "Jamstack", "GraphQL"],
      extended: "We deliver complete solutions using JavaScript across the stack, reducing complexity and improving development efficiency."
    },
    {
      icon: <GitBranch className="text-blue-500 w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "Native-like web experiences",
      technologies: ["Service Workers", "Web App Manifests", "Workbox", "IndexedDB"],
      extended: "We build PWAs that work offline, load instantly, and provide app-like experiences with push notifications and home screen installation."
    }
  ];

  const technologies = {
    frontend: ["React", "Angular", "Vue", "Next.js", "Svelte", "Gatsby"],
    backend: ["Node.js", "Express", "NestJS", "Fastify", "Meteor", "Deno"],
    testing: ["Jest", "Mocha", "Cypress", "Testing Library", "Enzyme", "Puppeteer"],
    tools: ["Webpack", "Babel", "ESLint", "Prettier", "NPM/Yarn", "Vite"]
  };

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Developers" },
    { value: "10+", label: "Years Experience" }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Requirement analysis and planning",
      icon: <BarChart2 className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Design",
      description: "UI/UX and architecture design",
      icon: <Layers className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Development",
      description: "Agile implementation",
      icon: <Code className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Testing",
      description: "Quality assurance",
      icon: <Shield className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Deployment",
      description: "CI/CD implementation",
      icon: <Cloud className="text-blue-500 w-6 h-6" />
    },
    {
      title: "Maintenance",
      description: "Ongoing support",
      icon: <Zap className="text-blue-500 w-6 h-6" />
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
                                                         Hire Javascript Developer
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
                <p className="text-sm font-medium">JavaScript Specialists</p>
              </motion.div> */}
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Premier <span className="text-blue-600">JavaScript Development</span> Company
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                We deliver cutting-edge JavaScript solutions across the stack, from interactive 
                frontends to scalable backends and everything in between.
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
                  className="px-8 py-3 bg-white border-2 border-blue-300 text-blue-600 rounded-lg font-medium cursor-pointer flex items-center gap-2"
                onClick={()=> navigate('/portfolio')}

                >
                  View Our Work
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
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <p className="text-gray-600 mb-6">
                    As a specialized JavaScript development company, we bring deep expertise 
                    across the entire JavaScript ecosystem.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Globe />, text: "Frontend" },
                      { icon: <Server />, text: "Backend" },
                      { icon: <Database />, text: "Full-stack" },
                      { icon: <Cloud />, text: "Cloud" }
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

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our JavaScript Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive JavaScript development services for all your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-white p-6 rounded-xl border ${expandedService === i ? 'border-blue-300 shadow-lg' : 'border-gray-200 hover:border-blue-200'} transition-all cursor-pointer`}
              onClick={() => setExpandedService(expandedService === i ? null : i)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, j) => (
                      <span key={j} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <AnimatePresence>
                    {expandedService === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-600 overflow-hidden"
                      >
                        {service.extended}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-medium">
                      {expandedService === i ? 'Show less' : 'Learn more'}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedService === i ? 180 : 0 }}
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

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our JavaScript Tech Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the most modern and reliable technologies in the JavaScript ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, items], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 capitalize">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((item, j) => (
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to deliver high-quality JavaScript solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {i + 1}
                  </div>
                </div>
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
              Ready to Build Your JavaScript Solution?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how our JavaScript experts can bring your project to life with 
              cutting-edge technologies and proven methodologies.
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
                Get a Free Consultation <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 flex items-center gap-2 cursor-pointer"
                onClick={()=> navigate('/case-studies')}

              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default JavaScriptDevelopmentCompany;