"use client";

import { ButtonDeck } from "@/components/molecules/button-deck";
import { CardPlayer } from "@/components/molecules/card-player";
import { CreateUserModal } from "@/components/organisms/modals/create-user-modal";
import { useRoomController } from "@/controllers/pages/room.controller";
import { IRoomPageProps } from "@/interfaces/pages/room-page.struct";

export function RoomPage({ room, userData }: IRoomPageProps) {
  const {
    deckVotes,
    id: roomId,
    name: roomName,
    users,
    average: averageRoom,
    votes,
  } = room;

  const {
    allUsers,
    average,
    checkVote,
    getAverage,
    onCreateUser,
    onVote,
    resetVotes,
    user,
    vote,
  } = useRoomController({
    users,
    votes,
    userData,
    roomId,
    averageRoom,
  });

  return (
    <div className="w-full">
      <CreateUserModal
        isOpen={!user}
        onConfirm={(data) => {
          onCreateUser(data);
        }}
      />
      <div className="flex flex-col justify-between w-full md:flex-row">
        <div className="w-full px-12">
          <div className="w-full my-20">
            <h1 className="text-2xl font-bold">{roomName}</h1>
          </div>
          <section
            className="w-full mt-24 mb-12 grid grid-cols-2 gap-4
            md:flex md:flex-row md:flex-wrap md:items-end md:content-start md:justify-end"
          >
            {deckVotes.map((deckVote) => (
              <ButtonDeck
                key={deckVote}
                deckVote={deckVote}
                userVote={vote}
                onVote={onVote}
              />
            ))}
          </section>
          <div className="w-full">
            <div className="w-full my-4">
              <h2 className="text-lg font-bold">Players</h2>
            </div>
            <section className="w-full mx-auto grid md:grid-cols-3 gap-4">
              {allUsers.map((user) => (
                <CardPlayer
                  key={user.id}
                  image={user.avatar}
                  name={user.name}
                  vote={checkVote(user.id)}
                />
              ))}
            </section>
          </div>
        </div>
        <div
          className="flex flex-col content-between justify-between w-full px-12
        overflow-hidden md:w-[520px] md:h-[100vh] md:bg-primary"
        >
          <div className="w-full">
            <div
              className={`${
                average
                  ? "absolute top-14 md:top-auto md:relative flex"
                  : "hidden"
              } w-[520px] h-[0px]
          aspect-square bg-secondary rounded-full flex-col justify-center
          content-center items-center mt-[8rem]`}
            >
              <div className="w-full px-12">
                <h4 className="text-2xl font-bold text-white">Average</h4>
                <h3 className="text-4xl font-bold text-white">
                  {average} points
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full pb-8 mt-10 gap-6">
            <button
              className="w-full font-bold bg-white rounded-sm h-14 text-primary transition-colors hover:bg-gray-light"
              onClick={resetVotes}
            >
              Clear Votes
            </button>
            <button
              className="w-full font-bold text-white rounded-sm h-14 bg-secondary
              transition-colors hover:bg-secondary-dark"
              onClick={getAverage}
            >
              Show Votes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
