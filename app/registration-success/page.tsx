export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-[#f79920] mb-4">
          Registration Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Please check your email to verify your account before signing in.
        </p>
      </div>
    </div>
  );
} 