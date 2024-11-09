"use client";

import { DeckCard } from "@/components/molecules/deck-card";
import { TeammateCard } from "@/components/molecules/teammate-card";
import { UserCard } from "@/components/molecules/user-card";
import { CreateUserModal } from "@/components/organisms/modals/create-user-modal";
import { UnAvailableMobileModal } from "@/components/organisms/modals/unavailable-mobile-modal";
import { useRoomController } from "@/controllers/pages/room.controller";
import clsx from "clsx";

export default function Room({ params }: { params: Readonly<{ id: string }> }) {
  const {
    allUsers,
    average,
    checkVote,
    getAverage,
    onCreateUser,
    onVote,
    resetVotes,
    vote,
    userSelectedCard,
    deckVotes,
    roomName,
    shouldCreateUser,
    user,
  } = useRoomController(params.id);
  const playerQuantity = 1 + (allUsers.length ?? 0);
  const hasAverage = !isNaN(Number(average)) && Number(average) !== 0;

  return (
    <div
      className="w-full h-[100vh] bg-primary bg-[url('/bg-geometric.svg')]
      bg-no-repeat bg-center bg-cover"
    >
      <UnAvailableMobileModal />
      <CreateUserModal
        isOpen={shouldCreateUser}
        onConfirm={(data) => {
          onCreateUser(data);
        }}
      />
      <div className="w-full flex justify-center pt-24">
        <div
          className="container bg-primary-light h-12 rounded-xl flex
          items-center p-4 text-lg text-white justify-between"
        >
          <div className="flex flex-row justify-center">
            <h3>
              room: <strong>{roomName}</strong>
            </h3>
          </div>
          <div className="flex flex-row justify-center">
            <h3>
              players: <strong>{playerQuantity}</strong>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between mt-4">
        <div className="w-full px-12">
          <div
            className="w-full h-auto fixed bottom-0 pb-4 gap-40 flex flex-col
          justify-center items-center mb-[-2rem]"
          >
            <UserCard user={user} />
            <div className={"w-auto h-auto flex-col"}>
              <div
                className={clsx("flex w-full pt-8 items-center", {
                  "justify-center": hasAverage,
                  "justify-end": !hasAverage,
                })}
              >
                <div
                  className={clsx("w-full flex", {
                    hidden: !hasAverage,
                  })}
                >
                  <div className="w-full px-12">
                    <h4 className="text-2xl font-bold text-white">Average</h4>
                    <h3 className="font-modak text-5xl text-white">
                      {Number(average)?.toFixed(0)} points
                    </h3>
                  </div>
                </div>
                <div
                  className={clsx("flex w-full gap-4", {
                    "flex-col": hasAverage,
                    "max-w-[50%]": !hasAverage,
                  })}
                >
                  <button
                    className="w-full font-bold bg-white rounded-lg h-14 text-primary transition-colors hover:bg-gray-light"
                    onClick={resetVotes}
                  >
                    Clear Votes
                  </button>
                  <button
                    className="w-full font-bold text-white rounded-lg h-14 bg-secondary
              transition-colors hover:bg-secondary-dark"
                    onClick={getAverage}
                  >
                    Show Votes
                  </button>
                </div>
              </div>
              <DeckCard
                deckCards={deckVotes}
                selectedCard={userSelectedCard(vote)}
                onVote={onVote}
              />
            </div>
          </div>

          <div className="w-full">
            <section className="w-full flex flex-wrap justify-center">
              {allUsers.map((user) => (
                <TeammateCard
                  key={user.id}
                  image={user.avatar}
                  name={user.name}
                  vote={checkVote(user.id)}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
