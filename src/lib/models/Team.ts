import mongoose, { Schema, Model, models } from "mongoose";

export interface ITeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  department: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface ITeamContent {
  heading: string;
  subheading: string;
  members: ITeamMember[];
  galleryHeading: string;
  gallerySubheading: string;
  galleryImages: string[];
}

const TeamMemberSchema = new Schema<ITeamMember>({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  bio: { type: String, required: true },
  department: { type: String, default: "engineering" },
  socials: {
    linkedin: { type: String, default: "" },
    twitter: { type: String, default: "" },
    github: { type: String, default: "" },
  },
});

const TeamContentSchema = new Schema<ITeamContent>(
  {
    heading: { type: String, default: "Meet Our Experts" },
    subheading: {
      type: String,
      default:
        "A diverse team of passionate technologists dedicated to building the future of software.",
    },
    members: { type: [TeamMemberSchema], default: [] },
    galleryHeading: {
      type: String,
      default: "We're a global team of innovators",
    },
    gallerySubheading: {
      type: String,
      default:
        "Navigate complex digital initiatives with confidence, propelling your journey towards innovation and growth.",
    },
    galleryImages: { type: [String], default: [] },
  },
  { timestamps: true },
);

const TeamContent: Model<ITeamContent> =
  models.TeamContent ||
  mongoose.model<ITeamContent>("TeamContent", TeamContentSchema);

export default TeamContent;
