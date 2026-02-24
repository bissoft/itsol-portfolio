import mongoose, { Schema, Model, models } from "mongoose";

export interface IProjectResult {
  metric: string;
  label: string;
}

export interface IProjectProcess {
  phase: string;
  description: string;
  duration: string;
}

export interface IProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ITestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface IProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  client: string;
  year: string;
  description: string;
  technologies: string[];
  results: IProjectResult[];
  challenge: string;
  solution: string;
  process: IProjectProcess[];
  testimonial: IProjectTestimonial;
  imageUrl: string;
  images: string[];
  bgColor: string;
  location: string;
  date: string;
  website: string;
  stats?: string;
}

export interface IProjectsContent {
  heading: string;
  subheading: string;
  ctaHeading?: string;
  ctaButtonText?: string;
  projects: IProjectItem[];
  testimonials: ITestimonialItem[];
}

const ProjectResultSchema = new Schema<IProjectResult>({
  metric: { type: String, required: true },
  label: { type: String, required: true },
});

const ProjectProcessSchema = new Schema<IProjectProcess>({
  phase: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
});

const ProjectTestimonialSchema = new Schema<IProjectTestimonial>({
  quote: { type: String, default: "" },
  author: { type: String, default: "" },
  role: { type: String, default: "" },
});

const TestimonialItemSchema = new Schema<ITestimonialItem>({
  id: { type: String, required: true },
  name: { type: String, default: "" },
  role: { type: String, default: "" },
  content: { type: String, default: "" },
  rating: { type: Number, default: 5 },
  image: { type: String, default: "" },
});

const ProjectItemSchema = new Schema<IProjectItem>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  client: { type: String, default: "" },
  year: { type: String, default: "" },
  description: { type: String, default: "" },
  technologies: { type: [String], default: [] },
  results: { type: [ProjectResultSchema], default: [] },
  challenge: { type: String, default: "" },
  solution: { type: String, default: "" },
  process: { type: [ProjectProcessSchema], default: [] },
  testimonial: { type: ProjectTestimonialSchema, default: {} },
  imageUrl: { type: String, default: "" },
  images: { type: [String], default: [] },
  bgColor: { type: String, default: "from-blue-600 to-indigo-700" },
  location: { type: String, default: "" },
  date: { type: String, default: "" },
  website: { type: String, default: "" },
  stats: { type: String, default: "" },
});

const ProjectsContentSchema = new Schema<IProjectsContent>(
  {
    heading: { type: String, default: "Featured Growth Stories" },
    subheading: {
      type: String,
      default:
        "See how we help businesses scale, optimize, and transform. Real results, real growth.",
    },
    ctaHeading: { type: String, default: "Ready to Build Something Great?" },
    ctaButtonText: { type: String, default: "Start Your Project" },
    projects: { type: [ProjectItemSchema], default: [] },
    testimonials: { type: [TestimonialItemSchema], default: [] },
  },
  { timestamps: true },
);

const ProjectsContent: Model<IProjectsContent> =
  models.ProjectsContentV3 ||
  mongoose.model<IProjectsContent>("ProjectsContentV3", ProjectsContentSchema);

export default ProjectsContent;
