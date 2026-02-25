import express from "express";

import userClientLogin from "../../controllers/userClientLoginController.js";

const router = express.Router();

router.post('/client-login',userClientLogin);
export default router;