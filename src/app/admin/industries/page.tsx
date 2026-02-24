"use client";

import { useEffect, useState } from "react";
import { getIndustriesData, updateIndustriesData } from "@/lib/cms";
import { IndustriesData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2, ChevronDown, ChevronUp, X } from "lucide-react";

export default function IndustriesEditor() {
  const [data, setData] = useState<IndustriesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getIndustriesData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load industries data", error);
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleIndustryChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newIndustries = [...prev.industries];
      newIndustries[index] = { ...newIndustries[index], [field]: value };
      return { ...prev, industries: newIndustries };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addIndustry = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        industries: [
          ...prev.industries,
          {
            title: "New Industry",
            iconName: "BrainCircuit",
            items: ["Service 1"],
            color: "bg-blue-50 text-blue-600",
            link: "#",
          },
        ],
      };
    });
    setExpandedIndex(data?.industries.length || 0);
  };

  const removeIndustry = (index: number) => {
    if (!confirm("Are you sure you want to delete this industry card?")) return;
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        industries: prev.industries.filter((_, i) => i !== index),
      };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const handleItemChange = (
    industryIndex: number,
    itemIndex: number,
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newIndustries = [...prev.industries];
      const newItems = [...newIndustries[industryIndex].items];
      newItems[itemIndex] = value;
      newIndustries[industryIndex] = {
        ...newIndustries[industryIndex],
        items: newItems,
      };
      return { ...prev, industries: newIndustries };
    });
  };

  const addItem = (industryIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const newIndustries = [...prev.industries];
      newIndustries[industryIndex] = {
        ...newIndustries[industryIndex],
        items: [...newIndustries[industryIndex].items, "New Item"],
      };
      return { ...prev, industries: newIndustries };
    });
  };

  const removeItem = (industryIndex: number, itemIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const newIndustries = [...prev.industries];
      const newItems = newIndustries[industryIndex].items.filter(
        (_, i) => i !== itemIndex,
      );
      newIndustries[industryIndex] = {
        ...newIndustries[industryIndex],
        items: newItems,
      };
      return { ...prev, industries: newIndustries };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateIndustriesData(data);
      toast.success("Industries section updated successfully!");
    } catch (error) {
      console.error("Failed to update industries data", error);
      toast.error("Failed to update data");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!data)
    return (
      <div className="p-8 text-center text-red-500">Error loading data.</div>
    );

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md mb-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Edit Industries Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Section Header
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Heading
              </label>
              <input
                type="text"
                name="heading"
                value={data.heading}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Subheading
              </label>
              <textarea
                name="subheading"
                rows={2}
                value={data.subheading}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Industries List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Industry Cards ({data.industries.length})
            </h3>
            <button
              type="button"
              onClick={addIndustry}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Industry
            </button>
          </div>

          <div className="space-y-4">
            {data.industries.map((industry, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50/50"
              >
                {/* Header */}
                <div
                  className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-500 w-6">
                      {index + 1}.
                    </span>
                    <span className="font-semibold text-gray-800">
                      {industry.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeIndustry(index);
                      }}
                      className="text-red-400 hover:text-red-600 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                    {expandedIndex === index ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                {expandedIndex === index && (
                  <div className="p-6 border-t border-gray-200 space-y-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={industry.title}
                          onChange={(e) =>
                            handleIndustryChange(index, "title", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Icon Name (Lucide)
                        </label>
                        <input
                          type="text"
                          value={industry.iconName}
                          onChange={(e) =>
                            handleIndustryChange(
                              index,
                              "iconName",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Link Path
                        </label>
                        <input
                          type="text"
                          value={industry.link}
                          onChange={(e) =>
                            handleIndustryChange(index, "link", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Color Classes
                        </label>
                        <input
                          type="text"
                          value={industry.color}
                          onChange={(e) =>
                            handleIndustryChange(index, "color", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>

                    {/* Bullet Items */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase">
                          Bullet Points
                        </label>
                        <button
                          type="button"
                          onClick={() => addItem(index)}
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <Plus size={12} /> Add Item
                        </button>
                      </div>
                      <div className="space-y-2">
                        {industry.items.map((item, iIndex) => (
                          <div key={iIndex} className="flex gap-2 items-center">
                            <input
                              type="text"
                              value={item}
                              onChange={(e) =>
                                handleItemChange(index, iIndex, e.target.value)
                              }
                              className="flex-1 px-3 py-1 border rounded text-sm"
                            />
                            <button
                              type="button"
                              onClick={() => removeItem(index, iIndex)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-6 sticky bottom-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-100 z-50">
          <button
            type="submit"
            disabled={saving}
            className={`px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            {saving ? "Saving Changes..." : "Save All Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
