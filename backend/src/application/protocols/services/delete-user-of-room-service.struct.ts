import { RoomModel } from 'src/domain/models/room.model';
import { Service } from 'src/shared/protocols/service';

export type IDeleteUserOfRequest = {
  userId: string;
  roomId: string;
};

export type IDeleteUserOfRoomService = Service<IDeleteUserOfRequest, RoomModel>;
