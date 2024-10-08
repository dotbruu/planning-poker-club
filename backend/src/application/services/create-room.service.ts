import { RoomModel } from 'src/domain/models/room.model';
import {
  ICreateRoomRequest,
  ICreateRoomService,
} from '../protocols/services/create-room-service-struct';
import { Inject, Injectable } from '@nestjs/common';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { Result } from 'src/shared/protocols/result';

@Injectable()
export class CreateRoomService implements ICreateRoomService {
  constructor(
    @Inject('ROOM_REPOSITORY') private readonly roomRepository: RoomRepository,
  ) {}
  async execute(data: ICreateRoomRequest): Promise<Result<RoomModel>> {
    const room = await this.roomRepository.create({
      ...data,
      isRevealed: false,
    });

    return Result.ok(room);
  }
}
