import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/unnamed (1).png"; // Adjust path based on your folder structure

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const handleSubmit = (e) => {
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
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
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
                        onClick={() => {
                          setActiveMenu(null);
                          navigate("/");
                        }}
                        onHoverStart={() => setIsHoveringLogo(true)}
                        onHoverEnd={() => setIsHoveringLogo(false)}
                        // whileHover={{ scale: 1.05 }}
                        // whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          // animate={{
                          //   rotate: isHoveringLogo ? [0, 5, -5, 0] : 0,
                          //   transition: { duration: 0.5 },
                          // }}
                          className="relative"
                        >
                          <motion.div
                            className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
                            // whileHover={{ width: 140 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                 <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src={logo}
                alt="ITSOL Logo"
                className="h-10 w-auto object-contain"
                // animate={{
                //   scale: isHoveringLogo ? 1.05 : 1,
                //   rotate: isHoveringLogo ? [0, 3, -3, 0] : 0,
                //   transition: { duration: 0.5 },
                // }}
              />
            </div>
            
            
                          </motion.div>
                        </motion.div>
                      </motion.div>
{/* <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileHover={{ scale: 1.1, }} // Scale up and change background on hover
  className="flex items-center gap-3 mb-6"
>
  <div className="h-10 bg-blue-500 rounded-lg flex items-center justify-start px-4 cursor-pointer">
    <span className="text-white font-bold text-sm tracking-tight">
      ITSOL
    </span>
  </div>
</motion.div> */}


            <p className="text-gray-600 mb-6">
            ITSOL is a Al based system integration company with years of experience and expertise in providing software as a solution.
            </p>
            {/* <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, color: "hover:text-blue-500" },
                { icon: <Twitter size={20} />, color: "hover:text-blue-400" },
                { icon: <Linkedin size={20} />, color: "hover:text-blue-600" },
                { icon: <Github size={20} />, color: "hover:text-gray-600" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className={`text-gray-500 transition-colors ${social.color}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-gray-800">Quick Links</h4>
           <ul className="space-y-3">
  {[
    { name: 'Home', href: '/' },
    // { name: 'About Us', href: '/about-us' },
    // { name: 'Portfolio', href: '/portfolio' },
    // { name: 'Contact', href: '/get-in-touch' },
  ].map((link, i) => (
    <motion.li
      key={i}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={link.href}
        className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
      >
        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
        {link.name}
      </Link>
    </motion.li>
  ))}
</ul>

          </motion.div> */}

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
    { name: 'Web Development', href: '/web-app-development' },
    { name: 'Mobile Apps', href: '/mobile-app-development' },
    { name: 'Custom Software Development', href: '/custom-software-development' },
    { name: 'Cloud Solutions', href: '/devops-&-cloud' },
    { name: 'AI Integration', href: '/data-&-ai' },
    { name: 'Blockchain & Web3.0', href: '/blockchain-&-web3.0' },
  ].map((service, i) => (
    <motion.li
      key={i}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={service.href}
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
            {/* <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600">
LUMS, DHA Phase 4, Lahore Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500" size={18} />
                <a href="mailto:info@ilt-sa.com" className="text-gray-600 hover:text-blue-500">info@itsolz.tech</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500" size={18} />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-500">+92-336-7912623</a>
              </li>
            </ul> */}
            <ul className="space-y-5 mb-8">
  {/* Pakistan Office */}
 {/* Pakistan Office */}
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
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
    <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
    <div>
      <p className="font-semibold text-gray-800">UK Office</p>
      <p className="text-gray-600 leading-snug">
        36 Hatherley Grove, London, W2 5RB, United Kingdom
      </p>
    </div>
  </li>

  
</ul>


            {/* <div>
              <h5 className="font-semibold mb-4 text-gray-800">Stay Updated</h5>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-blue-50 text-gray-800 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-200 flex-grow"
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r  from-blue-400 to-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg transition-colors cursor-pointer"
                 initial={{ opacity: 1 }}           // Standby fade
  animate={{ opacity: 1 }}           // Idle opacity
  whileHover={{ opacity: 0.8 }} // Fade more on hover
  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
              <AnimatePresence>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500 text-sm mt-2"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </div> */}
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
          <p>© {new Date().getFullYear()} ITSOL Technologies. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-blue-500">Terms of Service</Link>
            {/* <a href="#" className="hover:text-blue-500">Cookies</a> */}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;