import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();

  try {
    const data = await mongoose.connection
      .db!.collection("industriescontents")
      .find({})
      .toArray();

    return NextResponse.json({
      count: data.length,
      data: data,
    });
  } catch (error: any) {
    console.error("Debug API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
