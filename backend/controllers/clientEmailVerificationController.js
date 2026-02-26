import User from "../models/userClientModel.js";
const verifyClientEmail = async (req, res) => {
    try {
      const { token } = req.params;
        console.log("Token received for email verification:", token);
      const user = await User.findOne({
        emailVerificationToken: token,
        emailVerificationTokenExpires: { $gt: Date.now() },
      });
      
      console.log("User found for email verification:", user);

      if (!user) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }
  
      user.isEmailVerified = true;
      user.emailVerificationToken = undefined;
      user.emailVerificationTokenExpires = undefined;
  
      await user.save();
  
      res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export default verifyClientEmail;