import { Router } from "express";
import { quoteController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(quoteController.getAllQuotes)
  .post(quoteController.createQuote);

router
  .route("/:id")
  .get(quoteController.getQuoteById)
  .put(quoteController.updateQuote)
  .delete(quoteController.deleteQuote);

export default router;
