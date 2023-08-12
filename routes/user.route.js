import { Router } from "express";
import { userController } from "../controllers/index.js";

const router = Router();

router.route("/").get(userController.getUsers).post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser);

export default router;
