"use client";

import { useEffect, useState } from "react";
import { getAboutData, updateAboutData } from "@/lib/cms";
import { AboutData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2, MoveUp, MoveDown } from "lucide-react";

export default function AboutEditor() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getAboutData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load about data", error);
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

  const handleArrayChange = (
    index: number,
    field: "timeline" | "values" | "stats" | "culture",
    subfield: string,
    value: string,
  ) => {
    if (!data) return;
    const newArray = [...data[field]];
    (newArray[index] as any)[subfield] = value;
    setData({ ...data, [field]: newArray });
  };

  const addArrayItem = (field: "timeline" | "values" | "stats" | "culture") => {
    if (!data) return;
    let newItem: any;
    if (field === "timeline")
      newItem = { year: "", event: "", description: "" };
    else if (field === "values")
      newItem = { title: "", description: "", iconName: "Code" };
    else if (field === "stats")
      newItem = { label: "", value: "", iconName: "Users" };
    else newItem = { title: "", description: "", emoji: "✨" };

    setData({ ...data, [field]: [...data[field], newItem as any] });
  };

  const removeArrayItem = (
    index: number,
    field: "timeline" | "values" | "stats" | "culture",
  ) => {
    if (!data) return;
    const newArray = [...data[field]];
    newArray.splice(index, 1);
    setData({ ...data, [field]: newArray });
  };

  const moveArrayItem = (
    index: number,
    direction: "up" | "down",
    field: "timeline" | "values" | "stats" | "culture",
  ) => {
    if (!data) return;
    const newArray = [...data[field]];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newArray.length) return;
    [newArray[index], newArray[newIndex]] = [
      newArray[newIndex],
      newArray[index],
    ];
    setData({ ...data, [field]: newArray });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateAboutData(data);
      toast.success("About Us page updated successfully!");
    } catch (error) {
      console.error("Failed to update about data", error);
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
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md pb-24">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Edit About Us Page
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700">Hero Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hero Heading
              </label>
              <input
                type="text"
                name="heroHeading"
                value={data.heroHeading}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hero Subheading
              </label>
              <input
                type="text"
                name="heroSubheading"
                value={data.heroSubheading}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hero Description
            </label>
            <textarea
              name="heroDescription"
              rows={3}
              value={data.heroDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Company Stats
            </h3>
            <button
              type="button"
              onClick={() => addArrayItem("stats")}
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 text-sm font-medium"
            >
              <Plus size={16} /> Add Stat
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.stats.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-md relative group"
              >
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, "stats")}
                    className="p-1 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Value
                    </label>
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "stats",
                          "value",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm font-bold text-blue-600"
                      placeholder="e.g. 50+"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Label
                    </label>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "stats",
                          "label",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Icon
                    </label>
                    <input
                      type="text"
                      value={item.iconName}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "stats",
                          "iconName",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Our Culture</h3>
            <button
              type="button"
              onClick={() => addArrayItem("culture")}
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 text-sm font-medium"
            >
              <Plus size={16} /> Add Culture Item
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.culture.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-md relative group bg-blue-50/20"
              >
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, "culture")}
                    className="p-1 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Emoji
                    </label>
                    <input
                      type="text"
                      value={item.emoji}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "culture",
                          "emoji",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xl text-center"
                      placeholder="e.g. 📚"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "culture",
                          "title",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm font-semibold"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) =>
                      handleArrayChange(
                        index,
                        "culture",
                        "description",
                        e.target.value,
                      )
                    }
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700">
            Mission & Vision
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mission Heading
            </label>
            <input
              type="text"
              name="missionHeading"
              value={data.missionHeading}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mission Description
            </label>
            <textarea
              name="missionDescription"
              rows={3}
              value={data.missionDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vision Description
            </label>
            <textarea
              name="visionDescription"
              rows={3}
              value={data.visionDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Approach Description
            </label>
            <textarea
              name="approachDescription"
              rows={3}
              value={data.approachDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Our History (Timeline)
            </h3>
            <button
              type="button"
              onClick={() => addArrayItem("timeline")}
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 text-sm font-medium"
            >
              <Plus size={16} /> Add Event
            </button>
          </div>
          <div className="space-y-4">
            {data.timeline.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-md relative group"
              >
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => moveArrayItem(index, "up", "timeline")}
                    className="p-1 text-gray-400 hover:text-blue-500"
                  >
                    <MoveUp size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveArrayItem(index, "down", "timeline")}
                    className="p-1 text-gray-400 hover:text-blue-500"
                  >
                    <MoveDown size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, "timeline")}
                    className="p-1 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Year
                    </label>
                    <input
                      type="text"
                      value={item.year}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "timeline",
                          "year",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="e.g. 2024"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Event Title
                    </label>
                    <input
                      type="text"
                      value={item.event}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "timeline",
                          "event",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="Event Name"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) =>
                      handleArrayChange(
                        index,
                        "timeline",
                        "description",
                        e.target.value,
                      )
                    }
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Our Values</h3>
            <button
              type="button"
              onClick={() => addArrayItem("values")}
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 text-sm font-medium"
            >
              <Plus size={16} /> Add Value
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.values.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-md relative group"
              >
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, "values")}
                    className="p-1 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Icon
                    </label>
                    <input
                      type="text"
                      value={item.iconName}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "values",
                          "iconName",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="Icon Name"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "values",
                          "title",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) =>
                      handleArrayChange(
                        index,
                        "values",
                        "description",
                        e.target.value,
                      )
                    }
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-10">
          <button
            type="submit"
            disabled={saving}
            className={`px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all transform active:scale-95 ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            {saving ? "Saving Changes..." : "Save All Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
