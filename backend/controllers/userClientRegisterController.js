import userClientModel from "../models/userClientModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendVerificationEmail } from "../config/mailer.js";

const userClientRegister = async (req, res) => {
  try {
    const { clientName, clientEmail, clientPassword } = req.body;

    const isUserExist = await userClientModel.findOne({ clientEmail });

    if (isUserExist) {
      return res.status(400).json({ message: "User already exists...!!" });
    }

    const token = crypto.randomBytes(32).toString("hex");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(clientPassword, salt);

    const clientData = await userClientModel.create({
      clientName,
      clientEmail : clientEmail.toLowerCase(),
      clientPassword: hashedPassword,
      emailVerificationToken: token,
      emailVerificationTokenExpires: Date.now() + 3600000, 
    });

    sendVerificationEmail(clientEmail, token)
      .then(() => console.log("Verification email sent"))
      .catch(err => console.log("Email error:", err));


    res.status(201).json({ message: "Registration successful!" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default userClientRegister;