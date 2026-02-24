"use client";

import { useEffect, useState } from "react";
import { getCareersData, updateCareersData } from "@/lib/cms";
import { CareersData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  CheckCircle,
  Briefcase,
  PlusCircle,
} from "lucide-react";

export default function CareersEditor() {
  const [data, setData] = useState<CareersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getCareersData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load careers data", error);
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
    field: keyof CareersData,
    subfield: string,
    value: any,
  ) => {
    if (!data) return;
    const newArray = [...(data[field] as any[])];
    newArray[index] = { ...newArray[index], [subfield]: value };
    setData({ ...data, [field]: newArray } as any);
  };

  const addArrayItem = (field: keyof CareersData) => {
    if (!data) return;
    let newItem: any;
    switch (field) {
      case "departments":
        newItem = { id: "", label: "" };
        break;
      case "benefits":
        newItem = { iconName: "Zap", title: "", description: "" };
        break;
      case "stats":
        newItem = { label: "", value: "" };
        break;
      case "jobs":
        newItem = {
          id: Date.now(),
          title: "",
          department: "engineering",
          location: "Remote",
          type: "Full-time",
          salary: "",
          description: "",
          requirements: [],
          posted: "Just now",
        };
        break;
      default:
        return;
    }
    setData({ ...data, [field]: [...(data[field] as any[]), newItem] } as any);
  };

  const removeArrayItem = (index: number, field: keyof CareersData) => {
    if (!data) return;
    const newArray = [...(data[field] as any[])];
    newArray.splice(index, 1);
    setData({ ...data, [field]: newArray } as any);
  };

  const handleJobRequirementChange = (
    jobIndex: number,
    reqIndex: number,
    value: string,
  ) => {
    if (!data) return;
    const newJobs = [...data.jobs];
    newJobs[jobIndex].requirements[reqIndex] = value;
    setData({ ...data, jobs: newJobs });
  };

  const addJobRequirement = (jobIndex: number) => {
    if (!data) return;
    const newJobs = [...data.jobs];
    newJobs[jobIndex].requirements.push("");
    setData({ ...data, jobs: newJobs });
  };

  const removeJobRequirement = (jobIndex: number, reqIndex: number) => {
    if (!data) return;
    const newJobs = [...data.jobs];
    newJobs[jobIndex].requirements.splice(reqIndex, 1);
    setData({ ...data, jobs: newJobs });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateCareersData(data);
      toast.success("Careers page updated successfully!");
    } catch (error) {
      console.error("Failed to update careers data", error);
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
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md pb-24">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <Briefcase className="text-blue-600" /> Edit Careers Page
      </h2>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700">Hero Section</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hero Title
            </label>
            <input
              type="text"
              name="heroTitle"
              value={data.heroTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Page Stats</h3>
            <button
              type="button"
              onClick={() => addArrayItem("stats")}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm font-medium"
            >
              + Add Stat
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="p-3 border border-gray-200 rounded-md relative group"
              >
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, "stats")}
                  className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                >
                  <Trash2 size={12} />
                </button>
                <input
                  type="text"
                  placeholder="Value (e.g. 200+)"
                  value={stat.value}
                  onChange={(e) =>
                    handleArrayChange(index, "stats", "value", e.target.value)
                  }
                  className="w-full mb-1 px-2 py-1 border border-gray-100 rounded text-center font-bold text-blue-600"
                />
                <input
                  type="text"
                  placeholder="Label"
                  value={stat.label}
                  onChange={(e) =>
                    handleArrayChange(index, "stats", "label", e.target.value)
                  }
                  className="w-full px-2 py-1 border border-gray-100 rounded text-center text-xs text-gray-500 uppercase tracking-wider"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Departments (Filters)
            </h3>
            <button
              type="button"
              onClick={() => addArrayItem("departments")}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm font-medium"
            >
              + Add Dept
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.departments.map((dept, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 group"
              >
                <input
                  type="text"
                  value={dept.label}
                  placeholder="Label"
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "departments",
                      "label",
                      e.target.value,
                    )
                  }
                  className="bg-transparent border-none text-sm font-medium text-gray-700 outline-none w-24"
                />
                <input
                  type="text"
                  value={dept.id}
                  placeholder="ID"
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "departments",
                      "id",
                      e.target.value,
                    )
                  }
                  className="bg-transparent border-none text-[10px] text-gray-400 outline-none w-16"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, "departments")}
                  className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Benefits</h3>
            <button
              type="button"
              onClick={() => addArrayItem("benefits")}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm font-medium"
            >
              + Add Benefit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg relative group bg-gray-50/30"
              >
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, "benefits")}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={16} />
                </button>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                      Icon
                    </label>
                    <input
                      type="text"
                      value={benefit.iconName}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "benefits",
                          "iconName",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={benefit.title}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          "benefits",
                          "title",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm font-semibold"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={benefit.description}
                    onChange={(e) =>
                      handleArrayChange(
                        index,
                        "benefits",
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
        </section>

        {/* Job Openings */}
        <section className="space-y-6 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Job Openings
            </h3>
            <button
              type="button"
              onClick={() => addArrayItem("jobs")}
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <PlusCircle size={18} /> Add New Role
            </button>
          </div>
          <div className="space-y-8">
            {data.jobs.map((job, jobIndex) => (
              <div
                key={jobIndex}
                className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow relative"
              >
                <button
                  type="button"
                  onClick={() => removeArrayItem(jobIndex, "jobs")}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column - Main Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={job.title}
                        onChange={(e) =>
                          handleArrayChange(
                            jobIndex,
                            "jobs",
                            "title",
                            e.target.value,
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md font-semibold text-gray-800"
                        placeholder="e.g. Senior Full Stack Engineer"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Dept ID
                        </label>
                        <input
                          type="text"
                          value={job.department}
                          onChange={(e) =>
                            handleArrayChange(
                              jobIndex,
                              "jobs",
                              "department",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          value={job.location}
                          onChange={(e) =>
                            handleArrayChange(
                              jobIndex,
                              "jobs",
                              "location",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Employment Type
                        </label>
                        <input
                          type="text"
                          value={job.type}
                          onChange={(e) =>
                            handleArrayChange(
                              jobIndex,
                              "jobs",
                              "type",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                          placeholder="Full-time / Contract"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Salary Range
                        </label>
                        <input
                          type="text"
                          value={job.salary}
                          onChange={(e) =>
                            handleArrayChange(
                              jobIndex,
                              "jobs",
                              "salary",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Description
                      </label>
                      <textarea
                        rows={5}
                        value={job.description}
                        onChange={(e) =>
                          handleArrayChange(
                            jobIndex,
                            "jobs",
                            "description",
                            e.target.value,
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  </div>

                  {/* Right Column - Requirements */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-bold text-gray-500 uppercase">
                        Requirements
                      </label>
                      <button
                        type="button"
                        onClick={() => addJobRequirement(jobIndex)}
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Plus size={12} /> Add Requirement
                      </button>
                    </div>
                    <div className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex gap-2">
                          <input
                            type="text"
                            value={req}
                            onChange={(e) =>
                              handleJobRequirementChange(
                                jobIndex,
                                reqIndex,
                                e.target.value,
                              )
                            }
                            className="flex-1 px-3 py-1.5 border border-gray-200 rounded text-sm"
                            placeholder="Must have 5+ years..."
                          />
                          <button
                            type="button"
                            onClick={() =>
                              removeJobRequirement(jobIndex, reqIndex)
                            }
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Posted Text
                      </label>
                      <input
                        type="text"
                        value={job.posted}
                        onChange={(e) =>
                          handleArrayChange(
                            jobIndex,
                            "jobs",
                            "posted",
                            e.target.value,
                          )
                        }
                        className="w-full px-3 py-1.5 border border-gray-200 rounded text-xs italic text-gray-500"
                        placeholder="2 days ago"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="fixed bottom-8 right-8 z-10 flex gap-4">
          <button
            type="submit"
            disabled={saving}
            className={`px-10 py-3 bg-blue-600 text-white font-bold rounded-full shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all active:scale-95 flex items-center gap-2 ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            <CheckCircle size={20} />
            {saving ? "Publishing..." : "Publish Updates"}
          </button>
        </div>
      </form>
    </div>
  );
}
