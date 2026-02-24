"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Clock,
  ArrowRight,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const GetInTouch = () => {
  const router = useRouter();
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@itsolz.tech",
      color: "from-blue-500 to-blue-600",
      action: "mailto:info@itsolz.tech",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92-336-7912623",
      color: "from-blue-500 to-blue-600",
      action: "tel:+923367912623",
    },
    {
      icon: MapPin,
      title: "Pakistan Office",
      value: "LUMS, DHA Phase 4, Lahore, Pakistan",
      color: "from-blue-500 to-blue-600",
      action: "https://www.google.com/maps?q=31.4685,74.410",
    },
    {
      icon: MapPin,
      title: "UK Office",
      value: "36 Hatherley Grove, London, W2 5RB, United Kingdom",
      color: "from-blue-500 to-blue-600",
      action:
        "https://www.google.com/maps?q=51.516798710348226,-0.1898973451448798",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Back Button and Page Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
      >
        <motion.button
          onClick={() => router.back()}
          whileHover={{ x: -3, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Back
          </span>
        </motion.button>
        <div className="flex items-center gap-1 sm:gap-2">
          <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
          >
            Contact
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
            <p className="text-sm font-medium text-blue-600">Let's Connect</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? Reach out—we'd love
            to hear from you.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-white"
                  disabled={isSubmitting}
                >
                  <option>General Inquiry</option>
                  <option>Project Request</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    target={
                      method.title.includes("Office") ? "_blank" : "_self"
                    }
                    rel={
                      method.title.includes("Office")
                        ? "noopener noreferrer"
                        : ""
                    }
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`bg-gradient-to-r ${method.color} p-3 rounded-lg`}
                    >
                      <method.icon className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm">{method.title}</h3>
                      <p className="text-lg font-medium group-hover:text-blue-500 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-blue-900 p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-blue-400" />
                <h2 className="text-2xl font-bold">Office Hours</h2>
              </div>
              <div className="space-y-4">
                {officeHours.map((hours, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-blue-800 last:border-0"
                  >
                    <span className="text-blue-300">{hours.day}</span>
                    <span className="font-medium">{hours.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        id="map"
      >
        <motion.div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {[
              {
                title: "Pakistan Office",
                address: "LUMS, DHA Phase 4, Lahore, Pakistan",
                coordinates: "31.4685,74.4107",
              },
              {
                title: "UK Office",
                address: "36 Hatherley Grove, London, W2 5RB, United Kingdom",
                coordinates: "51.516798710348226,-0.18989734514487983",
              },
            ].map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="h-64 w-full relative bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-center p-8 absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <MapPin className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{office.title}</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      {office.address}
                    </p>
                    <motion.a
                      href={`https://www.google.com/maps?q=${office.coordinates}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{ color: "white" }}
                      className="bg-gradient-to-r from-blue-500 to-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-all flex items-center gap-2 mx-auto shadow-sm cursor-pointer"
                    >
                      Get Directions <ArrowRight size={16} />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 200 + 100,
                  height: Math.random() * 200 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              We're excited to hear about your ideas and help bring them to
              life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 relative overflow-hidden cursor-pointer"
                onClick={() => router.push("/portfolio")}
              >
                <span className="relative z-10">View Portfolio</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
                <motion.span
                  className="absolute inset-0 bg-white/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GetInTouch;
