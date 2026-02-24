import { motion } from "framer-motion";
import { Users, Code, Zap, Clock, BarChart2, ArrowRight, Check, Briefcase, GitPullRequest, MessageSquare, Globe, ChevronDown, Mail, Phone, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamAugmentation = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [activeTab, setActiveTab] = useState('roles');
  const [expandedCase, setExpandedCase] = useState(null);
  const [email, setEmail] = useState('');
  const [activeFaq, setActiveFaq] = useState();
  const navigate = useNavigate()

  const stats = [
    { value: "200+", label: "Experts Available", icon: <Users className="text-blue-500" /> },
    { value: "48h", label: "Average Onboarding", icon: <Clock className="text-blue-500" /> },
    { value: "40%", label: "Cost Savings", icon: <BarChart2 className="text-blue-500" /> },
    { value: "95%", label: "Retention Rate", icon: <Check className="text-blue-500" /> }
  ];

  const roles = [
    {
      title: "Developers",
      description: "Senior engineers across all major technologies",
      skills: [
        "Frontend (React, Angular, Vue)",
        "Backend (Node, Python, .NET)",
        "Mobile (iOS, Android, Flutter)",
        "Full-stack specialists"
      ],
      icon: <Code className="text-blue-500" />
    },
    {
      title: "Designers",
      description: "Creative professionals for all your UX/UI needs",
      skills: [
        "User experience design",
        "UI/visual design",
        "Design systems",
        "Prototyping & testing"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    },
    {
      title: "Product Managers",
      description: "Strategic leaders to drive product success",
      skills: [
        "Agile product ownership",
        "Roadmap planning",
        "Stakeholder management",
        "Metrics & analytics"
      ],
      icon: <Briefcase className="text-blue-500" />
    },
    {
      title: "QA Engineers",
      description: "Testing specialists to ensure quality",
      skills: [
        "Test automation",
        "Manual testing",
        "Performance testing",
        "CI/CD integration"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    }
  ];

  const benefits = [
    {
      name: "Flexible Scaling",
      description: "Quickly scale your team up or down as needs change",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.8L7 14.3"></path></svg>
    },
    {
      name: "Reduced Overhead",
      description: "No recruiting, HR, or benefits administration",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
      name: "Global Talent",
      description: "Access top professionals from around the world",
      icon: <Globe className="text-blue-500" />
    }
  ];

  const processSteps = [
    {
      title: "Needs Assessment",
      description: "We analyze your requirements and team structure",
      icon: 1
    },
    {
      title: "Talent Matching",
      description: "We identify the perfect candidates for your needs",
      icon: 2
    },
    {
      title: "Interview & Selection",
      description: "You meet and approve the candidates",
      icon: 3
    },
    {
      title: "Onboarding",
      description: "We handle all paperwork and integration",
      icon: 4
    },
    {
      title: "Continuous Support",
      description: "We manage all HR aspects throughout the engagement",
      icon: 5
    }
  ];

  const caseStudies = [
    {
      id: 1,
      name: "FinTech Scaling",
      challenge: "Needed to scale engineering team quickly for product launch",
      solution: "Provided 8 senior full-stack developers within 2 weeks",
      results: [
        "Met aggressive launch deadline",
        "Reduced hiring costs by 35%",
        "Maintained code quality standards"
      ]
    },
    {
      id: 2,
      name: "E-commerce Platform",
      challenge: "Lacked specialized UX design expertise",
      solution: "Augmented team with 2 senior UX designers",
      results: [
        "Improved conversion rate by 22%",
        "Redesign completed in 6 weeks",
        "Seamless collaboration with in-house team"
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly can you provide team members?",
      answer: "We can typically match you with qualified professionals within 48-72 hours for most roles."
    },
    {
      question: "What's your vetting process?",
      answer: "All candidates go through technical assessments, cultural fit evaluation, and reference checks before being presented."
    },
    {
      question: "Can we hire augmented team members full-time?",
      answer: "Yes, we offer flexible conversion options if you decide to bring team members on permanently."
    }
  ];

  const toggleCase = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
            Team Augmentation
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
            <p className="text-sm font-medium text-blue-600">Flexible Team Extension</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Team</span> Augmentation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Extend your team with our vetted experts who integrate seamlessly with your workflows.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg flex items-center gap-2 shadow-lg"
              onClick={() => navigate('/get-in-touch')}

            >
              Find Your Expert <ArrowRight size={20} />
            </motion.button>

            {/* <motion.button
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 1 }}
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

      {/* Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-blue-50 rounded-lg p-1 border border-blue-100">
            {[
              { id: 'roles', label: 'Roles' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'cases', label: 'Case Studies' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${activeTab === tab.id
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
          {activeTab === 'roles' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Roles We Augment</h2>

              <div className="flex overflow-x-auto pb-6 mb-8 scrollbar-hide">
                <div className="flex gap-2 mx-auto">
                  {roles.map((role, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveRole(index)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-6 py-3 rounded-full whitespace-nowrap ${activeRole === index
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                        }`}
                    >
                      {role.title}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-50 rounded-xl border border-blue-200 p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {roles[activeRole].icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{roles[activeRole].title}</h3>
                    <p className="text-gray-600">{roles[activeRole].description}</p>
                  </div>

                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-4">Skills & Expertise</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {roles[activeRole].skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                        >
                          <div className="bg-blue-100 p-1 rounded-full">
                            <Check className="text-blue-500" size={16} />
                          </div>
                          <span className="text-gray-600">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Why Choose Team Augmentation</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                The advantages of extending your team with our vetted professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="mb-4">
                      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.name}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-blue-500 font-medium flex items-center gap-1 cursor-pointer"
                      onClick={() => navigate('/get-in-touch')}
                    >
                      Learn More <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                ))}
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
              <h2 className="text-2xl font-bold mb-8">Augmentation Success Stories</h2>

              <div className="space-y-6">
                {caseStudies.map((caseStudy) => (
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
                        className={`transform transition-transform text-blue-500 ${expandedCase === caseStudy.id ? 'rotate-180' : ''
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50/50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Seamless Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From initial request to full integration in days, not months
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center -translate-x-1/2">
                  <span className="text-white font-bold text-sm">{step.icon}</span>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
            Everything you need to know about team augmentation
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
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(index)}
                className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`transform transition-transform text-blue-500 ${activeFaq === index ? 'rotate-180' : ''
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about team augmentation? Our specialists are ready to help you build your ideal team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a href="mailto:info@itsolz.tech" className="text-blue-600 hover:underline">
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
                  <MessageSquare className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Live Chat</h4>
                  <p className="text-gray-600">Available during business hours</p>
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
            <h3 className="text-2xl font-bold mb-6">Request Team Members</h3>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Team Requirements
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe the skills and roles you need..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-lg font-semibold shadow-lg cursor-pointer"

              >
                Request Consultation
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
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          </div>

          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Ready to Extend Your Team?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Scale your capabilities quickly with our vetted professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
              onClick={() => navigate('/get-in-touch')}

            >
              Find Your Expert
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 cursor-pointer"
              onClick={() => navigate('/case-studies')}

            >
              See Case Studies
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TeamAugmentation;