"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Boxes,
  Briefcase,
  PhoneCall,
  Sparkles,
  PieChart,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Logo from "@/assets/image.png";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminSidebarProps {
  user: {
    name: string;
    role: string;
  };
  logoutAction: () => Promise<void>;
}

export default function AdminSidebar({
  user,
  logoutAction,
}: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "Team Management", icon: Users },

    { type: "header", label: "Global Settings" },
    { href: "/admin/navbar", label: "Navbar Menus", icon: Menu },

    { type: "header", label: "Services Management" },
    { href: "/admin/services", label: "Services Section", icon: Boxes },
    {
      href: "/admin/services/service-editor",
      label: "Service Pages",
      icon: LayoutDashboard,
    },

    { type: "header", label: "Industries Management" },
    { href: "/admin/industries", label: "Industries Section", icon: Boxes },
    {
      href: "/admin/industries/sector-editor",
      label: "Sector Pages",
      icon: LayoutDashboard,
    },

    { type: "header", label: "Engagement Models" },
    {
      href: "/admin/engagement/editor",
      label: "Engagement Pages",
      icon: LayoutDashboard,
    },

    { type: "header", label: "Talent Management" },
    {
      href: "/admin/hire-dev/editor",
      label: "Hire Dev Pages",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/careers/applications",
      label: "Job Applications",
      icon: Briefcase,
    },

    { type: "header", label: "Landing Content" },
    { href: "/admin/hero", label: "Hero Banner", icon: Sparkles },
    { href: "/admin/about-us", label: "About Us", icon: FileText },
    { href: "/admin/careers", label: "Careers", icon: Briefcase },
    { href: "/admin/stats", label: "Company Stats", icon: PieChart },
    { href: "/admin/why-choose-us", label: "Why Choose Us", icon: BarChart3 },

    { type: "header", label: "Corporate Data" },
    {
      href: "/admin/projects",
      label: "Projects & Testimonials",
      icon: Briefcase,
    },
    { href: "/admin/partners", label: "Partners", icon: Users },
    { href: "/admin/awards", label: "Awards & Recognitions", icon: Sparkles },
    { href: "/admin/team", label: "Team Our Experts", icon: Users },

    { type: "header", label: "Knowledge Center" },
    { href: "/admin/blogs", label: "Insights / Blogs", icon: FileText },
    { href: "/admin/faqs", label: "FAQs", icon: Settings },
    {
      href: "/admin/lead-magnet",
      label: "Lead Magnets",
      icon: Sparkles,
    },

    { type: "header", label: "Inquiries & Conversations" },
    { href: "/admin/inquiries", label: "Customer Messages", icon: Mail },
    { href: "/admin/subscribers", label: "Subscribers List", icon: Mail },
    {
      href: "/admin/conversations",
      label: "Chat Conversations",
      icon: PhoneCall,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
        <Image
          src={Logo}
          alt="ITSOL Logo"
          quality={100}
          className="h-10 w-auto object-contain brightness-0 invert"
        />
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar / Drawer */}
      <AnimatePresence>
        {(isOpen || true) && (
          <motion.aside
            initial={false}
            animate={{
              x: isOpen
                ? 0
                : typeof window !== "undefined" && window.innerWidth < 768
                  ? -320
                  : 0,
            }}
            className={cn(
              "fixed inset-y-0 left-0 z-50 w-72 h-full bg-gray-950 border-r border-gray-900 flex flex-col transition-all duration-300 md:relative md:translate-x-0",
              !isOpen && "hidden md:flex",
            )}
          >
            {/* Logo Section */}
            <div className="px-5 py-6 border-b border-gray-800/80 relative">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 flex-shrink-0">
                  <Image
                    src={Logo}
                    alt="ITSOL"
                    priority
                    quality={100}
                    className="h-5 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-wide">
                    ITSOL Admin
                  </p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-semibold">
                    Control Center
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden absolute top-5 right-4 p-1.5 text-gray-500 hover:text-white bg-gray-800 rounded-lg"
              >
                <X size={16} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto sidebar-scroll">
              {navItems.map((item, idx) => {
                if (item.type === "header") {
                  return (
                    <div key={idx} className="pt-6 pb-2 px-2">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gray-800" />
                        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.25em] whitespace-nowrap">
                          {item.label}
                        </p>
                        <div className="h-px flex-1 bg-gray-800" />
                      </div>
                    </div>
                  );
                }

                const Icon = item.icon!;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={idx}
                    href={item.href!}
                    className={cn(
                      "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative",
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/25"
                        : "text-gray-400 hover:bg-white/5 hover:text-gray-200",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebarActiveBar"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-white rounded-r-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      />
                    )}
                    <div
                      className={cn(
                        "p-1.5 rounded-lg transition-all duration-200",
                        isActive
                          ? "bg-white/20"
                          : "bg-gray-800/60 group-hover:bg-gray-700/60",
                      )}
                    >
                      <Icon
                        size={14}
                        className={cn(
                          "transition-transform group-hover:scale-110",
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-blue-400",
                        )}
                      />
                    </div>
                    <span className="truncate text-xs">{item.label}</span>
                    {isActive && (
                      <ChevronRight
                        size={12}
                        className="ml-auto opacity-70 flex-shrink-0"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Footer / User Profile */}
            <div className="p-3 border-t border-gray-800/80 bg-gray-950 space-y-2">
              <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-900/60 rounded-xl border border-gray-800/50">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center text-white font-bold text-sm shadow-inner flex-shrink-0">
                  {user.name?.charAt(0) || "A"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white truncate">
                    {user.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[9px] text-gray-500 truncate uppercase tracking-wider font-semibold">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-gray-800/60 hover:bg-gray-700/60 text-gray-400 hover:text-white rounded-lg text-[10px] font-bold transition-all border border-gray-700/40 hover:border-gray-600 active:scale-95"
                >
                  <ExternalLink size={11} />
                  Live Site
                </Link>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    logoutAction();
                  }}
                >
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-2 bg-red-500/5 hover:bg-red-500 text-red-500 hover:text-white rounded-lg text-[10px] font-bold transition-all border border-red-500/10 hover:border-red-500 active:scale-95 group"
                  >
                    <LogOut
                      size={11}
                      className="group-hover:-translate-x-0.5 transition-transform"
                    />
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
