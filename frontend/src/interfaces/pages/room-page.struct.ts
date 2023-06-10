import { IRoom } from "../models/room.struct";
import { IUser } from "../models/user.struct";

export interface IRoomPageProps {
  room: IRoom;
  userData?: IUser;
}
