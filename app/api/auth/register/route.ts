import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/utils/email";
import bcrypt from "bcrypt";
import crypto from "crypto";
import cloudinary from "@/utils/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request Body:", body); // 🔥 Log the request body for debugging

    const { email, firstName, lastName, role, password, imageUrl } = body;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    // Upload to Cloudinary
    let uploadedImageUrl = "";
    if (imageUrl) {
      const uploadResponse = await cloudinary.uploader.upload(imageUrl, {
        folder: "users",
      });
      uploadedImageUrl = uploadResponse.secure_url;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Create user in the database
    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        role,
        hashedPassword,
        image: uploadedImageUrl,
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
    });

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
