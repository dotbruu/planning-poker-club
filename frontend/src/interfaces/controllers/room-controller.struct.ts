import { IUser } from "../models/user.struct";
import { IVote } from "../models/vote.struct";

export interface IRoomControllerProps {
  roomId: string;
  users: IUser[];
  votes: IVote[];
  userData?: IUser;
  averageRoom?: number;
}
