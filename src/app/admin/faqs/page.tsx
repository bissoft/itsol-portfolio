"use client";

import { useEffect, useState } from "react";
import { getFaqsData, updateFaqsData } from "@/lib/cms";
import { FaqsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function FaqsEditor() {
  const [data, setData] = useState<FaqsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getFaqsData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load faqs data", error);
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

  const handleFaqChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null;
      const newFaqs = [...prev.faqs];
      newFaqs[index] = { ...newFaqs[index], [field]: value };
      return { ...prev, faqs: newFaqs };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addFaq = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        faqs: [
          ...prev.faqs,
          {
            question: "New Question?",
            answer: "New answer details here.",
          },
        ],
      };
    });
    setExpandedIndex(data?.faqs.length || 0);
  };

  const removeFaq = (index: number) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, faqs: prev.faqs.filter((_, i) => i !== index) };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateFaqsData(data);
      toast.success("FAQs section updated successfully!");
    } catch (error) {
      console.error("Failed to update faqs data", error);
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
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit FAQs</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Section Header
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

        {/* FAQs List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Questions ({data.faqs.length})
            </h3>
            <button
              type="button"
              onClick={addFaq}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New FAQ
            </button>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
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
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFaq(index);
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
                  <div className="p-6 border-t border-gray-200 space-y-4 bg-white">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Question
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) =>
                          handleFaqChange(index, "question", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Answer
                      </label>
                      <textarea
                        rows={3}
                        value={faq.answer}
                        onChange={(e) =>
                          handleFaqChange(index, "answer", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-md"
                      />
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
