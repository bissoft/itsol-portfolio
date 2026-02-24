import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/lib/models/Projects";
import Service from "@/lib/models/Services";
import Conversation from "@/lib/models/Conversations";
import Partner from "@/lib/models/Partners";
import User from "@/lib/models/User";
import Analytics from "@/lib/models/Analytics";
import Inquiry from "@/lib/models/Inquiry";
import Subscriber from "@/lib/models/Subscriber";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();

    // 1. Core Counts
    const [
      projectDoc,
      serviceDoc,
      conversationDoc,
      partnerDoc,
      adminCount,
      subscriberCount,
    ] = await Promise.all([
      Project.findOne(),
      Service.findOne(),
      Conversation.findOne(),
      Partner.findOne(),
      User.countDocuments({ role: "ADMIN" }),
      Subscriber.countDocuments(),
    ]);

    // 2. Inquiry Trend (Last 7 Days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setHours(0, 0, 0, 0);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

    const trendData = await Inquiry.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          leads: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Fill missing days
    const chartData = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(sevenDaysAgo);
      d.setDate(sevenDaysAgo.getDate() + i);
      const dateStr = d.toISOString().split("T")[0];
      const dayName = d.toLocaleDateString("en-US", { weekday: "short" });

      const found = trendData.find((t) => t._id === dateStr);
      chartData.push({
        name: dayName,
        value: found ? found.leads : 0,
      });
    }

    // 3. Top Analytic Pages
    const topAnalyticPages = await Analytics.find()
      .sort({ count: -1 })
      .limit(5)
      .lean();

    return NextResponse.json({
      content: {
        projects: projectDoc?.projects?.length || 0,
        testimonials: projectDoc?.testimonials?.length || 0,
        services: serviceDoc?.services?.length || 0,
        conversations: conversationDoc?.conversations?.length || 0,
        partners: partnerDoc?.partners?.length || 0,
        admins: adminCount,
        subscribers: subscriberCount,
      },
      growth: chartData,
      analytics: topAnalyticPages.map((ap) => ({
        path: ap.path,
        views: ap.count,
      })),
    });
  } catch (error: any) {
    console.error("Stats API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
