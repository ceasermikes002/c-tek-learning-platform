import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user || !user.hashedPassword) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    if (!user.emailVerified) {
      return new NextResponse("Please verify your email before signing in", { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      return new NextResponse("Invalid credentials", { status: 401 }); 
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log("[LOGIN_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
