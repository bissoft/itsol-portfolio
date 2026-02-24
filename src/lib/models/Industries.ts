import mongoose, { Schema, Model, models } from "mongoose";

export interface IIndustryItem {
  title: string;
  iconName: string;
  items: string[];
  color: string;
  link: string;
}

export interface IIndustriesContent {
  heading: string;
  subheading: string;
  industries: IIndustryItem[];
}

const IndustryItemSchema = new Schema<IIndustryItem>({
  title: { type: String, required: true },
  iconName: { type: String, required: true },
  items: { type: [String], default: [] },
  color: { type: String, default: "bg-blue-50 text-blue-600" },
  link: { type: String, required: true },
});

const IndustriesContentSchema = new Schema<IIndustriesContent>(
  {
    heading: {
      type: String,
      default: "Expertise in Software Development Across Multiple Industries",
    },
    subheading: {
      type: String,
      default:
        "We deliver tailored software solutions for diverse sectors, driving innovation and growth through technology.",
    },
    industries: { type: [IndustryItemSchema], default: [] },
  },
  { timestamps: true },
);

const IndustriesContent: Model<IIndustriesContent> =
  models.IndustriesContent ||
  mongoose.model<IIndustriesContent>(
    "IndustriesContent",
    IndustriesContentSchema,
  );

export default IndustriesContent;
