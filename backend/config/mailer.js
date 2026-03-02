import { Resend } from "resend";
import "dotenv/config";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify Your Email",
    html: `
      <h2>Email Verification</h2>
      <p>Click below:</p>
      <a href="${verificationUrl}">Verify Email</a>
    `,
  });
};

export const sendResetEmail = async (email, token) => {
  // const resetUrl = `https://pixelnest-delta.vercel.app/reset-password?token=${token}`;
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Reset Your Password",
      html: `
        <h2>Reset Password</h2>
        <p>Click below:</p>
        <a href="${resetUrl}">Reset your password</a>
      `,
    });

    console.log("Resend SUCCESS:", response);
  } catch (error) {
    console.log("Resend ERROR:", error);
  }
};