/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { LogoIcon } from "@/components/icons/logo-icon";
import { CreateRoomModal } from "@/components/organisms/modals/create-room-modal";
import { HomePageController } from "@/controllers/pages";

export default function Home() {
  const { handleToggleModalCreateRoom, isModalOpen, onCreateRoom } =
    HomePageController();

  return (
    <div className="w-full h-[100vh] bg-primary">
      <CreateRoomModal
        isOpen={isModalOpen}
        onClose={() => handleToggleModalCreateRoom(false)}
        onConfirm={onCreateRoom}
      />
      <div
        className="w-full container h-[100vh] overflow-hidden flex-col
      content-center justify-center gap-12 p-2 mx-auto"
      >
        <div className="flex max-w-[600px] flex-col content-center justify-center mx-auto p-4 md:p-auto">
          <div className="w-[75%] md:w-full mt-16 mb-12 flex items-start content-start">
            <LogoIcon />
          </div>

          <div className="flex-col md:inline-flex content-center justify-between items-center">
            <div className="sm:w-full">
              <h1 className="text-4xl md:text-5xl font-black text-white">
                Scrum Poker for <br />
                agile development <br />
                teams <br />
              </h1>
              <div className="flex-col">
                <button
                  className="w-full h-14 mt-10
                font-bold text-white bg-secondary rounded-sm transition-colors hover:bg-secondary-dark"
                  onClick={() => handleToggleModalCreateRoom(true)}
                >
                  Create room
                </button>
                <h5 className="mt-4 font-bold text-center text-white">
                  It's really free! _
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex content-center justify-center mx-auto">
          <img
            src="/scrum.png"
            className="fixed bottom-[-15%] md:relative
            max-w-[180%] md:w-full z-10"
          />
        </div>
      </div>
    </div>
  );
}
