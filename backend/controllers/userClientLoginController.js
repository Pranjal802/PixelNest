// import userClientModel from "../models/userClientModel.js";
// import bcrypt from "bcrypt";

// const userClientLogin = async (req, res) => {
//   try {
//     const { clientEmail, clientPassword } = req.body;

//     const clientData = await userClientModel.findOne({
//       clientEmail,
//     });

//     if (!clientData.isEmailVerified) {
//       return res.status(401).json({
//         message: "Please verify your email before logging in.",
//       });
//     }

//     if (!clientData) {
//       return res.status(404).json({ message: "Client not found" });
//     }
//     const isPasswordValid = await bcrypt.compare(
//       clientPassword,
//       clientData.clientPassword
//     );
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }
//     res.status(200).json({
//       message: "Login successful",
//       client: {
//         id: clientData._id,
//         email: clientData.clientEmail,
//       },
//     });
//     console.log("Client Login successful!");
//   } catch (error) {
//     console.log("Error while login...", error.message);
//     res.status(500).json({ message: error.message });
//   }
// };
// export default userClientLogin;


import userClientModel from "../models/userClientModel.js";
import bcrypt from "bcrypt";

const userClientLogin = async (req, res) => {
  try {
    const { clientEmail, clientPassword } = req.body;

    const clientData = await userClientModel.findOne({ clientEmail });

    // ❌ User not found
    if (!clientData) {
      return res.status(401).json({
        success: false,
        message: "Login failed. Invalid email or password.",
      });
    }

    // ❌ Email not verified
    if (!clientData.isEmailVerified) {
      return res.status(401).json({
        success: false,
        message: "Please verify your email before logging in.",
      });
    }

    // ❌ Wrong password
    const isPasswordValid = await bcrypt.compare(
      clientPassword,
      clientData.clientPassword
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Login failed. Invalid email or password.",
      });
    }

    // ✅ Success
    return res.status(200).json({
      success: true,
      message: "Login successful!",
      client: {
        id: clientData._id,
        email: clientData.clientEmail,
      },
    });

  } catch (error) {
    console.log("Login Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Login failed. Please try again later.",
    });
  }
};

export default userClientLogin;