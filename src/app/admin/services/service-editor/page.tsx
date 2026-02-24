"use client";

import React, { useState, useEffect } from "react";
import { getServicesData, getNavbarData, getProjectsData } from "@/lib/cms";
import {
  Plus,
  Trash2,
  Save,
  ArrowLeft,
  Layout,
  List,
  BarChart3,
  Rocket,
  MessageSquare,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
  Quote,
  Info,
  ChevronRight,
  ChevronDown,
  Code,
  X,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SERVICES = [
  // ── Software Development ─────────────────────────────
  {
    name: "Software Development (Main)",
    slug: "custom-software-development",
    group: "Software Development",
  },
  {
    name: "↳ Product Development",
    slug: "product-development",
    group: "Software Development",
  },
  {
    name: "↳ Software Consulting",
    slug: "software-consulting",
    group: "Software Development",
  },
  {
    name: "↳ Enterprise Development",
    slug: "enterprise-development",
    group: "Software Development",
  },
  {
    name: "↳ Offshore Software Development",
    slug: "offshore-software-development",
    group: "Software Development",
  },

  // ── Application Development ───────────────────────────
  {
    name: "Application Development (Main)",
    slug: "web-app-development",
    group: "Application Development",
  },
  {
    name: "↳ Custom Application Development",
    slug: "custom-application-development",
    group: "Application Development",
  },
  {
    name: "↳ Application Migration",
    slug: "application-migration",
    group: "Application Development",
  },
  {
    name: "↳ Application Integration",
    slug: "application-integration",
    group: "Application Development",
  },
  {
    name: "↳ Application Modernization",
    slug: "application-modernization",
    group: "Application Development",
  },
  {
    name: "↳ Application Management",
    slug: "application-management",
    group: "Application Development",
  },

  // ── AI Development ────────────────────────────────────
  {
    name: "AI Development (Main)",
    slug: "data-and-ai",
    group: "AI Development",
  },

  // ── DevOps & Cloud ────────────────────────────────────
  {
    name: "DevOps & Cloud (Main)",
    slug: "devops-and-cloud",
    group: "DevOps & Cloud",
  },
  {
    name: "↳ Containerization Services",
    slug: "containerization-services",
    group: "DevOps & Cloud",
  },
  {
    name: "↳ Monitoring & Logging",
    slug: "monitoring-logging-services",
    group: "DevOps & Cloud",
  },
  {
    name: "↳ Cyber Security",
    slug: "cyber-security-services",
    group: "DevOps & Cloud",
  },

  // ── Software Testing & QA ─────────────────────────────
  {
    name: "Software Testing & QA (Main)",
    slug: "software-quality-assurance",
    group: "Testing & QA",
  },

  // ── Managed IT Services ───────────────────────────────
  {
    name: "Managed IT Services (Main)",
    slug: "managed-it-systems",
    group: "Managed IT",
  },

  // ── Platform Consulting ───────────────────────────────
  {
    name: "Platform Consulting (Main)",
    slug: "platform-consulting",
    group: "Platform Consulting",
  },

  // ── Emerging Innovations ──────────────────────────────
  {
    name: "Emerging Innovations (Main)",
    slug: "emerging-technologies",
    group: "Emerging Innovations",
  },

  // ── Staff Augmentation ────────────────────────────────
  {
    name: "Staff Augmentation (Main)",
    slug: "staff-augmentation-services",
    group: "Staff Augmentation",
  },
  {
    name: "↳ Dedicated Developers",
    slug: "dedicated-developers",
    group: "Staff Augmentation",
  },

  // ── Blockchain & Web3 ─────────────────────────────────
  {
    name: "Blockchain & Web3 (Main)",
    slug: "blockchain-and-web3",
    group: "Blockchain & Web3",
  },
];

import { getSmartPath } from "@/utils";

export default function ServicePageAdmin() {
  const [availableServices, setAvailableServices] = useState<any[]>([]);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [data, setData] = useState<any>(null);
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Load available services from Navbar
  useEffect(() => {
    async function loadServicesFromNavbar() {
      try {
        const navData = await getNavbarData();
        const servicesMenu = navData.menus.find(
          (m: any) =>
            m.name === "Services" || m.name.toLowerCase().includes("service"),
        );

        if (servicesMenu && servicesMenu.subMenu) {
          const dynamicList: any[] = [];

          servicesMenu.subMenu.forEach((category: any) => {
            const currentGroupItems: any[] = [];
            const groupName = category.name || "Other Services";

            // 1. Add the Category itself first (if it has a path)
            if (category.path && category.path !== "#") {
              const fullPath = getSmartPath(
                category.name,
                category.path,
                "Services",
              );
              const slug = fullPath.split("/").pop()?.toLowerCase();

              if (slug) {
                currentGroupItems.push({
                  name: `${category.name} (Main Page)`,
                  slug: slug,
                  group: groupName,
                });
              }
            }

            // 2. Add all nested links under this category
            if (category.links && category.links.length > 0) {
              category.links.forEach((link: any) => {
                const fullPath = getSmartPath(link.title, link.path, groupName);
                const slug = fullPath.split("/").pop()?.toLowerCase();

                if (slug && !currentGroupItems.some((i) => i.slug === slug)) {
                  currentGroupItems.push({
                    name: link.title,
                    slug: slug,
                    group: groupName,
                  });
                }
              });
            }

            // Push all items for this group to the master list
            dynamicList.push(...currentGroupItems);
          });

          // Final cleanup: Remove any accidental duplicates across the whole list
          const uniqueList = dynamicList.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.slug === item.slug),
          );

          if (uniqueList.length > 0) {
            setAvailableServices(uniqueList);
            // If current selected slug is not in the new list, switch to the first one
            if (!uniqueList.some((s) => s.slug === selectedSlug)) {
              setSelectedSlug(uniqueList[0].slug);
            }
          }
        }
      } catch (error) {
        console.error("Failed to load services from navbar", error);
        toast.error("Failed to sync with navbar");
      }
    }
    loadServicesFromNavbar();

    async function loadAllProjects() {
      try {
        const projectsData = await getProjectsData();
        setAllProjects(projectsData.projects || []);
      } catch (error) {
        console.error("Failed to load projects", error);
      }
    }
    loadAllProjects();
  }, []);

  useEffect(() => {
    if (selectedSlug) {
      // Only load data if a slug is selected
      loadData();
    }
  }, [selectedSlug]);

  async function loadData() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/services/${selectedSlug}`);
      const json = await res.json();
      if (json.data) {
        setData(json.data);
      } else {
        // Default template for new service
        setData({
          slug: selectedSlug,
          heroTitle: (
            availableServices.find((s) => s.slug === selectedSlug)?.name ||
            "New Service"
          )
            .replace(/^↳\s*/, "")
            .replace(/\s*\(Main\)$/, ""),
          heroDescription:
            "Tailored technology solutions for modern business needs.",
          heroBadge: "Service Excellence",
          stats: [
            { value: "100%", label: "Satisfaction", iconName: "Smile" },
            { value: "24/7", label: "Support", iconName: "Clock" },
          ],
          process: [],
          features: [],
          benefits: [],
          techStack: [],
          customSections: [],
        });
      }
    } catch (error) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/services/${selectedSlug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Save failed");
      toast.success("Service page updated successfully!");
    } catch (error) {
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  }

  // Update helpers
  const updateField = (field: string, value: any) => {
    setData((prev: any) => ({ ...prev, [field]: value }));
  };

  const updateListItem = (
    listName: string,
    index: number,
    field: string,
    value: any,
  ) => {
    const list = [...data[listName]];
    list[index] = { ...list[index], [field]: value };
    setData((prev: any) => ({ ...prev, [listName]: list }));
  };

  const addItem = (listName: string, newItem: any) => {
    setData((prev: any) => ({
      ...prev,
      [listName]: [...prev[listName], newItem],
    }));
  };

  const removeItem = (listName: string, index: number) => {
    const list = [...data[listName]];
    list.splice(index, 1);
    setData((prev: any) => ({ ...prev, [listName]: list }));
  };

  if (loading || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-500 font-bold animate-pulse uppercase tracking-[0.2em] text-xs">
          Synchronizing Dynamic Content
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest mb-2">
              <Layout size={14} />
              Admin / Services
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Service Page Editor
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative group">
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="appearance-none px-8 py-4 bg-white border-2 border-transparent rounded-[2rem] font-black text-gray-800 shadow-xl shadow-blue-900/5 focus:border-blue-500 transition-all outline-none cursor-pointer pr-12 min-w-[280px]"
              >
                {Array.from(new Set(availableServices.map((s) => s.group))).map(
                  (group) => (
                    <optgroup key={group} label={`── ${group} ──`}>
                      {availableServices
                        .filter((s) => s.group === group)
                        .map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.name}
                          </option>
                        ))}
                    </optgroup>
                  ),
                )}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform" />
            </div>

            <button
              onClick={handleSave}
              disabled={saving}
              className={`flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all outline-none ring-4 ring-white/50 ${saving ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {saving ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              Publish Changes
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDEBAR - Navigation / Quick Links */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-8">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 px-1">
                Content Sections
              </h3>
              <div className="space-y-2">
                {[
                  "Hero",
                  "Stats",
                  "Process",
                  "Benefits",
                  "Features",
                  "Tech Stack",
                  "Custom Sections",
                  "Projects",
                ].map((section) => (
                  <button
                    key={section}
                    className="w-full text-left px-5 py-3 rounded-2xl font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all flex items-center justify-between group"
                  >
                    {section}
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-2">
                    <Info size={16} />
                    Tip
                  </div>
                  <p className="text-xs text-blue-700/70 font-medium leading-relaxed">
                    Changes are applied instantly to the live site once you
                    click <strong>Publish Changes</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-2 space-y-8">
            {/* HERO SECTION */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Rocket size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">
                  Hero Section
                </h2>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                      Title Prefix / Gradent Word
                    </label>
                    <input
                      type="text"
                      value={data.heroTitle}
                      onChange={(e) => updateField("heroTitle", e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:bg-white focus:border-blue-500 transition-all outline-none font-bold text-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={data.heroBadge}
                      onChange={(e) => updateField("heroBadge", e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:bg-white focus:border-blue-500 transition-all outline-none font-bold text-gray-800"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                    Subheading / Description
                  </label>
                  <textarea
                    rows={4}
                    value={data.heroDescription}
                    onChange={(e) =>
                      updateField("heroDescription", e.target.value)
                    }
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:bg-white focus:border-blue-500 transition-all outline-none font-medium text-gray-600 leading-relaxed"
                  />
                </div>
              </div>
            </div>

            {/* STATS SECTION */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <BarChart3 size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Key Statistics
                  </h2>
                </div>
                <button
                  onClick={() =>
                    addItem("stats", {
                      value: "0",
                      label: "New Stat",
                      iconName: "Activity",
                    })
                  }
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {data.stats?.map((stat: any, i: number) => (
                  <div
                    key={i}
                    className="p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-blue-100 transition-all relative group"
                  >
                    <button
                      onClick={() => removeItem("stats", i)}
                      className="absolute -top-2 -right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-xl z-10"
                    >
                      <Trash2 size={14} />
                    </button>
                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) =>
                          updateListItem("stats", i, "value", e.target.value)
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-2 text-center text-xl font-black text-blue-600 outline-none focus:border-blue-500"
                        placeholder="Value (e.g. 200+)"
                      />
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) =>
                          updateListItem("stats", i, "label", e.target.value)
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-2 text-center text-xs font-bold text-gray-400 uppercase outline-none focus:border-blue-500"
                        placeholder="Label"
                      />
                      <input
                        type="text"
                        value={stat.iconName}
                        onChange={(e) =>
                          updateListItem("stats", i, "iconName", e.target.value)
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-4 py-2 text-center text-[10px] font-mono text-gray-300 outline-none focus:border-blue-500"
                        placeholder="Lucide Icon"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                    <List size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Process Steps
                  </h2>
                </div>
                <button
                  onClick={() => {
                    addItem("process", {
                      title: "New Step",
                      description: "Step description",
                      iconName: "CheckCircle",
                    });
                  }}
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {data.process?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-purple-100 transition-colors relative group"
                  >
                    <button
                      onClick={() => {
                        removeItem("process", index);
                      }}
                      className="absolute top-4 right-4 p-2.5 bg-red-100 text-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <Trash2 size={16} />
                    </button>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Step Title
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => {
                            updateListItem(
                              "process",
                              index,
                              "title",
                              e.target.value,
                            );
                          }}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-purple-500 transition-all outline-none font-bold text-gray-800 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Icon Name (Lucide)
                        </label>
                        <input
                          type="text"
                          value={item.iconName}
                          onChange={(e) => {
                            updateListItem(
                              "process",
                              index,
                              "iconName",
                              e.target.value,
                            );
                          }}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-purple-500 transition-all outline-none font-mono text-sm shadow-sm"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Description
                        </label>
                        <textarea
                          value={item.description}
                          onChange={(e) => {
                            updateListItem(
                              "process",
                              index,
                              "description",
                              e.target.value,
                            );
                          }}
                          rows={2}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-purple-500 transition-all outline-none resize-none font-medium text-gray-600 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {(!data.process || data.process.length === 0) && (
                  <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-[2rem]">
                    <List size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold">
                      No process steps added yet.
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Define the key stages of your service delivery.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                    <CheckCircle2 size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Key Benefits
                  </h2>
                </div>
                <button
                  onClick={() => {
                    addItem("benefits", {
                      title: "New Benefit",
                      description: "Details here",
                      iconName: "Check",
                    });
                  }}
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {data.benefits?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-green-100 transition-colors relative group"
                  >
                    <button
                      onClick={() => {
                        removeItem("benefits", index);
                      }}
                      className="absolute top-4 right-4 p-2.5 bg-red-100 text-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <Trash2 size={16} />
                    </button>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Title
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => {
                            updateListItem(
                              "benefits",
                              index,
                              "title",
                              e.target.value,
                            );
                          }}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-green-500 transition-all outline-none font-bold text-gray-800 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Icon Name (Lucide)
                        </label>
                        <input
                          type="text"
                          value={item.iconName}
                          onChange={(e) => {
                            updateListItem(
                              "benefits",
                              index,
                              "iconName",
                              e.target.value,
                            );
                          }}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-green-500 transition-all outline-none font-mono text-sm shadow-sm"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Description
                        </label>
                        <textarea
                          value={item.description}
                          onChange={(e) => {
                            updateListItem(
                              "benefits",
                              index,
                              "description",
                              e.target.value,
                            );
                          }}
                          rows={2}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-green-500 transition-all outline-none resize-none font-medium text-gray-600 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {(!data.benefits || data.benefits.length === 0) && (
                  <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-[2rem]">
                    <CheckCircle2
                      size={48}
                      className="mx-auto text-gray-200 mb-4"
                    />
                    <p className="text-gray-400 font-bold">
                      No benefits added yet.
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Highlight the advantages of your service.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* FEATURES SECTION (kept as generic) */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Key Features
                  </h2>
                </div>
                <button
                  onClick={() =>
                    addItem("features", {
                      title: "New Feature",
                      description: "Explain the feature...",
                      iconName: "Zap",
                    })
                  }
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="space-y-4">
                {data.features?.map((feat: any, i: number) => (
                  <div
                    key={i}
                    className="p-8 bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-blue-100 transition-all relative group flex gap-6"
                  >
                    <button
                      onClick={() => removeItem("features", i)}
                      className="absolute top-4 right-4 p-2.5 bg-red-100 text-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="flex flex-col gap-2">
                      <input
                        type="text"
                        value={feat.iconName}
                        onChange={(e) =>
                          updateListItem(
                            "features",
                            i,
                            "iconName",
                            e.target.value,
                          )
                        }
                        className="w-16 h-16 bg-white border-2 border-transparent rounded-2xl text-center text-[10px] font-mono shadow-sm outline-none focus:border-blue-500"
                      />
                      <div className="text-[10px] text-center font-bold text-gray-300 uppercase">
                        Icon
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <input
                        type="text"
                        value={feat.title}
                        onChange={(e) =>
                          updateListItem("features", i, "title", e.target.value)
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-5 py-3 font-black text-gray-800 shadow-sm outline-none focus:border-blue-500"
                      />
                      <textarea
                        rows={2}
                        value={feat.description}
                        onChange={(e) =>
                          updateListItem(
                            "features",
                            i,
                            "description",
                            e.target.value,
                          )
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-5 py-3 text-sm text-gray-600 shadow-sm outline-none focus:border-blue-500 resize-none font-medium"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Code size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Tech Stack
                  </h2>
                </div>
                <button
                  onClick={() => {
                    addItem("techStack", {
                      category: "New Category",
                      items: [],
                    });
                  }}
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {data.techStack?.map((cat: any, cIdx: number) => (
                  <div
                    key={cIdx}
                    className="p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-blue-100 transition-colors relative group"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <input
                        value={cat.category}
                        onChange={(e) => {
                          const newStack = [...data.techStack];
                          newStack[cIdx].category = e.target.value;
                          updateField("techStack", newStack);
                        }}
                        className="text-xl font-black bg-white border-2 border-transparent rounded-xl px-5 py-3 shadow-sm outline-none focus:border-blue-500 flex-grow"
                        placeholder="Category Name"
                      />
                      <button
                        onClick={() => {
                          removeItem("techStack", cIdx);
                        }}
                        className="p-2.5 bg-red-100 text-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm ml-4"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Items in Category */}
                    <div className="space-y-3 pl-4 border-l-2 border-gray-200 ml-4">
                      {cat.items?.map((item: any, iIdx: number) => (
                        <div
                          key={iIdx}
                          className="flex gap-2 items-center bg-white p-3 rounded-xl shadow-sm border border-gray-100"
                        >
                          <input
                            value={item.name}
                            onChange={(e) => {
                              const newStack = [...data.techStack];
                              newStack[cIdx].items[iIdx].name = e.target.value;
                              updateField("techStack", newStack);
                            }}
                            className="p-2 border border-gray-200 rounded-lg text-sm flex-grow outline-none focus:border-blue-500"
                            placeholder="Tool Name"
                          />
                          <input
                            value={item.iconName}
                            onChange={(e) => {
                              const newStack = [...data.techStack];
                              newStack[cIdx].items[iIdx].iconName =
                                e.target.value;
                              updateField("techStack", newStack);
                            }}
                            className="p-2 border border-gray-200 rounded-lg text-sm w-24 text-center font-mono outline-none focus:border-blue-500"
                            placeholder="Icon Name"
                          />
                          <button
                            onClick={() => {
                              const newStack = [...data.techStack];
                              newStack[cIdx].items.splice(iIdx, 1);
                              updateField("techStack", newStack);
                            }}
                            className="text-gray-400 hover:text-red-500 p-1 rounded"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const newStack = [...data.techStack];
                          if (!newStack[cIdx].items) newStack[cIdx].items = [];
                          newStack[cIdx].items.push({
                            name: "Tool",
                            iconName: "Code",
                          });
                          updateField("techStack", newStack);
                        }}
                        className="text-xs text-blue-600 font-semibold hover:underline mt-2 flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <Plus size={12} /> Add Tool
                      </button>
                    </div>
                  </div>
                ))}
                {(!data.techStack || data.techStack.length === 0) && (
                  <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-[2rem]">
                    <Code size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold">
                      No tech stack categories added yet.
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Showcase the technologies used for this service.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* CUSTOM SECTIONS SECTION */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 mb-8 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Layout size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Custom Dynamic Sections
                  </h2>
                </div>
                <button
                  onClick={() => {
                    const newList = data.customSections || [];
                    setData({
                      ...data,
                      customSections: [
                        ...newList,
                        {
                          title: "New Section",
                          subheading: "Subtitle...",
                          items: [],
                        },
                      ],
                    });
                  }}
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>

              <div className="space-y-12">
                {data.customSections?.map((section: any, sIdx: number) => (
                  <div
                    key={sIdx}
                    className="p-8 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200 relative group"
                  >
                    <button
                      onClick={() => {
                        const newList = [...data.customSections];
                        newList.splice(sIdx, 1);
                        setData({ ...data, customSections: newList });
                      }}
                      className="absolute top-4 right-4 p-2.5 bg-red-500 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-lg z-10"
                    >
                      <Trash2 size={18} />
                    </button>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Section Title (Italicized)
                        </label>
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => {
                            const newList = [...data.customSections];
                            newList[sIdx].title = e.target.value;
                            setData({ ...data, customSections: newList });
                          }}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-blue-500 transition-all outline-none font-bold text-gray-800 shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Subheading (Optional)
                        </label>
                        <input
                          type="text"
                          value={section.subheading}
                          onChange={(e) => {
                            const newList = [...data.customSections];
                            newList[sIdx].subheading = e.target.value;
                            setData({ ...data, customSections: newList });
                          }}
                          className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-blue-500 transition-all outline-none font-medium text-gray-500 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center mb-4 px-2">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                          Section Items
                        </h4>
                        <button
                          onClick={() => {
                            const newList = [...data.customSections];
                            newList[sIdx].items = [
                              ...(newList[sIdx].items || []),
                              {
                                title: "Item Title",
                                description: "Details...",
                                iconName: "Rocket",
                              },
                            ];
                            setData({ ...data, customSections: newList });
                          }}
                          className="flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-700"
                        >
                          <Plus size={14} /> Add Item
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {section.items?.map((item: any, iIdx: number) => (
                          <div
                            key={iIdx}
                            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative group/item"
                          >
                            <button
                              onClick={() => {
                                const newList = [...data.customSections];
                                newList[sIdx].items.splice(iIdx, 1);
                                setData({ ...data, customSections: newList });
                              }}
                              className="absolute -top-2 -right-2 p-1.5 bg-red-100 text-red-600 rounded-full opacity-0 group-hover/item:opacity-100 transition-all"
                            >
                              <Trash2 size={12} />
                            </button>
                            <div className="flex gap-4">
                              <input
                                type="text"
                                value={item.iconName}
                                onChange={(e) => {
                                  const newList = [...data.customSections];
                                  newList[sIdx].items[iIdx].iconName =
                                    e.target.value;
                                  setData({ ...data, customSections: newList });
                                }}
                                className="w-12 h-12 bg-gray-50 border-none rounded-xl text-center text-[8px] font-mono outline-none focus:ring-2 focus:ring-blue-100"
                              />
                              <div className="flex-1 space-y-2">
                                <input
                                  type="text"
                                  value={item.title}
                                  onChange={(e) => {
                                    const newList = [...data.customSections];
                                    newList[sIdx].items[iIdx].title =
                                      e.target.value;
                                    setData({
                                      ...data,
                                      customSections: newList,
                                    });
                                  }}
                                  className="w-full text-sm font-black text-gray-800 outline-none"
                                />
                                <textarea
                                  rows={2}
                                  value={item.description}
                                  onChange={(e) => {
                                    const newList = [...data.customSections];
                                    newList[sIdx].items[iIdx].description =
                                      e.target.value;
                                    setData({
                                      ...data,
                                      customSections: newList,
                                    });
                                  }}
                                  className="w-full text-xs text-gray-500 outline-none resize-none"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {(data.customSections || []).length === 0 && (
                  <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-[2.5rem]">
                    <Layout size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold">
                      No custom sections yet.
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Want to add a 'Process' or 'Tech Stack' section? Click the
                      + button.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* PROJECTS / PORTFOLIO */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 mb-32">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Rocket size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Portfolio Highlights
                  </h2>
                </div>
                <button
                  onClick={() =>
                    addItem("projects", {
                      title: "High-Growth App",
                      description: "Built with cutting edge tech...",
                      tags: ["React", "AWS"],
                      image: "",
                    })
                  }
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {data.projects?.map((proj: any, i: number) => (
                  <div
                    key={i}
                    className="p-8 bg-gray-50 rounded-[2rem] border-2 border-transparent hover:border-blue-100 transition-all relative group shadow-sm"
                  >
                    <button
                      onClick={() => removeItem("projects", i)}
                      className="absolute top-4 right-4 p-2 bg-red-100 text-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="space-y-4">
                      {/* Project Selector */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                          Select from Existing Projects
                        </label>
                        <select
                          onChange={(e) => {
                            const project = allProjects.find(
                              (p) => p.id === e.target.value,
                            );
                            if (project) {
                              const newList = [...data.projects];
                              newList[i] = {
                                ...newList[i],
                                title: project.title,
                                description:
                                  project.description.substring(0, 150) + "...",
                                tags: project.tags,
                                image: project.imageUrl,
                                link: project.id,
                              };
                              setData({ ...data, projects: newList });
                            }
                          }}
                          className="w-full px-4 py-2 bg-purple-50 border-2 border-transparent rounded-xl focus:border-purple-500 transition-all outline-none font-bold text-purple-700 text-xs"
                        >
                          <option value="">-- Choose a Project --</option>
                          {allProjects.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-full h-32 bg-white rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2 mb-4 group-hover:border-blue-200 transition-colors cursor-pointer relative overflow-hidden">
                        {proj.image ? (
                          <img
                            src={proj.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <>
                            <ImageIcon size={24} />
                            <span className="text-[10px] font-black uppercase">
                              Project Image
                            </span>
                          </>
                        )}
                        <input
                          type="text"
                          value={proj.image}
                          placeholder="Image URL..."
                          onChange={(e) =>
                            updateListItem(
                              "projects",
                              i,
                              "image",
                              e.target.value,
                            )
                          }
                          className="absolute bottom-0 w-full bg-black/50 text-[10px] text-white text-center p-1 outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) =>
                          updateListItem("projects", i, "title", e.target.value)
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-5 py-3 font-black text-gray-800 outline-none focus:border-blue-500 shadow-sm"
                        placeholder="Project Name"
                      />
                      <textarea
                        value={proj.description}
                        onChange={(e) =>
                          updateListItem(
                            "projects",
                            i,
                            "description",
                            e.target.value,
                          )
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-5 py-3 text-sm text-gray-500 font-medium h-24 outline-none focus:border-blue-500 shadow-sm resize-none"
                        placeholder="Short summary of work"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[8px] font-bold text-gray-400 uppercase ml-2">
                            Link/ID
                          </label>
                          <input
                            type="text"
                            value={proj.link || ""}
                            readOnly
                            className="w-full bg-gray-50 border-2 border-transparent rounded-lg px-4 py-2 text-[10px] font-black text-purple-600 uppercase shadow-sm outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[8px] font-bold text-gray-400 uppercase ml-2">
                            Tags
                          </label>
                          <input
                            type="text"
                            value={proj.tags?.join(", ")}
                            readOnly
                            className="w-full bg-gray-50 border-2 border-transparent rounded-lg px-4 py-2 text-[10px] font-black text-blue-600 uppercase shadow-sm outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PUBLISH BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-8 bg-white/10 backdrop-blur-2xl border-t border-white/20 z-[100] flex justify-center">
        <div className="max-w-6xl w-full flex justify-between items-center scale-110 md:scale-100">
          <div className="hidden md:flex items-center gap-4 text-gray-500">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900 leading-none">
                Global Service Synchronizer
              </p>
              <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-tighter">
                Drafting updates for /{selectedSlug}
              </p>
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-6 px-16 py-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-[2.5rem] font-black shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-95 transition-all outline-none ring-8 ring-blue-500/20 group"
          >
            {saving ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Synchronizing...
              </>
            ) : (
              <>
                <Save className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                Publish Live Update
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
