"use client";

import { useEffect, useState } from "react";
import { getProjectsData, updateProjectsData } from "@/lib/cms";
import { ProjectsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2, ChevronDown, ChevronUp, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectsEditor() {
  const [data, setData] = useState<ProjectsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getProjectsData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load projects data", error);
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

  const handleProjectChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newProjects = [...prev.projects];
      newProjects[index] = { ...newProjects[index], [field]: value };
      return { ...prev, projects: newProjects };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addProject = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        projects: [
          ...prev.projects,
          {
            id: `${Date.now()}`,
            title: "New Project",
            category: "web",
            tags: ["New Tag"],
            client: "New Client",
            year: `${new Date().getFullYear()}`,
            description: "New description",
            technologies: ["React"],
            results: [{ metric: "100%", label: "Satisfaction" }],
            challenge: "Challenge text",
            solution: "Solution text",
            process: [
              {
                phase: "Design",
                description: "Design phase",
                duration: "1 week",
              },
            ],
            testimonial: {
              quote: "Brilliant work!",
              author: "Client Name",
              role: "CEO",
            },
            imageUrl: "https://via.placeholder.com/600x600",
            images: ["https://via.placeholder.com/600x600"],
            bgColor: "from-blue-600 to-indigo-700",
            location: "USA",
            date: "Jan 2024",
            website: "example.com",
            stats: "80% Efficiency",
          },
        ],
      };
    });
    setExpandedIndex(data?.projects.length || 0);
  };

  const removeProject = (index: number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, projects: prev.projects.filter((_, i) => i !== index) };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  // --- Array / Object Management Helpers ---
  const handleNestedChange = (
    projectIndex: number,
    field: string,
    subField: string,
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newProjects = [...prev.projects];
      const project = { ...newProjects[projectIndex] };
      (project as any)[field] = {
        ...((project as any)[field] || {}),
        [subField]: value,
      };
      newProjects[projectIndex] = project as any;
      return { ...prev, projects: newProjects };
    });
  };

  const updateArrayItem = (
    projectIndex: number,
    field: string,
    itemIndex: number,
    value: string | any,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newProjects = [...prev.projects];
      const items = [...((newProjects[projectIndex] as any)[field] || [])];
      items[itemIndex] = value;
      newProjects[projectIndex] = {
        ...newProjects[projectIndex],
        [field]: items,
      };
      return { ...prev, projects: newProjects };
    });
  };

  const addArrayItem = (
    projectIndex: number,
    field: string,
    defaultValue: any,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newProjects = [...prev.projects];
      const items = [
        ...((newProjects[projectIndex] as any)[field] || []),
        defaultValue,
      ];
      newProjects[projectIndex] = {
        ...newProjects[projectIndex],
        [field]: items,
      };
      return { ...prev, projects: newProjects };
    });
  };

  const removeArrayItem = (
    projectIndex: number,
    field: string,
    itemIndex: number,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newProjects = [...prev.projects];
      const items = ((newProjects[projectIndex] as any)[field] || []).filter(
        (_: any, i: number) => i !== itemIndex,
      );
      newProjects[projectIndex] = {
        ...newProjects[projectIndex],
        [field]: items,
      };
      return { ...prev, projects: newProjects };
    });
  };

  const addTestimonial = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        testimonials: [
          ...(prev.testimonials || []),
          {
            id: `${Date.now()}`,
            name: "New Client",
            role: "CEO",
            content: "Excellent service!",
            rating: 5,
            image: "https://via.placeholder.com/200",
          },
        ],
      };
    });
  };

  const removeTestimonial = (index: number) => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        testimonials: (prev.testimonials || []).filter((_, i) => i !== index),
      };
    });
  };

  const handleTestimonialChange = (
    index: number,
    field: string,
    value: any,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newTestimonials = [...(prev.testimonials || [])];
      newTestimonials[index] = { ...newTestimonials[index], [field]: value };
      return { ...prev, testimonials: newTestimonials };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateProjectsData(data);
      toast.success("Projects section updated successfully!");
      setTimeout(() => {
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error("Failed to update projects data", error);
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
        Edit Projects Section
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
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                CTA Heading
              </label>
              <input
                type="text"
                name="ctaHeading"
                value={data.ctaHeading || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                CTA Button Text
              </label>
              <input
                type="text"
                name="ctaButtonText"
                value={data.ctaButtonText || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Projects ({data.projects.length})
            </h3>
            <button
              type="button"
              onClick={addProject}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Project
            </button>
          </div>

          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50/50"
              >
                {/* Project Header */}
                <div
                  className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-500 w-6">
                      {index + 1}.
                    </span>
                    <span className="font-semibold text-gray-800 truncate max-w-[200px]">
                      {project.title}
                    </span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProject(index);
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
                  <div className="p-6 border-t border-gray-200 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {/* --- BASIC INFO --- */}
                      <div className="md:col-span-2">
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 border-b pb-2">
                          Basic Information
                        </h4>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Project Title
                        </label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) =>
                            handleProjectChange(index, "title", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Path ID (Unique)
                        </label>
                        <input
                          type="text"
                          value={project.id}
                          onChange={(e) =>
                            handleProjectChange(index, "id", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Main Category
                        </label>
                        <input
                          type="text"
                          value={project.category}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "category",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Client Name
                        </label>
                        <input
                          type="text"
                          value={project.client}
                          onChange={(e) =>
                            handleProjectChange(index, "client", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Year
                        </label>
                        <input
                          type="text"
                          value={project.year}
                          onChange={(e) =>
                            handleProjectChange(index, "year", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          value={project.location}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "location",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Date
                        </label>
                        <input
                          type="text"
                          value={project.date}
                          onChange={(e) =>
                            handleProjectChange(index, "date", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Website URL
                        </label>
                        <input
                          type="text"
                          value={project.website}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "website",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Highlight Statistic (e.g. 80% Growth)
                        </label>
                        <input
                          type="text"
                          value={project.stats}
                          onChange={(e) =>
                            handleProjectChange(index, "stats", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Background Gradient (CSS Classes)
                        </label>
                        <input
                          type="text"
                          value={project.bgColor}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "bgColor",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                          placeholder="from-blue-600 to-indigo-700"
                        />
                      </div>

                      {/* --- CONTENT SECTIONS --- */}
                      <div className="md:col-span-2 pt-4">
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 border-b pb-2">
                          Narrative Sections
                        </h4>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Brief Description
                        </label>
                        <textarea
                          rows={3}
                          value={project.description}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "description",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          The Challenge
                        </label>
                        <textarea
                          rows={4}
                          value={project.challenge}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "challenge",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Our Solution
                        </label>
                        <textarea
                          rows={4}
                          value={project.solution}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "solution",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>

                      {/* --- TESTIMONIAL --- */}
                      <div className="md:col-span-2 pt-4">
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 border-b pb-2">
                          Client Testimonial
                        </h4>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Quote
                        </label>
                        <textarea
                          rows={2}
                          value={project.testimonial?.quote}
                          onChange={(e) =>
                            handleNestedChange(
                              index,
                              "testimonial",
                              "quote",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Author Name
                        </label>
                        <input
                          type="text"
                          value={project.testimonial?.author}
                          onChange={(e) =>
                            handleNestedChange(
                              index,
                              "testimonial",
                              "author",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Author Role
                        </label>
                        <input
                          type="text"
                          value={project.testimonial?.role}
                          onChange={(e) =>
                            handleNestedChange(
                              index,
                              "testimonial",
                              "role",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>

                      {/* --- IMAGES --- */}
                      <div className="md:col-span-2 pt-4">
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 border-b pb-2">
                          Visual Assets
                        </h4>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Main Image URL (Thumbnail)
                        </label>
                        <input
                          type="text"
                          value={project.imageUrl}
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "imageUrl",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-bold text-gray-500 uppercase">
                            Gallery Images
                          </label>
                          <button
                            type="button"
                            onClick={() => addArrayItem(index, "images", "")}
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Add Image
                          </button>
                        </div>
                        <div className="space-y-2">
                          {(project.images || []).map((img, i) => (
                            <div key={i} className="flex gap-2">
                              <input
                                type="text"
                                value={img}
                                onChange={(e) =>
                                  updateArrayItem(
                                    index,
                                    "images",
                                    i,
                                    e.target.value,
                                  )
                                }
                                className="flex-1 px-3 py-1 text-sm border rounded-md"
                                placeholder="URL..."
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  removeArrayItem(index, "images", i)
                                }
                                className="text-red-400 p-1"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* --- COLLECTIONS (Wait, I'll make these simplified) --- */}
                      <div className="md:col-span-2 pt-4">
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 border-b pb-2">
                          Technical & Results
                        </h4>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-bold text-gray-500 uppercase">
                            Technologies
                          </label>
                          <button
                            type="button"
                            onClick={() =>
                              addArrayItem(index, "technologies", "New Tech")
                            }
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Add Tech
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(project.technologies || []).map((tech, i) => (
                            <div
                              key={i}
                              className="flex items-center bg-gray-100 px-2 py-1 rounded border"
                            >
                              <input
                                type="text"
                                value={tech}
                                onChange={(e) =>
                                  updateArrayItem(
                                    index,
                                    "technologies",
                                    i,
                                    e.target.value,
                                  )
                                }
                                className="bg-transparent text-xs w-20 outline-none"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  removeArrayItem(index, "technologies", i)
                                }
                                className="text-gray-400 ml-1"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-bold text-gray-500 uppercase">
                            Portfolio Tags
                          </label>
                          <button
                            type="button"
                            onClick={() =>
                              addArrayItem(index, "tags", "New Tag")
                            }
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Add Tag
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(project.tags || []).map((tag, i) => (
                            <div
                              key={i}
                              className="flex items-center bg-gray-100 px-2 py-1 rounded border"
                            >
                              <input
                                type="text"
                                value={tag}
                                onChange={(e) =>
                                  updateArrayItem(
                                    index,
                                    "tags",
                                    i,
                                    e.target.value,
                                  )
                                }
                                className="bg-transparent text-xs w-20 outline-none"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  removeArrayItem(index, "tags", i)
                                }
                                className="text-gray-400 ml-1"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="md:col-span-2">
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-bold text-gray-500 uppercase">
                            Results / Metrics
                          </label>
                          <button
                            type="button"
                            onClick={() =>
                              addArrayItem(index, "results", {
                                metric: "0%",
                                label: "Result",
                              })
                            }
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Add Result
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {(project.results || []).map((res, i) => (
                            <div
                              key={i}
                              className="flex gap-2 items-end border p-3 rounded-md bg-gray-50/50"
                            >
                              <div className="flex-1 space-y-2">
                                <input
                                  type="text"
                                  value={res.metric}
                                  onChange={(e) => {
                                    const newRes = {
                                      ...res,
                                      metric: e.target.value,
                                    };
                                    updateArrayItem(
                                      index,
                                      "results",
                                      i,
                                      newRes,
                                    );
                                  }}
                                  className="w-full px-2 py-1 text-xs border rounded"
                                  placeholder="Metric (eg 80%)"
                                />
                                <input
                                  type="text"
                                  value={res.label}
                                  onChange={(e) => {
                                    const newRes = {
                                      ...res,
                                      label: e.target.value,
                                    };
                                    updateArrayItem(
                                      index,
                                      "results",
                                      i,
                                      newRes,
                                    );
                                  }}
                                  className="w-full px-2 py-1 text-xs border rounded"
                                  placeholder="Label"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  removeArrayItem(index, "results", i)
                                }
                                className="text-red-400 p-1 mb-1"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div className="md:col-span-2">
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-bold text-gray-500 uppercase">
                            Process Steps
                          </label>
                          <button
                            type="button"
                            onClick={() =>
                              addArrayItem(index, "process", {
                                phase: "New Phase",
                                description: "",
                                duration: "",
                              })
                            }
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Add Step
                          </button>
                        </div>
                        <div className="space-y-4">
                          {(project.process || []).map((step, i) => (
                            <div
                              key={i}
                              className="border p-4 rounded-md bg-gray-50/50 relative"
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  removeArrayItem(index, "process", i)
                                }
                                className="absolute top-2 right-2 text-red-400 p-1"
                              >
                                <Trash2 size={16} />
                              </button>
                              <div className="grid grid-cols-2 gap-4 mb-2">
                                <input
                                  type="text"
                                  value={step.phase}
                                  onChange={(e) =>
                                    updateArrayItem(index, "process", i, {
                                      ...step,
                                      phase: e.target.value,
                                    })
                                  }
                                  className="px-2 py-1 text-xs border rounded"
                                  placeholder="Phase Name"
                                />
                                <input
                                  type="text"
                                  value={step.duration}
                                  onChange={(e) =>
                                    updateArrayItem(index, "process", i, {
                                      ...step,
                                      duration: e.target.value,
                                    })
                                  }
                                  className="px-2 py-1 text-xs border rounded"
                                  placeholder="Duration (eg 2 weeks)"
                                />
                              </div>
                              <textarea
                                value={step.description}
                                onChange={(e) =>
                                  updateArrayItem(index, "process", i, {
                                    ...step,
                                    description: e.target.value,
                                  })
                                }
                                className="w-full px-2 py-1 text-xs border rounded"
                                placeholder="Phase description..."
                                rows={2}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="space-y-4 pt-10 border-t">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">
              Client Testimonials ({data.testimonials?.length || 0})
            </h3>
            <button
              type="button"
              onClick={addTestimonial}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add Testimonial
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {(data.testimonials || []).map((testimonial, tIdx) => (
              <div
                key={tIdx}
                className="p-6 border border-gray-200 rounded-xl bg-gray-50/30 relative"
              >
                <button
                  type="button"
                  onClick={() => removeTestimonial(tIdx)}
                  className="absolute top-4 right-4 text-red-400 hover:text-red-600 p-2"
                >
                  <Trash2 size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Client Name
                      </label>
                      <input
                        type="text"
                        value={testimonial.name}
                        onChange={(e) =>
                          handleTestimonialChange(tIdx, "name", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Role / Company
                      </label>
                      <input
                        type="text"
                        value={testimonial.role}
                        onChange={(e) =>
                          handleTestimonialChange(tIdx, "role", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Rating (1-5)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={testimonial.rating}
                        onChange={(e) =>
                          handleTestimonialChange(
                            tIdx,
                            "rating",
                            parseInt(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Avatar/Image URL
                      </label>
                      <input
                        type="text"
                        value={testimonial.image}
                        onChange={(e) =>
                          handleTestimonialChange(tIdx, "image", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Testimonial Content
                      </label>
                      <textarea
                        rows={4}
                        value={testimonial.content}
                        onChange={(e) =>
                          handleTestimonialChange(
                            tIdx,
                            "content",
                            e.target.value,
                          )
                        }
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
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
