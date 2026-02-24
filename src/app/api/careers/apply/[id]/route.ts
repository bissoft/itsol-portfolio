import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobApplication from "@/lib/models/JobApplication";
import { unlink } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await dbConnect();
  const { id } = await params;

  try {
    const { status } = await req.json();
    const updated = await JobApplication.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating application:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await dbConnect();
  const { id } = await params;

  try {
    const application = await JobApplication.findById(id);
    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    // Try to delete the resume file if it exists
    if (application.resumeUrl) {
      try {
        const filePath = path.join(
          process.cwd(),
          "public",
          application.resumeUrl,
        );
        await unlink(filePath);
      } catch (err) {
        console.error("Error deleting file:", err);
        // Continue anyway
      }
    }

    await JobApplication.findByIdAndDelete(id);

    return NextResponse.json({ message: "Application deleted" });
  } catch (error) {
    console.error("Error deleting application:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
