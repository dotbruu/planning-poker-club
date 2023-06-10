import { VoteModel } from 'src/domain/models/room.model';
import { Service } from 'src/shared/protocols/service';

export type IResetVotesRoomServiceRequest = {
  roomId: string;
};

export type IResetVotesRoomServiceResponse = {
  votes: VoteModel[];
};

export type IResetVotesRoomService = Service<
  IResetVotesRoomServiceRequest,
  IResetVotesRoomServiceResponse
>;
