import mongoose, { Schema, Document, Model, models } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  source: string;
  subscribedAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    source: {
      type: String,
      default: "general",
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Subscriber: Model<ISubscriber> =
  models.Subscriber ||
  mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);

export default Subscriber;
