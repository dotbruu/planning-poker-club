"use client";
import { CardsIllustration } from "@/components/assets/cards-illustration";
import { InterrogationCardIllustration } from "@/components/assets/interrogation-card-illustration";
import { CreateRoomModal } from "@/components/organisms/modals/create-room-modal";
import { HomePageController } from "@/controllers/pages";

export default function Home() {
  const { handleToggleModalCreateRoom, isModalOpen, onCreateRoom } =
    HomePageController();

  return (
    <div
      className="w-full h-[100vh] bg-primary bg-[url('/bg-geometric.svg')]
      bg-no-repeat bg-center bg-cover flex flex-col items-center justify-between"
    >
      <CreateRoomModal
        isOpen={isModalOpen}
        onClose={() => handleToggleModalCreateRoom(false)}
        onConfirm={onCreateRoom}
      />
      <div
        className="w-full container
      content-center gap-12 p-2 mx-auto"
      >
        <div className="flex max-w-[600px] flex-col mt-40 content-center justify-center mx-auto p-4 md:p-auto">
          <div className="w-full">
            <h1 className="font-modak absolute text-5xl md:text-6xl text-white">
              Scrum Poker for <br />
              agile development <br />
              teams <br />
            </h1>
            <div className="w-full flex items-center justify-end mt-[-3rem]">
              <InterrogationCardIllustration />
            </div>
          </div>
          <div className="flex-col">
            <button
              className="w-full h-14 mt-10
                font-bold text-white bg-secondary rounded-sm transition-colors hover:bg-secondary-dark"
              onClick={() => handleToggleModalCreateRoom(true)}
            >
              Start new game
            </button>
            <h5 className="mt-4 font-bold text-center text-white">
              It&apos;s really free! 😄
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-0">
        <CardsIllustration />
      </div>
      <div></div>
    </div>
  );
}
