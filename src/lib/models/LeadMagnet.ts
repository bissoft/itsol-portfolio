import mongoose, { Schema, Model, models } from "mongoose";

export interface ILeadMagnetContent {
  badge: string;
  heading: string;
  subheading: string;
  buttonText: string;
  footerText: string;
  whitepaperTitle: string;
  whitepaperSubtitle: string;
  whitepaperTag: string;
  pdfUrl: string;
}

const LeadMagnetContentSchema = new Schema<ILeadMagnetContent>(
  {
    badge: { type: String, default: "Free Whitepaper" },
    heading: {
      type: String,
      default: "The Enterprise Digital Transformation Roadmap 2026",
    },
    subheading: {
      type: String,
      default:
        "A practical framework for C-Suite executives to modernize infrastructure, optimize workflows, and drive measurable ROI in 90 days.",
    },
    buttonText: { type: String, default: "Download Guide" },
    footerText: {
      type: String,
      default:
        "Join 5,000+ executives who read our insights. Unsubscribe appropriately.",
    },
    whitepaperTitle: {
      type: String,
      default: "Strategic Playbook for Software Modernization",
    },
    whitepaperSubtitle: {
      type: String,
      default: "A Practical Framework in 2026",
    },
    whitepaperTag: { type: String, default: "Whitepaper" },
    pdfUrl: { type: String, default: "" },
  },
  { timestamps: true },
);

const LeadMagnetContent: Model<ILeadMagnetContent> =
  models.LeadMagnetContent ||
  mongoose.model<ILeadMagnetContent>(
    "LeadMagnetContent",
    LeadMagnetContentSchema,
  );

export default LeadMagnetContent;
