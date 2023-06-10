import { RoomModel } from 'src/domain/models/room.model';
import { UserModel } from 'src/domain/models/user.model';
import { Service } from 'src/shared/protocols/service';

export type IGetRoomRequest = {
  roomId: string;
};

export interface IGetRoomResponse extends Omit<RoomModel, 'users'> {
  users: UserModel[];
}

export type IGetRoomService = Service<IGetRoomRequest, IGetRoomResponse>;
