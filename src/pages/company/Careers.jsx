import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Users,
  Award,
  Globe,
  Clock,
  ArrowRight,
  ChevronDown,
  Heart,
  Zap,
  CheckCircle,
  X,
  Upload,
  File,
  Loader2,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);
  const navigate = useNavigate();

  // Form states
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [applicationFile, setApplicationFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const stats = [
    {
      value: "50+",
      label: "Team Members",
      icon: <Users className="text-blue-500" />,
    },
    {
      value: "12+",
      label: "Countries",
      icon: <Globe className="text-blue-500" />,
    },
    {
      value: "4.8",
      label: "Rating",
      icon: <Award className="text-blue-500" />,
    },
    { value: "5+", label: "Years", icon: <Clock className="text-blue-500" /> },
  ];

  const benefits = [
    {
      icon: <Heart className="text-blue-500" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage",
    },
    {
      icon: <Zap className="text-blue-500" />,
      title: "Learning Budget",
      description: "$2,000 annual stipend for professional development",
    },
    {
      icon: <Globe className="text-blue-500" />,
      title: "Remote Flexibility",
      description: "Work from anywhere with our distributed team",
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: "Unlimited PTO",
      description: "Take time when you need it to recharge",
    },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "engineering", name: "Engineering" },
    { id: "design", name: "Design" },
    { id: "product", name: "Product" },
    { id: "marketing", name: "Marketing" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "engineering",
      type: "Full-time",
      location: "Remote",
      description:
        "Build beautiful, performant user interfaces for our products.",
      responsibilities: [
        "Develop and maintain our React-based web applications",
        "Collaborate with designers to implement pixel-perfect UIs",
        "Optimize applications for maximum performance",
        "Mentor junior engineers",
      ],
      requirements: [
        "5+ years of frontend development experience",
        "Expertise in React, TypeScript, and modern CSS",
        "Experience with state management solutions",
        "Strong UX sensibilities",
      ],
    },
    {
      id: 2,
      title: "UX Designer",
      department: "design",
      type: "Full-time",
      location: "Remote",
      description: "Create intuitive and delightful user experiences.",
      responsibilities: [
        "Conduct user research and testing",
        "Design wireframes and high-fidelity prototypes",
        "Collaborate with engineers to implement designs",
        "Maintain and evolve our design system",
      ],
      requirements: [
        "3+ years of UX design experience",
        "Portfolio demonstrating strong UX skills",
        "Proficiency in Figma",
        "Experience with design systems",
      ],
    },
    {
      id: 3,
      title: "Product Manager",
      department: "product",
      type: "Full-time",
      location: "Remote",
      description: "Lead product strategy and execution.",
      responsibilities: [
        "Define product vision and roadmap",
        "Work with cross-functional teams to deliver features",
        "Analyze metrics to inform product decisions",
        "Gather and prioritize product requirements",
      ],
      requirements: [
        "4+ years of product management experience",
        "Technical background or experience working with engineers",
        "Strong analytical skills",
        "Excellent communication skills",
      ],
    },
  ];

  const filteredJobs =
    activeDepartment === "all"
      ? jobs
      : jobs.filter((job) => job.department === activeDepartment);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    if (!formData.position.trim()) errors.position = "Position is required";
    if (!applicationFile) errors.file = "Resume is required";
    return errors;
  };

  const handleResumeSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setFormErrors({ file: "Please upload your resume" });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Resume submitted:", resumeFile);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setResumeFile(null);
      setShowResumeForm(false);
      setSubmitSuccess(false);
    }, 2000);
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Application submitted:", {
      ...formData,
      file: applicationFile,
    });
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setApplicationFile(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
      });
      setFormErrors({});
      setShowApplicationForm(false);
      setSubmitSuccess(false);
    }, 2000);
  };

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (file.size > maxSize) {
        setFormErrors({
          ...formErrors,
          file: "File size must be less than 5MB",
        });
        return;
      }

      if (validTypes.includes(fileType)) {
        setFile(file);
        setFormErrors({ ...formErrors, file: "" });
      } else {
        setFormErrors({
          ...formErrors,
          file: "Please upload a PDF or DOC/DOCX file",
        });
      }
    }
  };

  const removeFile = (setFile) => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setFormErrors({ ...formErrors, file: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  useEffect(() => {
    if (showApplicationForm || showResumeForm) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [showApplicationForm, showResumeForm]);

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
                                                                            Careers
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
            <p className="text-sm font-medium text-blue-600">Join Our Team</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Future
            </span>{" "}
            With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We're looking for passionate, creative thinkers to help solve
            meaningful problems.
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

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            <div className="space-y-6">
              {[
                "Customer obsession",
                "Bias for action",
                "Ownership mentality",
                "Long-term thinking",
                "Radical transparency",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-100 p-1.5 rounded-full mt-1">
                    <CheckCircle className="text-blue-500" size={16} />
                  </div>
                  <p className="text-lg text-gray-600">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Life at Our Company</h3>
            <div className="aspect-w-16 aspect-h-9 bg-blue-50 rounded-xl mb-6 overflow-hidden">
              {/* Video placeholder - replace with actual video */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Rocket className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                  <p className="text-gray-600">Company culture video</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              We host regular team retreats, hackathons, and learning sessions
              to foster connection and growth.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4"
          >
            Perks & Benefits
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            We take care of our team so you can do your best work
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-block"
                >
                  {benefit.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Open Positions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our team of talented, passionate people building the future
          </motion.p>
        </div>

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
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100 border border-gray-200"
              }`}
            >
              {dept.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span>{job.type}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`transform transition-transform ${
                      expandedJob === job.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">About the Role</h4>
                      <p className="text-gray-600">{job.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-2">Responsibilities</h4>
                        <ul className="space-y-2 text-gray-600">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle
                                className="text-blue-500 mt-0.5 flex-shrink-0"
                                size={16}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-2 text-gray-600">
                          {job.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle
                                className="text-blue-500 mt-0.5 flex-shrink-0"
                                size={16}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-sm cursor-pointer"
                      onClick={() => {
                        setShowApplicationForm(true);
                        setFormData((prev) => ({
                          ...prev,
                          position: job.title,
                        }));
                      }}
                    >
                      Apply Now
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <p className="text-xl text-gray-600 mb-6">
                No open positions in this department right now
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDepartment("all")}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm"
              >
                View All Positions
              </motion.button>
            </motion.div>
          )}
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
            Don't See Your Dream Role?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            We're always looking for talented people. Send us your resume and
            we'll contact you when we have an opening that matches your skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
              onClick={() => setShowResumeForm(true)}
            >
              Submit Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer"
              onClick={() => navigate("/get-in-touch")}
            >
              Contact Talent Team
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Resume Submission Modal */}
      <AnimatePresence>
        {showResumeForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => !isSubmitting && setShowResumeForm(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Submit Your Resume</h3>
                {!isSubmitting && (
                  <button
                    onClick={() => setShowResumeForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Resume Submitted!</h4>
                  <p className="text-gray-600">
                    We'll review your resume and get back to you if we find a
                    matching opportunity.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleResumeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume (PDF or DOC)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF or DOC (MAX. 5MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange(e, setResumeFile)}
                          ref={fileInputRef}
                        />
                      </label>
                    </div>
                    {resumeFile && (
                      <div className="mt-2 flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <File className="text-blue-500 mr-2" size={16} />
                          <span className="text-sm">{resumeFile.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(setResumeFile)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                    {formErrors.file && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.file}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowResumeForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center min-w-32"
                      disabled={!resumeFile || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={18} />
                          Submitting...
                        </>
                      ) : (
                        "Submit Resume"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Application Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => !isSubmitting && setShowApplicationForm(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Apply for Position</h3>
                {!isSubmitting && (
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for your application. Our team will review it and
                    get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${
                        formErrors.position
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    {formErrors.position && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.position}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume (PDF or DOC)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF or DOC (MAX. 5MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            handleFileChange(e, setApplicationFile)
                          }
                        />
                      </label>
                    </div>
                    {applicationFile && (
                      <div className="mt-2 flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <File className="text-blue-500 mr-2" size={16} />
                          <span className="text-sm">
                            {applicationFile.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(setApplicationFile)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                    {formErrors.file && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.file}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center min-w-32"
                      disabled={!applicationFile || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={18} />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
