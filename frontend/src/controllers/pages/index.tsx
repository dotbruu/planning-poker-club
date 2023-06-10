"use client";
import { CreateRoomFormData } from "@/interfaces/components/organisms/create-room-modal.struct";
import { Service } from "@/services";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HomePageController = () => {
  const router = useRouter();

  function onCreateRoom({ deckVotes, roomName }: CreateRoomFormData) {
    Service.Room.createRoom({
      name: roomName,
      deckVotes: deckVotes.split(","),
    }).then((room) => {
      router.push(`/room/${room.id}`);
    });
  }

  const [isModalOpen, setModalOpen] = useState(false);
  function handleToggleModalCreateRoom(status: boolean) {
    setModalOpen(status);
  }

  return {
    onCreateRoom,
    isModalOpen,
    handleToggleModalCreateRoom,
  };
};
