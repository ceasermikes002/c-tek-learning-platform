import Link from "next/link";

export default function EmailVerified() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-[#f79920] mb-4">
          Email Verified Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Your email has been verified. You can now sign in to your account.
        </p>
        <Link 
          href="/sign-in"
          className="bg-[#f79920] text-white px-6 py-2 rounded-full hover:bg-[#e0891c]"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
} 