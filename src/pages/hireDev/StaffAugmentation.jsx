import { motion } from "framer-motion";
import {
  Users,
  Code,
  Zap,
  Clock,
  BarChart2,
  ArrowRight,
  Check,
  Briefcase,
  GitMerge,
  Monitor,
  Cpu,
  Globe,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffAugmentation = () => {
  const [activeRole, setActiveRole] = useState(0);
  const navigate = useNavigate();
  const stats = [
    {
      value: "500+",
      label: "Professionals Placed",
      icon: <Users className="text-blue-500" />,
    },
    {
      value: "48h",
      label: "Average Time to Fill",
      icon: <Clock className="text-blue-500" />,
    },
    {
      value: "35%",
      label: "Cost Savings",
      icon: <BarChart2 className="text-blue-500" />,
    },
    {
      value: "97%",
      label: "Retention Rate",
      icon: <Check className="text-blue-500" />,
    },
  ];

  const roles = [
    {
      title: "Developers",
      description: "Expert coders across all major technologies",
      skills: [
        "Frontend (React, Angular, Vue)",
        "Backend (Node, Python, .NET)",
        "Mobile (iOS, Android, Flutter)",
        "Full-stack specialists",
      ],
      icon: <Code className="text-blue-500" />,
    },
    {
      title: "DevOps Engineers",
      description: "Infrastructure and deployment specialists",
      skills: [
        "Cloud platforms (AWS, Azure, GCP)",
        "CI/CD pipelines",
        "Containerization & orchestration",
        "Infrastructure as code",
      ],
      icon: <GitMerge className="text-blue-500" />,
    },
    {
      title: "QA Engineers",
      description: "Quality assurance and testing professionals",
      skills: [
        "Test automation",
        "Manual testing",
        "Performance testing",
        "Security testing",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      title: "Product Managers",
      description: "Strategic leaders to drive product success",
      skills: [
        "Agile methodologies",
        "Roadmap planning",
        "Stakeholder management",
        "Metrics & analytics",
      ],
      icon: <Briefcase className="text-blue-500" />,
    },
  ];

  const benefits = [
    {
      name: "Flexible Scaling",
      description: "Scale your team up or down as needs change",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M3 3v18h18"></path>
          <path d="M18.7 8l-5.1 5.2-2.8-2.8L7 14.3"></path>
        </svg>
      ),
    },
    {
      name: "Reduced Overhead",
      description: "No recruiting, HR, or benefits administration",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      name: "Global Talent",
      description: "Access top professionals from around the world",
      icon: <Globe className="text-blue-500" />,
    },
  ];

  const processSteps = [
    {
      title: "Needs Assessment",
      description: "We analyze your requirements and team structure",
      icon: 1,
    },
    {
      title: "Talent Matching",
      description: "We identify the perfect candidates for your needs",
      icon: 2,
    },
    {
      title: "Interview & Selection",
      description: "You meet and approve the candidates",
      icon: 3,
    },
    {
      title: "Onboarding",
      description: "We handle all paperwork and integration",
      icon: 4,
    },
    {
      title: "Continuous Support",
      description: "We manage all HR aspects throughout the engagement",
      icon: 5,
    },
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
                                                           Flexible Staffing Solutions
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
            <p className="text-sm font-medium text-blue-600">
              Flexible Staffing Solutions
            </p>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Staff
            </span>{" "}
            Augmentation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Scale your team quickly with skilled professionals who integrate
            seamlessly with your workflows.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl  font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
              onClick={() => navigate("/careers")}
            >
              Find Talent <ArrowRight size={20} />
            </motion.button>

            <motion.button
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-300 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
              onClick={() => navigate("/get-in-touch")}
            >
              How It Works
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

      {/* Roles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Roles We Augment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Access specialized talent across all key technical and product roles
          </motion.p>
        </div>

        <div className="flex overflow-x-auto pb-6 mb-8 scrollbar-hide">
          <div className="flex gap-2 mx-auto">
            {roles.map((role, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveRole(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-full whitespace-nowrap ${
                  activeRole === index
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-blue-50 text-gray-700 hover:bg-blue-100"
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
          className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {roles[activeRole].icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {roles[activeRole].title}
              </h3>
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
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100"
                  >
                    <div className="bg-blue-100 p-1 rounded-full">
                      <Check className="text-blue-500" size={16} />
                    </div>
                    <span className="text-gray-700">{skill}</span>
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
            Why Choose Staff Augmentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The advantages of augmenting your staff with our professionals
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {benefit.name}
              </h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-blue-500 font-medium flex items-center gap-1"
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
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-blue-100 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center z-10 text-white">
                  <span className="font-bold">{step.icon}</span>
                </div>

                <div
                  className={`lg:w-5/12 ${
                    index % 2 === 0
                      ? "lg:pr-8 lg:text-right"
                      : "lg:pl-8 lg:text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Flexible Engagement Models
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the model that best fits your project requirements
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Full-Time",
              description: "Dedicated professional working 40+ hours/week",
              price: "From $3,500/month",
              features: [
                "Exclusive to your project",
                "Long-term commitment",
                "Deep product knowledge",
              ],
            },
            {
              name: "Part-Time",
              description: "Professional working 20-30 hours/week",
              price: "From $2,000/month",
              features: [
                "Cost-effective",
                "Flexible scheduling",
                "Ideal for ongoing needs",
              ],
            },
            {
              name: "Hourly",
              description: "Pay only for hours worked",
              price: "From $25/hour",
              features: [
                "Maximum flexibility",
                "Short-term projects",
                "Trial engagements",
              ],
            },
          ].map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-blue-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {model.name}
              </h3>
              <p className="text-gray-600 mb-4">{model.description}</p>
              <p className="text-xl font-semibold text-blue-500 mb-6">
                {model.price}
              </p>

              <div className="space-y-3 mb-6">
                {model.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <Check className="text-blue-500" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => navigate("/get-in-touch")}
              >
                Choose {model.name}
              </motion.button>
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
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          </div>

          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">
            Ready to Augment Your Team?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Scale your capabilities quickly with our vetted professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
              onClick={() => navigate("/careers")}
            >
              Find Talent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer"
              onClick={() => navigate("/get-in-touch")}
            >
              Talk to an Expert
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default StaffAugmentation;
