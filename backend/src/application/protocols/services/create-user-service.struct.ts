import { UserModel } from 'src/domain/models/user.model';
import { Service } from 'src/shared/protocols/service';

export type ICreateUserRequest = Omit<UserModel, 'id'>;

export type ICreateUserService = Service<ICreateUserRequest, UserModel>;
