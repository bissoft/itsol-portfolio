import { NextRequest, NextResponse } from "next/server";
import { getServicePageData, updateServicePageData } from "@/lib/cms";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  try {
    const data = await getServicePageData(slug);
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
  try {
    const body = await req.json();
    await updateServicePageData(slug, body);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to save", details: error.message },
      { status: 500 },
    );
  }
}
