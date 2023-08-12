import { userDao } from "../daos/user.dao.js";
import bcrypt from "bcrypt";

const createUser = async ({ userName, password, email }) => {
  if (typeof userName !== "string") throw "userName error type: must be string";
  if (typeof password !== "string") throw "password error type: must be string";
  if (typeof email !== "string") throw "email error type: must be string";

  const hashedPassword = await bcrypt.hash(password, 2);

  await userDao.createUser({ userName, password: hashedPassword, email });

  return { userName, email };
};

const getAllUsers = async () => {
  const data = await userDao.getAllUsers();
  return data;
};

const getUserById = async (userId) => {
  if (typeof userId !== "string") throw "userId error type: must be string";

  const user = await userDao.getUserById(userId);

  if (!user) throw "user id doesn't exist";

  return user;
};

const updateUser = async (userId, { userName, password, email }) => {
  console.log("user service - password", password);
  if (typeof userName !== "string") throw "userName error type: must be string";
  if (typeof password !== "string") throw "password error type: must be string";
  if (typeof email !== "string") throw "email error type: must be string";

  const hashedPassword = await bcrypt.hash(password, 2);

  const updatedUser = await userDao.updateUser(userId, {
    userName,
    hashedPassword,
    email,
  });
  return updatedUser;
};

export const userService = { createUser, getAllUsers, getUserById, updateUser };
