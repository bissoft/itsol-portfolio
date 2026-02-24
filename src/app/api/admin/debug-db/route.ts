import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();

  try {
    const collections = await mongoose.connection
      .db!.listCollections()
      .toArray();
    const names = collections.map((c) => c.name);

    return NextResponse.json({
      collections: names,
      database: mongoose.connection.db!.databaseName,
    });
  } catch (error: any) {
    console.error("Debug API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
