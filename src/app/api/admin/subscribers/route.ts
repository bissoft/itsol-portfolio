import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Subscriber from "@/lib/models/Subscriber";

export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();

  try {
    const subscribers = await Subscriber.find().sort({ subscribedAt: -1 });
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  await dbConnect();

  try {
    const { id } = await req.json();
    await Subscriber.findByIdAndDelete(id);
    return NextResponse.json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    return NextResponse.json(
      { error: "Failed to delete subscriber" },
      { status: 500 },
    );
  }
}
