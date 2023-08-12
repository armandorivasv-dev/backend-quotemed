import { Router } from "express";
import { loginController } from "../controllers/index.js";

const router = Router();

router.route("/").post(loginController.loginUser);

export default router;
