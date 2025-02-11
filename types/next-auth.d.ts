export declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      image?: string;
      role: "LEARNER" | "MENTOR" | "ADMIN";
      firstName: string;
      lastName: string;
    }
  }
  interface User {
    firstName: string;
    lastName: string;
    role: "LEARNER" | "MENTOR" | "ADMIN";
  }
}