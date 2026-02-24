"use client";

import { useEffect, useState } from "react";
import { getTeamData, updateTeamData } from "@/lib/cms";
import { TeamData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  X,
  Image as ImageIcon,
} from "lucide-react";

export default function TeamEditor() {
  const [data, setData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getTeamData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load team data", error);
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

  const handleMemberChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newMembers = [...prev.members];
      const member = { ...newMembers[index] };

      if (field.includes(".")) {
        const [obj, key] = field.split(".");
        if (obj === "socials") {
          member.socials = {
            ...member.socials,
            [key]: value,
          };
        }
      } else {
        // @ts-ignore
        member[field] = value;
      }

      newMembers[index] = member;
      return { ...prev, members: newMembers };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addMember = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        members: [
          ...prev.members,
          {
            name: "New Member",
            role: "Role",
            image: "https://via.placeholder.com/400x400",
            bio: "Short bio here.",
            department: "engineering",
            socials: { linkedin: "", twitter: "", github: "" },
          },
        ],
      };
    });
    setExpandedIndex(data?.members.length || 0);
  };

  const removeMember = (index: number) => {
    if (!confirm("Are you sure you want to delete this team member?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, members: prev.members.filter((_, i) => i !== index) };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const handleGalleryChange = (index: number, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newGallery = [...prev.galleryImages];
      newGallery[index] = value;
      return { ...prev, galleryImages: newGallery };
    });
  };

  const addGalleryImage = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        galleryImages: [
          ...prev.galleryImages,
          "https://via.placeholder.com/800x400",
        ],
      };
    });
  };

  const removeGalleryImage = (index: number) => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        galleryImages: prev.galleryImages.filter((_, i) => i !== index),
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateTeamData(data);
      toast.success("Team section updated successfully!");
    } catch (error) {
      console.error("Failed to update team data", error);
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
        Edit Team Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Experts Header
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

        {/* Team Members List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Experts ({data.members.length})
            </h3>
            <button
              type="button"
              onClick={addMember}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add Team Member
            </button>
          </div>

          <div className="space-y-4">
            {data.members.map((member, index) => (
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
                      {member.name}
                    </span>
                    <span className="text-xs text-gray-500">{member.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeMember(index);
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
                          Name
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) =>
                            handleMemberChange(index, "name", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Role
                        </label>
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) =>
                            handleMemberChange(index, "role", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Image URL
                        </label>
                        <input
                          type="text"
                          value={member.image}
                          onChange={(e) =>
                            handleMemberChange(index, "image", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Department
                        </label>
                        <input
                          type="text"
                          value={member.department}
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "department",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Bio
                        </label>
                        <textarea
                          rows={3}
                          value={member.bio}
                          onChange={(e) =>
                            handleMemberChange(index, "bio", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-2">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                            LinkedIn
                          </label>
                          <input
                            type="text"
                            value={member.socials?.linkedin || ""}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "socials.linkedin",
                                e.target.value,
                              )
                            }
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                            Twitter
                          </label>
                          <input
                            type="text"
                            value={member.socials?.twitter || ""}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "socials.twitter",
                                e.target.value,
                              )
                            }
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                            GitHub
                          </label>
                          <input
                            type="text"
                            value={member.socials?.github || ""}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "socials.github",
                                e.target.value,
                              )
                            }
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-4 border-t pt-8">
          <h3 className="text-lg font-semibold text-gray-700">
            Global Team Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gallery Heading
              </label>
              <input
                type="text"
                name="galleryHeading"
                value={data.galleryHeading}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gallery Subheading
              </label>
              <textarea
                name="gallerySubheading"
                rows={2}
                value={data.gallerySubheading}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-gray-500 uppercase">
                Gallery Images
              </label>
              <button
                type="button"
                onClick={addGalleryImage}
                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
              >
                <Plus size={12} /> Add Image
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {data.galleryImages.map((img, gIndex) => (
                <div key={gIndex} className="flex gap-2 items-center">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={img}
                      onChange={(e) =>
                        handleGalleryChange(gIndex, e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded text-sm pr-10"
                    />
                    <ImageIcon
                      className="absolute right-3 top-2.5 text-gray-400"
                      size={16}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(gIndex)}
                    className="text-gray-400 hover:text-red-500 p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
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
