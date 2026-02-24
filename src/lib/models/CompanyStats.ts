import mongoose, { Schema, Model, models } from "mongoose";

export interface IStatItem {
  value: string;
  label: string;
}

export interface IClientItem {
  name: string;
  logo: string;
}

export interface ICompanyStatsContent {
  heading: string;
  subheading: string;
  stats: IStatItem[];
  clients: IClientItem[];
}

const StatItemSchema = new Schema<IStatItem>({
  value: { type: String, required: true },
  label: { type: String, required: true },
});

const ClientItemSchema = new Schema<IClientItem>({
  name: { type: String, required: true },
  logo: { type: String, required: true },
});

const CompanyStatsSchema = new Schema<ICompanyStatsContent>(
  {
    heading: {
      type: String,
      default: "Partnering for Digital Excellence & Growth.",
    },
    subheading: {
      type: String,
      default:
        "Delivering enterprise-grade software solutions that drive efficiency, scalability, and long-term success.",
    },
    stats: { type: [StatItemSchema], default: [] },
    clients: { type: [ClientItemSchema], default: [] },
  },
  { timestamps: true },
);

const CompanyStats: Model<ICompanyStatsContent> =
  models.CompanyStats ||
  mongoose.model<ICompanyStatsContent>("CompanyStats", CompanyStatsSchema);

export default CompanyStats;
