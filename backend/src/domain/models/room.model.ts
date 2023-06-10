export type VoteModel = {
  userId: string;
  value: string;
};

export interface RoomModel {
  id: string;
  name: string;
  deckVotes: string[];
  users: string[];
  average?: number | null;
  votes: VoteModel[];
  isRevealed: boolean;
}
