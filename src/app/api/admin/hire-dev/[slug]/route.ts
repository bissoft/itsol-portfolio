import { NextRequest, NextResponse } from "next/server";
import { getHireDevPageData, updateHireDevPageData } from "@/lib/cms";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  try {
    const data = await getHireDevPageData(slug);
    return NextResponse.json({ data: data || null });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch", details: error.message },
      { status: 500 },
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();

  try {
    const body = await req.json();
    await updateHireDevPageData(normalizedSlug, body);

    // Explicitly revalidate here as well to be safe
    try {
      const { revalidatePath } = await import("next/cache");
      revalidatePath(`/hire-dev/${normalizedSlug}`);
      revalidatePath("/");
    } catch (e) {
      console.error("Revalidation failed in API route", e);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to save", details: error.message },
      { status: 500 },
    );
  }
}
