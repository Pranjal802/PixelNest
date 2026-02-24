import userClientModel from "../models/userClientModel.js";

const userClient = async (req, res) => {
  try {
    const clientData = await userClientModel.create(req.body);
    console.log(clientData);
    res.status(201).json(clientData);
    console.log("Client registration successful!");
  } catch (error) {
    console.log("Error while creating user client...", error.message);
    res.status(500).json({ message: error.message });
  }
};
export default userClient;