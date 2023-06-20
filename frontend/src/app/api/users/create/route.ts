import env from "@/config/env";
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
