import { Schema, model } from "mongoose";

const patientSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  dateBird: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  allergies: { type: String, required: true },
  diseases: { type: String, required: true },
});

const patientModel = model("patient", patientSchema);

export const Patient = patientModel;
