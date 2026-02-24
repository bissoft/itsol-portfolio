"use client";

import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Code,
  Cpu,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MenuItem, SubMenuItem, slugify, getSmartPath } from "@/utils";

interface DesktopMenuProps {
  menu: MenuItem;
  isActive: boolean;
  setActiveMenu: (name: string | null) => void;
  isScrolled: boolean;
  isSolidNavbar: boolean;
}

export default function DesktopMenu({
  menu,
  isActive,
  setActiveMenu,
  isScrolled,
  isSolidNavbar,
}: DesktopMenuProps) {
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem | null>(null);
  const [isIntentionalHover, setIsIntentionalHover] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // hasSubMenu = true if there are sub-items that either have nested links
  // OR have a description/icon/title (which means they are meant to be shown as cards in the dropdown)
  const hasSubMenu =
    (menu?.subMenu?.length ?? 0) > 0 &&
    menu.subMenu?.some(
      (sub) =>
        (sub.links && sub.links.length > 0) ||
        (sub.name && (sub.path || sub.desc || sub.icon)),
    );

  const maxHeight = `calc(100vh - 100px)`;

  useEffect(() => {
    const subMenu = menu.subMenu;
    if (isActive && subMenu && subMenu.length > 0 && !activeSubMenu) {
      setActiveSubMenu(subMenu[0]);
    }
  }, [isActive, menu.subMenu, activeSubMenu]);

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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const techPillVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
    },
  };

  const handleMenuItemClick = (submenu: SubMenuItem) => {
    if (!submenu) return;
    if (submenu.path) {
      router.push(submenu.path);
    }
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleMainMenuClick = (menu: MenuItem) => {
    if (!hasSubMenu) {
      // No dropdown content - navigate directly
      if (menu.path) {
        router.push(menu.path);
      } else if (menu.subMenu?.[0]?.path) {
        router.push(menu.subMenu[0].path);
      }
      setActiveMenu(null);
    }
    // If hasSubMenu, click does nothing - hover opens the dropdown
  };

  const handleBackToMenu = () => {
    setActiveSubMenu(null);
  };

  return (
    <motion.li
      className="group/link relative"
      onHoverStart={() => {
        if (hasSubMenu) {
          setActiveMenu(menu.name);
          // Prefetch paths
          if (menu.path) router.prefetch(menu.path);
          menu.subMenu?.forEach((sub) => {
            if (sub.path) router.prefetch(sub.path);
          });
        } else {
          // No dropdown - prefetch direct path only
          if (menu.path) router.prefetch(menu.path);
        }
      }}
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
          isActive ? "text-white" : "text-gray-700 hover:text-blue-600"
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
                damping: 20,
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
        <div
          className="absolute -left-10 -right-10 z-[100]"
          style={{
            top: "100%", // Starts exactly at the bottom of the nav link
            height: isScrolled || isSolidNavbar ? "24px" : "32px", // Covers the gap precisely
          }}
          onMouseEnter={() => setIsIntentionalHover(true)}
          onMouseLeave={() => {
            if (!isIntentionalHover) {
              setActiveMenu(null);
            }
          }}
        >
          <motion.div
            ref={dropdownRef}
            className="fixed left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-t border-blue-100 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              top: isScrolled || isSolidNavbar ? "64px" : "80px", // Dynamic top based on scroll
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              maxHeight: maxHeight,
            }}
            onMouseEnter={() => setIsIntentionalHover(true)}
            onMouseLeave={() => {
              setIsIntentionalHover(false);
              setActiveMenu(null);
              setActiveSubMenu(null);
            }}
          >
            <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row">
              {/* Left Sidebar - Menu Selection */}
              <div className="lg:w-1/4 border-r border-gray-100 p-4 bg-gray-50/30 flex flex-col min-h-0">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                  Explore {menu.name}
                </h3>
                <div className="space-y-1.5 overflow-y-auto pr-2 custom-scrollbar flex-1">
                  {menu?.subMenu?.map((item, i) => {
                    const isSelected = activeSubMenu?.name === item.name;
                    return (
                      <motion.button
                        key={i}
                        className={`w-full flex items-center gap-3 p-2.5 rounded-lg transition-all text-left ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                            : "bg-white border border-gray-50 text-gray-700 hover:border-blue-200 hover:bg-white shadow-sm"
                        }`}
                        onClick={() => {
                          const smartPath = getSmartPath(
                            item.name || "",
                            item.path,
                            menu.name || "",
                          );
                          if (smartPath && !item.links?.length) {
                            router.push(smartPath);
                            setActiveMenu(null);
                          } else {
                            setActiveSubMenu(item);
                          }
                        }}
                        onMouseEnter={() => {
                          setActiveSubMenu(item);
                          const smartPath = getSmartPath(
                            item.name || "",
                            item.path,
                            menu.name || "",
                          );
                          if (smartPath) router.prefetch(smartPath);
                        }}
                        whileHover={{ x: isSelected ? 0 : 3 }}
                      >
                        <div
                          className={`p-1.5 rounded-md flex-shrink-0 ${isSelected ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}
                        >
                          {item.icon ? (
                            <item.icon size={16} />
                          ) : (
                            <div className="w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                              {i + 1}
                            </div>
                          )}
                        </div>
                        <span className="font-bold text-sm flex-1 truncate">
                          {item.name}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Right Content - Detailed View */}
              <div className="lg:w-3/4 p-6 lg:p-10 bg-white relative flex flex-col min-h-0 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeSubMenu ? (
                    <motion.div
                      key={activeSubMenu.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-2.5 rounded-lg shadow-lg shadow-blue-100 text-white">
                            {activeSubMenu.icon ? (
                              <activeSubMenu.icon size={24} />
                            ) : (
                              <div className="w-6 h-6" />
                            )}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                              {activeSubMenu.name}
                            </h2>
                            <div className="h-0.5 w-12 bg-blue-600 rounded-full mt-1" />
                          </div>
                        </div>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                          {activeSubMenu.desc}
                        </p>

                        {/* Key Features Section */}
                        {activeSubMenu.links &&
                          activeSubMenu.links.length > 0 && (
                            <div className="mb-8">
                              <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">
                                <span className="w-1 h-4 bg-blue-600 rounded-full" />
                                Key Capabilities
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                                {activeSubMenu.links.map((link: any, i) => {
                                  const smartPath = getSmartPath(
                                    link.title,
                                    link.path,
                                    activeSubMenu.name || "services",
                                  );
                                  return (
                                    <Link
                                      key={i}
                                      href={smartPath}
                                      className="group flex items-center gap-2.5 text-gray-600 hover:text-blue-600 transition-colors"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      <div className="w-1 h-1 rounded-full bg-blue-300 group-hover:bg-blue-600 group-hover:scale-150 transition-all" />
                                      <span className="font-medium text-sm">
                                        {link.title}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                      </div>

                      <div className="pt-6 border-t border-gray-50 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            const smartPath = getSmartPath(
                              activeSubMenu.name || "",
                              activeSubMenu.path,
                              menu.name || "",
                            );
                            if (smartPath) {
                              router.push(smartPath);
                              setActiveMenu(null);
                            }
                          }}
                          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 group text-sm"
                        >
                          Explore {menu.name}
                          <ChevronRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400 italic text-sm">
                      Select an option from the left to view details
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.li>
  );
}
