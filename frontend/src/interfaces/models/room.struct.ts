import { IUser } from "./user.struct";
import { IVote } from "./vote.struct";

export interface IRoom {
  id: string;
  name: string;
  users: IUser[];
  deckVotes: string[];
  votes: IVote[];
  average: number;
}
