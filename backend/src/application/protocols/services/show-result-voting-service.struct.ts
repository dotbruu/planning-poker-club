import { VoteModel } from 'src/domain/models/room.model';
import { Service } from 'src/shared/protocols/service';

export type IShowResultVotingRequest = {
  roomId: string;
};

export type IShowResultVotingResponse = {
  average: string;
  votes: VoteModel[];
};

export type IShowResultVotingService = Service<
  IShowResultVotingRequest,
  IShowResultVotingResponse
>;
