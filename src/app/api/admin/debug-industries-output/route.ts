import { NextResponse } from "next/server";
import { getIndustriesData } from "@/lib/cms";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getIndustriesData();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
