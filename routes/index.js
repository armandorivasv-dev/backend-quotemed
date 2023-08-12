import { Router } from "express";
//import productRouter from "./product.route.js";
import userRouter from "./user.route.js";
import patientRouter from "./patient.route.js";
import doctorRouter from "./doctor.route.js";
import quoteRouter from "./quote.route.js";
import medicineRouter from "./medicine.route.js";
import loginRouter from "./login.route.js";

const router = Router();

//router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/patient", patientRouter);
router.use("/doctor", doctorRouter);
router.use("/quote", quoteRouter);
router.use("/medicine", medicineRouter);
router.use("/login", loginRouter);

export default router;
