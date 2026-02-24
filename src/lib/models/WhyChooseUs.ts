import mongoose, { Schema, Model, models } from "mongoose";

export interface IWhyChooseUsFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface IWhyChooseUsContent {
  heading: string;
  subheading: string;
  features: IWhyChooseUsFeature[];
}

const WhyChooseUsFeatureSchema = new Schema<IWhyChooseUsFeature>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  iconName: { type: String, required: true },
});

const WhyChooseUsContentSchema = new Schema<IWhyChooseUsContent>(
  {
    heading: {
      type: String,
      default: "We Don't Just Write Code, \n We Engineer Success",
    },
    subheading: {
      type: String,
      default:
        "Partner with a team that treats your business like their own. We combine technical expertise with business acumen to deliver measurable results.",
    },
    features: { type: [WhyChooseUsFeatureSchema], default: [] },
  },
  { timestamps: true },
);

const WhyChooseUsContent: Model<IWhyChooseUsContent> =
  models.WhyChooseUsContent ||
  mongoose.model<IWhyChooseUsContent>(
    "WhyChooseUsContent",
    WhyChooseUsContentSchema,
  );

export default WhyChooseUsContent;
