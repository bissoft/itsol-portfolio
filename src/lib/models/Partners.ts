import mongoose, { Schema, Model, models } from "mongoose";

export interface IPartnerItem {
  name: string;
  logo: string;
  width: string;
}

export interface IPartnersContent {
  heading: string;
  partners: IPartnerItem[];
}

const PartnerItemSchema = new Schema<IPartnerItem>({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  width: { type: String, default: "w-32" },
});

const PartnersContentSchema = new Schema<IPartnersContent>(
  {
    heading: {
      type: String,
      default: "Our partnerships with \n industry leaders",
    },
    partners: { type: [PartnerItemSchema], default: [] },
  },
  { timestamps: true },
);

const PartnersContent: Model<IPartnersContent> =
  models.PartnersContent ||
  mongoose.model<IPartnersContent>("PartnersContent", PartnersContentSchema);

export default PartnersContent;
