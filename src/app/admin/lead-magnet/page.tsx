"use client";

import { useEffect, useState } from "react";
import { getLeadMagnetData, updateLeadMagnetData } from "@/lib/cms";
import { LeadMagnetData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Save, FileText, Magnet } from "lucide-react";

export default function LeadMagnetEditor() {
  const [data, setData] = useState<LeadMagnetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getLeadMagnetData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load Lead Magnet data", error);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateLeadMagnetData(data);
      toast.success("Lead Magnet updated successfully!");
    } catch (error) {
      console.error("Failed to update Lead Magnet data", error);
      toast.error("Failed to update data");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return <div className="p-8 text-center text-white">Loading...</div>;
  if (!data)
    return (
      <div className="p-8 text-center text-red-500">Error loading data.</div>
    );

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mb-20 border border-gray-100">
      <div className="flex items-center gap-3 mb-8 border-b pb-6">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
          <Magnet size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-gray-900 leading-tight">
            Lead Magnet Editor
          </h2>
          <p className="text-gray-500 font-medium italic">
            Configure your free whitepaper offer section
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h3 className="text-lg font-extrabold text-gray-800 col-span-2 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-500 rounded-full" />
            Main Section Content
          </h3>

          <div className="md:col-span-2">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Badge Text
            </label>
            <input
              type="text"
              name="badge"
              value={data.badge}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
              placeholder="e.g. Free Whitepaper"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              value={data.heading}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold text-lg"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Subheading (Description)
            </label>
            <textarea
              name="subheading"
              value={data.subheading}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium leading-relaxed"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Button Text
            </label>
            <input
              type="text"
              name="buttonText"
              value={data.buttonText}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              Footer Text (Spam Warning)
            </label>
            <input
              type="text"
              name="footerText"
              value={data.footerText}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium italic text-gray-500"
            />
          </div>
        </div>

        {/* Whitepaper / Visual Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
          <h3 className="text-lg font-extrabold text-blue-900 col-span-2 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full" />
            Whitepaper Visual Details
          </h3>

          <div className="md:col-span-1">
            <label className="block text-xs font-black text-blue-400 uppercase tracking-widest mb-2">
              Tag (On the book)
            </label>
            <input
              type="text"
              name="whitepaperTag"
              value={data.whitepaperTag}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-xs font-black text-blue-400 uppercase tracking-widest mb-2">
              Subtitle (On the book)
            </label>
            <input
              type="text"
              name="whitepaperSubtitle"
              value={data.whitepaperSubtitle}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-black text-blue-400 uppercase tracking-widest mb-2">
              Whitepaper Title (On the book)
            </label>
            <textarea
              name="whitepaperTitle"
              value={data.whitepaperTitle}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-extrabold text-gray-900"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-black text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
              <FileText size={14} /> PDF File URL (Google Drive / Cloudinary
              Link)
            </label>
            <input
              type="text"
              name="pdfUrl"
              value={data.pdfUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold text-blue-700 bg-white"
              placeholder="Paste the direct link to your PDF file here..."
            />
            <p className="mt-2 text-xs text-blue-400 font-medium italic">
              * This is the file that will start downloading when the user
              submits their email.
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-6 sticky bottom-4">
          <button
            type="submit"
            disabled={saving}
            className={`px-10 py-4 bg-gray-900 text-white font-black rounded-2xl shadow-2xl hover:bg-black transition-all flex items-center gap-3 transform hover:-translate-y-1 active:scale-95 ${
              saving ? "opacity-70 cursor-wait" : ""
            }`}
          >
            {saving ? (
              "Saving Updates..."
            ) : (
              <>
                <Save size={20} /> Update Lead Magnet
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
