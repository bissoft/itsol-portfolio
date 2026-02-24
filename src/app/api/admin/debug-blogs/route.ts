import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BlogsContent from "@/lib/models/Blogs";

export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();
  try {
    const data = await BlogsContent.findOne().lean();
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
