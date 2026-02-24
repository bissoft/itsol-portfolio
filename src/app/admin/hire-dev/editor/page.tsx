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
  Code2,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getSmartPath, slugify } from "@/utils";

export default function HireDevEditor() {
  const [availableItems, setAvailableItems] = useState<any[]>([]);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Load available Hire Dev items from Navbar
  useEffect(() => {
    async function loadItemsFromNavbar() {
      try {
        const navData = await getNavbarData();
        const hireDevMenu = navData.menus.find(
          (m: any) =>
            m.name === "Hire Dev" || m.name.toLowerCase().includes("hire"),
        );

        if (hireDevMenu && hireDevMenu.subMenu) {
          const dynamicList: any[] = [];

          hireDevMenu.subMenu.forEach((category: any) => {
            const currentGroupItems: any[] = [];
            const groupName = category.name || "Other Profiles";

            // 1. Ensure the category itself is included FIRST as an editable "Main" page
            if (category.name) {
              let categorySlug = "";

              // If path is generic like "/services", use slugified name instead
              if (
                !category.path ||
                category.path === "/services" ||
                category.path === "/hire-dev" ||
                category.path === "/"
              ) {
                categorySlug = slugify(category.name);
              } else {
                categorySlug =
                  category.path.split("/").pop()?.toLowerCase() || "";
              }

              // Ensure it's not empty, fallback to slugified name
              if (!categorySlug) categorySlug = slugify(category.name);

              currentGroupItems.push({
                name: `${category.name} (Main Category)`,
                slug: categorySlug,
                group: groupName,
              });
            }

            // 2. Support nested links
            if (category.links && category.links.length > 0) {
              category.links.forEach((link: any) => {
                const fullPath = getSmartPath(link.title, link.path, groupName);
                const slug = fullPath.split("/").pop()?.toLowerCase();

                if (slug && fullPath.includes("/hire-dev/")) {
                  currentGroupItems.push({
                    name: `↳ ${link.title}`,
                    slug: slug,
                    group: groupName,
                  });
                }
              });
            }

            dynamicList.push(...currentGroupItems);
          });

          const uniqueList = dynamicList.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.slug === item.slug),
          );

          if (uniqueList.length > 0) {
            setAvailableItems(uniqueList);
            if (!uniqueList.some((s) => s.slug === selectedSlug)) {
              setSelectedSlug(uniqueList[0].slug);
            }
          } else {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load hire dev items from navbar", error);
        setLoading(false);
      }
    }
    loadItemsFromNavbar();
  }, []);

  useEffect(() => {
    if (selectedSlug) {
      loadData();
    }
  }, [selectedSlug]);

  async function loadData() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/hire-dev/${selectedSlug}`, {
        cache: "no-store",
      });
      const json = await res.json();
      if (json.data) {
        setData(json.data);
      } else {
        // Template
        setData({
          slug: selectedSlug,
          heroTitle: (
            availableItems.find((s) => s.slug === selectedSlug)?.name ||
            "Hire Developer"
          ).replace(/\s*\(Main Category\)$/, ""),
          heroDescription: "Scale your team with elite developer talent.",
          heroBadge: "Expert Hiring",
          stats: [
            { value: "48h", label: "Matching", iconName: "Timer" },
            { value: "100%", label: "Satisfaction", iconName: "Smile" },
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
      const res = await fetch(`/api/admin/hire-dev/${selectedSlug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Save failed");
      toast.success("Hire Dev page updated!");
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
          Syncing Talent Data
        </p>
      </div>
    );
  }

  if (!data || availableItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center max-w-md border border-gray-100">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <AlertCircle size={40} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            No Talent Pages Found
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed mb-10">
            We couldn't find any links containing <strong>/hire-dev/</strong> in
            your navbar. Please update your navbar links first.
          </p>
          <button
            onClick={() => router.push("/admin/navbar")}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all"
          >
            Go to Navbar Editor
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest mb-2">
              <Code2 size={14} />
              Admin / Hire Dev Editor
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Talent Page Editor
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative group">
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="appearance-none px-8 py-4 bg-white border-2 border-transparent rounded-[2rem] font-black text-gray-800 shadow-xl focus:border-blue-500 transition-all outline-none cursor-pointer pr-12 min-w-[280px]"
              >
                {Array.from(new Set(availableItems.map((s) => s.group))).map(
                  (group) => (
                    <optgroup key={group} label={`── ${group} ──`}>
                      {availableItems
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
              className={`flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black shadow-2xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all outline-none ${saving ? "opacity-50" : ""}`}
            >
              {saving ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              Save Talent Page
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* HERO */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <Rocket className="text-blue-600" size={24} />
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
                      Badge
                    </label>
                    <input
                      type="text"
                      value={data.heroBadge}
                      onChange={(e) => updateField("heroBadge", e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:bg-white focus:border-blue-500 transition-all outline-none font-bold text-gray-800"
                    />
                  </div>
                </div>
                <textarea
                  rows={4}
                  value={data.heroDescription}
                  onChange={(e) =>
                    updateField("heroDescription", e.target.value)
                  }
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:bg-white focus:border-blue-500 transition-all outline-none font-medium text-gray-600 leading-relaxed"
                  placeholder="Hero Description..."
                />
              </div>
            </div>

            {/* PROCESS */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <List className="text-purple-600" size={24} />
                  <h2 className="text-2xl font-black text-gray-900">
                    Onboarding Process
                  </h2>
                </div>
                <button
                  onClick={() =>
                    addItem("process", {
                      title: "New Step",
                      description: "Details...",
                      iconName: "Check",
                    })
                  }
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="space-y-6">
                {data.process?.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="p-6 bg-gray-50 rounded-[2rem] relative group border-2 border-transparent hover:border-purple-100 transition-all"
                  >
                    <button
                      onClick={() => removeItem("process", i)}
                      className="absolute top-4 right-4 p-2.5 bg-red-100 text-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) =>
                          updateListItem("process", i, "title", e.target.value)
                        }
                        className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-xl focus:border-purple-500 transition-all outline-none font-bold text-gray-800 shadow-sm"
                        placeholder="Step Title"
                      />
                      <input
                        type="text"
                        value={item.iconName}
                        onChange={(e) =>
                          updateListItem(
                            "process",
                            i,
                            "iconName",
                            e.target.value,
                          )
                        }
                        className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-xl focus:border-purple-500 transition-all outline-none font-mono text-sm shadow-sm"
                        placeholder="Icon Name"
                      />
                      <textarea
                        value={item.description}
                        onChange={(e) =>
                          updateListItem(
                            "process",
                            i,
                            "description",
                            e.target.value,
                          )
                        }
                        className="md:col-span-2 w-full px-6 py-4 bg-white border-2 border-transparent rounded-xl focus:border-purple-500 transition-all outline-none font-medium text-gray-600 shadow-sm"
                        placeholder="Step Description..."
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK / SKILLS */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <Code className="text-green-600" size={24} />
                  <h2 className="text-2xl font-black text-gray-900">
                    Tech Stack / Skills
                  </h2>
                </div>
                <button
                  onClick={() =>
                    addItem("techStack", {
                      category: "New Category",
                      skills: [],
                    })
                  }
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="space-y-6">
                {data.techStack?.map((stack: any, i: number) => (
                  <div
                    key={i}
                    className="p-8 bg-gray-900 rounded-[2.5rem] relative group border-2 border-transparent transition-all"
                  >
                    <button
                      onClick={() => removeItem("techStack", i)}
                      className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                    <input
                      type="text"
                      value={stack.category}
                      onChange={(e) =>
                        updateListItem(
                          "techStack",
                          i,
                          "category",
                          e.target.value,
                        )
                      }
                      className="w-full bg-transparent border-b border-white/20 px-0 py-2 mb-6 text-xl font-black text-blue-400 focus:text-white outline-none"
                      placeholder="Category Name"
                    />
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {stack.skills?.map((skill: string, j: number) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10"
                          >
                            <span className="text-sm font-bold text-gray-300">
                              {skill}
                            </span>
                            <button
                              onClick={() => {
                                const skills = [...stack.skills];
                                skills.splice(j, 1);
                                updateListItem(
                                  "techStack",
                                  i,
                                  "skills",
                                  skills,
                                );
                              }}
                              className="text-white/40 hover:text-red-400"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add Skill..."
                          onKeyDown={(e: any) => {
                            if (e.key === "Enter") {
                              const val = e.target.value.trim();
                              if (val) {
                                updateListItem("techStack", i, "skills", [
                                  ...(stack.skills || []),
                                  val,
                                ]);
                                e.target.value = "";
                              }
                            }
                          }}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:bg-white/10 outline-none flex-1"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CUSTOM SECTIONS */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <Layout className="text-orange-600" size={24} />
                  <h2 className="text-2xl font-black text-gray-900">
                    Custom Sections
                  </h2>
                </div>
                <button
                  onClick={() =>
                    addItem("customSections", {
                      title: "New Section",
                      subheading: "Subheading...",
                      items: [],
                    })
                  }
                  className="p-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition-all shadow-lg"
                >
                  <Plus size={24} />
                </button>
              </div>

              <div className="space-y-12">
                {data.customSections?.map((section: any, sIdx: number) => (
                  <div
                    key={sIdx}
                    className="p-8 bg-gray-50 rounded-[3rem] relative group border-2 border-transparent hover:border-orange-100 transition-all"
                  >
                    <button
                      onClick={() => removeItem("customSections", sIdx)}
                      className="absolute top-6 right-6 p-2.5 bg-red-100 text-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <Trash2 size={18} />
                    </button>

                    <div className="space-y-6 mb-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={section.title}
                            onChange={(e) =>
                              updateListItem(
                                "customSections",
                                sIdx,
                                "title",
                                e.target.value,
                              )
                            }
                            className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-black text-gray-900 shadow-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">
                            Subheading
                          </label>
                          <input
                            type="text"
                            value={section.subheading}
                            onChange={(e) =>
                              updateListItem(
                                "customSections",
                                sIdx,
                                "subheading",
                                e.target.value,
                              )
                            }
                            className="w-full px-6 py-4 bg-white border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-bold text-gray-500 shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Nested Items */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center px-4">
                        <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">
                          Section Items
                        </h4>
                        <button
                          onClick={() => {
                            const list = [...data.customSections];
                            list[sIdx].items = [
                              ...(list[sIdx].items || []),
                              {
                                title: "New Item",
                                description: "Description...",
                                iconName: "CheckCircle",
                              },
                            ];
                            updateField("customSections", list);
                          }}
                          className="flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Plus size={14} /> Add Item
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {section.items?.map((item: any, iIdx: number) => (
                          <div
                            key={iIdx}
                            className="p-6 bg-white rounded-[2rem] shadow-sm relative group/item border border-gray-100"
                          >
                            <button
                              onClick={() => {
                                const list = [...data.customSections];
                                list[sIdx].items.splice(iIdx, 1);
                                updateField("customSections", list);
                              }}
                              className="absolute top-3 right-3 p-1.5 bg-red-50 text-red-500 rounded-lg opacity-0 group-hover/item:opacity-100 transition-all"
                            >
                              <Trash2 size={12} />
                            </button>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-3">
                                <input
                                  type="text"
                                  value={item.title}
                                  onChange={(e) => {
                                    const list = [...data.customSections];
                                    list[sIdx].items[iIdx].title =
                                      e.target.value;
                                    updateField("customSections", list);
                                  }}
                                  className="px-3 py-2 bg-gray-50 rounded-xl text-sm font-bold text-gray-800 outline-none focus:bg-white focus:ring-1 ring-blue-500"
                                  placeholder="Title"
                                />
                                <input
                                  type="text"
                                  value={item.iconName}
                                  onChange={(e) => {
                                    const list = [...data.customSections];
                                    list[sIdx].items[iIdx].iconName =
                                      e.target.value;
                                    updateField("customSections", list);
                                  }}
                                  className="px-3 py-2 bg-gray-50 rounded-xl text-xs font-mono text-gray-400 outline-none focus:bg-white focus:ring-1 ring-blue-500"
                                  placeholder="Icon"
                                />
                              </div>
                              <textarea
                                value={item.description}
                                onChange={(e) => {
                                  const list = [...data.customSections];
                                  list[sIdx].items[iIdx].description =
                                    e.target.value;
                                  updateField("customSections", list);
                                }}
                                className="w-full px-3 py-2 bg-gray-50 rounded-xl text-xs text-gray-500 outline-none focus:bg-white focus:ring-1 ring-blue-500 min-h-[60px]"
                                placeholder="Description..."
                                rows={2}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {data.customSections?.length === 0 && (
                  <div className="py-20 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <Layout
                      size={48}
                      className="mx-auto text-gray-300 mb-4 opacity-50"
                    />
                    <p className="text-gray-400 font-bold">
                      Add custom sections to make your page unique
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl sticky top-8">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">
                Page Settings
              </h3>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-2">
                    <Info size={16} /> Tip
                  </div>
                  <p className="text-xs text-blue-700/70 font-medium">
                    Use Lucide icon names for stats and process steps. Enter
                    skills one by one.
                  </p>
                </div>

                {/* STATS */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-gray-900">Stats</h4>
                    <button
                      onClick={() =>
                        addItem("stats", {
                          value: "0",
                          label: "New Stat",
                          iconName: "User",
                        })
                      }
                      className="p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {data.stats?.map((stat: any, i: number) => (
                      <div
                        key={i}
                        className="p-4 bg-gray-50 rounded-xl relative group border border-transparent hover:border-blue-100"
                      >
                        <button
                          onClick={() => removeItem("stats", i)}
                          className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 shadow-lg"
                        >
                          <Trash2 size={10} />
                        </button>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) =>
                              updateListItem(
                                "stats",
                                i,
                                "value",
                                e.target.value,
                              )
                            }
                            className="bg-white border-none rounded-lg px-2 py-1 text-xs font-black text-blue-600"
                          />
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) =>
                              updateListItem(
                                "stats",
                                i,
                                "label",
                                e.target.value,
                              )
                            }
                            className="bg-white border-none rounded-lg px-2 py-1 text-[10px] font-bold text-gray-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
