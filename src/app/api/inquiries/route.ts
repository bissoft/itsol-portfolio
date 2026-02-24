import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Inquiry from "@/lib/models/Inquiry";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const newInquiry = new Inquiry({
      name,
      email,
      subject,
      message,
    });

    await newInquiry.save();

    return NextResponse.json(
      { message: "Inquiry saved successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  // This would typically be protected, but for now we just implement the fetching
  await dbConnect();
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return NextResponse.json(inquiries);
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 },
    );
  }
}
