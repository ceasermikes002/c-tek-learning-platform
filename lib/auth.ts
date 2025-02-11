import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                const dbUser = await prisma.user.findUnique({
                    where: { email: user.email! }
                });

                if (!dbUser) {
                    // Create user without role
                    await prisma.user.create({
                        data: {
                            email: user.email!,
                            image: user.image,
                            firstName: "",  // Add required fields
                            lastName: "",
                            role: "LEARNER"    // Default role
                        }
                    });
                    return true;
                }
            }
            return true;
        },
        async session({ session, user }) {
            if (session.user) {
                const dbUser = await prisma.user.findUnique({
                    where: { email: session.user.email! }
                });

                session.user.role = dbUser?.role;
                session.user.id = dbUser?.id;
            }
            return session;
        }
    },
    pages: {
        signIn: '/sign-in',
        newUser: '/select-role', // Redirect new OAuth users here
    },
    providers: []
};