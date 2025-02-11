"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LearnerDashboard from "../components/LearnerDashboard";
import MentorDashboard from "../components/MentorDashboard";

export default function Dashboard() {
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
    <div>
      {isMentor ? (
        <MentorDashboard />
      ) : isLearner ? (
        <LearnerDashboard />
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
}