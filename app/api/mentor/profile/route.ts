import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust the import based on your project

export async function GET(request: Request) {
  const mentorId = request.headers.get("mentorId");

  if (!mentorId) {
    return NextResponse.json(
      { error: "Mentor ID is required" },
      { status: 400 }
    );
  }

  try {
    const mentorProfile = await prisma.mentorProfile.findUnique({
      where: { userId: mentorId },
      include: {
        user: {
          select: { firstName: true, lastName: true, image: true, email: true },
        },
        courses: true,
      },
    });

    if (!mentorProfile) {
      return NextResponse.json({ error: "Mentor not found" }, { status: 404 });
    }
    return NextResponse.json(mentorProfile);
  } catch (error) {
    console.error('Error fetching mentor profile:', error);
    return NextResponse.json(
      { error: "Error fetching mentor profile" },
      { status: 500 }
    );
  }
}
