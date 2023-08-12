import { Router } from "express";
import { doctorController } from "../controllers/index.js";
import userChecker from "../middlewares/userChecker.js";

const router = Router();

router
  .route("/")
  .get(userChecker.checkIsAuth, doctorController.getAllDoctors)
  .post(doctorController.createDoctor);

router
  .route("/:id")
  .get(doctorController.getDoctorById)
  .put(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

export default router;
