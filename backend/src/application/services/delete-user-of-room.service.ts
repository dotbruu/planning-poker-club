import { Inject, Injectable } from '@nestjs/common';
import { Result } from 'src/shared/protocols/result';
import {
  IDeleteUserOfRequest,
  IDeleteUserOfRoomService,
} from '../protocols/services/delete-user-of-room-service.struct';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { RoomNotFoundException } from '../errors/room-not-found.exception';
import { RoomModel } from 'src/domain/models/room.model';

@Injectable()
export class DeleteUserOfRoomService implements IDeleteUserOfRoomService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly roomRepository: RoomRepository,
  ) {}
  async execute({
    userId,
    roomId,
  }: IDeleteUserOfRequest): Promise<Result<RoomModel>> {
    const room = await this.roomRepository.findById(roomId);

    if (!room) {
      return Result.fail(new RoomNotFoundException());
    }

    const roomUpdated = await this.roomRepository.update(roomId, {
      ...room,
      users: room.users.filter((id) => id !== userId),
    });

    if (!roomUpdated) {
      return Result.fail(new RoomNotFoundException());
    }

    return Result.ok(roomUpdated);
  }
}
