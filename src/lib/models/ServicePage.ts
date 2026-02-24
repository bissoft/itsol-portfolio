import mongoose, { Schema, Model, models } from "mongoose";

export interface IServiceStat {
  value: string;
  label: string;
  iconName: string;
}

export interface IServiceProcess {
  title: string;
  description: string;
  iconName: string;
}

export interface IServiceBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface IServiceFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface IServiceTechStackItem {
  name: string;
  iconName: string;
}

export interface IServiceTechStackCategory {
  category: string;
  items: IServiceTechStackItem[];
}

export interface IServiceProject {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
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

export interface IServicePageContent {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  heroBadge: string;
  stats: IServiceStat[];
  process: IServiceProcess[];
  benefits: IServiceBenefit[];
  features: IServiceFeature[];
  techStack: IServiceTechStackCategory[];
  projects: IServiceProject[];
  customSections?: ICustomSection[];
}

const ServicePageSchema = new Schema<IServicePageContent>(
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
        link: String,
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

const ServicePage: Model<IServicePageContent> =
  models.ServicePage ||
  mongoose.model<IServicePageContent>("ServicePage", ServicePageSchema);

export default ServicePage;
