import mongoose, { Schema, Model, models } from "mongoose";

export interface IHeroContent {
  badgeText: string;
  headlineLine1: string;
  headlineLine2: string;
  subtext: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
  leadMagnetTitle: string;
  leadMagnetSubtitle: string;
  leadMagnetTag: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

const HeroSchema = new Schema<IHeroContent>(
  {
    badgeText: { type: String, default: "Empowering Digital Evolution" },
    headlineLine1: { type: String, default: "End-to-End Digital Solutions" },
    headlineLine2: { type: String, default: "in One Place" },
    subtext: {
      type: String,
      default:
        "We architect robust digital solutions that scale. From AI-driven platforms to enterprise ecosystems, we turn complex challenges into elegant software.",
    },
    button1Text: { type: String, default: "Get Started" },
    button1Link: { type: String, default: "#" },
    button2Text: { type: String, default: "Let's Talk" },
    button2Link: {
      type: String,
      default: "https://calendly.com/etechnocrat/saas-app",
    },
    leadMagnetTitle: { type: String, default: "Strategic Playbook" },
    leadMagnetSubtitle: { type: String, default: "Modernization" },
    leadMagnetTag: { type: String, default: "2026 Edition" },
    backgroundImage: { type: String },
    backgroundVideo: { type: String },
  },
  { timestamps: true },
);

// Use existing model if present, or create new one
const Hero: Model<IHeroContent> =
  models.Hero || mongoose.model<IHeroContent>("Hero", HeroSchema);

export default Hero;
