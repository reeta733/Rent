import express from "express";
import { createPaymentOrder,verifyPayment } from "../controllers/RazorpayController.js";
const router = express.Router();

router.post("/create-order", createPaymentOrder);
router.post("/verify-payment", verifyPayment);

export default router;
