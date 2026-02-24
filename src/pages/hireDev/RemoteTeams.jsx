import { motion } from "framer-motion";
import { Globe, Users, Zap, Clock, BarChart2, ArrowRight, Check, GitMerge, Monitor, Cpu, Server, Smartphone, MessageSquare, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RemoteTeams = () => {
  const [activeTeam, setActiveTeam] = useState(0);
  const navigate = useNavigate()

  const stats = [
    { value: "50+", label: "Remote Teams Built", icon: <Users className="text-blue-500" /> },
    { value: "30%", label: "Cost Savings", icon: <BarChart2 className="text-blue-500" /> },
    { value: "4.8/5", label: "Client Satisfaction", icon: <Check className="text-blue-500" /> },
    { value: "24/7", label: "Global Coverage", icon: <Globe className="text-blue-500" /> }
  ];

  const teamTypes = [
    {
      title: "Startup Teams",
      description: "Agile teams perfect for early-stage companies",
      features: [
        "Lean team structures",
        "Rapid prototyping",
        "MVP development",
        "Flexible scaling"
      ],
      icon: <Zap className="text-blue-500" />
    },
    {
      title: "Enterprise Teams",
      description: "Scalable teams for large organizations",
      features: [
        "Dedicated team leads",
        "Strict compliance",
        "Enterprise-grade security",
        "Global delivery centers"
      ],
      icon: <Server className="text-blue-500" />
    },
    {
      title: "Product Teams",
      description: "Cross-functional teams for product development",
      features: [
        "End-to-end ownership",
        "Product managers included",
        "UX/UI specialists",
        "DevOps integration"
      ],
      icon: <Monitor className="text-blue-500" />
    },
    {
      title: "Specialized Teams",
      description: "Nade teams for specific technologies",
      features: [
        "AI/ML specialists",
        "Blockchain developers",
        "Cloud architects",
        "Data engineering"
      ],
      icon: <Cpu className="text-blue-500" />
    }
  ];

  const benefits = [
    {
      name: "Global Talent",
      description: "Access top developers from around the world",
      icon: <Globe className="text-blue-500" />
    },
    {
      name: "Cost Efficiency",
      description: "Reduce expenses without compromising quality",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
      name: "Seamless Integration",
      description: "Work as part of your existing workflows",
      icon: <GitMerge className="text-blue-500" />
    }
  ];

  const processSteps = [
    {
      title: "Strategy Session",
      description: "Define your team structure and requirements",
      icon: 1
    },
    {
      title: "Talent Matching",
      description: "We identify and vet suitable candidates",
      icon: 2
    },
    {
      title: "Team Formation",
      description: "Assemble the complete team with all roles",
      icon: 3
    },
    {
      title: "Onboarding",
      description: "Integrate with your tools and processes",
      icon: 4
    },
    {
      title: "Ongoing Management",
      description: "We handle all HR and operational aspects",
      icon: 5
    }
  ];

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
                                                      Global Development Teams
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

        {/* <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
        >
          <p className="text-sm font-medium text-blue-600">Global Development Teams</p>
        </motion.div> */}
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Remote</span> Development Teams
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Build high-performing remote teams tailored to your project requirements and business goals.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
              onClick={()=> navigate('/get-in-touch')}

          >
            Build Your Team <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 cursor-pointer border-blue-300 text-blue-500 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-50"
              onClick={()=> navigate('/case-studies')}


          >
            See Case Studies
          </motion.button>
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
              className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center"
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
                className="text-3xl font-bold mb-2 text-gray-800"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Team Models
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Custom remote team configurations for different business needs
          </motion.p>
        </div>

        <div className="flex overflow-x-auto pb-6 mb-8 scrollbar-hide">
          <div className="flex gap-2 mx-auto">
            {teamTypes.map((team, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTeam(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-full whitespace-nowrap ${
                  activeTeam === index
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {team.title}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTeam}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {teamTypes[activeTeam].icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{teamTypes[activeTeam].title}</h3>
              <p className="text-gray-600">{teamTypes[activeTeam].description}</p>
            </div>
            
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold mb-4">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamTypes[activeTeam].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100"
                  >
                    <div className="bg-blue-100 p-1 rounded-full">
                      <Check className="text-blue-500" size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Advantages of Remote Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Why leading companies choose remote development teams
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm"
            >
              <div className="mb-4">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.name}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-blue-500 font-medium flex items-center gap-1 cursor-pointer"
              >
                Learn More <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Team Building Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From initial consultation to fully operational team in weeks
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-blue-100 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center z-10 text-white">
                  <span className="font-bold">{step.icon}</span>
                </div>
                
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Seamless Collaboration</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our remote teams integrate with your workflows using proven collaboration frameworks.
              </p>
              
              <div className="space-y-6">
                {[
                  "Daily standups in your timezone",
                  "Agile project management tools",
                  "Transparent communication channels",
                  "Cultural alignment training"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MessageSquare className="text-blue-500" size={18} />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-8">
              <h3 className="text-xl font-semibold mb-4">Build Your Remote Team</h3>
              <p className="text-gray-600 mb-6">
                Tell us about your project and we'll design the perfect team structure.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Company Email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>What type of team do you need?</option>
                    <option>Startup Team</option>
                    <option>Enterprise Team</option>
                    <option>Product Team</option>
                    <option>Specialized Team</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  Get Started
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Ready to Build Your Remote Team?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Leverage global talent to accelerate your development and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
                onClick={()=> navigate('/get-in-touch')}

            >
              Start Building
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              See Pricing
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default RemoteTeams;