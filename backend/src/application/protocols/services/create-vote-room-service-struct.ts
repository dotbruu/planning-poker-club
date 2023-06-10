import { VoteModel } from 'src/domain/models/room.model';
import { Service } from 'src/shared/protocols/service';

export type ICreateVoteRoomRequest = {
  roomId: string;
  userId: string;
  vote: string;
};

export type ICreateRoomVoteService = Service<
  ICreateVoteRoomRequest,
  VoteModel[]
>;
