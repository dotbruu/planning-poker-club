import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ICreateRoomRequest } from 'src/application/protocols/services/create-room-service-struct';
import { AssociateUserToRoom } from 'src/application/services/associate-user-to-room.service';
import { CreateRoomService } from 'src/application/services/create-room.service';
import { DeleteUserOfRoomService } from 'src/application/services/delete-user-of-room.service';
import { GetRoomService } from 'src/application/services/get-room.service';
import { RoomGateway } from 'src/main/websocket.gateway';

@Controller('/room')
export class RoomController {
  constructor(
    private createRoomService: CreateRoomService,
    private associateUserToRoomService: AssociateUserToRoom,
    private deleteUserOfRoomService: DeleteUserOfRoomService,
    private socketMessageService: RoomGateway,
    private getRoomService: GetRoomService,
  ) {}
  @Post('/create')
  async createRoom(@Body() body: ICreateRoomRequest) {
    const room = await this.createRoomService.execute(body);

    if (room.isFailure) {
      throw new BadRequestException(room.error);
    }
    return room.getValue();
  }

  @Get('/:roomId')
  async getRoom(@Param() params: any) {
    const room = await this.getRoomService.execute({
      roomId: params.roomId,
    });

    if (room.isFailure) {
      throw new BadRequestException(room.error);
    }

    return room.getValue();
  }

  @Post('/associate/:roomId')
  async associateUserWithRoom(@Param() params: any, @Body() body: any) {
    const room = await this.associateUserToRoomService.execute({
      roomId: params.roomId,
      userId: body.userId,
    });

    if (room.isFailure) {
      throw new BadRequestException(room.error);
    }

    this.socketMessageService.server.emit(
      `room/${room.getValue().id}`,
      JSON.stringify({
        type: 'associate_user_in_room',
        ...room.getValue(),
      }),
    );

    return room.getValue();
  }

  @Delete(':roomId/delete-user/:userId')
  async deleteUserOfRoom(@Param() params: any) {
    const room = await this.deleteUserOfRoomService.execute({
      roomId: params.roomId,
      userId: params.userId,
    });

    if (room.isFailure) {
      throw new BadRequestException(room.error);
    }
    return room.getValue();
  }
}
