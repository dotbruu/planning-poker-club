import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { IUserRepository } from 'src/application/protocols/repositories/user-repository.struct';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: Omit<UserModel, 'id'>): Promise<UserModel> {
    return await this.prisma.users.create({ data });
  }
  async update(id: string, data: UserModel): Promise<UserModel | null> {
    return await this.prisma.users.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
  async findById(id: string): Promise<UserModel | null> {
    return await this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }
  async findAll(): Promise<UserModel[]> {
    return await this.prisma.users.findMany();
  }
}
