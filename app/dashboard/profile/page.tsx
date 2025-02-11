"use client";

import LearnerProfile from "@/app/components/LearnerProfile";
import MentorProfile from "@/app/components/MentorProfile";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data: session, status } = useSession();

  // Redirect to login if not authenticated
  if (status === "unauthenticated") {
    redirect("/sign-in");
  }

  // Show loading state while checking session
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Get role from session
  const userRole = session?.user?.role;
  const isLearner = userRole === "LEARNER";
  const isMentor = userRole === "MENTOR";

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-8">
      {isMentor ? (
        <MentorProfile profile={{
          bio: "",
          expertise: [],
          hourlyRate: 0
        }} /> // Render MentorProfile component
      ) : isLearner ? (
        <LearnerProfile profile={{
          user: {
            firstName: "",
            lastName: "",
            email: ""
          },
          enrollments: [],
          tutorSessions: []
        }} /> // Render LearnerProfile component
      ) : (
        // Better error handling
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Access Error</h1>
            <p className="text-gray-600 mt-2">
              User role not properly configured. Current role: {userRole || "none"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;