import { IBaseRepository } from 'src/shared/protocols/base-repository';
import { RoomModel } from '../../../domain/models/room.model';

export type IRoomRepository = IBaseRepository<RoomModel>;
