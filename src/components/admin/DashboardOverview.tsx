"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Users,
  Eye,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
  Boxes,
  Mail,
  MessageSquare,
  Clock,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { database, ref as fRef, onValue } from "../../Firebase";

const defaultGrowthData = [
  { name: "Mon", value: 0 },
  { name: "Tue", value: 0 },
  { name: "Wed", value: 0 },
  { name: "Thu", value: 0 },
  { name: "Fri", value: 0 },
  { name: "Sat", value: 0 },
  { name: "Sun", value: 0 },
];

export default function DashboardOverview() {
  const [data, setData] = useState<any>(null);
  const [fbStats, setFbStats] = useState({ totalViews: 0, topPages: [] });
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 1. Fetch MongoDB dynamic stats (projects, services, admins)
    const fetchStats = async () => {
      try {
        const [statsRes, inquiriesRes] = await Promise.all([
          fetch("/api/admin/stats"),
          fetch("/api/inquiries"),
        ]);
        const resData = await statsRes.json();
        const inquiriesData = await inquiriesRes.json();
        setData(resData);
        if (Array.isArray(inquiriesData)) {
          setInquiries(inquiriesData.slice(0, 5));
        } else {
          setInquiries([]);
        }
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
        setInquiries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();

    // 2. Real-time Firebase listeners for traffic
    if (!database) return;

    const statsRef = fRef(database, "siteStats");
    const unsubscribe = onValue(statsRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        const pageViews = val.pageViews || {};
        const topPages = Object.entries(pageViews)
          .map(([path, views]) => ({
            path: path.replace(/_/g, "/").replace(/^home$/, "/"),
            views,
          }))
          .sort((a: any, b: any) => b.views - a.views)
          .slice(0, 5);

        setFbStats({
          totalViews: val.totalViews || 0,
          topPages: topPages as any,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const stats = [
    {
      label: "Live Projects",
      value: data?.content?.projects || 0,
      change: "Active",
      icon: Briefcase,
      color: "bg-blue-500",
      href: "/admin/projects",
    },
    {
      label: "Testimonials",
      value: data?.content?.testimonials || 0,
      change: "Reviews",
      icon: MessageSquare,
      color: "bg-indigo-500",
      href: "/admin/projects",
    },
    {
      label: "Total Services",
      value: data?.content?.services || 0,
      change: "Listed",
      icon: Boxes,
      color: "bg-purple-500",
      href: "/admin/services",
    },
    {
      label: "Total Views",
      value: fbStats.totalViews,
      change: "Live Tracking",
      icon: Eye,
      color: "bg-emerald-500",
      href: null,
    },
    {
      label: "Newsletter Subs",
      value: data?.content?.subscribers || 0,
      change: "Audience",
      icon: Mail,
      color: "bg-pink-500",
      href: "/admin/subscribers",
    },
    {
      label: "Team Admins",
      value: data?.content?.admins || 0,
      change: "Active",
      icon: Users,
      color: "bg-orange-500",
      href: "/admin/users",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 mt-1">
            Real-time CMS content and traffic metrics.
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-bold text-gray-700 uppercase tracking-tighter">
            Live Database Status
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, idx) => {
          const CardWrapper = stat.href ? "a" : "div";
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
            >
              <CardWrapper
                href={stat.href || undefined}
                className={`block ${stat.href ? "cursor-pointer" : ""}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`${stat.color} p-3 rounded-2xl text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon size={20} />
                  </div>
                  <div className="px-2 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    {stat.value}
                  </h3>
                </div>
              </CardWrapper>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Lead Generation Trend
              </h3>
              <p className="text-sm text-gray-500">
                Inquiries received over the last 7 days
              </p>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data?.growth || defaultGrowthData}>
                <defs>
                  <linearGradient
                    id="colorSessions"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSessions)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Popular Content
          </h3>
          <p className="text-sm text-gray-500 mb-6">Hits per page</p>

          <div className="flex-1 space-y-4">
            {(data?.analytics?.length > 0 ? data.analytics : fbStats.topPages)
              .length > 0 ? (
              (data?.analytics?.length > 0
                ? data.analytics
                : fbStats.topPages
              ).map((page: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-blue-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 truncate max-w-[120px]">
                      {page.path}
                    </span>
                  </div>
                  <span className="text-xs font-black text-gray-900 bg-white px-2 py-1 rounded-lg border border-gray-200 shadow-sm">
                    {page.views} views
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400 text-sm italic">
                Waiting for traffic data...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Messages Section */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Recent Messages</h3>
            <p className="text-sm text-gray-500">
              Latest inquiries from the website
            </p>
          </div>
          <button
            onClick={() => router.push("/admin/inquiries")}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
          >
            View All <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid gap-4">
          {inquiries.length > 0 ? (
            inquiries.map((iq, idx) => (
              <div
                key={iq._id}
                className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-gray-50/50 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">
                    {iq.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      {iq.name}
                      {iq.status === "new" && (
                        <span
                          className="w-2 h-2 rounded-full bg-blue-600"
                          title="New message"
                        ></span>
                      )}
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Mail size={12} /> {iq.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />{" "}
                        {new Date(iq.createdAt).toLocaleDateString()}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-3 md:mt-0 max-w-md">
                  <p className="text-sm text-gray-600 line-clamp-1 italic flex gap-2">
                    <MessageSquare
                      size={14}
                      className="shrink-0 mt-0.5 text-gray-400"
                    />
                    "{iq.message}"
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <Mail className="mx-auto text-gray-300 mb-2" size={32} />
              <p className="text-gray-500 text-sm">No recent messages found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
