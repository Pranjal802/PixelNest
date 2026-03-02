import crypto from "crypto";
import User from "../models/userClientModel.js";
import { sendResetEmail } from "../config/mailer.js";

const forgotPassword = async (req, res) => {
  try {
    const { clientEmail } = req.body;

    if (!clientEmail) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({
      clientEmail: clientEmail.toLowerCase(),
    });

    if (user) {
      const token = crypto.randomBytes(32).toString("hex");

      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 min

      await user.save();

      await sendResetEmail(user.clientEmail, token);
      console.log("Reset email sent");
    }

    return res.status(200).json({
      success: true,
      message: "If this email exists, a reset link has been sent.",
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default forgotPassword;