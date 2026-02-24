import mongoose, { Schema, Model, models } from "mongoose";

export interface IIndustryStat {
  value: string;
  label: string;
  iconName: string;
}

export interface IIndustrySolution {
  title: string;
  description: string;
  iconName: string;
}

export interface IIndustryFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface IIndustryCaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface IIndustryTestimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface IIndustryBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface IIndustryProject {
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

export interface IIndustryPageContent {
  slug: string; // The URL slug (e.g., 'fintech', 'healthcare')
  heroTitle: string;
  heroDescription: string;
  heroBadge: string;
  stats: IIndustryStat[];
  solutions: IIndustrySolution[];
  features: IIndustryFeature[];
  caseStudies: IIndustryCaseStudy[];
  testimonials: IIndustryTestimonial[];
  whyChooseUs: IIndustryBenefit[];
  projects: IIndustryProject[];
  customSections?: ICustomSection[];
}

const IndustryPageSchema = new Schema<IIndustryPageContent>(
  {
    slug: { type: String, required: true, unique: true },
    heroTitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    heroBadge: { type: String, default: "" },
    stats: [
      {
        value: String,
        label: String,
        iconName: String,
      },
    ],
    solutions: [
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
    caseStudies: [
      {
        title: String,
        challenge: String,
        solution: String,
        results: [String],
      },
    ],
    testimonials: [
      {
        quote: String,
        author: String,
        role: String,
        rating: Number,
      },
    ],
    whyChooseUs: [
      {
        title: String,
        description: String,
        iconName: String,
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
        items: [
          {
            title: String,
            description: String,
            iconName: String,
          },
        ],
      },
    ],
  },
  { timestamps: true },
);

const IndustryPage: Model<IIndustryPageContent> =
  models.IndustryPage ||
  mongoose.model<IIndustryPageContent>("IndustryPage", IndustryPageSchema);

export default IndustryPage;
