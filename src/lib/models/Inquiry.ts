import mongoose, { Schema, Model, models } from "mongoose";

export interface IInquiry {
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "read", "replied"], default: "new" },
  },
  { timestamps: true },
);

const Inquiry: Model<IInquiry> =
  models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);

export default Inquiry;
