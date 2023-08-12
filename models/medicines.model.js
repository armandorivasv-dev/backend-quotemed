import { Schema, model } from "mongoose";

const medicineSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  dose: { type: String, required: true },
  frequency: { type: String, required: true },
});

const medicineModel = model("medicine", medicineSchema);

export const Medicine = medicineModel;
