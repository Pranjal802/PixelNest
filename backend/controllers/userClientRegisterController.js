import userClientModel from "../models/userClientModel.js";
import bcrypt from "bcrypt";

const userClientRegister = async (req, res) => {
  try {
    const { clientName, clientEmail, clientPassword } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(clientPassword, salt);
    const clientData = await userClientModel.create(
      {
        clientName,
        clientEmail,
        clientPassword: hashedPassword,
      }
    );
    console.log(clientData);
    res.status(201).json(clientData);
    console.log("Client registration successful!");
  } catch (error) {
    console.log("Error while creating user client...", error.message);
    res.status(500).json({ message: error.message });
  }
};
export default userClientRegister;