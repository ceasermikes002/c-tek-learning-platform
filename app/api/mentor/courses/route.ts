import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const mentorId = request.headers.get("mentorId");

  if (!mentorId) {
    return NextResponse.json(
      { error: "Mentor ID is required" },
      { status: 400 }
    );
  }

  try {
    const courses = await prisma.course.findMany({
      where: { mentors: { some: { userId: mentorId } } },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses", error);
    return NextResponse.json(
      { error: "Error fetching courses" },
      { status: 500 }
    );
  }
}
