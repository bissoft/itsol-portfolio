import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Inquiry from "@/lib/models/Inquiry";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  await dbConnect();

  try {
    const body = await req.json();
    const { status } = body;

    const inquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    if (!inquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }

    return NextResponse.json(inquiry);
  } catch (error) {
    console.error("Error updating inquiry:", error);
    return NextResponse.json(
      { error: "Failed to update inquiry" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  await dbConnect();

  try {
    const inquiry = await Inquiry.findByIdAndDelete(id);

    if (!inquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return NextResponse.json(
      { error: "Failed to delete inquiry" },
      { status: 500 },
    );
  }
}
