import env from "@/config/env";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}

export async function POST(request: Request) {
  const { userName, avatar } = await request.json();
  const user = await fetch(env.apiUrl, {
    method: "POST",
    body: JSON.stringify({ userName, avatar }),
  });

  return new Response(JSON.stringify(user), {
    headers: {
      setCookie: `@scrum-poker:user=${JSON.stringify(user)}`,
    },
  });
}
