import { Result } from 'src/shared/protocols/result';
import {
  IGetRoomRequest,
  IGetRoomResponse,
  IGetRoomService,
} from '../protocols/services/get-room-service.struct';
import { UserRepository } from 'src/external/repositories/user.repository';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { RoomNotFoundException } from '../errors/room-not-found.exception';
import { UserNotFoundException } from '../errors/user-not-found.exception';
import { UserModel } from 'src/domain/models/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetRoomService implements IGetRoomService {
  constructor(
    private roomRepository: RoomRepository,
    private userRepository: UserRepository,
  ) {}
  async execute({
    roomId,
  }: IGetRoomRequest): Promise<Result<IGetRoomResponse>> {
    const room = await this.roomRepository.findById(roomId);

    if (!room) {
      return Result.fail(new RoomNotFoundException());
    }
    const users: UserModel[] = [];
    for (const userId of room.users) {
      const user = await this.userRepository.findById(userId);

      if (!user) {
        return Result.fail(new UserNotFoundException());
      }
      users.push(user);
    }

    room.votes.map((vote) => {
      if (!room.isRevealed) {
        vote.value = '✅';
      }
    });

    return Result.ok({
      ...room,
      users,
    });
  }
}
