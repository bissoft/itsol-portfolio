import mongoose, { Schema, Model, models } from "mongoose";

export interface IAwardItem {
  title: string;
  organization: string;
  iconName: string;
  color?: string;
}

export interface ICertificationItem {
  name: string;
  desc: string;
}

export interface IAwardsContent {
  heading: string;
  awards: IAwardItem[];
  certifications: ICertificationItem[];
}

const AwardItemSchema = new Schema<IAwardItem>({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  iconName: { type: String, required: true },
  color: { type: String, default: "text-blue-600" },
});

const CertificationItemSchema = new Schema<ICertificationItem>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
});

const AwardsSchema = new Schema<IAwardsContent>(
  {
    heading: {
      type: String,
      default: "We’ve been recognized by the best, year after year.",
    },
    awards: { type: [AwardItemSchema], default: [] },
    certifications: { type: [CertificationItemSchema], default: [] },
  },
  { timestamps: true },
);

const Awards: Model<IAwardsContent> =
  models.Awards || mongoose.model<IAwardsContent>("Awards", AwardsSchema);

export default Awards;
