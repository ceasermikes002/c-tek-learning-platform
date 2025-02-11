"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");
      if (!token) {
        setError("Missing verification token");
        return;
      }

      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}`);
        
        if (response.ok) {
          router.push("/email-verified");
        } else {
          const data = await response.json();
          setError(data.message || "Verification failed");
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        setError("Something went wrong");
      }
    };

    verifyEmail();
  }, [router, searchParams]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Verification Failed
          </h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-[#f79920] mb-4">
          Verifying your email...
        </h1>
        <p className="text-gray-600">Please wait while we verify your email address.</p>
      </div>
    </div>
  );
} 