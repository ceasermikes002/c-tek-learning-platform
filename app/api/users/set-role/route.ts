import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { role } = body;

    if (!role || !['LEARNER', 'MENTOR'].includes(role)) {
      return new NextResponse("Invalid role", { status: 400 });
    }

    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: { role }
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[SET_ROLE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 