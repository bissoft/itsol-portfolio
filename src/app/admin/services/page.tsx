"use client";

import { useEffect, useState } from "react";
import { getServicesData, updateServicesData } from "@/lib/cms";
import { ServicesData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  Edit2,
  Save,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ServicesEditor() {
  const [data, setData] = useState<ServicesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getServicesData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load services data", error);
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

  const handleServiceChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newServices = [...prev.services];
      newServices[index] = { ...newServices[index], [field]: value };
      return { ...prev, services: newServices };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addService = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        services: [
          ...prev.services,
          {
            id: `service-${Date.now()}`,
            name: "New Service",
            iconName: "Code",
            description: "Service description here.",
            features: ["Feature 1"],
            tech: [{ name: "Tech 1", iconName: "Cpu" }],
            path: "#",
          },
        ],
      };
    });
    setExpandedIndex(data?.services.length || 0);
  };

  const removeService = (index: number) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, services: prev.services.filter((_, i) => i !== index) };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  // --- Features Management ---
  const handleFeatureChange = (
    serviceIndex: number,
    featureIndex: number,
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newServices = [...prev.services];
      const newFeatures = [...newServices[serviceIndex].features];
      newFeatures[featureIndex] = value;
      newServices[serviceIndex] = {
        ...newServices[serviceIndex],
        features: newFeatures,
      };
      return { ...prev, services: newServices };
    });
  };

  const addFeature = (serviceIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const newServices = [...prev.services];
      newServices[serviceIndex] = {
        ...newServices[serviceIndex],
        features: [...newServices[serviceIndex].features, "New Feature"],
      };
      return { ...prev, services: newServices };
    });
  };

  const removeFeature = (serviceIndex: number, featureIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const newServices = [...prev.services];
      const newFeatures = newServices[serviceIndex].features.filter(
        (_, i) => i !== featureIndex,
      );
      newServices[serviceIndex] = {
        ...newServices[serviceIndex],
        features: newFeatures,
      };
      return { ...prev, services: newServices };
    });
  };

  // --- Tech Stack Management ---
  const handleTechChange = (
    serviceIndex: number,
    techIndex: number,
    field: "name" | "iconName",
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newServices = [...prev.services];
      const newTech = [...newServices[serviceIndex].tech];
      newTech[techIndex] = { ...newTech[techIndex], [field]: value };
      newServices[serviceIndex] = {
        ...newServices[serviceIndex],
        tech: newTech,
      };
      return { ...prev, services: newServices };
    });
  };

  const addTech = (serviceIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const newServices = [...prev.services];
      newServices[serviceIndex] = {
        ...newServices[serviceIndex],
        tech: [
          ...newServices[serviceIndex].tech,
          { name: "New Tech", iconName: "Cpu" },
        ],
      };
      return { ...prev, services: newServices };
    });
  };

  const removeTech = (serviceIndex: number, techIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const newServices = [...prev.services];
      const newTech = newServices[serviceIndex].tech.filter(
        (_, i) => i !== techIndex,
      );
      newServices[serviceIndex] = {
        ...newServices[serviceIndex],
        tech: newTech,
      };
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateServicesData(data);
      toast.success("Services section updated successfully!");
    } catch (error) {
      console.error("Failed to update services data", error);
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
        Edit Services Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Section Branding
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

        {/* Services List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Services ({data.services.length})
            </h3>
            <button
              type="button"
              onClick={addService}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Service
            </button>
          </div>

          <div className="space-y-4">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50/50"
              >
                {/* Service Value Header */}
                <div
                  className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-500 w-6">
                      {index + 1}.
                    </span>
                    <span className="font-semibold text-gray-800">
                      {service.name}
                    </span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                      {service.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeService(index);
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

                {/* Expanded Content */}
                {expandedIndex === index && (
                  <div className="p-6 border-t border-gray-200 space-y-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Service Name
                        </label>
                        <input
                          type="text"
                          value={service.name}
                          onChange={(e) =>
                            handleServiceChange(index, "name", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          ID (Unique)
                        </label>
                        <input
                          type="text"
                          value={service.id}
                          onChange={(e) =>
                            handleServiceChange(index, "id", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Lucide Icon Name
                        </label>
                        <input
                          type="text"
                          value={service.iconName}
                          onChange={(e) =>
                            handleServiceChange(
                              index,
                              "iconName",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="e.g. Activity, Cloud, Code"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Path / URL
                        </label>
                        <input
                          type="text"
                          value={service.path}
                          onChange={(e) =>
                            handleServiceChange(index, "path", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Description
                        </label>
                        <textarea
                          rows={3}
                          value={service.description}
                          onChange={(e) =>
                            handleServiceChange(
                              index,
                              "description",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>

                    {/* Features List */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase">
                          Features
                        </label>
                        <button
                          type="button"
                          onClick={() => addFeature(index)}
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <Plus size={12} /> Add Feature
                        </button>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex gap-2">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) =>
                                handleFeatureChange(
                                  index,
                                  fIndex,
                                  e.target.value,
                                )
                              }
                              className="flex-1 px-3 py-1.5 border rounded text-sm"
                            />
                            <button
                              type="button"
                              onClick={() => removeFeature(index, fIndex)}
                              className="text-red-400 hover:text-red-600"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack List */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase">
                          Tech Stack
                        </label>
                        <button
                          type="button"
                          onClick={() => addTech(index)}
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <Plus size={12} /> Add Tech
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.tech.map((tech, tIndex) => (
                          <div
                            key={tIndex}
                            className="flex gap-2 items-center bg-gray-50 p-2 rounded border"
                          >
                            <input
                              type="text"
                              value={tech.name}
                              onChange={(e) =>
                                handleTechChange(
                                  index,
                                  tIndex,
                                  "name",
                                  e.target.value,
                                )
                              }
                              className="flex-1 px-2 py-1 border rounded text-xs"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              value={tech.iconName}
                              onChange={(e) =>
                                handleTechChange(
                                  index,
                                  tIndex,
                                  "iconName",
                                  e.target.value,
                                )
                              }
                              className="w-24 px-2 py-1 border rounded text-xs"
                              placeholder="Icon"
                            />
                            <button
                              type="button"
                              onClick={() => removeTech(index, tIndex)}
                              className="text-red-400 hover:text-red-600"
                            >
                              <X size={14} />
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
            className={`px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            {saving ? "Saving Changes..." : "Save All Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
