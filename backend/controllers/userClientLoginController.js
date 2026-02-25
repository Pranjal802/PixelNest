import userClientModel from "../models/userClientModel.js";
import bcrypt from "bcrypt";

const userClientLogin = async (req, res) => {
  try {
    const { clientEmail, clientPassword } = req.body;

    const clientData = await userClientModel.findOne({
      clientEmail,
    });
    if (!clientData) {
      return res.status(404).json({ message: "Client not found" });
    }
    const isPasswordValid = await bcrypt.compare(
      clientPassword,
      clientData.clientPassword
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({
      message: "Login successful",
      client: {
        id: clientData._id,
        email: clientData.clientEmail,
      },
    });
    console.log("Client Login successful!");
  } catch (error) {
    console.log("Error while login...", error.message);
    res.status(500).json({ message: error.message });
  }
};
export default userClientLogin;
