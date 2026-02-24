import express from "express";

import userClientRegister from "../../controllers/userClientRegisterController.js";

const router = express.Router();

router.post('/client-register',userClientRegister);
export default router;


// import express from 'express'

// import createContact from '../controllers/contactController.js'

// const router = express.Router();

// router.post('/', createContact);

// export default router;