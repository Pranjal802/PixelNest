import express from "express";
import resetPassword from "../../controllers/clientResetPasswordController.js";

const router = express.Router();

router.post("/reset-password", resetPassword);

export default router;