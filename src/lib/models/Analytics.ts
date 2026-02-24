import mongoose, { Schema, models, model } from "mongoose";

export interface IAnalytics {
  path: string;
  count: number;
  lastVisited: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  path: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
  lastVisited: { type: Date, default: Date.now },
});

const Analytics = models.Analytics || model("Analytics", AnalyticsSchema);

export default Analytics;
