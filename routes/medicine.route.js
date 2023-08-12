import { Router } from "express";
import { medicineController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(medicineController.getAllMedicines)
  .post(medicineController.createMedicine);

router
  .route("/:id")
  .get(medicineController.getMedicineById)
  .put(medicineController.updateMedicine)
  .delete(medicineController.deleteMedicine);

export default router;
