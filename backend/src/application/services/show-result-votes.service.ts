import { Injectable } from '@nestjs/common';
import { Result } from 'src/shared/protocols/result';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { RoomNotFoundException } from '../errors/room-not-found.exception';
import {
  IShowResultVotingRequest,
  IShowResultVotingResponse,
  IShowResultVotingService,
} from '../protocols/services/show-result-voting-service.struct';

@Injectable()
export class ShowResultVotingService implements IShowResultVotingService {
  constructor(private roomRepository: RoomRepository) {}
  async execute({
    roomId,
  }: IShowResultVotingRequest): Promise<Result<IShowResultVotingResponse>> {
    const room = await this.roomRepository.findById(roomId);

    if (!room) {
      return Result.fail(new RoomNotFoundException());
    }

    let sum = 0;
    let average = 0;
    let amountOfVotes = 0;

    if (room.votes.length > 0) {
      room.votes.forEach((vote) => {
        if (!isNaN(Number(vote.value))) {
          sum += Number(vote.value);
          ++amountOfVotes;
        }
      });
      average = amountOfVotes > 1 ? sum / amountOfVotes : sum;
    }

    const roomUpdated = await this.roomRepository.update(roomId, {
      ...room,
      average,
      isRevealed: true,
    });

    if (!roomUpdated) {
      return Result.fail(new RoomNotFoundException());
    }

    return Result.ok({
      average: average.toFixed(1),
      votes: roomUpdated.votes,
    });
  }
}
