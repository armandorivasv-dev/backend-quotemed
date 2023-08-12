import { Router } from "express";
import { patientController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(patientController.getAllPatients)
  .post(patientController.createPatient);

router
  .route("/:id")
  .get(patientController.getPatientById)
  .put(patientController.updatePatient)
  .delete(patientController.deletePatient);

export default router;
