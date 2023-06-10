import { Injectable } from '@nestjs/common';
import { IRoomRepository } from 'src/application/protocols/repositories/room-repository.struct';
import { RoomModel } from 'src/domain/models/room.model';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class RoomRepository implements IRoomRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: Omit<RoomModel, 'id'>): Promise<RoomModel> {
    return await this.prisma.rooms.create({
      data,
    });
  }
  async update(
    roomId: string,
    { id, ...data }: RoomModel,
  ): Promise<RoomModel | null> {
    return await this.prisma.rooms.update({
      where: {
        id: roomId,
      },
      data,
    });
  }
  async delete(id: string): Promise<void> {
    await this.prisma.rooms.delete({
      where: {
        id,
      },
    });
  }
  async findById(id: string): Promise<RoomModel | null> {
    return await this.prisma.rooms.findFirst({
      where: {
        id,
      },
    });
  }
  async findAll(): Promise<RoomModel[]> {
    return await this.prisma.rooms.findMany();
  }
}
