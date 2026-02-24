"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Mail,
  User,
  Clock,
  Briefcase,
  Trash2,
  CheckCircle,
  Search,
  Download,
  ExternalLink,
  Linkedin,
  FileText,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface JobApplication {
  _id: string;
  jobId: number;
  jobTitle: string;
  name: string;
  email: string;
  portfolio?: string;
  linkedin?: string;
  resumeUrl?: string;
  resumeName?: string;
  status: string;
  createdAt: string;
}

export default function ApplicationsView() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch("/api/careers/apply");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setApplications(data);
    } catch (error) {
      console.error(error);
      toast.error("Error loading applications");
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    try {
      const res = await fetch(`/api/careers/apply/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setApplications((prev) => prev.filter((app) => app._id !== id));
      toast.success("Application deleted");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete");
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/careers/apply/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status } : app)),
      );
      toast.success(`Status updated to ${status}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
  };

  const filteredApplications = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "reviewed":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "interviewing":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "hired":
        return "bg-green-100 text-green-700 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  if (loading)
    return (
      <div className="p-8 text-center text-gray-500">
        Loading applications...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Job Applications
          </h2>
          <p className="text-gray-500 mt-1">
            Review and manage candidates for your open positions.
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, email, or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Candidate
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Applied For
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Links
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredApplications.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <Briefcase
                      className="mx-auto text-gray-200 mb-3"
                      size={40}
                    />
                    No applications found.
                  </td>
                </tr>
              ) : (
                filteredApplications.map((app) => (
                  <tr
                    key={app._id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                          {app.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">
                            {app.name}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Mail size={12} /> {app.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
                        {app.jobTitle}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app._id, e.target.value)}
                        className={cn(
                          "text-xs font-bold px-3 py-1.5 rounded-full border outline-none appearance-none cursor-pointer",
                          getStatusColor(app.status),
                        )}
                      >
                        <option value="new">New</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="interviewing">Interviewing</option>
                        <option value="hired">Hired</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {app.resumeUrl && (
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors bg-gray-50 rounded-lg"
                            title="View Resume"
                          >
                            <FileText size={18} />
                          </a>
                        )}
                        {app.portfolio && (
                          <a
                            href={app.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors bg-gray-50 rounded-lg"
                            title="Portfolio"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {app.linkedin && (
                          <a
                            href={app.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors bg-gray-50 rounded-lg"
                            title="LinkedIn"
                          >
                            <Linkedin size={18} />
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteApplication(app._id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete"
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
      </div>
    </div>
  );
}
