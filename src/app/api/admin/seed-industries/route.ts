import { NextResponse } from "next/server";
import { seedIndustryPages } from "@/lib/seed-data";
import IndustryPage from "@/lib/models/IndustryPage";
import dbConnect from "@/lib/db";

export async function GET() {
  console.log("Seed route hit");
  try {
    await dbConnect();
    console.log("DB Connected");

    const countBefore = await IndustryPage.countDocuments();
    console.log("Count before:", countBefore);

    await seedIndustryPages();

    const countAfter = await IndustryPage.countDocuments();
    console.log("Count after:", countAfter);

    const all = await IndustryPage.find({}, { slug: 1 });

    return NextResponse.json({
      message: "Seeded successfully",
      before: countBefore,
      after: countAfter,
      slugs: all.map((d) => d.slug),
    });
  } catch (error: any) {
    console.error("Seeding failed:", error);
    return NextResponse.json(
      { error: "Seeding failed", details: error.message },
      { status: 500 },
    );
  }
}
