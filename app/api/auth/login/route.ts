import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Ensure user exists before checking email verification
    if (!user || !user.hashedPassword) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Check if the email is verified
    if (user.emailVerified === null) {
      return NextResponse.json(
        { message: "Please verify your email before signing in" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("[LOGIN_ERROR]", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
