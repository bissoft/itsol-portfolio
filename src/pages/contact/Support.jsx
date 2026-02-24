import { motion } from "framer-motion";
import { LifeBuoy, MessageSquare, FileText, Clock, Mail, Phone, Zap, ChevronRight, Search, CheckCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const [activeTab, setActiveTab] = useState('help-center');
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const navigate = useNavigate();

  const helpTopics = [
    {
      icon: <FileText className="text-blue-500" />,
      title: "Getting Started",
      description: "New user guides and setup tutorials",
      link: "#"
    },
    {
      icon: <Zap className="text-blue-500" />,
      title: "Troubleshooting",
      description: "Solutions for common issues",
      link: "#"
    },
    {
      icon: <CheckCircle className="text-blue-500" />,
      title: "Best Practices",
      description: "Optimize your workflow",
      link: "#"
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: "What's New",
      description: "Latest features and updates",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password from the login page by clicking 'Forgot Password' and following the instructions sent to your email."
    },
    {
      question: "Where can I find my invoice?",
      answer: "All invoices are available in your account dashboard under the Billing section."
    },
    {
      question: "What's your SLA for support responses?",
      answer: "We guarantee initial responses within 4 hours for premium plans and 24 hours for standard plans."
    },
    {
      question: "How do I upgrade my plan?",
      answer: "You can upgrade anytime from your account settings or contact our sales team for enterprise options."
    }
  ];

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setTicketSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
         <motion.div
                                                                            initial={{ opacity: 0, y: -20 }}
                                                                            animate={{ opacity: 1, y: 0 }}
                                                                            transition={{ delay: 0.5 }}
                                                                            className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8"
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
                                                                      Support
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
          <p className="text-sm font-medium text-blue-600">We're here to help</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Customer</span> Support Center
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Find answers, guides, and contact options to get the help you need quickly.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto relative"
        >
          <input
            type="text"
            placeholder="Search help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-2 border-blue-200 rounded-lg px-6 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
        </motion.div>

        </motion.div>

      </motion.section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-blue-50 rounded-lg p-1">
            {[
              { id: 'help-center', label: 'Help Center', icon: <LifeBuoy size={18} /> },
              { id: 'contact', label: 'Contact Us', icon: <MessageSquare size={18} /> },
              { id: 'status', label: 'System Status', icon: <Zap size={18} /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.05 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'help-center' && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Help Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {helpTopics.map((topic, index) => (
                    <motion.a
                      key={index}
                      href={topic.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-blue-50 p-6 rounded-lg border border-blue-100 group"
                    >
                      <div className="mb-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="inline-block"
                        >
                          {topic.icon}
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{topic.description}</p>
                      <div className="flex items-center text-blue-500 font-medium">
                        Learn more <ChevronRight className="ml-1" size={16} />
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                      >
                        <details className="group">
                          <summary className="flex justify-between items-center cursor-pointer list-none">
                            <h4 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                              {faq.question}
                            </h4>
                            <ChevronRight className="text-blue-500 transform group-open:rotate-90 transition-transform" />
                          </summary>
                          <p className="mt-4 text-gray-600">{faq.answer}</p>
                        </details>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Contact Support</h2>
                
                {ticketSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-200 rounded-xl p-8 text-center"
                  >
                    <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Ticket Submitted</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us! We've received your support ticket and will respond within 24 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setTicketSubmitted(false)}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm cursor-pointer"
                    >
                      Submit Another Request
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Support Options</h3>
                      
                      <div className="space-y-6">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <Mail className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Email Support</h4>
                            <p className="text-gray-600 text-sm">Typically responds within 4 hours</p>
                            <a href="mailto:support@example.com" className="text-blue-500 text-sm">
                              support@example.com
                            </a>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <Phone className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Phone Support</h4>
                            <p className="text-gray-600 text-sm">Available 9AM-5PM EST</p>
                            <a href="tel:+18005551234" className="text-blue-500 text-sm">
                              +1 (800) 555-1234
                            </a>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <MessageSquare className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Live Chat</h4>
                            <p className="text-gray-600 text-sm">Available 24/7 for premium customers</p>
                            <button className="text-blue-500 text-sm cursor-pointer">
                              Start Chat Now
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Submit a Ticket</h3>
                      <form onSubmit={handleSubmitTicket} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-gray-600 mb-2">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-gray-600 mb-2">Description</label>
                          <textarea
                            id="message"
                            rows="5"
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          ></textarea>
                        </div>
                        
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                          Submit Ticket
                        </motion.button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'status' && (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">System Status</h2>
                
                <div className="bg-blue-50 rounded-xl border border-blue-100 overflow-hidden mb-8">
                  <div className="p-6 border-b border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <h3 className="font-semibold">All Systems Operational</h3>
                    </div>
                    <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleString()}</p>
                  </div>
                  
                  <div className="divide-y divide-blue-100">
                    {[
                      { service: "API", status: "Operational", updated: "1 minute ago" },
                      { service: "Web Application", status: "Operational", updated: "5 minutes ago" },
                      { service: "Database", status: "Operational", updated: "10 minutes ago" },
                      { service: "Payment Processing", status: "Operational", updated: "15 minutes ago" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 flex justify-between items-center"
                      >
                        <div>
                          <h4 className="font-medium">{item.service}</h4>
                          <p className="text-gray-600 text-sm">Updated {item.updated}</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {item.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Subscribe to Status Updates</h3>
                  <p className="text-gray-600 mb-4">Get notified when we experience incidents or scheduled maintenance.</p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm cursor-pointer"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Still Need Help?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Our customer success team is available 24/7 to answer your questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
            onClick={()=>navigate('/get-in-touch')}

            >
              Contact Support
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Schedule Call
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Support;