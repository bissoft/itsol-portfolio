import mongoose, { Schema, Model, models } from "mongoose";

export interface ISpeaker {
  name: string;
  role: string;
}

export interface IConversationItem {
  title: string;
  partner: string;
  partnerLogo: string;
  image: string;
  audioUrl: string;
  speakers: ISpeaker[];
}

export interface IConversationsContent {
  heading: string;
  conversations: IConversationItem[];
}

const SpeakerSchema = new Schema<ISpeaker>({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

const ConversationItemSchema = new Schema<IConversationItem>({
  title: { type: String, required: true },
  partner: { type: String, required: true },
  partnerLogo: { type: String, required: true },
  image: { type: String, required: true },
  audioUrl: { type: String, default: "" },
  speakers: { type: [SpeakerSchema], default: [] },
});

const ConversationsContentSchema = new Schema<IConversationsContent>(
  {
    heading: {
      type: String,
      default: "Conversations that \n go beyond the code",
    },
    conversations: { type: [ConversationItemSchema], default: [] },
  },
  { timestamps: true },
);

const ConversationsContent: Model<IConversationsContent> =
  models.ConversationsContent ||
  mongoose.model<IConversationsContent>(
    "ConversationsContent",
    ConversationsContentSchema,
  );

export default ConversationsContent;
