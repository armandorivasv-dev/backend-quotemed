import { User } from "../models/user.model.js";

const getUserByName = async (userName) => {
  const user = await User.findOne({ userName });
  return user;
};

export const loginDao = { getUserByName };
