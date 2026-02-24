import mongoose, { Schema, Model, models } from "mongoose";

export interface IJobApplication {
  jobId: number;
  jobTitle: string;
  name: string;
  email: string;
  portfolio?: string;
  linkedin?: string;
  resumeUrl?: string;
  resumeName?: string;
  status: "new" | "reviewed" | "interviewing" | "hired" | "rejected";
  createdAt: Date;
}

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    jobId: { type: Number, required: true },
    jobTitle: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    portfolio: { type: String },
    linkedin: { type: String },
    resumeUrl: { type: String },
    resumeName: { type: String },
    status: {
      type: String,
      enum: ["new", "reviewed", "interviewing", "hired", "rejected"],
      default: "new",
    },
  },
  { timestamps: true },
);

const JobApplication: Model<IJobApplication> =
  models.JobApplication ||
  mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema);

export default JobApplication;
