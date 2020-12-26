import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;

export interface BlogDoc extends Document {
  slug: string;
  title: string;
  subTitle: string;
  content: string;
  userId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface BlogModel extends Model<BlogDoc> {}

const blogSchema = new Schema({
  // slug is used in the blogs for readability
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, required: true, maxlength: 96 },
  subTitle: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: String, required: true },
  status: {
    type: String,
    default: "draft",
    enum: ["draft", "published", "deleted"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Blog = mongoose.model<BlogDoc, BlogModel>("Blog", blogSchema);
