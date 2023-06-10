import { Service } from "@/services";
import { cookies } from "next/headers";

import { RoomPage } from "./client";

export default async function Room({ params }: { params: { id: string } }) {
  const room = await Service.Room.getRoom(String(params.id));
  const userCookie = cookies().get("@scrum-poker:user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  return <RoomPage room={room} userData={user} />;
}
