import express from "express";

import clientForgotPassword from "../../controllers/clientForgotPasswordController.js";

const router = express.Router();

router.post('/forgot-password',clientForgotPassword);
export default router;