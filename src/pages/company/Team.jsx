import { motion } from "framer-motion";
import { Users, Award, Globe, Clock, Mail, Linkedin, Github, Twitter, ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [hoveredMember, setHoveredMember] = useState(null);
  const navigate = useNavigate();

  const stats = [
    { value: "50+", label: "Team Members", icon: <Users className="text-blue-500" /> },
    { value: "12+", label: "Countries", icon: <Globe className="text-blue-500" /> },
    { value: "4.8", label: "Rating", icon: <Award className="text-blue-500" /> },
    { value: "5+", label: "Years", icon: <Clock className="text-blue-500" /> }
  ];

  const departments = [
    { id: 'all', name: 'All Teams' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      department: "leadership",
      bio: "Technology entrepreneur with 15+ years building software companies",
      image: "/team/alex.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      department: "engineering",
      bio: "Former lead architect at major tech firm, specializes in scalable systems",
      image: "/team/sarah.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Head of Product",
      department: "product",
      bio: "Product visionary with track record of successful digital products",
      image: "/team/michael.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Design Director",
      department: "design",
      bio: "Award-winning designer focused on user experience and accessibility",
      image: "/team/emma.jpg",
      social: {
        linkedin: "#",
        dribbble: "#"
      }
    },
    {
      id: 5,
      name: "James Kim",
      role: "Engineering Manager",
      department: "engineering",
      bio: "Specializes in building high-performance engineering teams",
      image: "/team/james.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Product Manager",
      department: "product",
      bio: "Bridges technical and business needs to deliver customer value",
      image: "/team/priya.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const filteredMembers = activeDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeDepartment);

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
                                                                            Our Team
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
          className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
        >
          <p className="text-sm font-medium text-blue-600">Meet the Team</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Team</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate people building innovative solutions to transform your business.
        </motion.p>
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
      </motion.section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeDepartment === dept.id
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-200'
              }`}
            >
              {dept.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative hover:shadow-md transition-all"
            >
              {/* Team Member Image */}
              <div className="h-64 bg-blue-50 relative overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredMember === member.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                    <Users className="w-16 h-16 text-blue-400" />
                  </div>
                )}
              </div>

              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-500 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.social.dribbble && (
                    <motion.a
                      href={member.social.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <p className="text-xl text-gray-600 mb-6">
              No team members in this department
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDepartment('all')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm"
            >
              View All Team Members
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Culture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We believe work should be meaningful, challenging, and fun
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Collaborative",
              description: "We work together across disciplines to solve problems",
              emoji: "🤝"
            },
            {
              title: "Innovative",
              description: "We encourage experimentation and new ideas",
              emoji: "💡"
            },
            {
              title: "Inclusive",
              description: "We value diverse perspectives and backgrounds",
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
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm text-center"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
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
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Want to Join Our Team?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            We're always looking for talented, passionate people to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
              onClick={() => navigate('/careers')}
            >
              View Open Positions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer"
              onClick={() => navigate('/get-in-touch')}
              
            >
              Contact Talent Team
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;