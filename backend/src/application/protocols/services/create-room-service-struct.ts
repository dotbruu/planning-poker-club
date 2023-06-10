import { RoomModel } from 'src/domain/models/room.model';
import { Service } from 'src/shared/protocols/service';

export type ICreateRoomRequest = Omit<RoomModel, 'id' | 'isRevealed'>;

export type ICreateRoomService = Service<ICreateRoomRequest, RoomModel>;
