import { NextResponse } from "next/server";
import { logout } from "@/lib/auth-custom";

export async function POST() {
  await logout();
  return NextResponse.json({ message: "Logged out successfully" });
}
