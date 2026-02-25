import userClientModel from "../models/userClientModel.js";
import bcrypt from "bcrypt";

const userClientRegister = async (req, res) => {
  try {
    const { clientName, clientEmail, clientPassword } = req.body;

    const isUserExist = await userClientModel.findOne({ clientEmail });

    if (isUserExist) {
      return res.status(400).json({ message: "User already exists...!!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(clientPassword, salt);

    const clientData = await userClientModel.create({
      clientName,
      clientEmail,
      clientPassword: hashedPassword,
    });

    res.status(201).json({ message: "Registration successful!" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default userClientRegister;