import { Injectable } from '@nestjs/common';
import { Result } from 'src/shared/protocols/result';
import {
  ICreateUserRequest,
  ICreateUserService,
} from '../protocols/services/create-user-service.struct';
import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/external/repositories/user.repository';

@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor(private userRepository: UserRepository) {}
  async execute(data: ICreateUserRequest): Promise<Result<UserModel>> {
    const user = await this.userRepository.create(data);

    return Result.ok(user);
  }
}
