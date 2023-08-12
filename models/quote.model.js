import { Schema, model } from "mongoose";

const quoteSchema = new Schema({
  createAt: { type: Date, required: false },
  updateAt: { type: Date, required: false },
  type: { type: String, required: true },
  description: { type: String, required: true },
  result: { type: String, required: true },
  diagnostic: { type: String, required: true },
  status: { type: String, required: true },
  location: { type: String, required: true },
  idDoctor: { type: String, required: true },
  idPatient: { type: String, required: true },
});

const quoteModel = model("quote", quoteSchema);

export const Quote = quoteModel;
