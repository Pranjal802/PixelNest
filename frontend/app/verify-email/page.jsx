"use client";

export const dynamic = "force-dynamic";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        await axios.get(
          `https://pixelnestsolutions.netlify.app/auth/verify-email/${token}`
        );

        setStatus("success");

        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } catch (error) {
        setStatus("error");
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      {status === "loading" && (
        <>
          <h1 className="text-3xl font-bold text-gray-800">
            Verifying Your Email...
          </h1>
          <p className="text-gray-600">
            Please wait while we verify your email.
          </p>
        </>
      )}

      {status === "success" && (
        <>
          <h1 className="text-3xl font-bold text-green-600">
            Email Verified Successfully 🎉
          </h1>
          <p className="text-gray-600">
            Redirecting to login...
          </p>
        </>
      )}

      {status === "error" && (
        <>
          <h1 className="text-3xl font-bold text-red-600">
            Verification Failed ❌
          </h1>
          <p className="text-gray-600">
            The verification link is invalid or expired.
          </p>
        </>
      )}
    </div>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}