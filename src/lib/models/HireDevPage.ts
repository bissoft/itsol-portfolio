import mongoose, { Schema, Document, Model } from "mongoose";

export interface IHireDevPageContent extends Document {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  heroBadge?: string;
  stats?: {
    value: string;
    label: string;
    iconName: string;
  }[];
  process?: {
    title: string;
    description: string;
    iconName: string;
  }[];
  features?: {
    title: string;
    description: string;
    iconName: string;
  }[];
  benefits?: {
    title: string;
    description: string;
    iconName: string;
  }[];
  techStack?: {
    category: string;
    skills: string[];
  }[];
  customSections?: {
    title: string;
    subheading?: string;
    items: {
      title: string;
      description: string;
      iconName: string;
    }[];
  }[];
  projects?: {
    id: string;
    title: string;
    category: string;
    image: string;
  }[];
}

const HireDevPageSchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    heroTitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    heroBadge: { type: String },
    stats: [
      {
        value: String,
        label: String,
        iconName: String,
      },
    ],
    process: [
      {
        title: String,
        description: String,
        iconName: String,
      },
    ],
    features: [
      {
        title: String,
        description: String,
        iconName: String,
      },
    ],
    benefits: [
      {
        title: String,
        description: String,
        iconName: String,
      },
    ],
    techStack: [
      {
        category: String,
        skills: [String],
      },
    ],
    customSections: [
      {
        title: String,
        subheading: String,
        items: [
          {
            title: String,
            description: String,
            iconName: String,
          },
        ],
      },
    ],
    projects: [
      {
        id: String,
        title: String,
        category: String,
        image: String,
      },
    ],
  },
  { timestamps: true },
);

const HireDevPage: Model<IHireDevPageContent> =
  mongoose.models.HireDevPage ||
  mongoose.model<IHireDevPageContent>("HireDevPage", HireDevPageSchema);

export default HireDevPage;
