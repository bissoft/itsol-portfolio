import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobApplication from "@/lib/models/JobApplication";
import { writeFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const portfolio = formData.get("portfolio") as string;
    const linkedin = formData.get("linkedin") as string;
    const jobId = formData.get("jobId") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const resume = formData.get("resume") as File | null;

    if (!name || !email || !jobId || !jobTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    let resumeUrl = "";
    let resumeName = "";

    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uniqueId =
        Date.now() + "-" + Math.random().toString(36).substring(2, 9);
      const fileName = `${uniqueId}-${resume.name}`;
      resumeName = resume.name;
      const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        fileName,
      );

      await writeFile(uploadPath, buffer);
      resumeUrl = `/uploads/${fileName}`;
    }

    const newApplication = new JobApplication({
      jobId: parseInt(jobId),
      jobTitle,
      name,
      email,
      portfolio,
      linkedin,
      resumeUrl,
      resumeName,
    });

    await newApplication.save();

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}

export async function GET() {
  await dbConnect();
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    return NextResponse.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 },
    );
  }
}
