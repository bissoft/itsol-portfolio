"use client";

import { useEffect, useState } from "react";
import { getPartnersData, updatePartnersData } from "@/lib/cms";
import { PartnersData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2 } from "lucide-react";

export default function PartnersEditor() {
  const [data, setData] = useState<PartnersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getPartnersData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load partners data", error);
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

  const handlePartnerChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newPartners = [...prev.partners];
      newPartners[index] = { ...newPartners[index], [field]: value };
      return { ...prev, partners: newPartners };
    });
  };

  const addPartner = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        partners: [
          ...prev.partners,
          {
            name: "New Partner",
            logo: "https://via.placeholder.com/150",
            width: "w-32",
          },
        ],
      };
    });
  };

  const removePartner = (index: number) => {
    if (!confirm("Are you sure you want to delete this partner?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, partners: prev.partners.filter((_, i) => i !== index) };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updatePartnersData(data);
      toast.success("Partners section updated successfully!");
    } catch (error) {
      console.error("Failed to update partners data", error);
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
        Edit Partners Section
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
        </div>

        {/* Partners List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Partners ({data.partners.length})
            </h3>
            <button
              type="button"
              onClick={addPartner}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Partner
            </button>
          </div>

          <div className="space-y-4">
            {data.partners.map((partner, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-start md:items-center"
              >
                <div className="flex-1 w-full space-y-2">
                  <input
                    type="text"
                    value={partner.name}
                    onChange={(e) =>
                      handlePartnerChange(index, "name", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="Partner Name"
                  />
                  <input
                    type="text"
                    value={partner.logo}
                    onChange={(e) =>
                      handlePartnerChange(index, "logo", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="Logo URL"
                  />
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-gray-500">
                      Width Class:
                    </label>
                    <input
                      type="text"
                      value={partner.width}
                      onChange={(e) =>
                        handlePartnerChange(index, "width", e.target.value)
                      }
                      className="w-24 px-2 py-1 border rounded-md text-xs"
                      placeholder="e.g. w-32"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {partner.logo && (
                    <div className="bg-gray-200 p-2 rounded">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={partner.logo}
                        alt="preview"
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => removePartner(index)}
                    className="text-red-400 hover:text-red-600 p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
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
