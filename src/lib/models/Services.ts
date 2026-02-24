import mongoose, { Schema, Model, models } from "mongoose";

export interface ITechItem {
  name: string;
  iconName: string; // Store icon name as string (e.g. "Cpu", "Database")
}

export interface IServiceItem {
  id: string; // Unique identifier for the service
  name: string;
  iconName: string;
  description: string;
  features: string[];
  tech: ITechItem[];
  path: string;
}

export interface IServicesContent {
  heading: string;
  subheading: string;
  services: IServiceItem[];
}

const TechItemSchema = new Schema<ITechItem>({
  name: { type: String, required: true },
  iconName: { type: String, required: true },
});

const ServiceItemSchema = new Schema<IServiceItem>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  iconName: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], default: [] },
  tech: { type: [TechItemSchema], default: [] },
  path: { type: String, required: true },
});

const ServicesContentSchema = new Schema<IServicesContent>(
  {
    heading: { type: String, default: "Our Expertise" },
    subheading: {
      type: String,
      default:
        "Comprehensive software engineering services for digital transformation. We build the systems that power modern enterprises.",
    },
    services: { type: [ServiceItemSchema], default: [] },
  },
  { timestamps: true },
);

const ServicesContent: Model<IServicesContent> =
  models.ServicesContent ||
  mongoose.model<IServicesContent>("ServicesContent", ServicesContentSchema);

export default ServicesContent;
