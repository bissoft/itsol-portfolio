"use client";

import { useEffect, useState } from "react";
import { getAwardsData, updateAwardsData } from "@/lib/cms";
import { AwardsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2, Award, ShieldCheck, Star, Zap } from "lucide-react";

export default function AwardsEditor() {
  const [data, setData] = useState<AwardsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getAwardsData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load awards data", error);
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

  const handleAwardChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newAwards = [...prev.awards];
      newAwards[index] = { ...newAwards[index], [field]: value };
      return { ...prev, awards: newAwards };
    });
  };

  const addAward = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        awards: [
          ...prev.awards,
          {
            title: "New Award",
            organization: "Organization Name",
            iconName: "Zap",
            color: "text-blue-600",
          },
        ],
      };
    });
  };

  const removeAward = (index: number) => {
    if (!confirm("Are you sure you want to delete this award?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, awards: prev.awards.filter((_, i) => i !== index) };
    });
  };

  const handleCertChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newCerts = [...prev.certifications];
      newCerts[index] = { ...newCerts[index], [field]: value };
      return { ...prev, certifications: newCerts };
    });
  };

  const addCert = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        certifications: [
          ...prev.certifications,
          {
            name: "New Certification",
            desc: "Description of the certification",
          },
        ],
      };
    });
  };

  const removeCert = (index: number) => {
    if (!confirm("Are you sure you want to delete this certification?")) return;
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        certifications: prev.certifications.filter((_, i) => i !== index),
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateAwardsData(data);
      toast.success("Awards section updated successfully!");
    } catch (error) {
      console.error("Failed to update awards data", error);
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
        Edit Awards & Recognitions
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Section Header
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
        </div>

        {/* Awards List */}
        <div className="space-y-4 border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Awards ({data.awards.length})
            </h3>
            <button
              type="button"
              onClick={addAward}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Award
            </button>
          </div>

          <div className="space-y-4">
            {data.awards.map((award, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Award Title
                    </label>
                    <input
                      type="text"
                      value={award.title}
                      onChange={(e) =>
                        handleAwardChange(index, "title", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-md text-sm"
                      placeholder="Award Title"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={award.organization}
                      onChange={(e) =>
                        handleAwardChange(index, "organization", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-md text-sm"
                      placeholder="Organization"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-1">
                      <Zap size={10} /> Choose Icon
                    </label>
                    <select
                      value={award.iconName}
                      onChange={(e) =>
                        handleAwardChange(index, "iconName", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-md text-sm bg-white"
                    >
                      <option value="Zap">Lightning (Zap)</option>
                      <option value="Star">Star</option>
                      <option value="Award">Award Ribbon</option>
                      <option value="ShieldCheck">Verified Shield</option>
                      <option value="Trophy">Trophy</option>
                      <option value="Medal">Medal</option>
                      <option value="Target">Target</option>
                      <option value="Flag">Flag</option>
                    </select>
                    <p className="text-[10px] text-gray-400">
                      Select a visual icon for this award
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${award.color?.replace("text", "bg") || "bg-blue-600"}`}
                      />{" "}
                      Theme Color
                    </label>
                    <select
                      value={award.color || "text-blue-600"}
                      onChange={(e) =>
                        handleAwardChange(index, "color", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-md text-sm bg-white"
                    >
                      <option value="text-blue-600">
                        ITSOL Blue (Default)
                      </option>
                      <option value="text-indigo-600">Indigo</option>
                      <option value="text-cyan-600">Cyan</option>
                      <option value="text-sky-600">Sky Blue</option>
                      <option value="text-blue-500">Soft Blue</option>
                    </select>
                    <p className="text-[10px] text-gray-400">
                      Choose the color for the icon
                    </p>
                  </div>
                  <div className="flex items-end justify-end">
                    <button
                      type="button"
                      onClick={() => removeAward(index)}
                      className="text-red-400 hover:text-red-600 p-2 flex items-center gap-1 text-sm transition-colors border border-red-100 rounded hover:bg-red-50"
                    >
                      <Trash2 size={16} /> Delete Award
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Certifications ({data.certifications.length})
            </h3>
            <button
              type="button"
              onClick={addCert}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Cert
            </button>
          </div>

          <div className="space-y-4">
            {data.certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-start md:items-center"
              >
                <div className="flex-1 w-full space-y-2">
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      handleCertChange(index, "name", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md text-sm font-bold"
                    placeholder="Certification Name"
                  />
                  <input
                    type="text"
                    value={cert.desc}
                    onChange={(e) =>
                      handleCertChange(index, "desc", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="Description"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeCert(index)}
                  className="text-red-400 hover:text-red-600 p-2"
                >
                  <Trash2 size={18} />
                </button>
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
