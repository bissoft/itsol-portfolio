import { NextRequest, NextResponse } from "next/server";
import { getNavbarData, updateNavbarData } from "@/lib/cms";
import { getSession } from "@/lib/auth-custom";

export async function GET() {
  try {
    const data = await getNavbarData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/admin/navbar error:", error);
    return NextResponse.json(
      { error: "Failed to fetch navbar data" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    await updateNavbarData(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/admin/navbar error:", error);
    return NextResponse.json(
      { error: "Failed to update navbar data" },
      { status: 500 },
    );
  }
}
