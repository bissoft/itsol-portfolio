"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  ShieldCheck,
  ShieldAlert,
  Trash2,
  UserCheck,
  Clock,
  Mail,
  MoreVertical,
} from "lucide-react";
import toast from "react-hot-toast";

export default function TeamManagement() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      toast.error("Failed to fetch team members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateStatus = async (userId: string, status: string) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, status }),
      });
      if (res.ok) {
        toast.success(`User status updated to ${status}`);
        fetchUsers();
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      if (res.ok) {
        toast.success("User deleted successfully");
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };
  if (loading) return <div className="p-10 text-center">Loading team...</div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
        <p className="text-gray-500 mt-1">
          Manage admin access and approve new requests.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-8 py-5">User</th>
                  <th className="px-8 py-5">Role</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5">Joined</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 uppercase font-bold text-gray-700">
                {users.map((user, idx) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                          {user.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-400 font-medium ">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      {user.status === "active" ? (
                        <div className="flex items-center gap-1.5 text-emerald-600">
                          <ShieldCheck size={14} />
                          <span className="text-xs font-bold">Active</span>
                        </div>
                      ) : user.status === "pending" ? (
                        <div className="flex items-center gap-1.5 text-orange-500">
                          <Clock size={14} />
                          <span className="text-xs font-bold tracking-tighter">
                            Waiting for you to Approve
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-rose-500">
                          <ShieldAlert size={14} />
                          <span className="text-xs font-bold">Suspended</span>
                        </div>
                      )}
                    </td>
                    <td className="px-8 py-5 text-xs text-gray-400">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end gap-2">
                        {user.status === "pending" && (
                          <button
                            onClick={() => updateStatus(user._id, "active")}
                            className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                            title="Approve"
                          >
                            <UserCheck size={18} />
                          </button>
                        )}
                        {user.status === "active" &&
                          user.role !== "SUPERADMIN" && (
                            <button
                              onClick={() =>
                                updateStatus(user._id, "suspended")
                              }
                              className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                              title="Suspend"
                            >
                              <ShieldAlert size={18} />
                            </button>
                          )}
                        {user.status === "suspended" && (
                          <button
                            onClick={() => updateStatus(user._id, "active")}
                            className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                            title="Reactive"
                          >
                            <UserCheck size={18} />
                          </button>
                        )}
                        {/* <button
                          onClick={() => deleteUser(user._id)}
                          className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
