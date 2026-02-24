"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Calendar,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    try {
      // Priority 1: Save to database for Admin Dashboard
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_name: name, user_email: email, message }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to save inquiry");
      }

      // Priority 2: Also try to send email via EmailJS (non-blocking)
      // try {
      //   await emailjs.sendForm(
      //     "service_vb137ia",
      //     "template_5q7w348",
      //     form.current,
      //     "user_KBNg1wA6jOal7CgqL",
      //   );
      // } catch (emailError) {
      //   console.warn(
      //     "EmailJS failed but data was saved to dashboard:",
      //     emailError,
      //   );
      // }

      toast.success("Message sent successfully! We will get back to you soon.");
      form.current?.reset();
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
      id="contact"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide uppercase mb-6 inline-block border border-blue-100 shadow-sm">
                Get in Touch
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Extraordinary.
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
                Have a project in mind? We'd love to hear about it. Send us a
                message or schedule a call to discuss how we can help you
                achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:info@itsolz.tech"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Email Us
                  </h4>
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-lg">
                    info@itsolz.tech
                  </span>
                </div>
                <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="tel:+923367912623"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="p-4 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Call Us
                  </h4>
                  <span className="text-gray-600 group-hover:text-purple-600 transition-colors text-lg">
                    +92-336-7912623
                  </span>
                </div>
                <ArrowRight className="ml-auto text-gray-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    Visit Us
                  </h4>
                  <p className="text-gray-600 mb-1">
                    LUMS, DHA Phase 4, Lahore, Pakistan
                  </p>
                  <p className="text-gray-600">
                    36 Hatherley Grove, London, W2 5RB, UK
                  </p>
                </div>
              </div>
            </div>

            {/* Calendly Button */}
            <div className="pt-4">
              <a
                href="https://calendly.com/etechnocrat/saas-app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group w-full sm:w-auto justify-center"
              >
                <Calendar
                  size={20}
                  className="group-hover:text-blue-200 transition-colors"
                />
                <span>Schedule a Discovery Call</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-[2.5rem] blur-2xl opacity-30" />

            <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="mb-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Send us a message
                </h3>
                <p className="text-gray-500">
                  Fill out the form and we'll get back to you shortly.
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Message
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-5 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <MessageSquare size={20} />
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-gray-900 resize-none placeholder:text-gray-400"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && (
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
