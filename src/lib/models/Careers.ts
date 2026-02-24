import mongoose, { Schema, Model, models } from "mongoose";

export interface ICareersBenefit {
  iconName: string;
  title: string;
  description: string;
}

export interface ICareersStat {
  label: string;
  value: string;
}

export interface ICareersDepartment {
  id: string;
  label: string;
}

export interface ICareersJob {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface ICareersContent {
  heroTitle: string;
  heroDescription: string;
  benefits: ICareersBenefit[];
  stats: ICareersStat[];
  departments: ICareersDepartment[];
  jobs: ICareersJob[];
}

const BenefitSchema = new Schema<ICareersBenefit>({
  iconName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const StatSchema = new Schema<ICareersStat>({
  label: { type: String, required: true },
  value: { type: String, required: true },
});

const DepartmentSchema = new Schema<ICareersDepartment>({
  id: { type: String, required: true },
  label: { type: String, required: true },
});

const JobSchema = new Schema<ICareersJob>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  salary: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: [String], default: [] },
  posted: { type: String, required: true },
});

const CareersContentSchema = new Schema<ICareersContent>(
  {
    heroTitle: { type: String, default: "Build the Future With Us" },
    heroDescription: {
      type: String,
      default:
        "Join a team of passionate innovators solving complex challenges at a global scale.",
    },
    benefits: { type: [BenefitSchema], default: [] },
    stats: { type: [StatSchema], default: [] },
    departments: { type: [DepartmentSchema], default: [] },
    jobs: { type: [JobSchema], default: [] },
  },
  { timestamps: true },
);

const CareersContent: Model<ICareersContent> =
  models.CareersContent ||
  mongoose.model<ICareersContent>("CareersContent", CareersContentSchema);

export default CareersContent;
