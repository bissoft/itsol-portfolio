import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Analytics from "@/lib/models/Analytics";

export async function POST(request: Request) {
  try {
    const { path } = await request.json();
    if (!path) return NextResponse.json({ error: "No path" }, { status: 400 });

    await dbConnect();

    await Analytics.findOneAndUpdate(
      { path },
      {
        $inc: { count: 1 },
        $set: { lastVisited: new Date() },
      },
      { upsert: true, new: true },
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
