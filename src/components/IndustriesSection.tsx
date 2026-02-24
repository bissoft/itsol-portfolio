"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { slugify } from "@/utils";
import { getIndustriesData } from "@/lib/cms";
import { IndustriesData } from "@/lib/cms-defaults";
import IconRenderer from "./IconRenderer";

const IndustriesSection = () => {
  const router = useRouter();
  const [data, setData] = React.useState<IndustriesData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      try {
        const fetched = await getIndustriesData();
        const navRes = await fetch("/api/admin/navbar");
        const navData = await navRes.json();

        if (navData?.menus) {
          const industriesMenu = navData.menus.find((m: any) =>
            m.name.toLowerCase().includes("industries"),
          );

          if (industriesMenu && industriesMenu.subMenu) {
            const sectors = industriesMenu.subMenu.find((s: any) =>
              s.name.toLowerCase().includes("sectors"),
            );

            if (sectors && sectors.links) {
              const updatedIndustries = fetched.industries.map((ind) => {
                // Find links related to this industry
                // For Healthcare, we want to catch all "Healthcare..." links
                const relevantLinks = sectors.links.filter((l: any) => {
                  const title = l.title.toLowerCase();
                  const indTitle = ind.title.toLowerCase();

                  // Special case for E-commerce mapping
                  if (ind.title === "E-commerce" && title.includes("commerce"))
                    return true;

                  return title.includes(indTitle);
                });

                if (relevantLinks.length > 0) {
                  return {
                    ...ind,
                    dynamicItems: relevantLinks, // Store as objects {title, path}
                  };
                }
                return ind;
              });

              setData({ ...fetched, industries: updatedIndustries });
            } else {
              setData(fetched);
            }
          } else {
            setData(fetched);
          }
        } else {
          setData(fetched);
        }
      } catch (error) {
        console.error("Error syncing industries:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !data) return null;

  const { heading, subheading, industries } = data;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[1000px] h-[1000px] bg-sky-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            dangerouslySetInnerHTML={{
              __html: heading.replace(
                "Industries",
                '<span class="text-blue-600">Industries</span>',
              ),
            }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              onClick={() =>
                router.push(`/industries/${slugify(industry.title)}`)
              }
            >
              <div
                className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-6 border border-blue-100 group-hover:border-blue-200 group-hover:scale-110 transition-all duration-300`}
              >
                <IconRenderer iconName={industry.iconName} size={28} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {industry.title}
              </h3>

              <ul className="space-y-3 mb-8">
                {(industry as any).dynamicItems
                  ? (industry as any).dynamicItems.map(
                      (link: any, idx: number) => {
                        const path =
                          link.path && link.path !== "#" && link.path !== "/"
                            ? link.path
                            : `/industries/${slugify(link.title)}`;
                        return (
                          <li key={idx}>
                            <Link
                              href={path}
                              className="flex items-start text-sm text-gray-600 hover:text-blue-600 transition-colors group/item"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 mr-2 flex-shrink-0 group-hover:bg-blue-400 group-hover/item:bg-blue-600 transition-colors" />
                              {link.title}
                            </Link>
                          </li>
                        );
                      },
                    )
                  : industry.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 mr-2 flex-shrink-0 group-hover:bg-blue-400 transition-colors" />
                        {item}
                      </li>
                    ))}
              </ul>

              <button
                className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/industries/${slugify(industry.title)}`);
                }}
              >
                Explore More
                <div
                  className={`ml-2 w-8 h-8 rounded-full ${industry.color} border border-blue-100 group-hover:border-blue-200 flex items-center justify-center transition-all duration-300`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
