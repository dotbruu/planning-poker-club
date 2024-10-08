import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { IUserRepository } from 'src/application/protocols/repositories/user-repository.struct';
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from '../database/schemas/user.schema';
import { Model } from 'mongoose';
import { transformDocument } from 'src/shared/transform-document';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserEntity>,
  ) {}

  async create(data: Omit<UserModel, 'id'>): Promise<UserModel> {
    return this.userModel.create(data);
  }
  async update(id: string, data: UserModel): Promise<UserModel | null> {
    await this.userModel.updateOne(
      {
        id,
      },
      data,
    );

    return this.userModel.findById(id);
  }
  async delete(id: string): Promise<void> {
    await this.userModel.deleteOne({
      id,
    });
  }
  async findById(id: string): Promise<UserModel | null> {
    const document = await this.userModel.findById(id)?.lean();
    return transformDocument(document);
  }
  async findAll(): Promise<UserModel[]> {
    return await this.userModel.find();
  }
}
