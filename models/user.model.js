import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

const userModel = model("user", userSchema);

export const User = userModel;
