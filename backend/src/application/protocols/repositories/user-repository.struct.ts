import { IBaseRepository } from 'src/shared/protocols/base-repository';
import { UserModel } from '../../../domain/models/user.model';

export type IUserRepository = IBaseRepository<UserModel>;
