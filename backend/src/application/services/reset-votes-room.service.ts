import { Inject, Injectable } from '@nestjs/common';
import { Result } from 'src/shared/protocols/result';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { RoomNotFoundException } from '../errors/room-not-found.exception';
import {
  IResetVotesRoomServiceRequest,
  IResetVotesRoomService,
  IResetVotesRoomServiceResponse,
} from '../protocols/services/reset-votes-service.struct';

@Injectable()
export class ResetVotesRoomService implements IResetVotesRoomService {
  constructor(
    @Inject('ROOM_REPOSITORY') private readonly roomRepository: RoomRepository,
  ) {}
  async execute({
    roomId,
  }: IResetVotesRoomServiceRequest): Promise<
    Result<IResetVotesRoomServiceResponse>
  > {
    const room = await this.roomRepository.findById(roomId);

    if (!room) {
      return Result.fail(new RoomNotFoundException());
    }

    const roomUpdated = await this.roomRepository.update(roomId, {
      ...room,
      votes: [],
      average: 0,
      isRevealed: false,
    });

    if (!roomUpdated) {
      return Result.fail(new RoomNotFoundException());
    }

    return Result.ok({
      votes: roomUpdated.votes,
    });
  }
}
