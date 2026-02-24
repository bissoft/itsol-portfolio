import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/lib/models/User";
import { getSession } from "@/lib/auth-custom";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    if (
      !session ||
      (session.user.role !== "SUPERADMIN" && session.user.role !== "ADMIN")
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    
    await dbConnect();
    // If the requester is an ADMIN, they shouldn't see SUPERADMINs
    const query =
      session.user.role === "ADMIN" ? { role: { $ne: "SUPERADMIN" } } : {};

    const users = await User.find(query)
      .select("-password")
      .sort({ createdAt: -1 });
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getSession();
    if (
      !session ||
      (session.user.role !== "SUPERADMIN" && session.user.role !== "ADMIN")
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { userId, status } = await request.json();

    if (!userId || !status) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const userToUpdate = await User.findById(userId);
    if (!userToUpdate) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Protection: ADMIN cannot update SUPERADMIN
    if (session.user.role === "ADMIN" && userToUpdate.role === "SUPERADMIN") {
      return NextResponse.json(
        { error: "Unauthorized to modify SuperAdmin" },
        { status: 401 },
      );
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { status },
      { new: true },
    ).select("-password");

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getSession();
    if (
      !session ||
      (session.user.role !== "SUPERADMIN" && session.user.role !== "ADMIN")
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    await dbConnect();
    const { userId } = await request.json();
    if (!userId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const userToDelete = await User.findById(userId);
    if (!userToDelete) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Protection: ADMIN cannot delete SUPERADMIN
    if (session.user.role === "ADMIN" && userToDelete.role === "SUPERADMIN") {
      return NextResponse.json(
        { error: "Unauthorized to delete SuperAdmin" },
        { status: 401 },
      );
    }

    await User.findByIdAndDelete(userId);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
