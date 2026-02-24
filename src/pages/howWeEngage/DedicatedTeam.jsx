import { motion } from "framer-motion";
import { Code, Users, Shield, Clock, ArrowRight, ChevronDown, Check, Star, Award, Clipboard, Phone, Mail, MessageSquare, Cloud, Lock, Cpu, Wifi, Zap, Layers, Server, Timer, ChevronRight, ArrowLeft, } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DedicatedTeam = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const navigate = useNavigate();

  // Stats Data
  const stats = [
    { value: "100+", label: "Dedicated Teams Deployed", icon: <Users className="text-blue-500" /> },
    { value: "5+", label: "Years Average Engagement", icon: <Clock className="text-blue-500" /> },
    { value: "95%", label: "Client Retention Rate", icon: <Shield className="text-blue-500" /> },
    { value: "24/7", label: "Team Availability", icon: <Timer className="text-blue-500" /> }
  ];

  // Benefits Data
  const benefits = [
    {
      icon: <Code className="text-blue-500" />,
      title: "Technical Excellence",
      description: "Hand-picked developers with proven expertise"
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: "Time Zone Alignment",
      description: "Teams that work in your business hours"
    },
    {
      icon: <Shield className="text-blue-500" />,
      title: "Data Security",
      description: "Enterprise-grade security protocols"
    },
    {
      icon: <Timer className="text-blue-500" />,
      title: "Flexible Scaling",
      description: "Easily add or reduce team members"
    }
  ];

  // Process Data
  const processSteps = [
    {
      title: "Requirement Analysis",
      description: "We deeply understand your project needs",
      icon: <Clipboard className="text-blue-500" />
    },
    {
      title: "Team Formation",
      description: "We assemble your ideal developer team",
      icon: <Users className="text-blue-500" />
    },
    {
      title: "Integration",
      description: "Your team integrates with your workflows",
      icon: <Layers className="text-blue-500" />
    },
    {
      title: "Continuous Delivery",
      description: "Regular updates and progress reports",
      icon: <Server className="text-blue-500" />
    }
  ];

  // Team Roles Data
  const teamRoles = [
    {
      role: "Frontend Developers",
      skills: ["React", "Angular", "Vue", "TypeScript"]
    },
    {
      role: "Backend Developers",
      skills: ["Node.js", "Python", "Java", ".NET"]
    },
    {
      role: "Mobile Developers",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      role: "DevOps Engineers",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      role: "QA Engineers",
      skills: ["Automation", "Manual", "Performance", "Security"]
    },
    {
      role: "UI/UX Designers",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"]
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Their dedicated team became an extension of our company, delivering features faster than our in-house team.",
      author: "Michael Johnson",
      role: "CTO, FinTech Startup",
      rating: 5
    },
    {
      quote: "We scaled from 3 to 12 developers seamlessly as our needs grew, with no drop in quality.",
      author: "Sarah Chen",
      role: "Product Director, SaaS Company",
      rating: 5
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How quickly can you assemble a dedicated team?",
      answer: "Typically 2-4 weeks depending on skill requirements and team size."
    },
    {
      question: "What's your team retention rate?",
      answer: "We maintain 90%+ retention through competitive benefits and career growth opportunities."
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
                                                                      Dedicated Team
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
            <p className="text-sm font-medium text-blue-600">Extended Team Model</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Dedicated Development
            </span> Teams
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Your own extended team of developers, fully integrated with your workflow and dedicated to your success
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
            onClick={() => navigate('/get-in-touch')}

            >
              Build Your Team <ArrowRight size={20} />
            </motion.button>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
            >
              How It Works
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Benefits of a Dedicated Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Why leading tech companies choose our dedicated team model
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Team Formation Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Simple steps to assemble your perfect development team
          </motion.p>
        </div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-blue-100 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} mb-8 lg:mb-0`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl font-bold text-blue-100"
                  >
                    0{index + 1}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Roles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Team Roles We Provide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Complete teams tailored to your project requirements
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamRoles.map((role, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">{role.role}</h3>
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
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
            Trusted by startups and enterprises worldwide
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
          
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build Your Dedicated Team?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Our specialists will help you assemble the perfect team for your project
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold cursor-pointer"
            onClick={() => navigate('/get-in-touch')}

            >
              Talk to an Expert
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold"
            >
              Talk to an Expert
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DedicatedTeam;