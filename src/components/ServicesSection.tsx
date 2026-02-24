"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { slugify, getSmartPath } from "@/utils";
import { ServicesData, defaultServicesData } from "@/lib/cms-defaults";
import IconRenderer from "./IconRenderer";

interface ServicesSectionProps {
  data?: ServicesData;
}

const ServicesSection = ({ data }: ServicesSectionProps) => {
  const {
    heading,
    subheading,
    services: initialServices,
  } = data || defaultServicesData;
  const [services, setServices] = useState<any[]>(initialServices);
  const [selectedService, setSelectedService] = useState<any>(
    initialServices[0],
  );
  const router = useRouter();

  // Sync features with navbar links
  React.useEffect(() => {
    fetch("/api/admin/navbar")
      .then((res) => res.json())
      .then((navData) => {
        if (navData?.menus) {
          const servicesMenu = navData.menus.find((m: any) =>
            m.name.toLowerCase().includes("service"),
          );
          if (servicesMenu && servicesMenu.subMenu) {
            const updatedServices = initialServices.map((service) => {
              const subItem = servicesMenu.subMenu.find(
                (s: any) =>
                  s.name.toLowerCase().trim() ===
                  service.name.toLowerCase().trim(),
              );
              if (subItem) {
                return {
                  ...service,
                  description: subItem.desc || service.description,
                  iconName: subItem.iconName || service.iconName,
                  dynamicLinks:
                    subItem.links && subItem.links.length > 0
                      ? subItem.links
                      : undefined,
                };
              }
              return service;
            });
            setServices(updatedServices);
            // Also update selected service if it's the one we just updated
            setSelectedService((prev: any) => {
              const updated = updatedServices.find((s) => s.id === prev.id);
              return updated || prev;
            });
          }
        }
      })
      .catch(console.error);
  }, [initialServices]);

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-sky-50/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              {heading.split(" ").pop()}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Services Navigation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  className={`group w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 border ${
                    selectedService.id === service.id
                      ? "bg-blue-50 border-blue-200 shadow-md"
                      : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                  }`}
                  onClick={() => setSelectedService(service)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      selectedService.id === service.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    <IconRenderer
                      iconName={service.iconName}
                      className="w-5 h-5"
                    />
                  </div>
                  <span
                    className={`font-medium text-lg ${
                      selectedService.id === service.id
                        ? "text-blue-900"
                        : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  >
                    {service.name}
                  </span>
                  {selectedService.id === service.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl h-full relative overflow-hidden"
              >
                {/* Decorative blob */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50/50 rounded-full blur-[60px] pointer-events-none" />

                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4 text-gray-900 relative z-10">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white shadow-lg">
                    <IconRenderer
                      iconName={selectedService.iconName}
                      className="w-5 h-5"
                    />
                  </div>
                  {selectedService.name}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                  {selectedService.description}
                </p>

                <div className="relative z-10">
                  <h4 className="font-semibold mb-6 text-lg text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 rounded-full" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {selectedService.dynamicLinks
                      ? selectedService.dynamicLinks.map(
                          (link: any, index: number) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={getSmartPath(
                                  link.title,
                                  link.path,
                                  "services",
                                )}
                                className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-all"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                                <span className="font-medium">
                                  {link.title}
                                </span>
                              </Link>
                            </motion.div>
                          ),
                        )
                      : selectedService.features.map(
                          (feature: string, index: number) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-3 text-gray-600 list-none"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ),
                        )}
                  </div>

                  <div className="mt-10 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors flex items-center gap-2 group"
                      onClick={() =>
                        router.push(
                          getSmartPath(
                            selectedService.name,
                            selectedService.path,
                            "services",
                          ),
                        )
                      }
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
