import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;

export interface PortfolioDoc extends Document {
  title: string;
  company: string;
  companyWebsite: string;
  location: string;
  jobTitle: string;
  description: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  createdAt: string;
}

export interface PortfolioModel extends Model<PortfolioDoc> {}

const portfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  company: { type: String, required: true, maxlength: 64 },
  companyWebsite: { type: String, required: true, maxlength: 128 },
  location: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Portfolio = mongoose.model<PortfolioDoc, PortfolioModel>(
  "Portfolio",
  portfolioSchema
);
// portfolio.create()   «Array|Object» Documents to insert, as a spread or array
// products.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === products.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
