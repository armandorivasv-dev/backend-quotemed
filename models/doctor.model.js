import { Schema, model } from "mongoose";

const doctorSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  especialist: { type: String, required: true },
  dateBird: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const doctorModel = model("doctor", doctorSchema);

export const Doctor = doctorModel;
