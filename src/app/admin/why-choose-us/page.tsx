"use client";

import { useEffect, useState } from "react";
import { getWhyChooseUsData, updateWhyChooseUsData } from "@/lib/cms";
import { WhyChooseUsData, defaultWhyChooseUsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function WhyChooseUsEditor() {
  const [data, setData] = useState<WhyChooseUsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getWhyChooseUsData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load data", error);
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

  const handleFeatureChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newFeatures = [...prev.features];
      newFeatures[index] = { ...newFeatures[index], [field]: value };
      return { ...prev, features: newFeatures };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addFeature = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        features: [
          ...prev.features,
          {
            title: "New Feature",
            description: "Feature description.",
            iconName: "Zap",
          },
        ],
      };
    });
    setExpandedIndex(data?.features.length || 0);
  };

  const removeFeature = (index: number) => {
    if (!confirm("Are you sure you want to delete this feature?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, features: prev.features.filter((_, i) => i !== index) };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateWhyChooseUsData(data);
      toast.success("Section updated successfully!");
    } catch (error) {
      console.error("Failed to update data", error);
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
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Edit 'Why Choose Us' Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Section Branding
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Heading (Use \n for line break)
            </label>
            <textarea
              name="heading"
              rows={2}
              value={data.heading}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
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

        {/* Features List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Features ({data.features.length})
            </h3>
            <button
              type="button"
              onClick={addFeature}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Feature
            </button>
          </div>

          <div className="space-y-4">
            {data.features.map((feature, index) => (
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
                      {feature.title}
                    </span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                      {feature.iconName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFeature(index);
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
                          Title
                        </label>
                        <input
                          type="text"
                          value={feature.title}
                          onChange={(e) =>
                            handleFeatureChange(index, "title", e.target.value)
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
                          value={feature.iconName}
                          onChange={(e) =>
                            handleFeatureChange(
                              index,
                              "iconName",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="e.g. Zap, Users, Globe"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={feature.description}
                          onChange={(e) =>
                            handleFeatureChange(
                              index,
                              "description",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
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
