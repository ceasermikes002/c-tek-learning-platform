import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      image?: string;
      role: UserRole;
      firstName: string;
      lastName: string;
      emailVerified: Date | null; // Include emailVerified here
    };
  }
  
  interface User {
    firstName: string;
    lastName: string;
    role: UserRole;
    emailVerified: Date | null; // Include emailVerified here
  }
}
