import { User } from "../models/user.model.js";

const createUser = async (userToCrearte) => {
  const createdUser = await User.create({ ...userToCrearte, role: "USER" });
  return createdUser;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

const updateUser = async (userId, userUpdate) => {
  const updatedUser = await User.updateOne({ _id: userId }, userUpdate);
  return updatedUser;
};

export const userDao = { createUser, getAllUsers, getUserById, updateUser };
