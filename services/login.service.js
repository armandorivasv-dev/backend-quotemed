import { loginDao } from "../daos/login.dao.js";

const getUserByName = async (userName) => {
  if (typeof userName !== "string") throw "userName error type: must be string";

  const user = await loginDao.getUserByName(userName);

  if (!userName) throw "userName doesn`t exist";

  return user;
};

export const loginService = { getUserByName };
