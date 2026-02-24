"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Mail, Clock, Trash2, Search, Download } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Subscriber {
  _id: string;
  email: string;
  source: string;
  subscribedAt: string;
}

export default function SubscribersView() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await fetch("/api/admin/subscribers");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSubscribers(data);
    } catch (error) {
      console.error(error);
      toast.error("Error loading subscribers");
    } finally {
      setLoading(false);
    }
  };

  const deleteSubscriber = async (id: string) => {
    if (!confirm("Are you sure you want to remove this subscriber?")) return;
    try {
      const res = await fetch("/api/admin/subscribers", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to delete");
      setSubscribers((prev) => prev.filter((s) => s._id !== id));
      toast.success("Subscriber removed");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete");
    }
  };

  const exportToCSV = () => {
    const headers = ["Email", "Source", "Date"];
    const rows = subscribers.map((s) => [
      s.email,
      s.source,
      new Date(s.subscribedAt).toLocaleDateString(),
    ]);

    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `subscribers_${new Date().toISOString().split("T")[0]}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Exported to CSV");
  };

  const filteredSubscribers = subscribers.filter(
    (s) =>
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.source.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Newsletter Subscribers
          </h2>
          <p className="text-gray-500 mt-1 font-medium">
            Manage your mailing list and audience growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
            />
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-200"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-500/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  Subscriber
                </th>
                <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  Source
                </th>
                <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  Joined Date
                </th>
                <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredSubscribers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                        <Mail className="text-gray-300" size={32} />
                      </div>
                      <p className="text-gray-500 font-medium">
                        No subscribers found.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredSubscribers.map((s) => (
                  <tr
                    key={s._id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-sm">
                          {s.email.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-bold text-gray-900">
                          {s.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                        {s.source || "general"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={14} className="text-gray-300" />
                        {new Date(s.subscribedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteSubscriber(s._id)}
                        className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                        title="Remove Subscriber"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filteredSubscribers.length > 0 && (
          <div className="px-6 py-4 bg-gray-50/30 border-t border-gray-100 flex justify-between items-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Total: {filteredSubscribers.length} Subscribers
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
