import { motion } from "framer-motion";
import { Users, Rocket, Globe, Award, Code, Heart, Shield, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const navigate = useNavigate()

  const stats = [
    { value: "50+", label: "Team Members", icon: <Users className="text-blue-500" /> },
    { value: "150+", label: "Projects Delivered", icon: <Rocket className="text-blue-500" /> },
    { value: "12+", label: "Countries Served", icon: <Globe className="text-blue-500" /> },
    { value: "5+", label: "Years Experience", icon: <Clock className="text-blue-500" /> }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and explore new possibilities",
      icon: <Code className="text-blue-500" />
    },
    {
      title: "Integrity",
      description: "Honest and ethical in all our dealings",
      icon: <Shield className="text-blue-500" />
    },
    {
      title: "Excellence",
      description: "Striving for the highest quality in everything",
      icon: <Award className="text-blue-500" />
    },
    {
      title: "Passion",
      description: "We love what we do and it shows",
      icon: <Heart className="text-blue-500" />
    }
  ];

  const timeline = [
    {
      year: "2018",
      event: "Company Founded",
      description: "Started with a small team of 5 developers"
    },
    {
      year: "2019",
      event: "First Major Client",
      description: "Landed enterprise contract with Fortune 500 company"
    },
    {
      year: "2020",
      event: "AI Division Launched",
      description: "Expanded into machine learning solutions"
    },
    {
      year: "2021",
      event: "International Expansion",
      description: "Opened offices in Europe and Asia"
    },
    {
      year: "2022",
      event: "Blockchain Practice",
      description: "Added Web3 and blockchain capabilities"
    },
    {
      year: "2023",
      event: "Award Winning",
      description: "Recognized as Top Tech Innovators"
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
                                                                            About us
                                                                                    </motion.div>
                                                                                  </div>
                                                                                </motion.div>
      {/* Hero Section with Interactive Background */}
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
          className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
        >
          <p className="text-sm font-medium text-blue-600">Our Story</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Digital Future</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          We're a passionate team of innovators, creators, and problem-solvers dedicated to transforming businesses through technology.
        </motion.p>
        </motion.div>

      </motion.section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
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
                className="text-3xl font-bold mb-2 text-blue-500"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="md:w-1/4">
            <div className="sticky top-24 space-y-2">
              {[
                { id: 'mission', label: 'Our Mission' },
                { id: 'values', label: 'Core Values' },
                { id: 'history', label: 'Our History' },
                { id: 'team', label: 'Leadership' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? 'bg-blue-100 border-l-4 border-blue-500 text-blue-600 font-medium' 
                      : 'hover:bg-blue-50 text-gray-700'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="md:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              {activeTab === 'mission' && (
                <>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                    >
                      <h3 className="text-xl font-semibold mb-3">Vision</h3>
                      <p className="text-gray-600">
                        To be the most trusted technology partner for businesses undergoing digital transformation, recognized for our technical excellence and client-focused approach.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                    >
                      <h3 className="text-xl font-semibold mb-3">Approach</h3>
                      <p className="text-gray-600">
                        We combine deep technical expertise with business acumen to deliver solutions that not only solve technical challenges but also drive measurable business impact.
                      </p>
                    </motion.div>
                  </div>
                </>
              )}

              {activeTab === 'values' && (
                <>
                  <h2 className="text-3xl font-bold mb-6">Core Values</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    These principles guide everything we do, from how we work with clients to how we build our team culture.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-blue-100 p-3 rounded-full">
                            {value.icon}
                          </div>
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                        </div>
                        <p className="text-gray-600">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'history' && (
                <>
                  <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    From humble beginnings to becoming a trusted technology partner for businesses worldwide.
                  </p>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                    
                    <div className="space-y-8">
                      {timeline.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="relative pl-12 md:pl-16"
                        >
                          <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center -translate-x-1/2">
                            <span className="text-white font-bold text-sm">{item.year}</span>
                          </div>
                          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'team' && (
                <>
                  <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Our experienced leadership team brings together decades of technology and business expertise.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Alex Johnson",
                        role: "CEO & Founder",
                        bio: "Technology entrepreneur with 15+ years building software companies"
                      },
                      {
                        name: "Sarah Chen",
                        role: "CTO",
                        bio: "Former lead architect at major tech firm, specializes in scalable systems"
                      },
                      {
                        name: "Michael Rodriguez",
                        role: "Head of Product",
                        bio: "Product visionary with track record of successful digital products"
                      }
                    ].map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                      >
                        <div className="w-full h-48 bg-blue-50 rounded-lg mb-4 flex items-center justify-center">
                          <Users className="w-16 h-16 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-blue-500 mb-3">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl my-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What makes us different goes beyond technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Continuous Learning",
              description: "Weekly tech talks, conference sponsorships, and education stipends",
              emoji: "📚"
            },
            {
              title: "Open Collaboration",
              description: "Flat hierarchy where every voice matters",
              emoji: "🤝"
            },
            {
              title: "Work-Life Balance",
              description: "Flexible schedules and unlimited PTO",
              emoji: "⚖️"
            },
            {
              title: "Community Impact",
              description: "Volunteer days and pro-bono tech work for nonprofits",
              emoji: "🌍"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Join Our Journey</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Whether you're looking for a technology partner or to join our team, we'd love to connect
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg cursor-pointer"
            // onClick={() => navigate('/get-in-touch')}
               onClick={()=>window.open('https://calendly.com/etechnocrat/saas-app')}

            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold cursor-pointer"
            onClick={() => navigate('/careers')}
            >
              Careers
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;