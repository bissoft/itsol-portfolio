"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Mail,
  User,
  Clock,
  MessageSquare,
  Trash2,
  CheckCircle,
  Search,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function InquiriesView() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await fetch("/api/inquiries");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setInquiries(data);
    } catch (error) {
      console.error(error);
      toast.error("Error loading inquiries");
    } finally {
      setLoading(false);
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setInquiries((prev) => prev.filter((iq) => iq._id !== id));
      toast.success("Message deleted");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete");
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      setInquiries((prev) =>
        prev.map((iq) => (iq._id === id ? { ...iq, status } : iq)),
      );
      toast.success(`Marked as ${status}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
  };

  const filteredInquiries = inquiries.filter(
    (iq) =>
      iq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      iq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (iq.subject || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      iq.message.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return <div className="p-8 text-center">Loading messages...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Contact Messages</h2>
          <p className="text-gray-500 mt-1">
            Manage inquiries from your website visitors.
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid gap-6">
        {filteredInquiries.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-dashed border-gray-200 text-center">
            <Mail className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500 font-medium text-lg">
              No messages found matching your search.
            </p>
          </div>
        ) : (
          filteredInquiries.map((iq) => (
            <div
              key={iq._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                      {iq.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                        {iq.name}
                        {iq.status === "new" && (
                          <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            New
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Mail size={14} /> {iq.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />{" "}
                          {new Date(iq.createdAt).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => deleteInquiry(iq._id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                    <button
                      onClick={() => updateStatus(iq._id, "read")}
                      className={cn(
                        "p-2 transition-colors",
                        iq.status === "read"
                          ? "text-green-600"
                          : "text-gray-400 hover:text-green-600",
                      )}
                      title="Mark as Read"
                      disabled={iq.status === "read"}
                    >
                      <CheckCircle size={20} />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col gap-3">
                  {iq.subject && (
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-200/60">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        Subject:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {iq.subject}
                      </span>
                    </div>
                  )}
                  <div className="flex gap-4">
                    <MessageSquare
                      className="text-gray-400 shrink-0 mt-1"
                      size={18}
                    />
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {iq.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
