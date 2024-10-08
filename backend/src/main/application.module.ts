import { Module } from '@nestjs/common';
import { UserRepository } from 'src/external/repositories/user.repository';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { RoomController } from 'src/external/controllers/room.controller';
import { CreateRoomService } from 'src/application/services/create-room.service';
import { CreateUserService } from 'src/application/services/create-user.service';
import { AssociateUserToRoom } from 'src/application/services/associate-user-to-room.service';
import { DeleteUserOfRoomService } from 'src/application/services/delete-user-of-room.service';
import { CreateVoteRoomService } from 'src/application/services/create-vote-room.service';
import { ShowResultVotingService } from 'src/application/services/show-result-votes.service';
import { ResetVotesRoomService } from 'src/application/services/reset-votes-room.service';
import { RoomGateway } from './websocket.gateway';
import { WebSocketModule } from './websocket.module';
import { GetRoomService } from 'src/application/services/get-room.service';
import { UserController } from 'src/external/controllers/user.controller';
import { VoteController } from 'src/external/controllers/vote.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  UserEntity,
  UserSchema,
} from 'src/external/database/schemas/user.schema';
import {
  RoomEntity,
  RoomSchema,
} from 'src/external/database/schemas/room.schema';

@Module({
  providers: [
    { provide: 'USER_REPOSITORY', useClass: UserRepository },
    { provide: 'ROOM_REPOSITORY', useClass: RoomRepository },
    CreateRoomService,
    CreateUserService,
    AssociateUserToRoom,
    DeleteUserOfRoomService,
    CreateVoteRoomService,
    ShowResultVotingService,
    ResetVotesRoomService,
    RoomGateway,
    WebSocketModule,
    GetRoomService,
  ],
  controllers: [RoomController, UserController, VoteController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
      }),
    }),
    MongooseModule.forFeature([
      { name: UserEntity.name, schema: UserSchema, collection: 'users' },
      { name: RoomEntity.name, schema: RoomSchema, collection: 'rooms' },
    ]),
  ],
})
export class ApplicationModule {}
