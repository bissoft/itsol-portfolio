import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import { Menus } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import MeetingButton from "../components/MeetingButton";
import { X, ChevronDown, ChevronUp, Menu, Sparkles } from "lucide-react";
import logo from "../assets/unnamed__1_background.png"; // Adjust path based on your folder structure
// import logo from "../assets/techbasepro logo.png"; // Adjust path based on your folder structure
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  // 👇 Check if current route is /case-study/2
  const isCaseStudyPage = location.pathname.startsWith("/case-study") || location.pathname.startsWith("/case-studies");

  return (
    <div className="relative z-50">
      <header
        className={`fixed top-0 left-0 right-0 flex items-center justify-center transition-all duration-300 ${isScrolled || isCaseStudyPage
          ? "h-20 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "h-32 bg-transparent"
          }`}
      >
        <nav className="px-6 flex items-center justify-between w-full max-w-7xl mx-auto h-full">
          {/* New Logo Design */}
          <motion.div
            className="flex items-center gap-x-3 relative cursor-pointer"
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
                className={`relative flex items-center justify-center overflow-hidden transition-all duration-300 ${isScrolled || isCaseStudyPage ? 'w-20 h-20' : 'w-28 h-28'}`}
                // whileHover={{ width: 140 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.img
                    src={logo}
                    alt="ITSOL Logo"
                    className={`${isScrolled || isCaseStudyPage ? 'h-14 md:h-16' : 'h-24 md:h-28'} w-auto object-contain transition-all duration-300`}
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

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-x-1">
            {Menus.map((menu) => (
              <DesktopMenu
                menu={menu}
                key={menu.name}
                isActive={activeMenu === menu.name}
                setActiveMenu={setActiveMenu}
              />
            ))}
          </ul>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block"
            >
              <MeetingButton
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
              />
            </motion.div>

            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>

      {/* New Meeting Modal Design */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 max-w-md w-full p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <Sparkles className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Let's Work
                </h3>
                <p className="text-gray-600 mt-2">
                  Choose how you'd like to get in touch
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: "0 4px 20px rgba(137, 207, 240, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl flex items-center justify-between group cursor-pointer relative overflow-hidden"
                  onClick={() => {
                    window.open("https://calendly.com/etechnocrat/saas-app", "_blank");
                    setIsModalOpen(false);
                  }}
                >
                  <span className="font-medium relative z-10">Video Call</span>
                  <div className="flex items-center relative z-10">
                    <span className="text-sm opacity-80 mr-3 group-hover:mr-2 transition-all">
                      15-30 min
                    </span>
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
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect
                        x="1"
                        y="5"
                        width="15"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(229, 239, 255, 0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white hover:bg-blue-50 text-blue-500 py-4 px-6 rounded-xl flex items-center justify-between border border-blue-200 group cursor-pointer relative overflow-hidden"
                  onClick={() => {
                    navigate("/get-in-touch");
                    setIsModalOpen(false);
                  }}
                >
                  <span className="font-medium relative z-10">Phone Call</span>
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
                    className="group-hover:translate-x-1 transition-transform relative z-10"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(229, 239, 255, 0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white hover:bg-blue-50 text-blue-500 py-4 px-6 rounded-xl flex items-center justify-between border border-blue-200 group cursor-pointer relative overflow-hidden"
                  onClick={() => {
                    navigate("/get-in-touch");
                    setIsModalOpen(false);
                  }}
                >
                  <span className="font-medium relative z-10">In-Person Meeting</span>
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
                    className="group-hover:translate-x-1 transition-transform relative z-10"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-500 text-sm">
                  Prefer email?{" "}
                  <a
                    href="mailto:info@itsolz.tech"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    info@itsolz.tech
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;