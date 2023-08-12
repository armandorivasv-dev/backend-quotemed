import { WSresponse } from "../libs/WSresponse.js";
import { userService } from "../services/index.js";

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    res.json(new WSresponse(response, "user created"));
  } catch (error) {
    res.json(new WSresponse(null, "error creating user", error, 500));
  }
};

const getUsers = async (req, res) => {
  try {
    const response = await userService.getAllUsers();
    res.json(new WSresponse(response, "success"));
  } catch (error) {
    res.json(new WSresponse(null, "Error: Internal server error", error, 500));
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await userService.getUserById(req.params.id);
    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res.status(460).json(new WSresponse(null, error, true, 460));
  }
};

const updateUser = async (req, res) => {
  try {
    const response = await userService.updateUser(req.params.id, req.body);
    console.log("user.controller - response", response);
    res.json(new WSresponse(response, "user updated"));
  } catch (error) {
    console.log("error", error);
    res.status(489).json(new WSresponse(null, error, true, 489));
  }
};

export const userController = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
};
