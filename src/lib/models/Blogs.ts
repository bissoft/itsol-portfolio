import mongoose, { Schema, Model, models } from "mongoose";

export interface IBlogItem {
  type: string; // e.g. "Whitepaper", "Webinar", "Article"
  title: string;
  category: string;
  image: string;
  link?: string;
  author: string;
  authorImage?: string;
}

export interface IBlogsContent {
  heading: string;
  blogs: IBlogItem[];
}

const BlogItemSchema = new Schema<IBlogItem>({
  type: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, default: "#" },
  author: { type: String, default: "ITSOL Team" },
  authorImage: { type: String, default: "" },
});

const BlogsContentSchema = new Schema<IBlogsContent>(
  {
    heading: { type: String, default: "Latest insights & resources" },
    blogs: { type: [BlogItemSchema], default: [] },
  },
  { timestamps: true },
);

// Force delete the model from cache in development to ensure schema changes are picked up
if (process.env.NODE_ENV !== "production") {
  delete (mongoose as any).models.BlogsContent;
}

const BlogsContent: Model<IBlogsContent> =
  models.BlogsContent ||
  mongoose.model<IBlogsContent>("BlogsContent", BlogsContentSchema);

export default BlogsContent;
