import express from "express";

import verifyClientEmail from "../../controllers/clientEmailVerificationController.js";

const router = express.Router();

router.get('/verify-email/:token',verifyClientEmail);
export default router;