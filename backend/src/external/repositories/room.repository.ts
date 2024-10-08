import { Injectable } from '@nestjs/common';
import { IRoomRepository } from 'src/application/protocols/repositories/room-repository.struct';
import { RoomModel } from 'src/domain/models/room.model';
import { RoomEntity } from '../database/schemas/room.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { transformDocument } from 'src/shared/transform-document';

@Injectable()
export class RoomRepository implements IRoomRepository {
  constructor(
    @InjectModel(RoomEntity.name) private roomModel: Model<RoomEntity>,
  ) {}

  async create(data: Omit<RoomModel, 'id'>): Promise<RoomModel> {
    return await this.roomModel.create(data);
  }
  async update(
    roomId: string,
    data: Partial<RoomModel>,
  ): Promise<RoomModel | null> {
    await this.roomModel.updateOne(
      {
        id: roomId,
      },
      data,
    );

    return this.roomModel.findById(roomId);
  }
  async delete(id: string): Promise<void> {
    await this.roomModel.deleteOne({ id });
  }
  async findById(id: string): Promise<RoomModel | null> {
    const document = await this.roomModel.findById(id)?.lean();
    return transformDocument(document);
  }
  async findAll(): Promise<RoomModel[]> {
    return this.roomModel.find()?.lean();
  }
}
