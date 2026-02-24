import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Check existing users
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 },
      );
    }

    // Professional Automation:
    // If no users exist, the first one is the "Master Admin" (active)
    // Otherwise, they are "Pending" and need approval
    const adminCount = await User.countDocuments();
    const status = adminCount === 0 ? "active" : "pending";

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "ADMIN", // Force ADMIN role, SUPERADMIN is only assigned via DB
      status, // Automated based on existing users
    });

    return NextResponse.json({
      message:
        status === "active"
          ? "Master Admin registered successfully"
          : "Access request sent. Waiting for Admin approval.",
      user: { name: user.name, email: user.email, status: user.status },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
