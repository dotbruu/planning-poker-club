import { Module } from '@nestjs/common';
import { UserRepository } from 'src/external/repositories/user.repository';
import { RoomRepository } from 'src/external/repositories/room.repository';
import { RoomController } from 'src/external/controllers/room.controller';
import { PrismaService } from 'src/external/database/prisma.service';
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

@Module({
  providers: [
    UserRepository,
    RoomRepository,
    PrismaService,
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
})
export class ApplicationModule {}
