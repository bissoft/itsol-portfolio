import mongoose, { Schema, Model, models } from "mongoose";

export interface IEngagementStat {
  value: string;
  label: string;
  iconName: string;
}

export interface IEngagementProcess {
  title: string;
  description: string;
  iconName: string;
}

export interface IEngagementBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface IEngagementFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface IEngagementTechStackItem {
  name: string;
  iconName: string;
}

export interface IEngagementTechStackCategory {
  category: string;
  items: IEngagementTechStackItem[];
}

export interface IEngagementProject {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface ICustomSectionItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ICustomSection {
  title: string;
  subheading: string;
  items: ICustomSectionItem[];
}

export interface IEngagementPageContent {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  heroBadge: string;
  stats: IEngagementStat[];
  process: IEngagementProcess[];
  benefits: IEngagementBenefit[];
  features: IEngagementFeature[];
  techStack: IEngagementTechStackCategory[];
  projects: IEngagementProject[];
  customSections?: ICustomSection[];
}

const EngagementPageSchema = new Schema<IEngagementPageContent>(
  {
    slug: { type: String, required: true, unique: true },
    heroTitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    heroBadge: { type: String, default: "" },
    stats: [{ value: String, label: String, iconName: String }],
    process: [{ title: String, description: String, iconName: String }],
    benefits: [{ title: String, description: String, iconName: String }],
    features: [{ title: String, description: String, iconName: String }],
    techStack: [
      {
        category: String,
        items: [{ name: String, iconName: String }],
      },
    ],
    projects: [
      {
        title: String,
        description: String,
        tags: [String],
        image: String,
      },
    ],
    customSections: [
      {
        title: String,
        subheading: String,
        items: [{ title: String, description: String, iconName: String }],
      },
    ],
  },
  { timestamps: true },
);

const EngagementPage: Model<IEngagementPageContent> =
  models.EngagementPage ||
  mongoose.model<IEngagementPageContent>(
    "EngagementPage",
    EngagementPageSchema,
  );

export default EngagementPage;
