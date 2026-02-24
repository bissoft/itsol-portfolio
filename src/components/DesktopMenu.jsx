import { ArrowLeft, ChevronDown, ChevronRight, Code, Cpu, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DesktopMenu({ menu, isActive, setActiveMenu }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isIntentionalHover, setIsIntentionalHover] = useState(false);
  const dropdownRef = useRef(null);
  const hasSubMenu = menu?.subMenu?.length;
  const navigate = useNavigate();

  const maxHeight = `calc(100vh - 120px)`;

  useEffect(() => {
    if (isActive && dropdownRef.current) {
      const dropdownElement = dropdownRef.current;
      const handleMouseEnter = () => setIsIntentionalHover(true);
      const handleMouseLeave = () => setIsIntentionalHover(false);

      dropdownElement.addEventListener("mouseenter", handleMouseEnter);
      dropdownElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        dropdownElement.removeEventListener("mouseenter", handleMouseEnter);
        dropdownElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isActive]);

  const cyberGlowVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const techPillVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
    }
  };

  const handleMenuItemClick = (submenu) => {
    if(!submenu) return;
    navigate(`${submenu.path}`);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleMainMenuClick = (menu) => {
    const hasSimpleSubmenus = menu.subMenu?.some(
      sub => !sub.links && sub.path
    );
    
    if (!hasSubMenu || hasSimpleSubmenus) {
      navigate(menu.subMenu?.[0]?.path || '/');
      setActiveMenu(null);
    }
  };

  const handleBackToMenu = () => {
    setActiveSubMenu(null);
  };

  return (
    <motion.li
      className="group/link relative"
      onHoverStart={() => hasSubMenu && setActiveMenu(menu.name)}
      onHoverEnd={() => {
        if (!isIntentionalHover) {
          setActiveMenu(null);
          setActiveSubMenu(null);
        }
      }}
      key={menu.name}
    >
      <motion.div
        className={`relative cursor-pointer px-4 py-2 rounded-lg transition-all ${
          isActive 
            ? "text-white" 
            : "text-gray-700 hover:text-blue-600"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleMainMenuClick(menu)}
      >
        <motion.span 
          className="font-medium relative z-10 flex items-center gap-1"
          whileHover={{ x: 3 }}
        >
          {menu.name}
          {hasSubMenu && (
            <motion.span
              animate={{ 
                rotate: isActive ? 180 : 0,
              }}
              transition={{ 
                type: "spring",
                stiffness: 500,
                damping: 20
              }}
            >
              <ChevronDown className="h-4 w-4 mt-0.5" />
            </motion.span>
          )}
        </motion.span>
        
        {isActive && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg -z-10"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
      </motion.div>

      {hasSubMenu && isActive && (
        <>
          <motion.div
            className="absolute left-0 right-0 h-4"
            style={{ bottom: "-16px" }}
            onMouseEnter={() => setIsIntentionalHover(true)}
            onMouseLeave={() => setIsIntentionalHover(false)}
          />

        <motion.div
  ref={dropdownRef}
  className="fixed left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-t border-blue-100 overflow-hidden"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  style={{
    top: "112px", // 80px (h-20) + 32px (2rem margin-top)
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    maxHeight: maxHeight,
  }}
  onHoverStart={() => setIsIntentionalHover(true)}
  onHoverEnd={() => {
    setIsIntentionalHover(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  }}
>
            <div className="relative p-6 max-w-7xl mx-auto h-full">
              <AnimatePresence mode="wait">
                {activeSubMenu ? (
                  <motion.div
                    key={activeSubMenu.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="h-full flex flex-col"
                  >
                    {/* Header section with back button */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between">
                        <motion.button
                          onClick={handleBackToMenu}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
                          whileHover={{ x: -3 }}
                        >
                          <ArrowLeft className="h-5 w-5" />
                          <span className="font-medium">Back to menu</span>
                        </motion.button>
                      </div>
                      
                      <motion.div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="bg-gradient-to-br from-blue-600 to-blue-400 p-3 rounded-lg shadow-lg"
                          initial={{ scale: 0.8, rotate: -5 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <activeSubMenu.icon size={28} className="text-white" />
                        </motion.div>
                        <motion.h2 
                          className="text-3xl font-bold text-gray-800"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {activeSubMenu.name}
                        </motion.h2>
                      </motion.div>
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                      />
                    </div>

                    {/* Content section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 overflow-y-none pb-4 pr-2">
                      <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {activeSubMenu.desc}
                        </p>
                      </motion.div>

                      {/* Terminal card */}
                      {activeSubMenu.links?.length > 0 && (
                        <motion.div
                          className="bg-gray-900 rounded-xl p-6 border border-gray-800 overflow-hidden h-full min-h-[300px]"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          variants={cyberGlowVariants}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex gap-2">
                              <div className="h-3 w-3 bg-red-500 rounded-full" />
                              <div className="h-3 w-3 bg-yellow-500 rounded-full" />
                              <div className="h-3 w-3 bg-green-500 rounded-full" />
                            </div>
                            <h3 className="font-mono text-sm text-blue-400">services_list.md</h3>
                          </div>
                          <ul className="space-y-3 font-mono h-[calc(100%-40px)] overflow-y-none">
                            {activeSubMenu.links.map((link, i) => (
                              <motion.li
                                key={i}
                                className="group flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer py-1"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + i * 0.05 }}
                                onClick={() => {
                                  navigate(link.path);
                                  setActiveMenu(null);
                                  setActiveSubMenu(null);
                                }}
                              >
                                <span className="text-blue-400">$</span>
                                <span className="group-hover:underline">{link.title}</span>
                                <span className="ml-auto text-gray-500 text-xs">→</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Tech stack card */}
                      {getTechnologies(activeSubMenu.name).length > 0 && (
                        <motion.div
                          className="bg-white rounded-xl p-6 border border-gray-200 h-full min-h-[300px] flex flex-col"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                              <Terminal className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="font-semibold text-lg text-gray-800">Tech Stack</h3>
                          </div>
                          <div className="flex flex-wrap gap-2 overflow-y-none">
                            {getTechnologies(activeSubMenu.name).map((tech, i) => (
                              <motion.div
                                key={i}
                                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                                variants={techPillVariants}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                                whileHover="hover"
                              >
                                {tech}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Stats card
                      <motion.div
                        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 lg:col-span-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                            <div className="text-sm text-blue-800">Success Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                            <div className="text-sm text-blue-800">Support</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-1">∞</div>
                            <div className="text-sm text-blue-800">Scalability</div>
                          </div>
                        </div>
                      </motion.div> */}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col"
                  >
                    <motion.h2 
                      className="text-2xl font-bold mb-6 text-gray-800"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {menu.name} Services
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 overflow-y-auto pb-4 pr-2">
                      {menu.subMenu.map((item, i) => {
                        const isSimpleItem = item.path && !item.links;
                        
                        return (
                          <motion.div
                            key={i}
                            className={`bg-white p-6 rounded-xl border border-gray-200 cursor-pointer hover:border-blue-300 transition-all group h-full min-h-[100px] ${
                              isSimpleItem ? 'cursor-pointer' : ''
                            }`}
                            onMouseEnter={!isSimpleItem ? () => setActiveSubMenu(item) : null}
                            onClick={() => {
                              if (isSimpleItem) {
                                navigate(item.path);
                                setActiveMenu(null);
                              }
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                            whileHover={{ 
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                            }}
                          >
                            <div className="flex items-start gap-4 mb-3">
                              {item.icon && (
                                <motion.div
                                  className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-lg group-hover:rotate-6 transition-transform"
                                >
                                  <item.icon size={20} className="text-blue-600" />
                                </motion.div>
                              )}
                              <div>
                                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                                  {item.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                            {/* <motion.div 
                              className="h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ scaleX: 0 }}
                            /> */}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </motion.li>
  );
}

// Helper functions remain the same
function getMenuDescription(menuName) {
  const descriptions = {
    Services:
      "We offer comprehensive digital solutions tailored to your business needs. Our expert team delivers cutting-edge technology services.",
    Company:
      "Learn more about our organization, our values, and the talented people who make it all happen.",
    Work: "Explore our portfolio of successful projects and see how we've helped businesses like yours.",
    Resources:
      "Access valuable information, insights, and tools to help you navigate the digital landscape.",
    Contact:
      "Get in touch with our team to discuss how we can help bring your ideas to life.",
  };

  return (
    descriptions[menuName] ||
    "Explore our offerings and learn how we can help your business grow."
  );
}

function getTechnologies(menuItem) {
  const technologies = {
    "Web Development": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "GraphQL",
      "Express",
      "MongoDB"
    ],
    "Mobile Apps": ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    "Backend & APIs": ["Node.js", "Python", "Django", "GraphQL", "PostgreSQL", "MongoDB"],
    "UI/UX Design": ["Figma", "Adobe XD", "Sketch", "Framer", "Prototyping"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Ansible"]
  };

  return (
    technologies[menuItem] || [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Cloud Services",
      "Microservices"
    ]
  );
}