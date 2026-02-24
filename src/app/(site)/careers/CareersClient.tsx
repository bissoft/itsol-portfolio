"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Users,
  Award,
  Globe,
  Clock,
  Mail,
  Linkedin,
  Github,
  Twitter,
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
import { useRouter } from "next/navigation";
import { CareersData } from "@/lib/cms-defaults";
import * as LucideIcons from "lucide-react";

const Careers = ({ data }: { data: CareersData }) => {
  const router = useRouter();
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  /* ------------------- FORM STATE ------------------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    linkedin: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ------------------- DATA ------------------- */
  const departments = data.departments;
  const jobs = data.jobs;

  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
    return <IconComponent className="w-6 h-6 text-blue-500" />;
  };

  const benefits = data.benefits.map((b) => ({
    ...b,
    icon: getIcon(b.iconName),
  }));

  /* ------------------- HANDLERS ------------------- */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    try {
      const activeJob = jobs.find((j) => j.id === expandedJob);
      const dataToSend = new FormData();
      dataToSend.append("name", formData.name);
      dataToSend.append("email", formData.email);
      dataToSend.append("portfolio", formData.portfolio);
      dataToSend.append("linkedin", formData.linkedin);
      dataToSend.append("jobId", expandedJob?.toString() || "");
      dataToSend.append("jobTitle", activeJob?.title || "");

      if (formData.resume) {
        dataToSend.append("resume", formData.resume);
      }

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: dataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitStatus("success");

      // Reset form after success
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({
          name: "",
          email: "",
          portfolio: "",
          linkedin: "",
          resume: null,
          coverLetter: "",
        });
        setExpandedJob(null);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ------------------- RENDER ------------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => router.back()}
          whileHover={{
            x: -3,
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Back
          </span>
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
      <section className="bg-white text-gray-900 py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-[0.03]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              {data.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {data.heroDescription}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("openings");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all cursor-pointer"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We care about our people as much as our product. Here&apos;s what
              you can expect when you join our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100"
              >
                <div className="mb-4 bg-white p-3 rounded-xl w-fit shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeDepartment === dept.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {jobs
              .filter(
                (job) =>
                  activeDepartment === "all" ||
                  job.department === activeDepartment,
              )
              .map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all bg-white"
                >
                  <div
                    className="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                    onClick={() =>
                      setExpandedJob(expandedJob === job.id ? null : job.id)
                    }
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" /> {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-4 h-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                      <span className="text-sm text-gray-400">
                        {job.posted}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${expandedJob === job.id ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-50 border-t border-gray-100"
                      >
                        <div className="p-6 md:p-8">
                          <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                              <h4 className="font-semibold mb-4 text-gray-900">
                                About the Role
                              </h4>
                              <p className="text-gray-600 mb-6 leading-relaxed">
                                {job.description}
                              </p>
                              <h4 className="font-semibold mb-4 text-gray-900">
                                Requirements
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-gray-600"
                                  >
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Application Form */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                              <h4 className="font-semibold mb-6 text-xl">
                                Apply Now
                              </h4>
                              {submitStatus === "success" ? (
                                <div className="text-center py-12">
                                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                  </div>
                                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Application Received!
                                  </h3>
                                  <p className="text-gray-600">
                                    We&apos;ll be in touch with you shortly.
                                  </p>
                                </div>
                              ) : (
                                <form
                                  onSubmit={handleSubmit}
                                  className="space-y-4"
                                >
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Full Name
                                    </label>
                                    <input
                                      type="text"
                                      name="name"
                                      required
                                      value={formData.name}
                                      onChange={handleInputChange}
                                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                      placeholder="John Doe"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      name="email"
                                      required
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                      placeholder="john@example.com"
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Portfolio URL
                                      </label>
                                      <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        placeholder="https://..."
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">
                                        LinkedIn URL
                                      </label>
                                      <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        placeholder="https://linkedin.com/in/..."
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Resume/CV
                                    </label>
                                    <div
                                      onClick={() =>
                                        fileInputRef.current?.click()
                                      }
                                      className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
                                    >
                                      <input
                                        type="file"
                                        hidden
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                      />
                                      {formData.resume ? (
                                        <div className="flex items-center justify-center gap-2 text-blue-600">
                                          <File className="w-5 h-5" />
                                          <span className="font-medium">
                                            {formData.resume.name}
                                          </span>
                                        </div>
                                      ) : (
                                        <>
                                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                          <p className="text-sm text-gray-600">
                                            Click to upload or drag and drop
                                          </p>
                                          <p className="text-xs text-gray-400 mt-1">
                                            PDF, DOCX up to 10MB
                                          </p>
                                        </>
                                      )}
                                    </div>
                                  </div>

                                  {submitStatus === "error" && (
                                    <p className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-lg">
                                      Oops! Something went wrong. Please try
                                      again.
                                    </p>
                                  )}

                                  <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                  >
                                    {isSubmitting ? (
                                      <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                      </>
                                    ) : (
                                      "Submit Application"
                                    )}
                                  </button>
                                </form>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
