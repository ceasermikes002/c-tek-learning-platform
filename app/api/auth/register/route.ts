import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/utils/email";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request Body:", body); // Log the request body
    const { email, firstName, lastName, role, password, imageUrl } = body;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // ✅ Create user with pending verification status
     await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        role,
        hashedPassword,
        image: imageUrl,
        verificationToken,
        emailVerified: null,
        ...(role === "MENTOR"
          ? {
              mentorProfile: {
                create: {
                  bio: "",
                  expertise: [],
                  hourlyRate: 0,
                  availability: {},
                },
              },
            }
          : {
              learnerProfile: {
                create: {},
              },
            }),
      },
      include: {
        mentorProfile: true,
        learnerProfile: true,
      },
    });

    // ✅ Send verification email after storing the user
    await sendVerificationEmail(email, verificationToken);

    return NextResponse.json(
      { message: "User registered successfully! Please verify your email." },
      { status: 201 }
    );
  } catch (error) {
    console.error("[REGISTER_ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
