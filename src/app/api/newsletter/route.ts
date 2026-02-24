import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Subscriber from "@/lib/models/Subscriber";
import LeadMagnetContent from "@/lib/models/LeadMagnet";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { email, source } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      let pdfUrl = "";
      if (source === "whitepaper") {
        const leadMagnet = await LeadMagnetContent.findOne();
        pdfUrl = leadMagnet?.pdfUrl || "";
      }
      return NextResponse.json(
        {
          message: "You are already subscribed!",
          pdfUrl: pdfUrl,
        },
        { status: 200 },
      );
    }

    await Subscriber.create({
      email,
      source: source || "podcast_page",
    });

    // Get PDF URL if source is whitepaper
    let pdfUrl = "";
    if (source === "whitepaper") {
      const leadMagnet = await LeadMagnetContent.findOne();
      pdfUrl = leadMagnet?.pdfUrl || "";
    }

    return NextResponse.json(
      {
        message: "Successfully subscribed to our newsletter!",
        pdfUrl: pdfUrl,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: "This email is already subscribed." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 },
    );
  }
}
