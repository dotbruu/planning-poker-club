/* eslint-disable prefer-const */
import { RoomModel } from 'src/domain/models/room.model';
import { Inject, Injectable } from '@nestjs/common';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { Result } from 'src/shared/protocols/result';
import {
  IAssociateUserToRoomRequest,
  IAssociateUserToRoomResponse,
  IAssociateUserToRoomService,
} from '../protocols/services/associate-user-to-room-service.struct';
import { RoomNotFoundException } from '../errors/room-not-found.exception';
import { UserRepository } from 'src/external/repositories/user.repository';
import { UserNotFoundException } from '../errors/user-not-found.exception';
import { UserAlreadyAssociatedException } from '../errors/user-already-associated.exception';
import { UserModel } from 'src/domain/models/user.model';

@Injectable()
export class AssociateUserToRoom implements IAssociateUserToRoomService {
  constructor(
    @Inject('ROOM_REPOSITORY') private readonly roomRepository: RoomRepository,
    @Inject('USER_REPOSITORY') private readonly userRepository: UserRepository,
  ) {}
  async execute({
    roomId,
    userId,
  }: IAssociateUserToRoomRequest): Promise<
    Result<IAssociateUserToRoomResponse>
  > {
    const room = await this.roomRepository.findById(roomId);
    if (!room) {
      return Result.fail(new RoomNotFoundException());
    }
    const user = await this.userRepository.findById(userId);

    if (!user) {
      return Result.fail(new UserNotFoundException());
    }
    for (const userId of room.users) {
      if (userId === user.id) {
        return Result.fail(new UserAlreadyAssociatedException());
      }
    }
    const roomUpdated = await this.roomRepository.update(roomId, {
      ...room,
      users: [...room.users, userId],
    });
    let users: UserModel[] = [];
    if (roomUpdated) {
      for (const userId of roomUpdated.users) {
        const userAssociated = await this.userRepository.findById(userId);
        if (userAssociated) {
          users.push(userAssociated);
        }
      }
    }
    if (!roomUpdated) {
      return Result.fail(new RoomNotFoundException());
    }
    return Result.ok({
      ...roomUpdated,
      users,
    });
  }
}
