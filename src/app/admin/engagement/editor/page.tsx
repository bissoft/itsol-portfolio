"use client";

import React, { useState, useEffect } from "react";
import { getNavbarData } from "@/lib/cms";
import {
  Plus,
  Trash2,
  Save,
  Layout,
  List,
  BarChart3,
  Rocket,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
  Info,
  ChevronRight,
  ChevronDown,
  Code,
  X,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getSmartPath } from "@/utils";

export default function EngagementPageAdmin() {
  const [availableEngagements, setAvailableEngagements] = useState<any[]>([]);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Load available engagement models from Navbar
  useEffect(() => {
    async function loadEngagementsFromNavbar() {
      try {
        const navData = await getNavbarData();
        const engagementMenu = navData.menus.find(
          (m: any) =>
            m.name === "Engagement Models" ||
            m.name.toLowerCase().includes("engagement"),
        );

        if (engagementMenu && engagementMenu.subMenu) {
          const dynamicList: any[] = [];

          engagementMenu.subMenu.forEach((category: any) => {
            const currentGroupItems: any[] = [];
            const groupName = category.name || "Other Models";

            // 1. Add the Category itself first (if it has a path)
            if (category.path && category.path !== "#") {
              const fullPath = getSmartPath(
                category.name,
                category.path,
                "Engagement Models",
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

                // Only include if it's an engagement path
                if (slug && fullPath.includes("/engagement/")) {
                  if (!currentGroupItems.some((i) => i.slug === slug)) {
                    currentGroupItems.push({
                      name: link.title,
                      slug: slug,
                      group: groupName,
                    });
                  }
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
            setAvailableEngagements(uniqueList);
            // If current selected slug is not in the new list, switch to the first one
            if (!uniqueList.some((s) => s.slug === selectedSlug)) {
              setSelectedSlug(uniqueList[0].slug);
            }
          }
        }
      } catch (error) {
        console.error("Failed to load engagement models from navbar", error);
        toast.error("Failed to sync with navbar");
      }
    }
    loadEngagementsFromNavbar();
  }, []);

  useEffect(() => {
    if (selectedSlug) {
      loadData();
    }
  }, [selectedSlug]);

  async function loadData() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/engagement/${selectedSlug}`);
      const json = await res.json();
      if (json.data) {
        setData(json.data);
      } else {
        // Default template
        setData({
          slug: selectedSlug,
          heroTitle: (
            availableEngagements.find((s) => s.slug === selectedSlug)?.name ||
            "New Model"
          ).replace(/\s*\(Main Page\)$/, ""),
          heroDescription:
            "Flexible engagement models tailored to your project requirements.",
          heroBadge: "Engagement Excellence",
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
      const res = await fetch(`/api/admin/engagement/${selectedSlug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Save failed");
      toast.success("Engagement page updated successfully!");
    } catch (error) {
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  }

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
              Admin / Engagement Models
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Engagement Editor
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative group">
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="appearance-none px-8 py-4 bg-white border-2 border-transparent rounded-[2rem] font-black text-gray-800 shadow-xl shadow-blue-900/5 focus:border-blue-500 transition-all outline-none cursor-pointer pr-12 min-w-[280px]"
              >
                {Array.from(
                  new Set(availableEngagements.map((s) => s.group)),
                ).map((group) => (
                  <optgroup key={group} label={`── ${group} ──`}>
                    {availableEngagements
                      .filter((s) => s.group === group)
                      .map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                  </optgroup>
                ))}
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
          {/* LEFT SIDEBAR */}
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
                      Title
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
                    Description
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
                        placeholder="Value"
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
                        placeholder="Icon Name"
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
                          Icon Name
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
                          Icon Name
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
                          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-md"
                        >
                          <Plus size={14} /> Add Item
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {section.items?.map((item: any, iIdx: number) => (
                          <div
                            key={iIdx}
                            className="p-6 bg-white rounded-[2rem] relative group/item border border-gray-100 shadow-sm"
                          >
                            <button
                              onClick={() => {
                                const newList = [...data.customSections];
                                newList[sIdx].items.splice(iIdx, 1);
                                setData({ ...data, customSections: newList });
                              }}
                              className="absolute top-4 right-4 p-2 bg-red-50 text-red-500 rounded-lg opacity-0 group-hover/item:opacity-100 transition-all"
                            >
                              <Trash2 size={12} />
                            </button>
                            <div className="space-y-4">
                              <div className="flex items-center gap-4">
                                <input
                                  type="text"
                                  value={item.iconName}
                                  placeholder="Icon"
                                  onChange={(e) => {
                                    const newList = [...data.customSections];
                                    newList[sIdx].items[iIdx].iconName =
                                      e.target.value;
                                    setData({
                                      ...data,
                                      customSections: newList,
                                    });
                                  }}
                                  className="w-12 h-12 bg-gray-50 border-2 border-transparent rounded-xl text-center text-[10px] font-mono outline-none focus:border-blue-500"
                                />
                                <input
                                  type="text"
                                  value={item.title}
                                  placeholder="Item Title"
                                  onChange={(e) => {
                                    const newList = [...data.customSections];
                                    newList[sIdx].items[iIdx].title =
                                      e.target.value;
                                    setData({
                                      ...data,
                                      customSections: newList,
                                    });
                                  }}
                                  className="flex-1 bg-gray-50 border-2 border-transparent rounded-xl px-4 py-2 font-bold text-gray-800 outline-none focus:border-blue-500"
                                />
                              </div>
                              <textarea
                                value={item.description}
                                placeholder="Description..."
                                rows={2}
                                onChange={(e) => {
                                  const newList = [...data.customSections];
                                  newList[sIdx].items[iIdx].description =
                                    e.target.value;
                                  setData({
                                    ...data,
                                    customSections: newList,
                                  });
                                }}
                                className="w-full bg-gray-50 border-2 border-transparent rounded-xl px-4 py-2 text-sm text-gray-600 outline-none focus:border-blue-500 resize-none"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECTS SECTION */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 mb-32">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Rocket size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Case Studies
                  </h2>
                </div>
                <button
                  onClick={() =>
                    addItem("projects", {
                      title: "Project Name",
                      description: "Project details...",
                      tags: ["Tag1", "Tag2"],
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
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) =>
                          updateListItem("projects", i, "title", e.target.value)
                        }
                        className="w-full bg-white border-2 border-transparent rounded-xl px-5 py-3 font-black text-gray-800 outline-none focus:border-blue-500 shadow-sm"
                        placeholder="Title"
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
                        placeholder="Description"
                      />
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
                Engagement Sync Engine
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
