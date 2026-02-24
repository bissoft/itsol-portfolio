import mongoose, { Schema, Model, models } from "mongoose";

export interface IFaqItem {
  question: string;
  answer: string;
}

export interface IFaqsContent {
  heading: string;
  subheading: string;
  faqs: IFaqItem[];
}

const FaqItemSchema = new Schema<IFaqItem>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const FaqsContentSchema = new Schema<IFaqsContent>(
  {
    heading: { type: String, default: "Frequently Asked Questions" },
    subheading: {
      type: String,
      default: "Everything you need to know about our process and services.",
    },
    faqs: { type: [FaqItemSchema], default: [] },
  },
  { timestamps: true },
);

const FaqsContent: Model<IFaqsContent> =
  models.FaqsContent ||
  mongoose.model<IFaqsContent>("FaqsContent", FaqsContentSchema);

export default FaqsContent;
