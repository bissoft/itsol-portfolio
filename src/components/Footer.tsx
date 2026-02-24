"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { slugify, getSmartPath } from "@/utils";
import Image from "next/image";
import logo from "@/assets/image.png"; // Adjust based on next.js asset handling

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <motion.footer
      className="bg-white text-gray-800 pt-20 pb-12 relative overflow-hidden border-t border-blue-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated background elements - updated to light blue */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-center gap-x-3 relative cursor-pointer"
              onHoverStart={() => setIsHoveringLogo(true)}
              onHoverEnd={() => setIsHoveringLogo(false)}
            >
              <Link href="/">
                <motion.div className="relative">
                  <motion.div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={logo}
                        alt="ITSOL Logo"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>

            <p className="text-gray-600 mb-6">
              ITSOL is a Al based system integration company with years of
              experience and expertise in providing software as a solution.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-gray-800">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Web App Development" },
                { name: "Mobile App Development" },
                { name: "Custom Software Development" },
                { name: "DevOps & Cloud" },
                { name: "Data & AI" },
                { name: "Blockchain & Web3" },
              ].map((service, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={getSmartPath(service.name, undefined, "Services")}
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-gray-800">Contact Us</h4>
            <ul className="space-y-5 mb-8">
              {/* Pakistan Office */}
              <li className="flex items-start gap-3">
                <MapPin
                  className="text-blue-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="font-semibold text-gray-800">Pakistan Office</p>
                  <p className="text-gray-600 leading-snug">
                    LUMS, DHA Phase 4, Lahore, Pakistan
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <Phone className="text-blue-500" size={16} />
                    <a
                      href="tel:+923367912623"
                      className="text-gray-600 hover:text-blue-500 text-sm"
                    >
                      +92-336-7912623
                    </a>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <Mail className="text-blue-500" size={16} />
                    <a
                      href="mailto:info@itsolz.tech"
                      className="text-gray-600 hover:text-blue-500 text-sm"
                    >
                      info@itsolz.tech
                    </a>
                  </div>
                </div>
              </li>
              {/* UK Office */}
              <li className="flex items-start gap-3">
                <MapPin
                  className="text-blue-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="font-semibold text-gray-800">UK Office</p>
                  <p className="text-gray-600 leading-snug">
                    36 Hatherley Grove, London, W2 5RB, United Kingdom
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-blue-100 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} ITSOL Technologies. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy-policy" className="hover:text-blue-500">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-blue-500">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
