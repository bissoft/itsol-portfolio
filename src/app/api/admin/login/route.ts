import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { login } from "@/lib/auth-custom";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user || (user.role !== "ADMIN" && user.role !== "SUPERADMIN")) {
      return NextResponse.json(
        { error: "Forbidden or User not found" },
        { status: 401 },
      );
    }

    if (user.status !== "active") {
      const message =
        user.status === "pending"
          ? "Your account is pending admin approval."
          : "Your account has been suspended.";
      return NextResponse.json({ error: message }, { status: 403 });
    }

    const isValid = await bcrypt.compare(password, user.password || "");

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Set custom session cookie
    await login({
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    return NextResponse.json({
      message: "Login successful",
      user: { name: user.name, email: user.email },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
