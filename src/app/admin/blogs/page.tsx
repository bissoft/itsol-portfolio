"use client";

import { useEffect, useState } from "react";
import { getBlogsData, updateBlogsData } from "@/lib/cms";
import { BlogsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
} from "lucide-react";

export default function BlogsEditor() {
  const [data, setData] = useState<BlogsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getBlogsData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load blogs data", error);
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

  const handleBlogChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newBlogs = [...prev.blogs];
      newBlogs[index] = { ...newBlogs[index], [field]: value };
      return { ...prev, blogs: newBlogs };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addBlog = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        blogs: [
          ...prev.blogs,
          {
            type: "Article",
            title: "New Insight Title",
            category: "General",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            link: "#",
            author: "ITSOL Team",
            authorImage: "",
          },
        ],
      };
    });
    setExpandedIndex(data?.blogs.length || 0);
  };

  const removeBlog = (index: number) => {
    if (!confirm("Are you sure you want to delete this insight?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, blogs: prev.blogs.filter((_, i) => i !== index) };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateBlogsData(data);
      toast.success("Blogs section updated successfully!");
    } catch (error) {
      console.error("Failed to update blogs data", error);
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
        Edit Insights & Blogs
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Section Header
          </h3>
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
        </div>

        {/* Blogs List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Insights ({data.blogs.length})
            </h3>
            <button
              type="button"
              onClick={addBlog}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New Insight
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {data.blogs.map((blog, index) => (
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
                      {blog.title}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-bold">
                      {blog.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeBlog(index);
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
                          Type (Whitepaper, Webinar, Article)
                        </label>
                        <input
                          type="text"
                          value={blog.type}
                          onChange={(e) =>
                            handleBlogChange(index, "type", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Category
                        </label>
                        <input
                          type="text"
                          value={blog.category}
                          onChange={(e) =>
                            handleBlogChange(index, "category", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={blog.title}
                          onChange={(e) =>
                            handleBlogChange(index, "title", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Image URL
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={blog.image}
                            onChange={(e) =>
                              handleBlogChange(index, "image", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border rounded-md"
                          />
                          {blog.image && (
                            <img
                              src={blog.image}
                              alt="Preview"
                              className="w-10 h-10 object-cover rounded"
                            />
                          )}
                        </div>
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Author Name
                        </label>
                        <input
                          type="text"
                          value={blog.author || "ITSOL Team"}
                          onChange={(e) =>
                            handleBlogChange(index, "author", e.target.value)
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Author Image URL
                        </label>
                        <input
                          type="text"
                          value={blog.authorImage || ""}
                          onChange={(e) =>
                            handleBlogChange(
                              index,
                              "authorImage",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Link Path (URL or PDF Link)
                        </label>
                        <input
                          type="text"
                          value={blog.link || "#"}
                          onChange={(e) =>
                            handleBlogChange(index, "link", e.target.value)
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
            className={`px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            {saving ? "Saving Changes..." : "Save All Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
