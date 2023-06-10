export type CreateRoomData = {
  name: string;
  deckVotes: string[];
};

export type AssociateUserInRoomData = {
  roomId: string;
  userId: string;
};
