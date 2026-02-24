import mongoose, { Schema, Model, models } from "mongoose";

export interface IAboutTimeline {
  year: string;
  event: string;
  description: string;
}

export interface IAboutValue {
  title: string;
  description: string;
  iconName: string; // lucide icon name
}

export interface IAboutStat {
  label: string;
  value: string;
  iconName: string;
}

export interface IAboutCulture {
  title: string;
  description: string;
  emoji: string;
}

export interface IAboutContent {
  heroHeading: string;
  heroSubheading: string;
  heroDescription: string;
  missionHeading: string;
  missionDescription: string;
  visionDescription: string;
  approachDescription: string;
  timeline: IAboutTimeline[];
  values: IAboutValue[];
  stats: IAboutStat[];
  culture: IAboutCulture[];
}

const TimelineSchema = new Schema<IAboutTimeline>({
  year: { type: String, required: true },
  event: { type: String, required: true },
  description: { type: String, required: true },
});

const ValueSchema = new Schema<IAboutValue>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  iconName: { type: String, required: true },
});

const StatSchema = new Schema<IAboutStat>({
  label: { type: String, required: true },
  value: { type: String, required: true },
  iconName: { type: String, required: true },
});

const CultureSchema = new Schema<IAboutCulture>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  emoji: { type: String, required: true },
});

const AboutContentSchema = new Schema<IAboutContent>(
  {
    heroHeading: { type: String, default: "Building the Digital Future" },
    heroSubheading: { type: String, default: "Our Story" },
    heroDescription: {
      type: String,
      default:
        "We're a passionate team of innovators, creators, and problem-solvers dedicated to transforming businesses through technology.",
    },
    missionHeading: { type: String, default: "Our Mission" },
    missionDescription: {
      type: String,
      default:
        "To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.",
    },
    visionDescription: {
      type: String,
      default:
        "To be the most trusted technology partner for businesses undergoing digital transformation.",
    },
    approachDescription: {
      type: String,
      default:
        "We combine deep technical expertise with business acumen to deliver solutions that drive measurable business impact.",
    },
    timeline: { type: [TimelineSchema], default: [] },
    values: { type: [ValueSchema], default: [] },
    stats: { type: [StatSchema], default: [] },
    culture: { type: [CultureSchema], default: [] },
  },
  { timestamps: true },
);

const AboutContent: Model<IAboutContent> =
  models.AboutContent ||
  mongoose.model<IAboutContent>("AboutContent", AboutContentSchema);

export default AboutContent;
