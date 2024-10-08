import { VoteModel } from 'src/domain/models/room.model';
import { Inject, Injectable } from '@nestjs/common';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { Result } from 'src/shared/protocols/result';
import {
  ICreateRoomVoteService,
  ICreateVoteRoomRequest,
} from '../protocols/services/create-vote-room-service-struct';
import { RoomNotFoundException } from '../errors/room-not-found.exception';
import { VoteNotAcceptedException } from '../errors/vote-not-accepted.exception';
import { UserNotAssociatedWithRoomException } from '../errors/user-not-associated-with-room.exception';

@Injectable()
export class CreateVoteRoomService implements ICreateRoomVoteService {
  constructor(
    @Inject('ROOM_REPOSITORY') private readonly roomRepository: RoomRepository,
  ) {}
  async execute({
    roomId,
    userId,
    vote,
  }: ICreateVoteRoomRequest): Promise<Result<VoteModel[]>> {
    const room = await this.roomRepository.findById(roomId);

    if (!room) {
      return Result.fail(new RoomNotFoundException());
    }

    const userAssociated = room.users.includes(userId);

    if (!userAssociated) {
      return Result.fail(new UserNotAssociatedWithRoomException());
    }

    const acceptedVote = room.deckVotes.includes(vote);

    if (!acceptedVote) {
      return Result.fail(new VoteNotAcceptedException());
    }

    const roomUpdated = await this.roomRepository.update(roomId, {
      ...room,
      votes: [
        ...room.votes.filter((vote) => vote.userId !== userId),
        {
          userId,
          value: vote,
        },
      ],
    });

    if (!roomUpdated) {
      return Result.fail(new RoomNotFoundException());
    }
    roomUpdated.votes.forEach((vote) => {
      if (!roomUpdated.isRevealed || vote.userId !== userId) {
        vote.value = '✅';
      }
    });

    return Result.ok(roomUpdated.votes);
  }
}
