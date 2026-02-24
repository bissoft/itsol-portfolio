import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import IndustriesContent from "@/lib/models/Industries";

export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();

  try {
    const allDocs = await IndustriesContent.find({});

    if (allDocs.length === 0) {
      return NextResponse.json({
        message: "DEBUG: IndustriesContent collection IS EMPTY in DB",
      });
    }

    let removedCount = 0;
    for (const data of allDocs) {
      if (data.industries) {
        const originalCount = data.industries.length;
        data.industries = data.industries.filter(
          (industry: any) => industry.title !== "Staff Augmentation",
        );

        if (data.industries.length !== originalCount) {
          await data.save();
          removedCount += originalCount - data.industries.length;
        }
      }
    }

    return NextResponse.json({
      message: "Cleanup completed",
      documentsChecked: allDocs.length,
      totalRemovedFromDB: removedCount,
    });
  } catch (error: any) {
    console.error("Cleanup API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
