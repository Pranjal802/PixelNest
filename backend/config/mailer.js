import nodemailer from "nodemailer";
import dotenv from "dotenv";
import constants from "./constants.js";

export const sendVerificationEmail = async (email, token) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password
    },
  });
  const frontend_url = "https://pixelnestsolutions.netlify.app"

  const verificationUrl = `${frontend_url}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: `
      <h2>Email Verification</h2>
      <p>Click the link below to verify your email:</p>
      <a href="${verificationUrl}">Verify Your Email</a>
    `,
  });
};