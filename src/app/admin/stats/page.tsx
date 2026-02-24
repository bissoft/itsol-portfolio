"use client";

import { useEffect, useState } from "react";
import { getStatsData, updateStatsData } from "@/lib/cms";
import { CompanyStatsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2 } from "lucide-react";

export default function StatsEditor() {
  const [data, setData] = useState<CompanyStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getStatsData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load stats data", error);
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

  const handleStatChange = (
    index: number,
    field: "value" | "label",
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newStats = [...prev.stats];
      newStats[index] = { ...newStats[index], [field]: value };
      return { ...prev, stats: newStats };
    });
  };

  const addStat = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        stats: [...prev.stats, { value: "0", label: "New Stat" }],
      };
    });
  };

  const removeStat = (index: number) => {
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, stats: prev.stats.filter((_, i) => i !== index) };
    });
  };

  const handleClientChange = (
    index: number,
    field: "name" | "logo",
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newClients = [...prev.clients];
      newClients[index] = { ...newClients[index], [field]: value };
      return { ...prev, clients: newClients };
    });
  };

  const addClient = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        clients: [...prev.clients, { name: "New Client", logo: "" }],
      };
    });
  };

  const removeClient = (index: number) => {
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, clients: prev.clients.filter((_, i) => i !== index) };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateStatsData(data);
      toast.success("Company Stats section updated successfully!");
    } catch (error) {
      console.error("Failed to update stats data", error);
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
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Edit Company Stats Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Text Content</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              value={data.heading}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subheading
            </label>
            <textarea
              name="subheading"
              rows={3}
              value={data.subheading}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Stats List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Stats Items</h3>
            <button
              type="button"
              onClick={addStat}
              className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded flex items-center gap-1 hover:bg-green-100"
            >
              <Plus size={16} /> Add Stat
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-gray-50 p-4 rounded-md border"
              >
                <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-500 uppercase">
                    Value
                  </label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) =>
                      handleStatChange(index, "value", e.target.value)
                    }
                    className="w-full mt-1 px-2 py-1 border rounded"
                  />
                </div>
                <div className="flex-[2]">
                  <label className="block text-xs font-bold text-gray-500 uppercase">
                    Label
                  </label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) =>
                      handleStatChange(index, "label", e.target.value)
                    }
                    className="w-full mt-1 px-2 py-1 border rounded"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeStat(index)}
                  className="mt-6 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Clients List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Partner Clients</h3>
            <button
              type="button"
              onClick={addClient}
              className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded flex items-center gap-1 hover:bg-green-100"
            >
              <Plus size={16} /> Add Client
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.clients.map((client, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-gray-50 p-4 rounded-md border relative"
              >
                <div className="flex-1 space-y-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      value={client.name}
                      onChange={(e) =>
                        handleClientChange(index, "name", e.target.value)
                      }
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase">
                      Logo URL
                    </label>
                    <input
                      type="text"
                      value={client.logo}
                      onChange={(e) =>
                        handleClientChange(index, "logo", e.target.value)
                      }
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeClient(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <button
            type="submit"
            disabled={saving}
            className={`px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
