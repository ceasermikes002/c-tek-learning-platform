// Import necessary functions and modules
import { getServerSession } from "next-auth"; // Function to get the current session from NextAuth
import { prisma } from "@/lib/prisma"; // Prisma client for database operations
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Authentication options for NextAuth

// Function to retrieve the current session
export async function getSession() {
  // Calls getServerSession with authOptions to get the session details
  return await getServerSession(authOptions);
}

// Function to get the current user based on the session
export async function getCurrentUser() {
  // Retrieve the current session
  const session = await getSession();
  
  // Check if the session has a user email; if not, return null
  if (!session?.user?.email) {
    return null;
  }

  // Query the database to find the user by their email
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email, // Use the email from the session to find the user
    },
  });

  // Return the user object
  return user;
}